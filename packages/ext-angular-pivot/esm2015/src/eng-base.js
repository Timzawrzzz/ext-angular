import * as tslib_1 from "tslib";
import 'script-loader!node_modules/@sencha/ext-angular-pivot/ext/ext.pivot';
import 'script-loader!node_modules/@sencha/ext-angular-pivot/ext/css.pivot';
import { EventEmitter, ContentChild, ContentChildren, QueryList } from '@angular/core';
export class EngBase {
    constructor(eRef, hostComponent, properties, events) {
        this.node = eRef.nativeElement;
        this.parentNode = hostComponent;
        this.properties = properties;
        this.events = events;
        this.events.forEach((event, n) => {
            if (event.name != 'fullscreen') {
                this[event.name] = new EventEmitter();
            }
            else {
                this[event.name + 'event'] = new EventEmitter();
            }
        });
        this.newDiv = document.createElement('div');
        //var t = document.createTextNode("newDiv");
        //this.newDiv.appendChild(t);
        this.node.insertAdjacentElement('beforebegin', this.newDiv);
        this.base = EngBase;
    }
    get childComponents() {
        return this._childComponents.filter(item => item !== this);
    }
    baseOnInit() { }
    baseAfterViewInit() {
        this.initMe();
    }
    //******* base start */
    initMe() {
        //console.log('');console.log('*** initMe for ' + this.currentElName);
        this.createRawChildren();
        this.setParentType();
        this.setDirection();
        this.figureOutA();
        this.createProps(this.properties, this.events);
        this.createExtComponent();
    }
    createRawChildren() {
        if (this.currentEl.isAngular) {
            this.currentEl.rawChildren = this.currentEl.childComponents;
        }
        else {
            this.currentEl.ewcChildren = Array.from(this.currentEl.children);
            this.currentEl.rawChildren = [];
            var num = 0;
            for (var i = 0; i < this.currentEl.ewcChildren.length; i++) {
                if (this.currentEl.ewcChildren[i].xtype != undefined) {
                    this.currentEl.rawChildren[num] = this.currentEl.ewcChildren[i];
                    num++;
                }
                else {
                    //do something with div (add an Ext.widget...)
                }
            }
        }
    }
    setParentType() {
        // if (this.parentEl == null) {
        //     this.hasParent = false;
        // }
        // else {
        //     if (this.parentElName.substring(0, 4) == 'EXT-') {
        //         this.hasParent = true;
        //     }
        //     else {
        //         this.hasParent = false;
        //     }
        // }
        if (this.parentNode == null) {
            this.parentType = 'html';
        }
        else {
            if (this.parentElName.substring(0, 4) == 'EXT-') {
                this.parentType = 'ext';
            }
            else {
                this.parentType = 'html';
            }
        }
    }
    setDirection() {
        if (this.base.count == 0) {
            this.base.count++;
            //        if (this.hasParent == false) {
            if (this.parentType != 'ext') {
                this.base.DIRECTION = 'TopToBottom';
            }
            else {
                //if (this.parentElName.substring(0, 4) == 'EXT-') {
                this.base.DIRECTION = 'BottomToTop';
                //}
                //else {
                //    this.base.DIRECTION = 'TopToBottom';
                //}
            }
        }
        //console.log(this.base.DIRECTION);
    }
    figureOutA() {
        if (this.parentType == 'ext' &&
            this.parentEl.A == undefined &&
            this.parentEl.nodeName.substring(0, 4) == 'EXT-') {
            this.init(this.parentEl);
        }
        if (this.currentEl.A == undefined) {
            this.init(this.currentEl);
        }
    }
    init(component) {
        component.A = {};
        component.A.props = {};
        component.A.xtype = component.xtype;
        component.A.CHILDRENCOMPONENTS = Array.from(this.currentEl.rawChildren);
        component.A.CHILDRENCOMPONENTSCOUNT = this.currentEl.rawChildren.length;
        component.A.CHILDRENCOMPONENTSADDED = component.A.CHILDRENCOMPONENTSCOUNT;
        component.A.CHILDRENCOMPONENTSLEFT = component.A.CHILDRENCOMPONENTSCOUNT;
    }
    createExtComponent() {
        var A = this.currentEl.A;
        //console.dir(A)
        var meA = A;
        var methis = this;
        if (methis.base.DIRECTION == 'BottomToTop') {
            if (A.props['viewport'] == true) {
                //this.newDiv.parentNode.removeChild(this.newDiv);
                if (this.parentType == 'html') {
                    Ext.onReady(function () {
                        methis.currentEl.A.ext = Ext.create(meA.props);
                        //console.log('0-Ext.application: ' + meA.props.xtype);
                        methis.assessChildren(methis.base, methis.xtype);
                        Ext.application({
                            name: 'MyEWCApp',
                            launch: function () {
                                Ext.Viewport.add([methis.currentEl.A.ext]);
                                if (window['router']) {
                                    window['router'].init();
                                }
                                methis.sendReadyEvent(methis);
                            }
                        });
                    });
                }
                else {
                    console.error('error: viewport not allowed on this element');
                }
            }
            else {
                if (this.parentType == 'html') {
                    meA.props.renderTo = this.newDiv;
                }
                Ext.onReady(function () {
                    //console.log(methis.parentType + ' - Ext.create: ' + methis.currentElName + ' HTML parent: ' + methis.currentElName);
                    methis.currentEl.A.ext = Ext.create(meA.props);
                    methis.assessChildren(methis.base, methis.xtype);
                });
            }
        }
        else {
            //console.log('TopToBottom')
            if (A.props['viewport'] == true) {
                //this.newDiv.parentNode.removeChild(this.newDiv);
                if (this.parentType == 'html') {
                    Ext.onReady(function () {
                        methis.currentEl.A.ext = Ext.create(meA.props);
                        //console.log('0-Ext.application: ' + meA.props.xtype);
                        methis.assessChildren(methis.base, methis.xtype);
                        Ext.application({
                            name: 'MyEWCApp',
                            launch: function () {
                                Ext.Viewport.add([methis.currentEl.A.ext]);
                                if (window['router']) {
                                    window['router'].init();
                                }
                                methis.sendReadyEvent(methis);
                            }
                        });
                    });
                }
                else {
                    console.error('error: viewport not allowed on this element');
                }
            }
            else {
                if (this.parentType == 'html') {
                    meA.props.renderTo = this.newDiv;
                }
                Ext.onReady(function () {
                    //console.log(methis.parentType + ' - Ext.create: ' + methis.currentElName + ' HTML parent: ' + methis.currentElName);
                    methis.currentEl.A.ext = Ext.create(meA.props);
                    methis.assessChildren(methis.base, methis.xtype);
                });
            }
        }
    }
    assessAngularChildren(base, xtype, A) {
        if (this._extitems != undefined) {
            if (this._extitems.length == 1) {
                var el = Ext.get(this._extitem.nativeElement);
                var w = Ext.create({ xtype: 'widget', element: el });
                this.addTheChild(A.ext, w, null);
            }
        }
        // if (this._extitems != undefined) {
        //     if (this._extroutes.length == 1) {
        //         A.ext.setHtml(this._extroute.nativeElement);
        //     }
        // }
    }
    assessChildren(base, xtype) {
        //console.log('assessChildren for: ' + xtype);
        var A = this.currentEl.A;
        this.assessAngularChildren(base, xtype, A);
        if (base.DIRECTION == 'BottomToTop') {
            if (A.CHILDRENCOMPONENTSCOUNT == 0 &&
                A.CHILDRENCOMPONENTS.length == 0 &&
                this.parentType == 'html') {
                //console.log('Solo');
                //console.log('1- ready event for ' + this.currentElName);
                this.sendReadyEvent(this);
            }
            else if (A.CHILDRENCOMPONENTSADDED > 0) {
                this.addChildren(this, A.CHILDRENCOMPONENTS);
                //this.node.remove(); ?? is this needed??
            }
            if (this.parentType != 'ext') {
                if (base.DIRECTION == 'BottomToTop') {
                    //console.log('5- ready event for ' + this.currentElName);
                    this.sendReadyEvent(this);
                }
            }
            if (this.parentType == 'ext') {
                if (base.DIRECTION == 'BottomToTop') {
                    this.parentEl.A.CHILDRENCOMPONENTS.push(this.currentEl);
                    this.parentEl.A.CHILDRENCOMPONENTSADDED++;
                    //console.log('4- ready event for ' + this.currentElName);
                    this.sendReadyEvent(this);
                }
                else {
                    this.parentEl.A.CHILDRENCOMPONENTSLEFT--;
                    if (this.parentEl.A.CHILDRENCOMPONENTSLEFT == 0) {
                        this.addChildren(this.parentEl, this.parentEl.A.CHILDRENCOMPONENTS);
                        //console.log('3- ready event for ' + this.parentElName + '(parent)');
                        this.sendReadyEvent(this.parentEl);
                    }
                }
            }
        }
        else { //base.DIRECTION == 'TopToBottom'
            if (this.parentType == 'ext') {
                //console.log('this: ' + A.xtype + ' ' + A.props.title + ' parent: ' + this.parentEl.A.xtype)
                //console.log('length=0, send ready for ' + this.xtype)
                this.sendReadyEvent(this);
            }
            // else {
            //     //console.log(A.props)
            //     //console.log('this: ' + A.xtype + ' ' + A.props.title + ' root: ')
            // }
            if (A.CHILDRENCOMPONENTS.length == 0) {
                this.checkParent(this.parentEl, base, this);
            }
            // else {
            //     //base.COMPONENTCOUNT = base.COMPONENTCOUNT + A.CHILDRENCOMPONENTS.length;
            // }
        }
    }
    checkParent(component, base, me) {
        if (component == null || component.localName.substring(0, 4) != 'EXT-') {
            me.sendReadyEvent(me);
        }
        else {
            component.A.CHILDRENCOMPONENTSLEFT--;
            //base.COMPONENTLEFTCOUNT = base.COMPONENTLEFTCOUNT + 1;
            if (component.A.CHILDRENCOMPONENTSLEFT == 0) {
                this.addChildren(component, component.A.CHILDRENCOMPONENTS);
                this.checkParent(component.parentEl, base, component);
            }
        }
    }
    addChildren(child, children) {
        for (var i = 0; i < children.length; i++) {
            //why is this created as an object??
            var childItem = { parentCmp: {}, childCmp: {} };
            childItem.parentCmp = child.currentEl.A.ext;
            var A2;
            if (children[i]._extitems != undefined) {
                A2 = children[i].node.A;
            }
            else {
                A2 = children[i].A;
            }
            childItem.childCmp = A2.ext;
            this.addTheChild(childItem.parentCmp, childItem.childCmp, null);
        }
    }
    addTheChild(parentCmp, childCmp, location) {
        var parentxtype = parentCmp.xtype;
        var childxtype = childCmp.xtype;
        //console.log('addTheChild: ' + parentxtype + '(' + parentCmp.ext + ')' + ' - ' + childxtype + '(' + childCmp.ext + ')');
        //if (childxtype == 'widget')
        if (this.currentEl.A.ext.initialConfig.align != undefined) {
            if (parentxtype != 'tooltip' && parentxtype != 'titlebar' && parentxtype != 'grid' && parentxtype != 'lockedgrid' && parentxtype != 'button') {
                console.error('Can only use align property if parent is a Titlebar or Grid or Button');
                return;
            }
        }
        var defaultparent = false;
        var defaultchild = false;
        switch (parentxtype) {
            case 'button':
                switch (childxtype) {
                    case 'menu':
                        parentCmp.setMenu(childCmp);
                        break;
                    default:
                        defaultparent = true;
                        break;
                }
                break;
            case 'booleancolumn':
            case 'checkcolumn':
            case 'gridcolumn':
            case 'column':
            case 'templatecolumn':
            case 'gridcolumn':
            case 'column':
            case 'templatecolumn':
            case 'datecolumn':
            case 'dragcolumn':
            case 'numbercolumn':
            case 'selectioncolumn':
            case 'textcolumn':
            case 'treecolumn':
            case 'rownumberer':
                switch (childxtype) {
                    case 'renderercell':
                        parentCmp.setCell(childCmp);
                        break;
                    case 'column':
                    case 'gridcolumn':
                        parentCmp.add(childCmp);
                        break;
                    default:
                        defaultparent = true;
                        break;
                }
                break;
            case 'grid':
            case 'lockedgrid':
                switch (childxtype) {
                    case 'gridcolumn':
                    case 'column':
                    case 'treecolumn':
                    case 'textcolumn':
                    case 'checkcolumn':
                    case 'datecolumn':
                    case 'rownumberer':
                    case 'numbercolumn':
                    case 'booleancolumn':
                        if (location == null) {
                            if (parentxtype == 'grid') {
                                parentCmp.addColumn(childCmp);
                            }
                            else {
                                parentCmp.add(childCmp);
                            }
                        }
                        else {
                            var regCols = 0;
                            if (parentCmp.registeredColumns != undefined) {
                                regCols = parentCmp.registeredColumns.length;
                            }
                            if (parentxtype == 'grid') {
                                //mjg console.log(parentCmp)
                                parentCmp.insertColumn(location + regCols, childCmp);
                            }
                            else {
                                parentCmp.insert(location + regCols, childCmp);
                            }
                        }
                        break;
                    default:
                        defaultparent = true;
                        break;
                }
                break;
            default:
                defaultparent = true;
                break;
        }
        ;
        switch (childxtype) {
            case 'toolbar':
            case 'titlebar':
                if (parentCmp.getHideHeaders != undefined) {
                    if (parentCmp.getHideHeaders() === false) {
                        parentCmp.insert(1, childCmp);
                    }
                    else {
                        parentCmp.add(childCmp);
                    }
                }
                else {
                    if (parentCmp.add != undefined) {
                        if (location == null) {
                            parentCmp.add(childCmp);
                        }
                        else {
                            parentCmp.insert(location, childCmp);
                        }
                    }
                    else {
                        parentCmp.add(childCmp);
                    }
                }
                break;
            case 'tooltip':
                parentCmp.setTooltip(childCmp);
                break;
            case 'plugin':
                parentCmp.setPlugin(childCmp);
                break;
            default:
                defaultchild = true;
                break;
        }
        if (defaultparent == true && defaultchild == true) {
            //console.log(parentxtype + '.add(' + childxtype + ')')
            parentCmp.add(childCmp);
        }
        // if (this.parentNode.childrenYetToBeDefined > 0) {
        //     this.parentNode.childrenYetToBeDefined--
        // }
        // //console.log('childrenYetToBeDefined(after) '  + this.parentNode.childrenYetToBeDefined)
        // if (this.parentNode.childrenYetToBeDefined == 0) {
        //     this.parentNode.dispatchEvent(new CustomEvent('ready',{detail:{cmp: this.parentNode.ext}}))
        // }
    }
    atEnd() {
        //console.log('*** at end');
        //console.log('this - ' + this.currentElName);
        //console.dir(this.currentEl.A);
        if (this.parentEl != null) {
            //console.log('parent - ' + this.parentElName);
            //console.dir(this.parentEl.A);
        }
        else {
            //console.log('No EXT parent');
        }
    }
    get currentEl() {
        if (this._extitems != undefined) {
            return this.node;
        }
        else {
            return this;
        }
    }
    getCurrentElName(component) {
        if (component._extitems != undefined) {
            return component.node.nodeName;
        }
        else {
            return component.nodeName;
        }
    }
    get currentElName() {
        if (this._extitems != undefined) {
            return this.node.nodeName;
        }
        else {
            return this.nodeName;
        }
    }
    get isAngular() {
        if (this._extitems != undefined) {
            return true;
        }
        else {
            return false;
        }
    }
    get parentEl() {
        if (this.isAngular) {
            if (this.parentNode == null) {
                return null;
            }
            return this.parentNode.node;
        }
        else {
            return this.parentNode;
        }
    }
    get parentElName() {
        if (this.isAngular) {
            if (this.parentNode == null) {
                return null;
            }
            return this.parentNode.node.nodeName;
        }
        else {
            return this.parentNode.nodeName;
        }
    }
    sendReadyEvent(component) {
        var cmp = component.currentEl.A.ext;
        if (component._extitems != undefined) {
            component['ready'].emit({ detail: { cmp: cmp } });
        }
        else {
            component.dispatchEvent(new CustomEvent('ready', { detail: { cmp: cmp } }));
        }
    }
    //******* base end */
    //******* props start */
    //createProps(properties, propertiesobject, events, eventnames) {
    createProps(properties, events) {
        var props = this.currentEl.A.props;
        props.xtype = this.xtype;
        let listenersProvided = false;
        for (var i = 0; i < properties.length; i++) {
            var prop = properties[i];
            if (prop == 'handler') {
                if (this[prop] != undefined) {
                    props[prop] = this[prop];
                }
            }
            //need to handle listeners coming in here
            if ((props.xtype === 'cartesian' || props.xtype === 'polar') && prop === 'layout') {
            }
            else if (prop == 'listeners' && this[prop] != undefined) {
                props[prop] = this[prop];
                listenersProvided = true;
            }
            else {
                if (this[prop] != undefined &&
                    prop != 'listeners' &&
                    prop != 'config' &&
                    prop != 'handler' &&
                    prop != 'fitToParent') {
                    props[prop] = this[prop];
                }
            }
        }
        if (true === this['fitToParent']) {
            props.top = 0,
                props.left = 0,
                props.width = '100%',
                props.height = '100%';
        }
        if (this['config'] !== {}) {
            Ext.apply(props, this['config']);
        }
        if (!listenersProvided) {
            props.listeners = {};
            var me = this;
            events.forEach(function (event) {
                let eventname = event.name;
                let eventparameters = event.parameters;
                me.currentEl.A.props.listeners[eventname] = function () {
                    //console.log('in the event ' + eventname)
                    let parameters = eventparameters;
                    let parms = parameters.split(',');
                    let args = Array.prototype.slice.call(arguments);
                    let emitparms = {};
                    if (me._extitems != undefined) {
                        for (let i = 0, j = parms.length; i < j; i++) {
                            emitparms[parms[i]] = args[i];
                        }
                        me[eventname].emit(emitparms);
                    }
                    else {
                    }
                };
            });
        }
        //dup??
        if (this._extitems != undefined) {
            events.forEach((event, n) => {
                if (event != 'fullscreen') {
                    this[event] = new EventEmitter();
                }
                else {
                    this[event + 'event'] = new EventEmitter();
                }
            });
        }
    }
    //******* props end */
    baseOnChanges(changes) {
        //console.log(`ngOnChanges`)
        //console.log(changes)
        let changesMsgs = [];
        for (let propName in changes) {
            let verb = '';
            if (changes[propName].firstChange === true) {
                verb = 'initialized';
            }
            else {
                verb = 'changed';
            }
            let val = changes[propName].currentValue;
            if (this.currentEl.A != undefined) {
                //console.dir(this.currentEl.A.ext)
                var capPropName = propName.charAt(0).toUpperCase() + propName.slice(1);
                var setFunction = 'set' + capPropName;
                //console.log(setFunction)
                if (this.currentEl.A.ext[setFunction] != undefined) {
                    this.currentEl.A.ext[setFunction](val);
                }
                else {
                    console.error(setFunction + ' not found for ' + this.currentEl.A.ext.xtype);
                }
            }
            else {
                if (verb == 'changed') {
                    //mjg console.log('change needed and ext not defined')
                }
            }
            changesMsgs.push(`$ $ to "$"`);
        }
        //console.log(`OnChanges: ${changesMsgs.join('; ')}`)
    }
    baseOnDestroy() {
        var childCmp;
        var parentCmp;
        if (childCmp == undefined || parentCmp == undefined) {
            return;
        }
        try {
            childCmp = this.currentEl.A.ext;
            if (this.parentEl != null) {
                parentCmp = this.parentEl.A.ext;
                //console.log(childCmp)
                //console.log(parentCmp)
                if (childCmp == undefined || parentCmp == undefined)
                    if (parentCmp.xtype == 'button' && childCmp.xtype == 'menu') {
                        //console.log('button/menu not deleted')
                    }
                    else if (parentCmp.xtype == 'carousel') {
                        //console.log('carousel parent not deleted')
                    }
                    else if (parentCmp.xtype == 'grid' && childCmp.xtype == 'column') {
                        //console.log('grid/column not deleted')
                        //console.log(childCmp)
                    }
                    else if (parentCmp.xtype == 'segmentedbutton' && childCmp.xtype == 'button') {
                        //console.log('segmentedbutton/button not deleted')
                    }
                    else if (parentCmp.xtype == 'button' && childCmp.xtype == 'tooltip') {
                        //console.log('button/tooltip not deleted')
                    }
                    else if (parentCmp.xtype == 'titlebar' && childCmp.xtype == 'button') {
                        //console.log('titlebar/button not deleted')
                    }
                    else if (parentCmp.xtype == 'titlebar' && childCmp.xtype == 'searchfield') {
                        //console.log('titlebar/searchfield not deleted')
                    }
                    else {
                        parentCmp.remove([childCmp]);
                        childCmp.destroy();
                    }
            }
            else {
                if (childCmp != undefined) {
                    childCmp.destroy();
                }
                else {
                    console.log('no destroy');
                }
            }
        }
        catch (e) {
            console.error(e);
            //mjg console.log('*****')
            //mjg console.log(parentCmp)
            //mjg console.log(childCmp)
            //mjg console.log('*****')
        }
    }
}
EngBase.count = 0;
EngBase.DIRECTION = '';
tslib_1.__decorate([
    ContentChild('extroute', { static: false }),
    tslib_1.__metadata("design:type", Object)
], EngBase.prototype, "_extroute", void 0);
tslib_1.__decorate([
    ContentChildren('extroute'),
    tslib_1.__metadata("design:type", QueryList)
], EngBase.prototype, "_extroutes", void 0);
tslib_1.__decorate([
    ContentChild('extitem', { static: false }),
    tslib_1.__metadata("design:type", Object)
], EngBase.prototype, "_extitem", void 0);
tslib_1.__decorate([
    ContentChildren('extitem'),
    tslib_1.__metadata("design:type", QueryList)
], EngBase.prototype, "_extitems", void 0);
tslib_1.__decorate([
    ContentChildren(EngBase),
    tslib_1.__metadata("design:type", QueryList)
], EngBase.prototype, "_childComponents", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5nLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLXBpdm90LyIsInNvdXJjZXMiOlsic3JjL2VuZy1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLG9FQUFvRSxDQUFDO0FBQzVFLE9BQU8sb0VBQW9FLENBQUM7QUFDNUUsT0FBTyxFQUNILFlBQVksRUFDWixZQUFZLEVBQ1osZUFBZSxFQUNmLFNBQVMsRUFFWixNQUFNLGVBQWUsQ0FBQTtBQUV0QixNQUFNLE9BQU8sT0FBTztJQWlDaEIsWUFDSSxJQUFTLEVBQ1QsYUFBa0IsRUFDbEIsVUFBVSxFQUNWLE1BQU07UUFFTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsQ0FBQyxLQUFVLEVBQUUsQ0FBTSxFQUFFLEVBQUU7WUFDeEMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLFlBQVksRUFBRTtnQkFDdEIsSUFBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO2FBQy9DO2lCQUNJO2dCQUNLLElBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7YUFDekQ7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1Qyw0Q0FBNEM7UUFDNUMsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFN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QUFRLENBQUMsS0FBSyxJQUFJLGFBQWEsRUFBRTt3QkFDdkUsaURBQWlEO3FCQUNwRDt5QkFDSTt3QkFDRCxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDN0IsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO3FCQUN0QjthQUNSO2lCQUNJO2dCQUNELElBQUksUUFBUSxJQUFJLFNBQVMsRUFBRTtvQkFDdkIsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUN0QjtxQkFDSTtvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO2lCQUM1QjthQUNKO1NBQ0o7UUFDRCxPQUFPLENBQUMsRUFBRTtZQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsMEJBQTBCO1lBQzFCLDRCQUE0QjtZQUM1QiwyQkFBMkI7WUFDM0IsMEJBQTBCO1NBQzdCO0lBQ0wsQ0FBQzs7QUFydEJNLGFBQUssR0FBUSxDQUFDLENBQUM7QUFDZixpQkFBUyxHQUFRLEVBQUUsQ0FBQztBQXNCa0I7SUFBNUMsWUFBWSxDQUFDLFVBQVUsRUFBQyxFQUFFLE1BQU0sRUFBRyxLQUFLLEVBQUUsQ0FBQzs7MENBQWdCO0FBQy9CO0lBQTVCLGVBQWUsQ0FBQyxVQUFVLENBQUM7c0NBQWEsU0FBUzsyQ0FBTTtBQUNaO0lBQTNDLFlBQVksQ0FBQyxTQUFTLEVBQUMsRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFFLENBQUM7O3lDQUFlO0FBQzlCO0lBQTNCLGVBQWUsQ0FBQyxTQUFTLENBQUM7c0NBQVksU0FBUzswQ0FBTTtBQUM1QjtJQUF6QixlQUFlLENBQUMsT0FBTyxDQUFDO3NDQUFtQixTQUFTO2lEQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLy9UdWUgT2N0IDA4IDIwMTkgMTI6MjI6NTAgR01ULTA0MDAgKEVhc3Rlcm4gRGF5bGlnaHQgVGltZSlcbmRlY2xhcmUgdmFyIEV4dDogYW55O1xuaW1wb3J0ICdzY3JpcHQtbG9hZGVyIW5vZGVfbW9kdWxlcy9Ac2VuY2hhL2V4dC1hbmd1bGFyLXBpdm90L2V4dC9leHQucGl2b3QnO1xuaW1wb3J0ICdzY3JpcHQtbG9hZGVyIW5vZGVfbW9kdWxlcy9Ac2VuY2hhL2V4dC1hbmd1bGFyLXBpdm90L2V4dC9jc3MucGl2b3QnO1xuaW1wb3J0IHtcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgQ29udGVudENoaWxkLFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBRdWVyeUxpc3QsXG4gICAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5leHBvcnQgY2xhc3MgRW5nQmFzZSB7XG4gICAgc3RhdGljIGNvdW50OiBhbnkgPSAwO1xuICAgIHN0YXRpYyBESVJFQ1RJT046IGFueSA9ICcnO1xuXG4gICAgcHVibGljIGV4dDogYW55XG4gICAgbmV3RGl2OiBhbnlcblxuICAgIHh0eXBlOiBhbnlcbiAgICBwcm9wZXJ0aWVzOiBhbnlcbiAgICBldmVudHM6IGFueVxuXG4gICAgQTogYW55O1xuICAgIG5vZGU6IGFueVxuICAgIHBhcmVudE5vZGU6IGFueVxuICAgIGJhc2U6IGFueVxuICAgIG5vZGVOYW1lOiBhbnlcblxuICAgIGV3Y0NoaWxkcmVuOiBhbnlcbiAgICByYXdDaGlsZHJlbjogYW55XG4gICAgaGFzUGFyZW50OiBhbnlcbiAgICBwYXJlbnRUeXBlOiBhbnlcbiAgICBjaGlsZHJlbjogYW55XG4gICAgbGFzdDogYW55XG5cbiAgICBAQ29udGVudENoaWxkKCdleHRyb3V0ZScseyBzdGF0aWMgOiBmYWxzZSB9KSBfZXh0cm91dGU6IGFueTtcbiAgICBAQ29udGVudENoaWxkcmVuKCdleHRyb3V0ZScpIF9leHRyb3V0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoJ2V4dGl0ZW0nLHsgc3RhdGljIDogZmFsc2UgfSkgX2V4dGl0ZW06IGFueTtcbiAgICBAQ29udGVudENoaWxkcmVuKCdleHRpdGVtJykgX2V4dGl0ZW1zOiBRdWVyeUxpc3Q8YW55PjtcbiAgICBAQ29udGVudENoaWxkcmVuKEVuZ0Jhc2UpIF9jaGlsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxFbmdCYXNlPjtcbiAgICBnZXQgY2hpbGRDb21wb25lbnRzKCk6IEVuZ0Jhc2VbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZENvbXBvbmVudHMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGhpcyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBlUmVmOiBhbnksXG4gICAgICAgIGhvc3RDb21wb25lbnQ6IGFueSxcbiAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgZXZlbnRzXG4gICAgKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IGVSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gaG9zdENvbXBvbmVudDtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICAgICAgdGhpcy5ldmVudHMgPSBldmVudHM7XG5cbiAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50Lm5hbWUgIT0gJ2Z1bGxzY3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgKDxhbnk+dGhpcylbZXZlbnQubmFtZV0gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICg8YW55PnRoaXMpW2V2ZW50Lm5hbWUgKyAnZXZlbnQnXSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMubmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIC8vdmFyIHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIm5ld0RpdlwiKTtcbiAgICAgICAgLy90aGlzLm5ld0Rpdi5hcHBlbmRDaGlsZCh0KTtcbiAgICAgICAgdGhpcy5ub2RlLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCB0aGlzLm5ld0Rpdik7XG5cbiAgICAgICAgdGhpcy5iYXNlID0gRW5nQmFzZTtcbiAgICB9XG4gICAgYmFzZU9uSW5pdCgpIHsgfVxuICAgIGJhc2VBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmluaXRNZSgpXG4gICAgfVxuXG4vLyoqKioqKiogYmFzZSBzdGFydCAqL1xuaW5pdE1lKCkge1xuICAgIC8vY29uc29sZS5sb2coJycpO2NvbnNvbGUubG9nKCcqKiogaW5pdE1lIGZvciAnICsgdGhpcy5jdXJyZW50RWxOYW1lKTtcbiAgICB0aGlzLmNyZWF0ZVJhd0NoaWxkcmVuKCk7XG4gICAgdGhpcy5zZXRQYXJlbnRUeXBlKCk7XG4gICAgdGhpcy5zZXREaXJlY3Rpb24oKTtcbiAgICB0aGlzLmZpZ3VyZU91dEEoKTtcbiAgICB0aGlzLmNyZWF0ZVByb3BzKHRoaXMucHJvcGVydGllcywgdGhpcy5ldmVudHMpO1xuICAgIHRoaXMuY3JlYXRlRXh0Q29tcG9uZW50KCk7XG59XG5jcmVhdGVSYXdDaGlsZHJlbigpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50RWwuaXNBbmd1bGFyKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuID0gdGhpcy5jdXJyZW50RWwuY2hpbGRDb21wb25lbnRzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RWwuZXdjQ2hpbGRyZW4gPSBBcnJheS5mcm9tKHRoaXMuY3VycmVudEVsLmNoaWxkcmVuKTtcbiAgICAgICAgdGhpcy5jdXJyZW50RWwucmF3Q2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdmFyIG51bSA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50RWwuZXdjQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRFbC5ld2NDaGlsZHJlbltpXS54dHlwZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRFbC5yYXdDaGlsZHJlbltudW1dID0gdGhpcy5jdXJyZW50RWwuZXdjQ2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgbnVtKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2RvIHNvbWV0aGluZyB3aXRoIGRpdiAoYWRkIGFuIEV4dC53aWRnZXQuLi4pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5zZXRQYXJlbnRUeXBlKCkge1xuICAgIC8vIGlmICh0aGlzLnBhcmVudEVsID09IG51bGwpIHtcbiAgICAvLyAgICAgdGhpcy5oYXNQYXJlbnQgPSBmYWxzZTtcbiAgICAvLyB9XG4gICAgLy8gZWxzZSB7XG4gICAgLy8gICAgIGlmICh0aGlzLnBhcmVudEVsTmFtZS5zdWJzdHJpbmcoMCwgNCkgPT0gJ0VYVC0nKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmhhc1BhcmVudCA9IHRydWU7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZWxzZSB7XG4gICAgLy8gICAgICAgICB0aGlzLmhhc1BhcmVudCA9IGZhbHNlO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgaWYgKHRoaXMucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucGFyZW50VHlwZSA9ICdodG1sJ1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50RWxOYW1lLnN1YnN0cmluZygwLCA0KSA9PSAnRVhULScpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50VHlwZSA9ICdleHQnXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudFR5cGUgPSAnaHRtbCdcbiAgICAgICAgfVxuICAgIH1cbn1cbnNldERpcmVjdGlvbigpIHtcbiAgICBpZiAodGhpcy5iYXNlLmNvdW50ID09IDApIHtcbiAgICAgICAgdGhpcy5iYXNlLmNvdW50Kys7XG4vLyAgICAgICAgaWYgKHRoaXMuaGFzUGFyZW50ID09IGZhbHNlKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudFR5cGUgIT0gJ2V4dCcpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZS5ESVJFQ1RJT04gPSAnVG9wVG9Cb3R0b20nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy9pZiAodGhpcy5wYXJlbnRFbE5hbWUuc3Vic3RyaW5nKDAsIDQpID09ICdFWFQtJykge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5ESVJFQ1RJT04gPSAnQm90dG9tVG9Ub3AnO1xuICAgICAgICAgICAgLy99XG4gICAgICAgICAgICAvL2Vsc2Uge1xuICAgICAgICAgICAgLy8gICAgdGhpcy5iYXNlLkRJUkVDVElPTiA9ICdUb3BUb0JvdHRvbSc7XG4gICAgICAgICAgICAvL31cbiAgICAgICAgfVxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuYmFzZS5ESVJFQ1RJT04pO1xufVxuZmlndXJlT3V0QSgpIHtcbiAgICBpZiAodGhpcy5wYXJlbnRUeXBlID09ICdleHQnICYmXG4gICAgICAgIHRoaXMucGFyZW50RWwuQSA9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgdGhpcy5wYXJlbnRFbC5ub2RlTmFtZS5zdWJzdHJpbmcoMCwgNCkgPT0gJ0VYVC0nXG4gICAgICAgICkge1xuICAgICAgICB0aGlzLmluaXQodGhpcy5wYXJlbnRFbCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnJlbnRFbC5BID09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmluaXQodGhpcy5jdXJyZW50RWwpO1xuICAgIH1cbn1cbmluaXQoY29tcG9uZW50KSB7XG4gICAgY29tcG9uZW50LkEgPSB7fTtcbiAgICBjb21wb25lbnQuQS5wcm9wcyA9IHt9O1xuICAgIGNvbXBvbmVudC5BLnh0eXBlID0gY29tcG9uZW50Lnh0eXBlO1xuICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UUyA9IEFycmF5LmZyb20odGhpcy5jdXJyZW50RWwucmF3Q2hpbGRyZW4pO1xuICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0NPVU5UID0gdGhpcy5jdXJyZW50RWwucmF3Q2hpbGRyZW4ubGVuZ3RoO1xuICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0FEREVEID0gY29tcG9uZW50LkEuQ0hJTERSRU5DT01QT05FTlRTQ09VTlQ7XG4gICAgY29tcG9uZW50LkEuQ0hJTERSRU5DT01QT05FTlRTTEVGVCA9IGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0NPVU5UO1xufVxuY3JlYXRlRXh0Q29tcG9uZW50KCkge1xuICAgIHZhciBBID0gdGhpcy5jdXJyZW50RWwuQTtcbiAgICAvL2NvbnNvbGUuZGlyKEEpXG4gICAgdmFyIG1lQSA9IEE7XG4gICAgdmFyIG1ldGhpcyA9IHRoaXM7XG5cbiAgICBpZiAobWV0aGlzLmJhc2UuRElSRUNUSU9OID09ICdCb3R0b21Ub1RvcCcpIHtcbiAgICAgICAgaWYgKEEucHJvcHNbJ3ZpZXdwb3J0J10gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy90aGlzLm5ld0Rpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubmV3RGl2KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudFR5cGUgPT0gJ2h0bWwnKSB7XG4gICAgICAgICAgICAgICAgRXh0Lm9uUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBtZXRoaXMuY3VycmVudEVsLkEuZXh0ID0gRXh0LmNyZWF0ZShtZUEucHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCcwLUV4dC5hcHBsaWNhdGlvbjogJyArIG1lQS5wcm9wcy54dHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhpcy5hc3Nlc3NDaGlsZHJlbihtZXRoaXMuYmFzZSwgbWV0aGlzLnh0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgRXh0LmFwcGxpY2F0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdNeUVXQ0FwcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXVuY2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHQuVmlld3BvcnQuYWRkKFttZXRoaXMuY3VycmVudEVsLkEuZXh0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvd1sncm91dGVyJ10pIHt3aW5kb3dbJ3JvdXRlciddLmluaXQoKTt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aGlzLnNlbmRSZWFkeUV2ZW50KG1ldGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZXJyb3I6IHZpZXdwb3J0IG5vdCBhbGxvd2VkIG9uIHRoaXMgZWxlbWVudCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRUeXBlID09ICdodG1sJykge1xuICAgICAgICAgICAgICAgIG1lQS5wcm9wcy5yZW5kZXJUbyA9IHRoaXMubmV3RGl2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgRXh0Lm9uUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobWV0aGlzLnBhcmVudFR5cGUgKyAnIC0gRXh0LmNyZWF0ZTogJyArIG1ldGhpcy5jdXJyZW50RWxOYW1lICsgJyBIVE1MIHBhcmVudDogJyArIG1ldGhpcy5jdXJyZW50RWxOYW1lKTtcbiAgICAgICAgICAgICAgICBtZXRoaXMuY3VycmVudEVsLkEuZXh0ID0gRXh0LmNyZWF0ZShtZUEucHJvcHMpO1xuICAgICAgICAgICAgICAgIG1ldGhpcy5hc3Nlc3NDaGlsZHJlbihtZXRoaXMuYmFzZSwgbWV0aGlzLnh0eXBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdUb3BUb0JvdHRvbScpXG4gICAgICAgIGlmIChBLnByb3BzWyd2aWV3cG9ydCddID09IHRydWUpIHtcbiAgICAgICAgICAgIC8vdGhpcy5uZXdEaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5ld0Rpdik7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRUeXBlID09ICdodG1sJykge1xuICAgICAgICAgICAgICAgIEV4dC5vblJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aGlzLmN1cnJlbnRFbC5BLmV4dCA9IEV4dC5jcmVhdGUobWVBLnByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnMC1FeHQuYXBwbGljYXRpb246ICcgKyBtZUEucHJvcHMueHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBtZXRoaXMuYXNzZXNzQ2hpbGRyZW4obWV0aGlzLmJhc2UsIG1ldGhpcy54dHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIEV4dC5hcHBsaWNhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnTXlFV0NBcHAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGF1bmNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXh0LlZpZXdwb3J0LmFkZChbbWV0aGlzLmN1cnJlbnRFbC5BLmV4dF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3dbJ3JvdXRlciddKSB7d2luZG93Wydyb3V0ZXInXS5pbml0KCk7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhpcy5zZW5kUmVhZHlFdmVudChtZXRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yOiB2aWV3cG9ydCBub3QgYWxsb3dlZCBvbiB0aGlzIGVsZW1lbnQnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50VHlwZSA9PSAnaHRtbCcpIHtcbiAgICAgICAgICAgICAgICBtZUEucHJvcHMucmVuZGVyVG8gPSB0aGlzLm5ld0RpdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEV4dC5vblJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG1ldGhpcy5wYXJlbnRUeXBlICsgJyAtIEV4dC5jcmVhdGU6ICcgKyBtZXRoaXMuY3VycmVudEVsTmFtZSArICcgSFRNTCBwYXJlbnQ6ICcgKyBtZXRoaXMuY3VycmVudEVsTmFtZSk7XG4gICAgICAgICAgICAgICAgbWV0aGlzLmN1cnJlbnRFbC5BLmV4dCA9IEV4dC5jcmVhdGUobWVBLnByb3BzKTtcbiAgICAgICAgICAgICAgICBtZXRoaXMuYXNzZXNzQ2hpbGRyZW4obWV0aGlzLmJhc2UsIG1ldGhpcy54dHlwZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuYXNzZXNzQW5ndWxhckNoaWxkcmVuKGJhc2UsIHh0eXBlLCBBKSB7XG4gICAgaWYgKHRoaXMuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodGhpcy5fZXh0aXRlbXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIHZhciBlbCA9IEV4dC5nZXQodGhpcy5fZXh0aXRlbS5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgIHZhciB3ID0gRXh0LmNyZWF0ZSh7eHR5cGU6J3dpZGdldCcsIGVsZW1lbnQ6IGVsfSk7XG4gICAgICAgICAgICB0aGlzLmFkZFRoZUNoaWxkKEEuZXh0LCB3LCBudWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gICAgIGlmICh0aGlzLl9leHRyb3V0ZXMubGVuZ3RoID09IDEpIHtcbiAgICAvLyAgICAgICAgIEEuZXh0LnNldEh0bWwodGhpcy5fZXh0cm91dGUubmF0aXZlRWxlbWVudCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG59XG5cblxuXG5hc3Nlc3NDaGlsZHJlbihiYXNlLCB4dHlwZSkge1xuICAgIC8vY29uc29sZS5sb2coJ2Fzc2Vzc0NoaWxkcmVuIGZvcjogJyArIHh0eXBlKTtcbiAgICB2YXIgQSA9IHRoaXMuY3VycmVudEVsLkE7XG4gICAgdGhpcy5hc3Nlc3NBbmd1bGFyQ2hpbGRyZW4oYmFzZSwgeHR5cGUsIEEpXG5cbiAgICBpZiAoYmFzZS5ESVJFQ1RJT04gPT0gJ0JvdHRvbVRvVG9wJykge1xuICAgICAgICBpZiAoQS5DSElMRFJFTkNPTVBPTkVOVFNDT1VOVCA9PSAwICYmXG4gICAgICAgICAgICBBLkNISUxEUkVOQ09NUE9ORU5UUy5sZW5ndGggPT0gMCAmJlxuICAgICAgICAgICAgdGhpcy5wYXJlbnRUeXBlID09ICdodG1sJykge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnU29sbycpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnMS0gcmVhZHkgZXZlbnQgZm9yICcgKyB0aGlzLmN1cnJlbnRFbE5hbWUpO1xuICAgICAgICAgICAgdGhpcy5zZW5kUmVhZHlFdmVudCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBLkNISUxEUkVOQ09NUE9ORU5UU0FEREVEID4gMCkge1xuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLCBBLkNISUxEUkVOQ09NUE9ORU5UUyk7XG4gICAgICAgICAgICAvL3RoaXMubm9kZS5yZW1vdmUoKTsgPz8gaXMgdGhpcyBuZWVkZWQ/P1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBhcmVudFR5cGUgIT0gJ2V4dCcpIHtcbiAgICAgICAgICAgIGlmIChiYXNlLkRJUkVDVElPTiA9PSAnQm90dG9tVG9Ub3AnKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnNS0gcmVhZHkgZXZlbnQgZm9yICcgKyB0aGlzLmN1cnJlbnRFbE5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZFJlYWR5RXZlbnQodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGFyZW50VHlwZSA9PSAnZXh0Jykge1xuICAgICAgICAgICAgaWYgKGJhc2UuRElSRUNUSU9OID09ICdCb3R0b21Ub1RvcCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEVsLkEuQ0hJTERSRU5DT01QT05FTlRTLnB1c2godGhpcy5jdXJyZW50RWwpO1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50RWwuQS5DSElMRFJFTkNPTVBPTkVOVFNBRERFRCsrO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJzQtIHJlYWR5IGV2ZW50IGZvciAnICsgdGhpcy5jdXJyZW50RWxOYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRSZWFkeUV2ZW50KHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRFbC5BLkNISUxEUkVOQ09NUE9ORU5UU0xFRlQtLTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRFbC5BLkNISUxEUkVOQ09NUE9ORU5UU0xFRlQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENoaWxkcmVuKHRoaXMucGFyZW50RWwsIHRoaXMucGFyZW50RWwuQS5DSElMRFJFTkNPTVBPTkVOVFMpO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCczLSByZWFkeSBldmVudCBmb3IgJyArIHRoaXMucGFyZW50RWxOYW1lICsgJyhwYXJlbnQpJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZFJlYWR5RXZlbnQodGhpcy5wYXJlbnRFbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgeyAvL2Jhc2UuRElSRUNUSU9OID09ICdUb3BUb0JvdHRvbSdcbiAgICAgICAgaWYgKHRoaXMucGFyZW50VHlwZSA9PSAnZXh0Jykge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndGhpczogJyArIEEueHR5cGUgKyAnICcgKyBBLnByb3BzLnRpdGxlICsgJyBwYXJlbnQ6ICcgKyB0aGlzLnBhcmVudEVsLkEueHR5cGUpXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdsZW5ndGg9MCwgc2VuZCByZWFkeSBmb3IgJyArIHRoaXMueHR5cGUpXG4gICAgICAgICAgICB0aGlzLnNlbmRSZWFkeUV2ZW50KHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhBLnByb3BzKVxuICAgICAgICAvLyAgICAgLy9jb25zb2xlLmxvZygndGhpczogJyArIEEueHR5cGUgKyAnICcgKyBBLnByb3BzLnRpdGxlICsgJyByb290OiAnKVxuICAgICAgICAvLyB9XG4gICAgICAgIGlmIChBLkNISUxEUkVOQ09NUE9ORU5UUy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja1BhcmVudCh0aGlzLnBhcmVudEVsLCBiYXNlLCB0aGlzKVxuICAgICAgICB9XG4gICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAvLyAgICAgLy9iYXNlLkNPTVBPTkVOVENPVU5UID0gYmFzZS5DT01QT05FTlRDT1VOVCArIEEuQ0hJTERSRU5DT01QT05FTlRTLmxlbmd0aDtcbiAgICAgICAgLy8gfVxuICAgIH1cbn1cblxuY2hlY2tQYXJlbnQoY29tcG9uZW50LCBiYXNlLCBtZSkge1xuICAgIGlmIChjb21wb25lbnQgPT0gbnVsbCB8fCBjb21wb25lbnQubG9jYWxOYW1lLnN1YnN0cmluZygwLCA0KSAhPSAnRVhULScpIHtcbiAgICAgICAgbWUuc2VuZFJlYWR5RXZlbnQobWUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFNMRUZULS1cbiAgICAgICAgLy9iYXNlLkNPTVBPTkVOVExFRlRDT1VOVCA9IGJhc2UuQ09NUE9ORU5UTEVGVENPVU5UICsgMTtcbiAgICAgICAgaWYgKGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0xFRlQgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZHJlbihjb21wb25lbnQsIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UUylcbiAgICAgICAgICAgIHRoaXMuY2hlY2tQYXJlbnQoY29tcG9uZW50LnBhcmVudEVsLCBiYXNlLCBjb21wb25lbnQpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmFkZENoaWxkcmVuKGNoaWxkLCBjaGlsZHJlbikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy93aHkgaXMgdGhpcyBjcmVhdGVkIGFzIGFuIG9iamVjdD8/XG4gICAgICAgIHZhciBjaGlsZEl0ZW0gPSB7IHBhcmVudENtcDoge30sIGNoaWxkQ21wOiB7fSB9O1xuICAgICAgICBjaGlsZEl0ZW0ucGFyZW50Q21wID0gY2hpbGQuY3VycmVudEVsLkEuZXh0O1xuICAgICAgICB2YXIgQTJcbiAgICAgICAgaWYgKGNoaWxkcmVuW2ldLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIEEyID0gY2hpbGRyZW5baV0ubm9kZS5BO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgQTIgPSBjaGlsZHJlbltpXS5BO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkSXRlbS5jaGlsZENtcCA9IEEyLmV4dDtcbiAgICAgICAgdGhpcy5hZGRUaGVDaGlsZChjaGlsZEl0ZW0ucGFyZW50Q21wLCBjaGlsZEl0ZW0uY2hpbGRDbXAsIG51bGwpO1xuICAgIH1cbn1cbmFkZFRoZUNoaWxkKHBhcmVudENtcCwgY2hpbGRDbXAsIGxvY2F0aW9uKSB7XG4gICAgdmFyIHBhcmVudHh0eXBlID0gcGFyZW50Q21wLnh0eXBlO1xuICAgIHZhciBjaGlsZHh0eXBlID0gY2hpbGRDbXAueHR5cGU7XG4gICAgLy9jb25zb2xlLmxvZygnYWRkVGhlQ2hpbGQ6ICcgKyBwYXJlbnR4dHlwZSArICcoJyArIHBhcmVudENtcC5leHQgKyAnKScgKyAnIC0gJyArIGNoaWxkeHR5cGUgKyAnKCcgKyBjaGlsZENtcC5leHQgKyAnKScpO1xuICAgIC8vaWYgKGNoaWxkeHR5cGUgPT0gJ3dpZGdldCcpXG4gICAgaWYgKHRoaXMuY3VycmVudEVsLkEuZXh0LmluaXRpYWxDb25maWcuYWxpZ24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChwYXJlbnR4dHlwZSAhPSAndG9vbHRpcCcgJiYgcGFyZW50eHR5cGUgIT0gJ3RpdGxlYmFyJyAmJiBwYXJlbnR4dHlwZSAhPSAnZ3JpZCcgJiYgcGFyZW50eHR5cGUgIT0gJ2xvY2tlZGdyaWQnICYmIHBhcmVudHh0eXBlICE9ICdidXR0b24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW4gb25seSB1c2UgYWxpZ24gcHJvcGVydHkgaWYgcGFyZW50IGlzIGEgVGl0bGViYXIgb3IgR3JpZCBvciBCdXR0b24nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgZGVmYXVsdHBhcmVudCA9IGZhbHNlO1xuICAgIHZhciBkZWZhdWx0Y2hpbGQgPSBmYWxzZTtcbiAgICBzd2l0Y2ggKHBhcmVudHh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2J1dHRvbic6XG4gICAgICAgICAgICBzd2l0Y2ggKGNoaWxkeHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLnNldE1lbnUoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0cGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYm9vbGVhbmNvbHVtbic6XG4gICAgICAgIGNhc2UgJ2NoZWNrY29sdW1uJzpcbiAgICAgICAgY2FzZSAnZ3JpZGNvbHVtbic6XG4gICAgICAgIGNhc2UgJ2NvbHVtbic6XG4gICAgICAgIGNhc2UgJ3RlbXBsYXRlY29sdW1uJzpcbiAgICAgICAgY2FzZSAnZ3JpZGNvbHVtbic6XG4gICAgICAgIGNhc2UgJ2NvbHVtbic6XG4gICAgICAgIGNhc2UgJ3RlbXBsYXRlY29sdW1uJzpcbiAgICAgICAgY2FzZSAnZGF0ZWNvbHVtbic6XG4gICAgICAgIGNhc2UgJ2RyYWdjb2x1bW4nOlxuICAgICAgICBjYXNlICdudW1iZXJjb2x1bW4nOlxuICAgICAgICBjYXNlICdzZWxlY3Rpb25jb2x1bW4nOlxuICAgICAgICBjYXNlICd0ZXh0Y29sdW1uJzpcbiAgICAgICAgY2FzZSAndHJlZWNvbHVtbic6XG4gICAgICAgIGNhc2UgJ3Jvd251bWJlcmVyJzpcbiAgICAgICAgICAgIHN3aXRjaCAoY2hpbGR4dHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JlbmRlcmVyY2VsbCc6XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5zZXRDZWxsKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICdncmlkY29sdW1uJzpcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRwYXJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdncmlkJzpcbiAgICAgICAgY2FzZSAnbG9ja2VkZ3JpZCc6XG4gICAgICAgICAgICBzd2l0Y2ggKGNoaWxkeHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdncmlkY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICdjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3RyZWVjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3RleHRjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICdkYXRlY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICdyb3dudW1iZXJlcic6XG4gICAgICAgICAgICAgICAgY2FzZSAnbnVtYmVyY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICdib29sZWFuY29sdW1uJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnR4dHlwZSA9PSAnZ3JpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkQ29sdW1uKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ0NvbHMgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudENtcC5yZWdpc3RlcmVkQ29sdW1ucyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdDb2xzID0gcGFyZW50Q21wLnJlZ2lzdGVyZWRDb2x1bW5zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnR4dHlwZSA9PSAnZ3JpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21qZyBjb25zb2xlLmxvZyhwYXJlbnRDbXApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydENvbHVtbihsb2NhdGlvbiArIHJlZ0NvbHMsIGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQobG9jYXRpb24gKyByZWdDb2xzLCBjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdHBhcmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBkZWZhdWx0cGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICA7XG4gICAgc3dpdGNoIChjaGlsZHh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3Rvb2xiYXInOlxuICAgICAgICBjYXNlICd0aXRsZWJhcic6XG4gICAgICAgICAgICBpZiAocGFyZW50Q21wLmdldEhpZGVIZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydCgxLCBjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Q21wLmFkZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydChsb2NhdGlvbiwgY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndG9vbHRpcCc6XG4gICAgICAgICAgICBwYXJlbnRDbXAuc2V0VG9vbHRpcChjaGlsZENtcCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGx1Z2luJzpcbiAgICAgICAgICAgIHBhcmVudENtcC5zZXRQbHVnaW4oY2hpbGRDbXApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBkZWZhdWx0Y2hpbGQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChkZWZhdWx0cGFyZW50ID09IHRydWUgJiYgZGVmYXVsdGNoaWxkID09IHRydWUpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwYXJlbnR4dHlwZSArICcuYWRkKCcgKyBjaGlsZHh0eXBlICsgJyknKVxuICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICB9XG4gICAgLy8gaWYgKHRoaXMucGFyZW50Tm9kZS5jaGlsZHJlbllldFRvQmVEZWZpbmVkID4gMCkge1xuICAgIC8vICAgICB0aGlzLnBhcmVudE5vZGUuY2hpbGRyZW5ZZXRUb0JlRGVmaW5lZC0tXG4gICAgLy8gfVxuICAgIC8vIC8vY29uc29sZS5sb2coJ2NoaWxkcmVuWWV0VG9CZURlZmluZWQoYWZ0ZXIpICcgICsgdGhpcy5wYXJlbnROb2RlLmNoaWxkcmVuWWV0VG9CZURlZmluZWQpXG4gICAgLy8gaWYgKHRoaXMucGFyZW50Tm9kZS5jaGlsZHJlbllldFRvQmVEZWZpbmVkID09IDApIHtcbiAgICAvLyAgICAgdGhpcy5wYXJlbnROb2RlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdyZWFkeScse2RldGFpbDp7Y21wOiB0aGlzLnBhcmVudE5vZGUuZXh0fX0pKVxuICAgIC8vIH1cbn1cbmF0RW5kKCkge1xuICAgIC8vY29uc29sZS5sb2coJyoqKiBhdCBlbmQnKTtcbiAgICAvL2NvbnNvbGUubG9nKCd0aGlzIC0gJyArIHRoaXMuY3VycmVudEVsTmFtZSk7XG4gICAgLy9jb25zb2xlLmRpcih0aGlzLmN1cnJlbnRFbC5BKTtcbiAgICBpZiAodGhpcy5wYXJlbnRFbCAhPSBudWxsKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3BhcmVudCAtICcgKyB0aGlzLnBhcmVudEVsTmFtZSk7XG4gICAgICAgIC8vY29uc29sZS5kaXIodGhpcy5wYXJlbnRFbC5BKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ05vIEVYVCBwYXJlbnQnKTtcbiAgICB9XG59XG5nZXQgY3VycmVudEVsKCkge1xuICAgIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbmdldEN1cnJlbnRFbE5hbWUoY29tcG9uZW50KSB7XG4gICAgaWYgKGNvbXBvbmVudC5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQubm9kZS5ub2RlTmFtZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQubm9kZU5hbWU7XG4gICAgfVxufVxuZ2V0IGN1cnJlbnRFbE5hbWUoKSB7XG4gICAgaWYgKHRoaXMuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLm5vZGVOYW1lO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZU5hbWU7XG4gICAgfVxufVxuZ2V0IGlzQW5ndWxhcigpIHtcbiAgICBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmdldCBwYXJlbnRFbCgpIHtcbiAgICBpZiAodGhpcy5pc0FuZ3VsYXIpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLm5vZGU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xuICAgIH1cbn1cbmdldCBwYXJlbnRFbE5hbWUoKSB7XG4gICAgaWYgKHRoaXMuaXNBbmd1bGFyKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZS5ub2RlLm5vZGVOYW1lO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZS5ub2RlTmFtZTtcbiAgICB9XG59XG5zZW5kUmVhZHlFdmVudChjb21wb25lbnQpIHtcbiAgICB2YXIgY21wID0gY29tcG9uZW50LmN1cnJlbnRFbC5BLmV4dDtcbiAgICBpZiAoY29tcG9uZW50Ll9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29tcG9uZW50WydyZWFkeSddLmVtaXQoeyBkZXRhaWw6IHsgY21wOiBjbXAgfSB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncmVhZHknLCB7IGRldGFpbDogeyBjbXA6IGNtcCB9IH0pKTtcbiAgICB9XG59XG4vLyoqKioqKiogYmFzZSBlbmQgKi9cbi8vKioqKioqKiBwcm9wcyBzdGFydCAqL1xuLy9jcmVhdGVQcm9wcyhwcm9wZXJ0aWVzLCBwcm9wZXJ0aWVzb2JqZWN0LCBldmVudHMsIGV2ZW50bmFtZXMpIHtcbmNyZWF0ZVByb3BzKHByb3BlcnRpZXMsIGV2ZW50cykge1xuICAgIHZhciBwcm9wcyA9IHRoaXMuY3VycmVudEVsLkEucHJvcHM7XG4gICAgcHJvcHMueHR5cGUgPSB0aGlzLnh0eXBlO1xuICAgIGxldCBsaXN0ZW5lcnNQcm92aWRlZCA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcHJvcCA9IHByb3BlcnRpZXNbaV07XG4gICAgICAgIGlmIChwcm9wID09ICdoYW5kbGVyJykge1xuICAgICAgICAgICAgaWYgKHRoaXNbcHJvcF0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcHJvcHNbcHJvcF0gPSB0aGlzW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vbmVlZCB0byBoYW5kbGUgbGlzdGVuZXJzIGNvbWluZyBpbiBoZXJlXG4gICAgICAgIGlmICgocHJvcHMueHR5cGUgPT09ICdjYXJ0ZXNpYW4nIHx8IHByb3BzLnh0eXBlID09PSAncG9sYXInKSAmJiBwcm9wID09PSAnbGF5b3V0Jykge1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3AgPT0gJ2xpc3RlbmVycycgJiYgdGhpc1twcm9wXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHByb3BzW3Byb3BdID0gdGhpc1twcm9wXTtcbiAgICAgICAgICAgIGxpc3RlbmVyc1Byb3ZpZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzW3Byb3BdICE9IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIHByb3AgIT0gJ2xpc3RlbmVycycgJiZcbiAgICAgICAgICAgICAgICBwcm9wICE9ICdjb25maWcnICYmXG4gICAgICAgICAgICAgICAgcHJvcCAhPSAnaGFuZGxlcicgJiZcbiAgICAgICAgICAgICAgICBwcm9wICE9ICdmaXRUb1BhcmVudCcpIHtcbiAgICAgICAgICAgICAgICBwcm9wc1twcm9wXSA9IHRoaXNbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRydWUgPT09IHRoaXNbJ2ZpdFRvUGFyZW50J10pIHtcbiAgICAgICAgcHJvcHMudG9wID0gMCxcbiAgICAgICAgICAgIHByb3BzLmxlZnQgPSAwLFxuICAgICAgICAgICAgcHJvcHMud2lkdGggPSAnMTAwJScsXG4gICAgICAgICAgICBwcm9wcy5oZWlnaHQgPSAnMTAwJSc7XG4gICAgfVxuICAgIGlmICh0aGlzWydjb25maWcnXSAhPT0ge30pIHtcbiAgICAgICAgRXh0LmFwcGx5KHByb3BzLCB0aGlzWydjb25maWcnXSk7XG4gICAgfVxuICAgIGlmICghbGlzdGVuZXJzUHJvdmlkZWQpIHtcbiAgICAgICAgcHJvcHMubGlzdGVuZXJzID0ge307XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgbGV0IGV2ZW50bmFtZSA9IGV2ZW50Lm5hbWU7XG4gICAgICAgICAgICBsZXQgZXZlbnRwYXJhbWV0ZXJzID0gZXZlbnQucGFyYW1ldGVycztcbiAgICAgICAgICAgIG1lLmN1cnJlbnRFbC5BLnByb3BzLmxpc3RlbmVyc1tldmVudG5hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2luIHRoZSBldmVudCAnICsgZXZlbnRuYW1lKVxuICAgICAgICAgICAgICAgIGxldCBwYXJhbWV0ZXJzID0gZXZlbnRwYXJhbWV0ZXJzO1xuICAgICAgICAgICAgICAgIGxldCBwYXJtcyA9IHBhcmFtZXRlcnMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgbGV0IGVtaXRwYXJtcyA9IHt9O1xuICAgICAgICAgICAgICAgIGlmIChtZS5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gcGFybXMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbWl0cGFybXNbcGFybXNbaV1dID0gYXJnc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtZVtldmVudG5hbWVdLmVtaXQoZW1pdHBhcm1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vZHVwPz9cbiAgICBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKChldmVudCwgbikgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50ICE9ICdmdWxsc2NyZWVuJykge1xuICAgICAgICAgICAgICAgIHRoaXNbZXZlbnRdID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpc1tldmVudCArICdldmVudCddID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyoqKioqKiogcHJvcHMgZW5kICovXG5cblxuICAgIGJhc2VPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICAvL2NvbnNvbGUubG9nKGBuZ09uQ2hhbmdlc2ApXG4gICAgICAgIC8vY29uc29sZS5sb2coY2hhbmdlcylcbiAgICAgICAgbGV0IGNoYW5nZXNNc2dzID0gW107XG4gICAgICAgIGZvciAobGV0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgICAgICAgIGxldCB2ZXJiID0gJyc7XG4gICAgICAgICAgICBpZiAoY2hhbmdlc1twcm9wTmFtZV0uZmlyc3RDaGFuZ2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB2ZXJiID0gJ2luaXRpYWxpemVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZlcmIgPSAnY2hhbmdlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdmFsID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50RWwuQSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUuZGlyKHRoaXMuY3VycmVudEVsLkEuZXh0KVxuICAgICAgICAgICAgICAgIHZhciBjYXBQcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgdmFyIHNldEZ1bmN0aW9uID0gJ3NldCcgKyBjYXBQcm9wTmFtZTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHNldEZ1bmN0aW9uKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRFbC5BLmV4dFtzZXRGdW5jdGlvbl0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEVsLkEuZXh0W3NldEZ1bmN0aW9uXSh2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihzZXRGdW5jdGlvbiArICcgbm90IGZvdW5kIGZvciAnICsgdGhpcy5jdXJyZW50RWwuQS5leHQueHR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh2ZXJiID09ICdjaGFuZ2VkJykge1xuICAgICAgICAgICAgICAgICAgICAvL21qZyBjb25zb2xlLmxvZygnY2hhbmdlIG5lZWRlZCBhbmQgZXh0IG5vdCBkZWZpbmVkJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGFuZ2VzTXNncy5wdXNoKGAkICQgdG8gXCIkXCJgKTtcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKGBPbkNoYW5nZXM6ICR7Y2hhbmdlc01zZ3Muam9pbignOyAnKX1gKVxuICAgIH1cblxuICAgIGJhc2VPbkRlc3Ryb3koKSB7XG4gICAgICAgIHZhciBjaGlsZENtcDtcbiAgICAgICAgdmFyIHBhcmVudENtcDtcbiAgICAgICAgaWYgKGNoaWxkQ21wID09IHVuZGVmaW5lZCB8fCBwYXJlbnRDbXAgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGRDbXAgPSB0aGlzLmN1cnJlbnRFbC5BLmV4dDtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudEVsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRDbXAgPSB0aGlzLnBhcmVudEVsLkEuZXh0O1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coY2hpbGRDbXApXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwYXJlbnRDbXApXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkQ21wID09IHVuZGVmaW5lZCB8fCBwYXJlbnRDbXAgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50Q21wLnh0eXBlID09ICdidXR0b24nICYmIGNoaWxkQ21wLnh0eXBlID09ICdtZW51Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnV0dG9uL21lbnUgbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnY2Fyb3VzZWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjYXJvdXNlbCBwYXJlbnQgbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnZ3JpZCcgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ2NvbHVtbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2dyaWQvY29sdW1uIG5vdCBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coY2hpbGRDbXApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICdzZWdtZW50ZWRidXR0b24nICYmIGNoaWxkQ21wLnh0eXBlID09ICdidXR0b24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdzZWdtZW50ZWRidXR0b24vYnV0dG9uIG5vdCBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ2J1dHRvbicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ3Rvb2x0aXAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdidXR0b24vdG9vbHRpcCBub3QgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICd0aXRsZWJhcicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3RpdGxlYmFyL2J1dHRvbiBub3QgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICd0aXRsZWJhcicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ3NlYXJjaGZpZWxkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndGl0bGViYXIvc2VhcmNoZmllbGQgbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLnJlbW92ZShbY2hpbGRDbXBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQ21wLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkQ21wICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENtcC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gZGVzdHJveScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgLy9tamcgY29uc29sZS5sb2coJyoqKioqJylcbiAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKHBhcmVudENtcClcbiAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKGNoaWxkQ21wKVxuICAgICAgICAgICAgLy9tamcgY29uc29sZS5sb2coJyoqKioqJylcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=