(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('script-loader!node_modules/@sencha/ext-angular-pivot/ext/ext.pivot'), require('script-loader!node_modules/@sencha/ext-angular-pivot/ext/css.pivot')) :
    typeof define === 'function' && define.amd ? define('@sencha/ext-angular-pivot', ['exports', '@angular/core', 'script-loader!node_modules/@sencha/ext-angular-pivot/ext/ext.pivot', 'script-loader!node_modules/@sencha/ext-angular-pivot/ext/css.pivot'], factory) :
    (global = global || self, factory((global.sencha = global.sencha || {}, global.sencha['ext-angular-pivot'] = {}), global.ng.core));
}(this, function (exports, core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var EngBase = /** @class */ (function () {
        function EngBase(eRef, hostComponent, properties, events) {
            var _this = this;
            this.node = eRef.nativeElement;
            this.parentNode = hostComponent;
            this.properties = properties;
            this.events = events;
            this.events.forEach(function (event, n) {
                if (event.name != 'fullscreen') {
                    _this[event.name] = new core.EventEmitter();
                }
                else {
                    _this[event.name + 'event'] = new core.EventEmitter();
                }
            });
            this.newDiv = document.createElement('div');
            //var t = document.createTextNode("newDiv");
            //this.newDiv.appendChild(t);
            this.node.insertAdjacentElement('beforebegin', this.newDiv);
            this.base = EngBase;
        }
        Object.defineProperty(EngBase.prototype, "childComponents", {
            get: function () {
                var _this = this;
                return this._childComponents.filter(function (item) { return item !== _this; });
            },
            enumerable: true,
            configurable: true
        });
        EngBase.prototype.baseOnInit = function () { };
        EngBase.prototype.baseAfterViewInit = function () {
            this.initMe();
        };
        //******* base start */
        EngBase.prototype.initMe = function () {
            //console.log('');console.log('*** initMe for ' + this.currentElName);
            this.createRawChildren();
            this.setParentType();
            this.setDirection();
            this.figureOutA();
            this.createProps(this.properties, this.events);
            this.createExtComponent();
        };
        EngBase.prototype.createRawChildren = function () {
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
        };
        EngBase.prototype.setParentType = function () {
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
        };
        EngBase.prototype.setDirection = function () {
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
        };
        EngBase.prototype.figureOutA = function () {
            if (this.parentType == 'ext' &&
                this.parentEl.A == undefined &&
                this.parentEl.nodeName.substring(0, 4) == 'EXT-') {
                this.init(this.parentEl);
            }
            if (this.currentEl.A == undefined) {
                this.init(this.currentEl);
            }
        };
        EngBase.prototype.init = function (component) {
            component.A = {};
            component.A.props = {};
            component.A.xtype = component.xtype;
            component.A.CHILDRENCOMPONENTS = Array.from(this.currentEl.rawChildren);
            component.A.CHILDRENCOMPONENTSCOUNT = this.currentEl.rawChildren.length;
            component.A.CHILDRENCOMPONENTSADDED = component.A.CHILDRENCOMPONENTSCOUNT;
            component.A.CHILDRENCOMPONENTSLEFT = component.A.CHILDRENCOMPONENTSCOUNT;
        };
        EngBase.prototype.createExtComponent = function () {
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
        };
        EngBase.prototype.assessAngularChildren = function (base, xtype, A) {
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
        };
        EngBase.prototype.assessChildren = function (base, xtype) {
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
        };
        EngBase.prototype.checkParent = function (component, base, me) {
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
        };
        EngBase.prototype.addChildren = function (child, children) {
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
        };
        EngBase.prototype.addTheChild = function (parentCmp, childCmp, location) {
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
        };
        EngBase.prototype.atEnd = function () {
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
        };
        Object.defineProperty(EngBase.prototype, "currentEl", {
            get: function () {
                if (this._extitems != undefined) {
                    return this.node;
                }
                else {
                    return this;
                }
            },
            enumerable: true,
            configurable: true
        });
        EngBase.prototype.getCurrentElName = function (component) {
            if (component._extitems != undefined) {
                return component.node.nodeName;
            }
            else {
                return component.nodeName;
            }
        };
        Object.defineProperty(EngBase.prototype, "currentElName", {
            get: function () {
                if (this._extitems != undefined) {
                    return this.node.nodeName;
                }
                else {
                    return this.nodeName;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EngBase.prototype, "isAngular", {
            get: function () {
                if (this._extitems != undefined) {
                    return true;
                }
                else {
                    return false;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EngBase.prototype, "parentEl", {
            get: function () {
                if (this.isAngular) {
                    if (this.parentNode == null) {
                        return null;
                    }
                    return this.parentNode.node;
                }
                else {
                    return this.parentNode;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EngBase.prototype, "parentElName", {
            get: function () {
                if (this.isAngular) {
                    if (this.parentNode == null) {
                        return null;
                    }
                    return this.parentNode.node.nodeName;
                }
                else {
                    return this.parentNode.nodeName;
                }
            },
            enumerable: true,
            configurable: true
        });
        EngBase.prototype.sendReadyEvent = function (component) {
            var cmp = component.currentEl.A.ext;
            if (component._extitems != undefined) {
                component['ready'].emit({ detail: { cmp: cmp } });
            }
            else {
                component.dispatchEvent(new CustomEvent('ready', { detail: { cmp: cmp } }));
            }
        };
        //******* base end */
        //******* props start */
        //createProps(properties, propertiesobject, events, eventnames) {
        EngBase.prototype.createProps = function (properties, events) {
            var _this = this;
            var props = this.currentEl.A.props;
            props.xtype = this.xtype;
            var listenersProvided = false;
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
                    var eventname = event.name;
                    var eventparameters = event.parameters;
                    me.currentEl.A.props.listeners[eventname] = function () {
                        //console.log('in the event ' + eventname)
                        var parameters = eventparameters;
                        var parms = parameters.split(',');
                        var args = Array.prototype.slice.call(arguments);
                        var emitparms = {};
                        if (me._extitems != undefined) {
                            for (var i_1 = 0, j = parms.length; i_1 < j; i_1++) {
                                emitparms[parms[i_1]] = args[i_1];
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
                events.forEach(function (event, n) {
                    if (event != 'fullscreen') {
                        _this[event] = new core.EventEmitter();
                    }
                    else {
                        _this[event + 'event'] = new core.EventEmitter();
                    }
                });
            }
        };
        //******* props end */
        EngBase.prototype.baseOnChanges = function (changes) {
            //console.log(`ngOnChanges`)
            //console.log(changes)
            var changesMsgs = [];
            for (var propName in changes) {
                var verb = '';
                if (changes[propName].firstChange === true) {
                    verb = 'initialized';
                }
                else {
                    verb = 'changed';
                }
                var val = changes[propName].currentValue;
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
                changesMsgs.push("$ $ to \"$\"");
            }
            //console.log(`OnChanges: ${changesMsgs.join('; ')}`)
        };
        EngBase.prototype.baseOnDestroy = function () {
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
        };
        EngBase.count = 0;
        EngBase.DIRECTION = '';
        __decorate([
            core.ContentChild('extroute', { static: false }),
            __metadata("design:type", Object)
        ], EngBase.prototype, "_extroute", void 0);
        __decorate([
            core.ContentChildren('extroute'),
            __metadata("design:type", core.QueryList)
        ], EngBase.prototype, "_extroutes", void 0);
        __decorate([
            core.ContentChild('extitem', { static: false }),
            __metadata("design:type", Object)
        ], EngBase.prototype, "_extitem", void 0);
        __decorate([
            core.ContentChildren('extitem'),
            __metadata("design:type", core.QueryList)
        ], EngBase.prototype, "_extitems", void 0);
        __decorate([
            core.ContentChildren(EngBase),
            __metadata("design:type", core.QueryList)
        ], EngBase.prototype, "_childComponents", void 0);
        return EngBase;
    }());

    var ExtPivotgridcellMetaData = /** @class */ (function () {
        function ExtPivotgridcellMetaData() {
        }
        ExtPivotgridcellMetaData.PROPERTIES = [
            'align',
            'alignSelf',
            'alwaysOnTop',
            'ariaAttributes',
            'ariaDescribedBy',
            'ariaLabel',
            'ariaLabelledBy',
            'bind',
            'bodyCls',
            'bodyStyle',
            'border',
            'cellCls',
            'cls',
            'column',
            'constrainAlign',
            'controller',
            'defaultListenerScope',
            'defaultToolWeights',
            'disabled',
            'encodeHtml',
            'flex',
            'floated',
            'focusCls',
            'formatter',
            'height',
            'hidden',
            'hideMode',
            'id',
            'instanceCls',
            'itemId',
            'keyMap',
            'keyMapEnabled',
            'keyMapTarget',
            'listeners',
            'margin',
            'name',
            'nameable',
            'plugins',
            'publishes',
            'rawValue',
            'record',
            'reference',
            'relative',
            'renderer',
            'renderTo',
            'ripple',
            'scope',
            'selectable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'style',
            'toFrontOnShow',
            'toolDefaults',
            'tools',
            'touchAction',
            'tpl',
            'translatable',
            'twoWayBindable',
            'ui',
            'userCls',
            'value',
            'viewModel',
            'width',
            'x',
            'y',
            'zeroValue',
            'platformConfig',
            'responsiveConfig',
            'fitToParent',
            'config'
        ];
        ExtPivotgridcellMetaData.EVENTS = [
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforetofront', parameters: 'pivotgridcell' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'pivotgridcell,event' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'focus', parameters: 'pivotgridcell,event' },
            { name: 'focusenter', parameters: 'pivotgridcell,event' },
            { name: 'focusleave', parameters: 'pivotgridcell,event' },
            { name: 'heightchange', parameters: 'sender,value,oldValue' },
            { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
            { name: 'tofront', parameters: 'pivotgridcell' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        ExtPivotgridcellMetaData.EVENTNAMES = [
            'beforedisabledchange',
            'beforeheightchange',
            'beforehiddenchange',
            'beforetofront',
            'beforewidthchange',
            'blur',
            'disabledchange',
            'focus',
            'focusenter',
            'focusleave',
            'heightchange',
            'hiddenchange',
            'tofront',
            'widthchange',
            'ready'
        ];
        return ExtPivotgridcellMetaData;
    }());
    var ExtPivotgridcellComponent = /** @class */ (function (_super) {
        __extends(ExtPivotgridcellComponent, _super);
        function ExtPivotgridcellComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef, hostComponent, ExtPivotgridcellMetaData.PROPERTIES, ExtPivotgridcellMetaData.EVENTS) || this;
            _this.xtype = 'pivotgridcell';
            return _this;
        }
        ExtPivotgridcellComponent_1 = ExtPivotgridcellComponent;
        ExtPivotgridcellComponent.prototype.ngOnInit = function () {
            this.baseOnInit();
        };
        ExtPivotgridcellComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit();
        };
        ExtPivotgridcellComponent.prototype.ngOnChanges = function (changes) {
            this.baseOnChanges(changes);
        };
        ExtPivotgridcellComponent.prototype.ngOnDestroy = function () {
            this.baseOnDestroy();
        };
        var ExtPivotgridcellComponent_1;
        ExtPivotgridcellComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: EngBase, decorators: [{ type: core.Host }, { type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        ExtPivotgridcellComponent = ExtPivotgridcellComponent_1 = __decorate([
            core.Component({
                selector: 'ext-pivotgridcell',
                inputs: ExtPivotgridcellMetaData.PROPERTIES,
                outputs: ExtPivotgridcellMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtPivotgridcellComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef,
                EngBase])
        ], ExtPivotgridcellComponent);
        return ExtPivotgridcellComponent;
    }(EngBase));

    var ExtPivotgridgroupcellMetaData = /** @class */ (function () {
        function ExtPivotgridgroupcellMetaData() {
        }
        ExtPivotgridgroupcellMetaData.PROPERTIES = [
            'align',
            'alignSelf',
            'alwaysOnTop',
            'ariaAttributes',
            'ariaDescribedBy',
            'ariaLabel',
            'ariaLabelledBy',
            'bind',
            'bodyCls',
            'bodyStyle',
            'border',
            'cellCls',
            'cls',
            'column',
            'constrainAlign',
            'controller',
            'defaultListenerScope',
            'defaultToolWeights',
            'disabled',
            'encodeHtml',
            'flex',
            'floated',
            'focusCls',
            'formatter',
            'height',
            'hidden',
            'hideMode',
            'id',
            'instanceCls',
            'itemId',
            'keyMap',
            'keyMapEnabled',
            'keyMapTarget',
            'listeners',
            'margin',
            'name',
            'nameable',
            'plugins',
            'publishes',
            'rawValue',
            'record',
            'reference',
            'relative',
            'renderer',
            'renderTo',
            'ripple',
            'scope',
            'selectable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'style',
            'toFrontOnShow',
            'toolDefaults',
            'tools',
            'touchAction',
            'tpl',
            'translatable',
            'twoWayBindable',
            'ui',
            'userCls',
            'value',
            'viewModel',
            'width',
            'x',
            'y',
            'zeroValue',
            'platformConfig',
            'responsiveConfig',
            'fitToParent',
            'config'
        ];
        ExtPivotgridgroupcellMetaData.EVENTS = [
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforetofront', parameters: 'pivotgridgroupcell' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'pivotgridgroupcell,event' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'focus', parameters: 'pivotgridgroupcell,event' },
            { name: 'focusenter', parameters: 'pivotgridgroupcell,event' },
            { name: 'focusleave', parameters: 'pivotgridgroupcell,event' },
            { name: 'heightchange', parameters: 'sender,value,oldValue' },
            { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
            { name: 'tofront', parameters: 'pivotgridgroupcell' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        ExtPivotgridgroupcellMetaData.EVENTNAMES = [
            'beforedisabledchange',
            'beforeheightchange',
            'beforehiddenchange',
            'beforetofront',
            'beforewidthchange',
            'blur',
            'disabledchange',
            'focus',
            'focusenter',
            'focusleave',
            'heightchange',
            'hiddenchange',
            'tofront',
            'widthchange',
            'ready'
        ];
        return ExtPivotgridgroupcellMetaData;
    }());
    var ExtPivotgridgroupcellComponent = /** @class */ (function (_super) {
        __extends(ExtPivotgridgroupcellComponent, _super);
        function ExtPivotgridgroupcellComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef, hostComponent, ExtPivotgridgroupcellMetaData.PROPERTIES, ExtPivotgridgroupcellMetaData.EVENTS) || this;
            _this.xtype = 'pivotgridgroupcell';
            return _this;
        }
        ExtPivotgridgroupcellComponent_1 = ExtPivotgridgroupcellComponent;
        ExtPivotgridgroupcellComponent.prototype.ngOnInit = function () {
            this.baseOnInit();
        };
        ExtPivotgridgroupcellComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit();
        };
        ExtPivotgridgroupcellComponent.prototype.ngOnChanges = function (changes) {
            this.baseOnChanges(changes);
        };
        ExtPivotgridgroupcellComponent.prototype.ngOnDestroy = function () {
            this.baseOnDestroy();
        };
        var ExtPivotgridgroupcellComponent_1;
        ExtPivotgridgroupcellComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: EngBase, decorators: [{ type: core.Host }, { type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        ExtPivotgridgroupcellComponent = ExtPivotgridgroupcellComponent_1 = __decorate([
            core.Component({
                selector: 'ext-pivotgridgroupcell',
                inputs: ExtPivotgridgroupcellMetaData.PROPERTIES,
                outputs: ExtPivotgridgroupcellMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtPivotgridgroupcellComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef,
                EngBase])
        ], ExtPivotgridgroupcellComponent);
        return ExtPivotgridgroupcellComponent;
    }(EngBase));

    var ExtPivotd3containerMetaData = /** @class */ (function () {
        function ExtPivotd3containerMetaData() {
        }
        ExtPivotd3containerMetaData.PROPERTIES = [
            'configurator',
            'drawing',
            'matrix',
            'platformConfig',
            'responsiveConfig',
            'fitToParent',
            'config'
        ];
        ExtPivotd3containerMetaData.EVENTS = [
            { name: 'ready', parameters: '' }
        ];
        ExtPivotd3containerMetaData.EVENTNAMES = [
            'ready'
        ];
        return ExtPivotd3containerMetaData;
    }());
    var ExtPivotd3containerComponent = /** @class */ (function (_super) {
        __extends(ExtPivotd3containerComponent, _super);
        function ExtPivotd3containerComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef, hostComponent, ExtPivotd3containerMetaData.PROPERTIES, ExtPivotd3containerMetaData.EVENTS) || this;
            _this.xtype = 'pivotd3container';
            return _this;
        }
        ExtPivotd3containerComponent_1 = ExtPivotd3containerComponent;
        ExtPivotd3containerComponent.prototype.ngOnInit = function () {
            this.baseOnInit();
        };
        ExtPivotd3containerComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit();
        };
        ExtPivotd3containerComponent.prototype.ngOnChanges = function (changes) {
            this.baseOnChanges(changes);
        };
        ExtPivotd3containerComponent.prototype.ngOnDestroy = function () {
            this.baseOnDestroy();
        };
        var ExtPivotd3containerComponent_1;
        ExtPivotd3containerComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: EngBase, decorators: [{ type: core.Host }, { type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        ExtPivotd3containerComponent = ExtPivotd3containerComponent_1 = __decorate([
            core.Component({
                selector: 'ext-pivotd3container',
                inputs: ExtPivotd3containerMetaData.PROPERTIES,
                outputs: ExtPivotd3containerMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtPivotd3containerComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef,
                EngBase])
        ], ExtPivotd3containerComponent);
        return ExtPivotd3containerComponent;
    }(EngBase));

    var ExtPivotheatmapMetaData = /** @class */ (function () {
        function ExtPivotheatmapMetaData() {
        }
        ExtPivotheatmapMetaData.PROPERTIES = [
            'alignSelf',
            'alwaysOnTop',
            'ariaAttributes',
            'ariaDescribedBy',
            'ariaLabel',
            'ariaLabelledBy',
            'axisLock',
            'bind',
            'border',
            'bottom',
            'centered',
            'clipScene',
            'cls',
            'colorAxis',
            'componentCls',
            'constrainAlign',
            'contentEl',
            'controller',
            'data',
            'defaultFormatter',
            'defaultListenerScope',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'flex',
            'floated',
            'focusCls',
            'fullscreen',
            'height',
            'hidden',
            'hideAnimation',
            'hideMode',
            'hideOnMaskTap',
            'html',
            'id',
            'instanceCls',
            'interactions',
            'itemId',
            'keyMap',
            'keyMapEnabled',
            'keyMapTarget',
            'labels',
            'left',
            'legend',
            'listeners',
            'margin',
            'matrix',
            'maxHeight',
            'maxWidth',
            'minHeight',
            'minWidth',
            'modal',
            'modelValidation',
            'name',
            'nameable',
            'padding',
            'plugins',
            'publishes',
            'record',
            'reference',
            'relative',
            'renderTo',
            'right',
            'ripple',
            'scrollable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'size',
            'stateful',
            'statefulDefaults',
            'stateId',
            'store',
            'style',
            'tabIndex',
            'tiles',
            'toFrontOnShow',
            'tooltip',
            'top',
            'touchAction',
            'tpl',
            'tplWriteMode',
            'transitions',
            'translatable',
            'twoWayBindable',
            'ui',
            'userCls',
            'userSelectable',
            'viewModel',
            'weight',
            'width',
            'x',
            'xAxis',
            'xtype',
            'y',
            'yAxis',
            'zIndex',
            'platformConfig',
            'responsiveConfig',
            'fitToParent',
            'config'
        ];
        ExtPivotheatmapMetaData.EVENTS = [
            { name: 'added', parameters: 'sender,container,index' },
            { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehide', parameters: 'sender' },
            { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeorientationchange', parameters: '' },
            { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeshow', parameters: 'sender' },
            { name: 'beforetofront', parameters: 'pivotheatmap' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'pivotheatmap,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'pivotheatmap,event' },
            { name: 'focusenter', parameters: 'pivotheatmap,event' },
            { name: 'focusleave', parameters: 'pivotheatmap,event' },
            { name: 'fullscreen', parameters: 'sender' },
            { name: 'heightchange', parameters: 'sender,value,oldValue' },
            { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
            { name: 'hide', parameters: 'sender' },
            { name: 'initialize', parameters: 'sender' },
            { name: 'leftchange', parameters: 'sender,value,oldValue' },
            { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'sceneresize', parameters: 'component,scene,size' },
            { name: 'scenesetup', parameters: 'component,scene' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'pivotheatmap' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        ExtPivotheatmapMetaData.EVENTNAMES = [
            'added',
            'beforebottomchange',
            'beforecenteredchange',
            'beforedisabledchange',
            'beforedockedchange',
            'beforeheightchange',
            'beforehiddenchange',
            'beforehide',
            'beforeleftchange',
            'beforemaxHeightchange',
            'beforemaxWidthchange',
            'beforeminHeightchange',
            'beforeminWidthchange',
            'beforeorientationchange',
            'beforerightchange',
            'beforescrollablechange',
            'beforeshow',
            'beforetofront',
            'beforetopchange',
            'beforewidthchange',
            'blur',
            'bottomchange',
            'centeredchange',
            'destroy',
            'disabledchange',
            'dockedchange',
            'erased',
            'floatingchange',
            'focus',
            'focusenter',
            'focusleave',
            'fullscreen',
            'heightchange',
            'hiddenchange',
            'hide',
            'initialize',
            'leftchange',
            'maxHeightchange',
            'maxWidthchange',
            'minHeightchange',
            'minWidthchange',
            'moved',
            'orientationchange',
            'painted',
            'positionedchange',
            'removed',
            'resize',
            'rightchange',
            'sceneresize',
            'scenesetup',
            'scrollablechange',
            'show',
            'tofront',
            'topchange',
            'updatedata',
            'widthchange',
            'ready'
        ];
        return ExtPivotheatmapMetaData;
    }());
    var ExtPivotheatmapComponent = /** @class */ (function (_super) {
        __extends(ExtPivotheatmapComponent, _super);
        function ExtPivotheatmapComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef, hostComponent, ExtPivotheatmapMetaData.PROPERTIES, ExtPivotheatmapMetaData.EVENTS) || this;
            _this.xtype = 'pivotheatmap';
            return _this;
        }
        ExtPivotheatmapComponent_1 = ExtPivotheatmapComponent;
        ExtPivotheatmapComponent.prototype.ngOnInit = function () {
            this.baseOnInit();
        };
        ExtPivotheatmapComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit();
        };
        ExtPivotheatmapComponent.prototype.ngOnChanges = function (changes) {
            this.baseOnChanges(changes);
        };
        ExtPivotheatmapComponent.prototype.ngOnDestroy = function () {
            this.baseOnDestroy();
        };
        var ExtPivotheatmapComponent_1;
        ExtPivotheatmapComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: EngBase, decorators: [{ type: core.Host }, { type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        ExtPivotheatmapComponent = ExtPivotheatmapComponent_1 = __decorate([
            core.Component({
                selector: 'ext-pivotheatmap',
                inputs: ExtPivotheatmapMetaData.PROPERTIES,
                outputs: ExtPivotheatmapMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtPivotheatmapComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef,
                EngBase])
        ], ExtPivotheatmapComponent);
        return ExtPivotheatmapComponent;
    }(EngBase));

    var ExtPivottreemapMetaData = /** @class */ (function () {
        function ExtPivottreemapMetaData() {
        }
        ExtPivottreemapMetaData.PROPERTIES = [
            'alignSelf',
            'alwaysOnTop',
            'ariaAttributes',
            'ariaDescribedBy',
            'ariaLabel',
            'ariaLabelledBy',
            'autoExpand',
            'axisLock',
            'bind',
            'border',
            'bottom',
            'busyLayoutText',
            'centered',
            'clipScene',
            'cls',
            'colorAxis',
            'componentCls',
            'constrainAlign',
            'contentEl',
            'controller',
            'data',
            'defaultListenerScope',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'expandEventName',
            'flex',
            'floated',
            'focusCls',
            'fullscreen',
            'height',
            'hidden',
            'hideAnimation',
            'hideMode',
            'hideOnMaskTap',
            'hierarchyCls',
            'html',
            'id',
            'instanceCls',
            'interactions',
            'itemId',
            'keyMap',
            'keyMapEnabled',
            'keyMapTarget',
            'layout',
            'leafTile',
            'left',
            'linkKey',
            'listeners',
            'margin',
            'matrix',
            'maxHeight',
            'maxWidth',
            'minHeight',
            'minWidth',
            'modal',
            'modelValidation',
            'name',
            'nameable',
            'nodeChildren',
            'nodeClass',
            'nodeKey',
            'nodeText',
            'nodeTransform',
            'nodeValue',
            'noParentValue',
            'noSizeLayout',
            'padding',
            'parentTile',
            'plugins',
            'publishes',
            'record',
            'reference',
            'relative',
            'renderLinks',
            'renderTo',
            'right',
            'ripple',
            'rootVisible',
            'scaleLabels',
            'scrollable',
            'selectEventName',
            'selection',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'size',
            'sorter',
            'stateful',
            'statefulDefaults',
            'stateId',
            'store',
            'style',
            'tabIndex',
            'tiling',
            'toFrontOnShow',
            'tooltip',
            'top',
            'touchAction',
            'tpl',
            'tplWriteMode',
            'transitions',
            'translatable',
            'twoWayBindable',
            'ui',
            'userCls',
            'userSelectable',
            'viewModel',
            'weight',
            'width',
            'x',
            'xtype',
            'y',
            'zIndex',
            'platformConfig',
            'responsiveConfig',
            'fitToParent',
            'config'
        ];
        ExtPivottreemapMetaData.EVENTS = [
            { name: 'added', parameters: 'sender,container,index' },
            { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehide', parameters: 'sender' },
            { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeorientationchange', parameters: '' },
            { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeshow', parameters: 'sender' },
            { name: 'beforetofront', parameters: 'pivottreemap' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'pivottreemap,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'pivottreemap,event' },
            { name: 'focusenter', parameters: 'pivottreemap,event' },
            { name: 'focusleave', parameters: 'pivottreemap,event' },
            { name: 'fullscreen', parameters: 'sender' },
            { name: 'heightchange', parameters: 'sender,value,oldValue' },
            { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
            { name: 'hide', parameters: 'sender' },
            { name: 'initialize', parameters: 'sender' },
            { name: 'layout', parameters: 'component' },
            { name: 'leftchange', parameters: 'sender,value,oldValue' },
            { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'sceneresize', parameters: 'component,scene,size' },
            { name: 'scenesetup', parameters: 'component,scene' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'pivottreemap' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        ExtPivottreemapMetaData.EVENTNAMES = [
            'added',
            'beforebottomchange',
            'beforecenteredchange',
            'beforedisabledchange',
            'beforedockedchange',
            'beforeheightchange',
            'beforehiddenchange',
            'beforehide',
            'beforeleftchange',
            'beforemaxHeightchange',
            'beforemaxWidthchange',
            'beforeminHeightchange',
            'beforeminWidthchange',
            'beforeorientationchange',
            'beforerightchange',
            'beforescrollablechange',
            'beforeshow',
            'beforetofront',
            'beforetopchange',
            'beforewidthchange',
            'blur',
            'bottomchange',
            'centeredchange',
            'destroy',
            'disabledchange',
            'dockedchange',
            'erased',
            'floatingchange',
            'focus',
            'focusenter',
            'focusleave',
            'fullscreen',
            'heightchange',
            'hiddenchange',
            'hide',
            'initialize',
            'layout',
            'leftchange',
            'maxHeightchange',
            'maxWidthchange',
            'minHeightchange',
            'minWidthchange',
            'moved',
            'orientationchange',
            'painted',
            'positionedchange',
            'removed',
            'resize',
            'rightchange',
            'sceneresize',
            'scenesetup',
            'scrollablechange',
            'show',
            'tofront',
            'topchange',
            'updatedata',
            'widthchange',
            'ready'
        ];
        return ExtPivottreemapMetaData;
    }());
    var ExtPivottreemapComponent = /** @class */ (function (_super) {
        __extends(ExtPivottreemapComponent, _super);
        function ExtPivottreemapComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef, hostComponent, ExtPivottreemapMetaData.PROPERTIES, ExtPivottreemapMetaData.EVENTS) || this;
            _this.xtype = 'pivottreemap';
            return _this;
        }
        ExtPivottreemapComponent_1 = ExtPivottreemapComponent;
        ExtPivottreemapComponent.prototype.ngOnInit = function () {
            this.baseOnInit();
        };
        ExtPivottreemapComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit();
        };
        ExtPivottreemapComponent.prototype.ngOnChanges = function (changes) {
            this.baseOnChanges(changes);
        };
        ExtPivottreemapComponent.prototype.ngOnDestroy = function () {
            this.baseOnDestroy();
        };
        var ExtPivottreemapComponent_1;
        ExtPivottreemapComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: EngBase, decorators: [{ type: core.Host }, { type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        ExtPivottreemapComponent = ExtPivottreemapComponent_1 = __decorate([
            core.Component({
                selector: 'ext-pivottreemap',
                inputs: ExtPivottreemapMetaData.PROPERTIES,
                outputs: ExtPivottreemapMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtPivottreemapComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef,
                EngBase])
        ], ExtPivottreemapComponent);
        return ExtPivottreemapComponent;
    }(EngBase));

    var ExtPivotgridMetaData = /** @class */ (function () {
        function ExtPivotgridMetaData() {
        }
        ExtPivotgridMetaData.PROPERTIES = [
            'activeChildTabIndex',
            'activeItem',
            'alignSelf',
            'allowFocusingDisabledChildren',
            'alwaysOnTop',
            'ariaAttributes',
            'ariaDescribedBy',
            'ariaLabel',
            'ariaLabelledBy',
            'associatedData',
            'autoDestroy',
            'autoSize',
            'axisLock',
            'bind',
            'bodyCls',
            'border',
            'bottom',
            'bufferSize',
            'cardSwitchAnimation',
            'centered',
            'cls',
            'clsGrandTotal',
            'clsGroupTotal',
            'collapseDefaults',
            'collapsible',
            'columnLines',
            'columnMenu',
            'columnResize',
            'columns',
            'columnsMenuItem',
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultType',
            'deferEmptyText',
            'deselectOnContainerClick',
            'disabled',
            'disableSelection',
            'disclosureProperty',
            'displayed',
            'docked',
            'draggable',
            'emptyItemText',
            'emptyState',
            'emptyText',
            'emptyTextDefaults',
            'emptyTextProperty',
            'enableColumnMove',
            'enableColumnSort',
            'enableLoadMask',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'fullscreen',
            'grouped',
            'groupFooter',
            'groupHeader',
            'grouping',
            'groupPlaceholder',
            'height',
            'hidden',
            'hideAnimation',
            'hideHeaders',
            'hideMode',
            'hideOnMaskTap',
            'hideScrollbar',
            'horizontalOverflow',
            'html',
            'id',
            'inactiveChildTabIndex',
            'indexBar',
            'infinite',
            'inline',
            'innerCls',
            'innerCtHeight',
            'innerWidth',
            'instanceCls',
            'itemButtonMode',
            'itemCls',
            'itemConfig',
            'itemContentCls',
            'itemDataMap',
            'itemId',
            'itemInnerCls',
            'itemRipple',
            'items',
            'itemsFocusable',
            'itemTpl',
            'keyMap',
            'keyMapEnabled',
            'keyMapTarget',
            'layout',
            'left',
            'leftAxisCellConfig',
            'listeners',
            'loadingHeight',
            'loadingText',
            'maintainChildNodes',
            'manageBorders',
            'margin',
            'markDirty',
            'masked',
            'matrix',
            'maxHeight',
            'maxItemCache',
            'maxWidth',
            'minHeight',
            'minimumBufferDistance',
            'minWidth',
            'modal',
            'modelValidation',
            'multiColumnSort',
            'name',
            'nameable',
            'nameHolder',
            'onItemDisclosure',
            'padding',
            'pinFooters',
            'pinHeaders',
            'pinnedFooter',
            'pinnedFooterHeight',
            'pinnedHeader',
            'pinnedHeaderHeight',
            'plugins',
            'pressedDelay',
            'preventSelectionOnDisclose',
            'preventSelectionOnTool',
            'publishes',
            'record',
            'reference',
            'referenceHolder',
            'relative',
            'renderTo',
            'reserveScrollbar',
            'resetFocusPosition',
            'right',
            'ripple',
            'rowLines',
            'rowNumbers',
            'scrollable',
            'scrollDock',
            'scrollToTopOnRefresh',
            'selectable',
            'selection',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'sortable',
            'startColGroupsCollapsed',
            'startRowGroupsCollapsed',
            'stateful',
            'statefulDefaults',
            'stateId',
            'store',
            'striped',
            'style',
            'tabIndex',
            'title',
            'titleBar',
            'toFrontOnShow',
            'tooltip',
            'top',
            'topAxisCellConfig',
            'topRenderedIndex',
            'touchAction',
            'tpl',
            'tplWriteMode',
            'translatable',
            'triggerCtEvent',
            'triggerEvent',
            'twoWayBindable',
            'ui',
            'userCls',
            'userSelectable',
            'variableHeights',
            'verticalOverflow',
            'viewModel',
            'visibleHeight',
            'visibleLeft',
            'visibleTop',
            'visibleWidth',
            'weight',
            'weighted',
            'width',
            'x',
            'xtype',
            'y',
            'zIndex',
            'platformConfig',
            'responsiveConfig',
            'fitToParent',
            'config'
        ];
        ExtPivotgridMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,pivotgrid,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: '' },
            { name: 'added', parameters: 'sender,container,index' },
            { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecomplete', parameters: 'editor,value,startValue,The' },
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeedit', parameters: 'sender,location' },
            { name: 'beforegroupcollapse', parameters: 'pivotgrid,group' },
            { name: 'beforegroupexpand', parameters: 'pivotgrid,group' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehide', parameters: 'sender' },
            { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeorientationchange', parameters: '' },
            { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeselectionextend', parameters: 'grid,An,extension' },
            { name: 'beforeshow', parameters: 'sender' },
            { name: 'beforestartedit', parameters: 'editor,boundEl,value,The' },
            { name: 'beforestorechange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforetofront', parameters: 'pivotgrid' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'pivotgrid,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'canceledit', parameters: 'editor,value,startValue' },
            { name: 'cellselection', parameters: 'grid,selection' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'childdoubletap', parameters: 'pivotgrid,location' },
            { name: 'childlongpress', parameters: 'pivotgrid,location' },
            { name: 'childmouseenter', parameters: 'pivotgrid,location' },
            { name: 'childmouseleave', parameters: 'pivotgrid,location' },
            { name: 'childsingletap', parameters: 'pivotgrid,location' },
            { name: 'childtap', parameters: 'pivotgrid,location' },
            { name: 'childtaphold', parameters: 'pivotgrid,location' },
            { name: 'childtouchcancel', parameters: 'pivotgrid,location' },
            { name: 'childtouchend', parameters: 'pivotgrid,location' },
            { name: 'childtouchmove', parameters: 'pivotgrid,location' },
            { name: 'childtouchstart', parameters: 'pivotgrid,location' },
            { name: 'columnadd', parameters: 'pivotgrid,column,index' },
            { name: 'columnhide', parameters: 'pivotgrid,column' },
            { name: 'columnmenucreated', parameters: 'grid,column,menu' },
            { name: 'columnmove', parameters: 'pivotgrid,column,fromIndex,toIndex' },
            { name: 'columnremove', parameters: 'pivotgrid,column' },
            { name: 'columnresize', parameters: 'pivotgrid,column,width' },
            { name: 'columnselection', parameters: 'grid,selection' },
            { name: 'columnshow', parameters: 'pivotgrid,column' },
            { name: 'columnsort', parameters: 'pivotgrid,column,direction' },
            { name: 'complete', parameters: 'editor,value,startValue,The' },
            { name: 'deactivate', parameters: 'oldActiveItem,pivotgrid,newActiveItem' },
            { name: 'deselect', parameters: 'pivotgrid,records' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'disclose', parameters: 'list,record,target,index,event' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'edit', parameters: 'sender,location' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'pivotgrid,event' },
            { name: 'focusenter', parameters: 'pivotgrid,event' },
            { name: 'focusleave', parameters: 'pivotgrid,event' },
            { name: 'fullscreen', parameters: 'sender' },
            { name: 'groupcollapse', parameters: 'pivotgrid,group' },
            { name: 'groupexpand', parameters: 'pivotgrid,group' },
            { name: 'heightchange', parameters: 'sender,value,oldValue' },
            { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
            { name: 'hide', parameters: 'sender' },
            { name: 'initialize', parameters: 'sender' },
            { name: 'itemaction', parameters: 'pivotgrid,index,record,action' },
            { name: 'itemdoubletap', parameters: 'pivotgrid,index,target,record,e' },
            { name: 'itemlongpress', parameters: 'pivotgrid,index,target,record,e' },
            { name: 'itemmouseenter', parameters: 'pivotgrid,index,target,record,e' },
            { name: 'itemmouseleave', parameters: 'pivotgrid,index,target,record,e' },
            { name: 'itemsingletap', parameters: 'pivotgrid,index,target,record,e' },
            { name: 'itemswipe', parameters: 'pivotgrid,index,target,record,e' },
            { name: 'itemtap', parameters: 'pivotgrid,index,target,record,e' },
            { name: 'itemtaphold', parameters: 'pivotgrid,index,target,record,e' },
            { name: 'itemtouchcancel', parameters: 'pivotgrid,index,target,record,e' },
            { name: 'itemtouchend', parameters: 'pivotgrid,index,target,record,e' },
            { name: 'itemtouchmove', parameters: 'pivotgrid,index,target,record,e' },
            { name: 'itemtouchstart', parameters: 'pivotgrid,index,target,record,e' },
            { name: 'leftchange', parameters: 'sender,value,oldValue' },
            { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'move', parameters: '' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'navigate', parameters: 'pivotgrid,to,from' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'pivotbeforereconfigure', parameters: 'matrix,config' },
            { name: 'pivotbeforerequest', parameters: 'matrix,params' },
            { name: 'pivotbuildtotals', parameters: 'matrix,totals' },
            { name: 'pivotcolumnsbuilt', parameters: 'matrix,columns' },
            { name: 'pivotdone', parameters: 'matrix' },
            { name: 'pivotgroupcelldoubletap', parameters: 'params,e' },
            { name: 'pivotgroupcelltap', parameters: 'params,e' },
            { name: 'pivotgroupcelltaphold', parameters: 'params,e' },
            { name: 'pivotgroupcollapse', parameters: 'matrix,type,group' },
            { name: 'pivotgroupdoubletap', parameters: 'params,e' },
            { name: 'pivotgroupexpand', parameters: 'matrix,type,group' },
            { name: 'pivotgrouptap', parameters: 'params,e' },
            { name: 'pivotgrouptaphold', parameters: 'params,e' },
            { name: 'pivotitemcelldoubletap', parameters: 'params,e' },
            { name: 'pivotitemcelltap', parameters: 'params,e' },
            { name: 'pivotitemcelltaphold', parameters: 'params,e' },
            { name: 'pivotitemdoubletap', parameters: 'params,e' },
            { name: 'pivotitemtap', parameters: 'params,e' },
            { name: 'pivotitemtaphold', parameters: 'params,e' },
            { name: 'pivotmodelbuilt', parameters: 'matrix,model' },
            { name: 'pivotprogress', parameters: 'matrix,index,total' },
            { name: 'pivotreconfigure', parameters: 'matrix,config' },
            { name: 'pivotrecordbuilt', parameters: 'matrix,record' },
            { name: 'pivotrequestexception', parameters: 'matrix,response' },
            { name: 'pivotstart', parameters: 'matrix' },
            { name: 'pivotstorebuilt', parameters: 'matrix,store' },
            { name: 'pivottotalcelldoubletap', parameters: 'params,e' },
            { name: 'pivottotalcelltap', parameters: 'params,e' },
            { name: 'pivottotalcelltaphold', parameters: 'params,e' },
            { name: 'pivottotaldoubletap', parameters: 'params,e' },
            { name: 'pivottotaltap', parameters: 'params,e' },
            { name: 'pivottotaltaphold', parameters: 'params,e' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'refresh', parameters: 'pivotgrid' },
            { name: 'remove', parameters: '' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'pivotgrid,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'select', parameters: 'pivotgrid,selected' },
            { name: 'selectionextenderdrag', parameters: 'grid,An,extension' },
            { name: 'show', parameters: 'sender' },
            { name: 'specialkey', parameters: 'editor,field,event' },
            { name: 'startedit', parameters: 'editor,boundEl,value,The' },
            { name: 'storechange', parameters: 'sender,value,oldValue' },
            { name: 'tofront', parameters: 'pivotgrid' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'validateedit', parameters: 'sender,location' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        ExtPivotgridMetaData.EVENTNAMES = [
            'activate',
            'activeItemchange',
            'add',
            'added',
            'beforeactiveItemchange',
            'beforebottomchange',
            'beforecenteredchange',
            'beforecomplete',
            'beforedisabledchange',
            'beforedockedchange',
            'beforeedit',
            'beforegroupcollapse',
            'beforegroupexpand',
            'beforeheightchange',
            'beforehiddenchange',
            'beforehide',
            'beforeleftchange',
            'beforemaxHeightchange',
            'beforemaxWidthchange',
            'beforeminHeightchange',
            'beforeminWidthchange',
            'beforeorientationchange',
            'beforerightchange',
            'beforescrollablechange',
            'beforeselectionextend',
            'beforeshow',
            'beforestartedit',
            'beforestorechange',
            'beforetofront',
            'beforetopchange',
            'beforewidthchange',
            'blur',
            'bottomchange',
            'canceledit',
            'cellselection',
            'centeredchange',
            'childdoubletap',
            'childlongpress',
            'childmouseenter',
            'childmouseleave',
            'childsingletap',
            'childtap',
            'childtaphold',
            'childtouchcancel',
            'childtouchend',
            'childtouchmove',
            'childtouchstart',
            'columnadd',
            'columnhide',
            'columnmenucreated',
            'columnmove',
            'columnremove',
            'columnresize',
            'columnselection',
            'columnshow',
            'columnsort',
            'complete',
            'deactivate',
            'deselect',
            'destroy',
            'disabledchange',
            'disclose',
            'dockedchange',
            'edit',
            'erased',
            'floatingchange',
            'focus',
            'focusenter',
            'focusleave',
            'fullscreen',
            'groupcollapse',
            'groupexpand',
            'heightchange',
            'hiddenchange',
            'hide',
            'initialize',
            'itemaction',
            'itemdoubletap',
            'itemlongpress',
            'itemmouseenter',
            'itemmouseleave',
            'itemsingletap',
            'itemswipe',
            'itemtap',
            'itemtaphold',
            'itemtouchcancel',
            'itemtouchend',
            'itemtouchmove',
            'itemtouchstart',
            'leftchange',
            'maxHeightchange',
            'maxWidthchange',
            'minHeightchange',
            'minWidthchange',
            'move',
            'moved',
            'navigate',
            'orientationchange',
            'painted',
            'pivotbeforereconfigure',
            'pivotbeforerequest',
            'pivotbuildtotals',
            'pivotcolumnsbuilt',
            'pivotdone',
            'pivotgroupcelldoubletap',
            'pivotgroupcelltap',
            'pivotgroupcelltaphold',
            'pivotgroupcollapse',
            'pivotgroupdoubletap',
            'pivotgroupexpand',
            'pivotgrouptap',
            'pivotgrouptaphold',
            'pivotitemcelldoubletap',
            'pivotitemcelltap',
            'pivotitemcelltaphold',
            'pivotitemdoubletap',
            'pivotitemtap',
            'pivotitemtaphold',
            'pivotmodelbuilt',
            'pivotprogress',
            'pivotreconfigure',
            'pivotrecordbuilt',
            'pivotrequestexception',
            'pivotstart',
            'pivotstorebuilt',
            'pivottotalcelldoubletap',
            'pivottotalcelltap',
            'pivottotalcelltaphold',
            'pivottotaldoubletap',
            'pivottotaltap',
            'pivottotaltaphold',
            'positionedchange',
            'refresh',
            'remove',
            'removed',
            'renderedchange',
            'resize',
            'rightchange',
            'scrollablechange',
            'select',
            'selectionextenderdrag',
            'show',
            'specialkey',
            'startedit',
            'storechange',
            'tofront',
            'topchange',
            'updatedata',
            'validateedit',
            'widthchange',
            'ready'
        ];
        return ExtPivotgridMetaData;
    }());
    var ExtPivotgridComponent = /** @class */ (function (_super) {
        __extends(ExtPivotgridComponent, _super);
        function ExtPivotgridComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef, hostComponent, ExtPivotgridMetaData.PROPERTIES, ExtPivotgridMetaData.EVENTS) || this;
            _this.xtype = 'pivotgrid';
            return _this;
        }
        ExtPivotgridComponent_1 = ExtPivotgridComponent;
        ExtPivotgridComponent.prototype.ngOnInit = function () {
            this.baseOnInit();
        };
        ExtPivotgridComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit();
        };
        ExtPivotgridComponent.prototype.ngOnChanges = function (changes) {
            this.baseOnChanges(changes);
        };
        ExtPivotgridComponent.prototype.ngOnDestroy = function () {
            this.baseOnDestroy();
        };
        var ExtPivotgridComponent_1;
        ExtPivotgridComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: EngBase, decorators: [{ type: core.Host }, { type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        ExtPivotgridComponent = ExtPivotgridComponent_1 = __decorate([
            core.Component({
                selector: 'ext-pivotgrid',
                inputs: ExtPivotgridMetaData.PROPERTIES,
                outputs: ExtPivotgridMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtPivotgridComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef,
                EngBase])
        ], ExtPivotgridComponent);
        return ExtPivotgridComponent;
    }(EngBase));

    var ExtPivotconfigfieldMetaData = /** @class */ (function () {
        function ExtPivotconfigfieldMetaData() {
        }
        ExtPivotconfigfieldMetaData.PROPERTIES = [
            'activeChildTabIndex',
            'activeItem',
            'alignSelf',
            'allowFocusingDisabledChildren',
            'alwaysOnTop',
            'ariaAttributes',
            'ariaDescribedBy',
            'ariaLabel',
            'ariaLabelledBy',
            'autoDestroy',
            'autoSize',
            'axisLock',
            'bind',
            'bodyCls',
            'border',
            'bottom',
            'cardSwitchAnimation',
            'centered',
            'cls',
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'dataMap',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultToolWeights',
            'defaultType',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'fullscreen',
            'height',
            'hidden',
            'hideAnimation',
            'hideMode',
            'hideOnMaskTap',
            'html',
            'id',
            'inactiveChildTabIndex',
            'innerCls',
            'instanceCls',
            'itemCls',
            'itemId',
            'items',
            'keyMap',
            'keyMapEnabled',
            'keyMapTarget',
            'layout',
            'left',
            'listeners',
            'manageBorders',
            'margin',
            'masked',
            'maxHeight',
            'maxWidth',
            'minHeight',
            'minWidth',
            'modal',
            'modelValidation',
            'name',
            'nameable',
            'nameHolder',
            'padding',
            'pinned',
            'plugins',
            'publishes',
            'record',
            'recordIndex',
            'reference',
            'referenceHolder',
            'relative',
            'renderTo',
            'resetFocusPosition',
            'right',
            'ripple',
            'scrollable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'stateful',
            'statefulDefaults',
            'stateId',
            'style',
            'tabIndex',
            'toFrontOnShow',
            'toolDefaults',
            'tools',
            'tooltip',
            'top',
            'touchAction',
            'tpl',
            'tplWriteMode',
            'translatable',
            'twoWayBindable',
            'ui',
            'userCls',
            'userSelectable',
            'viewModel',
            'weight',
            'weighted',
            'width',
            'x',
            'xtype',
            'y',
            'zIndex',
            'platformConfig',
            'responsiveConfig',
            'fitToParent',
            'config'
        ];
        ExtPivotconfigfieldMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,pivotconfigfield,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'pivotconfigfield,item,index' },
            { name: 'added', parameters: 'sender,container,index' },
            { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehide', parameters: 'sender' },
            { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeorientationchange', parameters: '' },
            { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeshow', parameters: 'sender' },
            { name: 'beforetofront', parameters: 'pivotconfigfield' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'pivotconfigfield,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'deactivate', parameters: 'oldActiveItem,pivotconfigfield,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'pivotconfigfield,event' },
            { name: 'focusenter', parameters: 'pivotconfigfield,event' },
            { name: 'focusleave', parameters: 'pivotconfigfield,event' },
            { name: 'fullscreen', parameters: 'sender' },
            { name: 'heightchange', parameters: 'sender,value,oldValue' },
            { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
            { name: 'hide', parameters: 'sender' },
            { name: 'initialize', parameters: 'sender' },
            { name: 'leftchange', parameters: 'sender,value,oldValue' },
            { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'move', parameters: 'pivotconfigfield,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'pivotconfigfield,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'pivotconfigfield,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'pivotconfigfield' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'dataItem,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        ExtPivotconfigfieldMetaData.EVENTNAMES = [
            'activate',
            'activeItemchange',
            'add',
            'added',
            'beforeactiveItemchange',
            'beforebottomchange',
            'beforecenteredchange',
            'beforedisabledchange',
            'beforedockedchange',
            'beforeheightchange',
            'beforehiddenchange',
            'beforehide',
            'beforeleftchange',
            'beforemaxHeightchange',
            'beforemaxWidthchange',
            'beforeminHeightchange',
            'beforeminWidthchange',
            'beforeorientationchange',
            'beforerightchange',
            'beforescrollablechange',
            'beforeshow',
            'beforetofront',
            'beforetopchange',
            'beforewidthchange',
            'blur',
            'bottomchange',
            'centeredchange',
            'deactivate',
            'destroy',
            'disabledchange',
            'dockedchange',
            'erased',
            'floatingchange',
            'focus',
            'focusenter',
            'focusleave',
            'fullscreen',
            'heightchange',
            'hiddenchange',
            'hide',
            'initialize',
            'leftchange',
            'maxHeightchange',
            'maxWidthchange',
            'minHeightchange',
            'minWidthchange',
            'move',
            'moved',
            'orientationchange',
            'painted',
            'positionedchange',
            'remove',
            'removed',
            'renderedchange',
            'resize',
            'rightchange',
            'scrollablechange',
            'show',
            'tofront',
            'topchange',
            'updatedata',
            'widthchange',
            'ready'
        ];
        return ExtPivotconfigfieldMetaData;
    }());
    var ExtPivotconfigfieldComponent = /** @class */ (function (_super) {
        __extends(ExtPivotconfigfieldComponent, _super);
        function ExtPivotconfigfieldComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef, hostComponent, ExtPivotconfigfieldMetaData.PROPERTIES, ExtPivotconfigfieldMetaData.EVENTS) || this;
            _this.xtype = 'pivotconfigfield';
            return _this;
        }
        ExtPivotconfigfieldComponent_1 = ExtPivotconfigfieldComponent;
        ExtPivotconfigfieldComponent.prototype.ngOnInit = function () {
            this.baseOnInit();
        };
        ExtPivotconfigfieldComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit();
        };
        ExtPivotconfigfieldComponent.prototype.ngOnChanges = function (changes) {
            this.baseOnChanges(changes);
        };
        ExtPivotconfigfieldComponent.prototype.ngOnDestroy = function () {
            this.baseOnDestroy();
        };
        var ExtPivotconfigfieldComponent_1;
        ExtPivotconfigfieldComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: EngBase, decorators: [{ type: core.Host }, { type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        ExtPivotconfigfieldComponent = ExtPivotconfigfieldComponent_1 = __decorate([
            core.Component({
                selector: 'ext-pivotconfigfield',
                inputs: ExtPivotconfigfieldMetaData.PROPERTIES,
                outputs: ExtPivotconfigfieldMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtPivotconfigfieldComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef,
                EngBase])
        ], ExtPivotconfigfieldComponent);
        return ExtPivotconfigfieldComponent;
    }(EngBase));

    var ExtPivotconfigcontainerMetaData = /** @class */ (function () {
        function ExtPivotconfigcontainerMetaData() {
        }
        ExtPivotconfigcontainerMetaData.PROPERTIES = [
            'activeChildTabIndex',
            'activeItem',
            'alignSelf',
            'allowFocusingDisabledChildren',
            'alwaysOnTop',
            'anchor',
            'anchorPosition',
            'ariaAttributes',
            'ariaDescribedBy',
            'ariaLabel',
            'ariaLabelledBy',
            'autoDestroy',
            'autoSize',
            'axisLock',
            'bbar',
            'bind',
            'bodyBorder',
            'bodyCls',
            'bodyPadding',
            'bodyStyle',
            'border',
            'bottom',
            'buttonAlign',
            'buttons',
            'buttonToolbar',
            'cardSwitchAnimation',
            'centered',
            'closable',
            'closeAction',
            'closeToolText',
            'cls',
            'collapsed',
            'collapsible',
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultToolWeights',
            'defaultType',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'fieldType',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'fullscreen',
            'header',
            'headerPosition',
            'height',
            'hidden',
            'hideAnimation',
            'hideMode',
            'hideOnMaskTap',
            'html',
            'icon',
            'iconAlign',
            'iconCls',
            'id',
            'inactiveChildTabIndex',
            'innerCls',
            'instanceCls',
            'itemId',
            'items',
            'keyMap',
            'keyMapEnabled',
            'keyMapTarget',
            'layout',
            'lbar',
            'left',
            'listeners',
            'manageBorders',
            'margin',
            'masked',
            'maxHeight',
            'maxWidth',
            'minButtonWidth',
            'minHeight',
            'minWidth',
            'modal',
            'modelValidation',
            'name',
            'nameable',
            'nameHolder',
            'padding',
            'plugins',
            'publishes',
            'rbar',
            'record',
            'reference',
            'referenceHolder',
            'relative',
            'renderTo',
            'resetFocusPosition',
            'resizable',
            'right',
            'ripple',
            'scrollable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'standardButtons',
            'stateful',
            'statefulDefaults',
            'stateId',
            'style',
            'tabIndex',
            'tbar',
            'title',
            'titleAlign',
            'titleCollapse',
            'toFrontOnShow',
            'toolDefaults',
            'tools',
            'tooltip',
            'top',
            'touchAction',
            'tpl',
            'tplWriteMode',
            'translatable',
            'twoWayBindable',
            'ui',
            'userCls',
            'userSelectable',
            'viewModel',
            'weight',
            'weighted',
            'width',
            'x',
            'xtype',
            'y',
            'zIndex',
            'platformConfig',
            'responsiveConfig',
            'fitToParent',
            'config'
        ];
        ExtPivotconfigcontainerMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,pivotconfigcontainer,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'pivotconfigcontainer,item,index' },
            { name: 'added', parameters: 'sender,container,index' },
            { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecollapse', parameters: 'pivotconfigcontainer' },
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeexpand', parameters: 'pivotconfigcontainer' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehide', parameters: 'sender' },
            { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeorientationchange', parameters: '' },
            { name: 'beforeresizedragstart', parameters: 'pivotconfigcontainer,context' },
            { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeshow', parameters: 'sender' },
            { name: 'beforetofront', parameters: 'pivotconfigcontainer' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'pivotconfigcontainer,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'collapse', parameters: 'pivotconfigcontainer' },
            { name: 'deactivate', parameters: 'oldActiveItem,pivotconfigcontainer,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'drawerhide', parameters: 'pivotconfigcontainer' },
            { name: 'drawershow', parameters: 'pivotconfigcontainer' },
            { name: 'erased', parameters: 'sender' },
            { name: 'expand', parameters: 'pivotconfigcontainer' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'pivotconfigcontainer,event' },
            { name: 'focusenter', parameters: 'pivotconfigcontainer,event' },
            { name: 'focusleave', parameters: 'pivotconfigcontainer,event' },
            { name: 'fullscreen', parameters: 'sender' },
            { name: 'heightchange', parameters: 'sender,value,oldValue' },
            { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
            { name: 'hide', parameters: 'sender' },
            { name: 'initialize', parameters: 'sender' },
            { name: 'leftchange', parameters: 'sender,value,oldValue' },
            { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'move', parameters: 'pivotconfigcontainer,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'pivotconfigcontainer,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'pivotconfigcontainer,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'resizedrag', parameters: 'pivotconfigcontainer,context' },
            { name: 'resizedragcancel', parameters: 'pivotconfigcontainer,context' },
            { name: 'resizedragend', parameters: 'pivotconfigcontainer,context' },
            { name: 'resizedragstart', parameters: 'pivotconfigcontainer,context' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'pivotconfigcontainer' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        ExtPivotconfigcontainerMetaData.EVENTNAMES = [
            'activate',
            'activeItemchange',
            'add',
            'added',
            'beforeactiveItemchange',
            'beforebottomchange',
            'beforecenteredchange',
            'beforecollapse',
            'beforedisabledchange',
            'beforedockedchange',
            'beforeexpand',
            'beforeheightchange',
            'beforehiddenchange',
            'beforehide',
            'beforeleftchange',
            'beforemaxHeightchange',
            'beforemaxWidthchange',
            'beforeminHeightchange',
            'beforeminWidthchange',
            'beforeorientationchange',
            'beforeresizedragstart',
            'beforerightchange',
            'beforescrollablechange',
            'beforeshow',
            'beforetofront',
            'beforetopchange',
            'beforewidthchange',
            'blur',
            'bottomchange',
            'centeredchange',
            'collapse',
            'deactivate',
            'destroy',
            'disabledchange',
            'dockedchange',
            'drawerhide',
            'drawershow',
            'erased',
            'expand',
            'floatingchange',
            'focus',
            'focusenter',
            'focusleave',
            'fullscreen',
            'heightchange',
            'hiddenchange',
            'hide',
            'initialize',
            'leftchange',
            'maxHeightchange',
            'maxWidthchange',
            'minHeightchange',
            'minWidthchange',
            'move',
            'moved',
            'orientationchange',
            'painted',
            'positionedchange',
            'remove',
            'removed',
            'renderedchange',
            'resize',
            'resizedrag',
            'resizedragcancel',
            'resizedragend',
            'resizedragstart',
            'rightchange',
            'scrollablechange',
            'show',
            'tofront',
            'topchange',
            'updatedata',
            'widthchange',
            'ready'
        ];
        return ExtPivotconfigcontainerMetaData;
    }());
    var ExtPivotconfigcontainerComponent = /** @class */ (function (_super) {
        __extends(ExtPivotconfigcontainerComponent, _super);
        function ExtPivotconfigcontainerComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef, hostComponent, ExtPivotconfigcontainerMetaData.PROPERTIES, ExtPivotconfigcontainerMetaData.EVENTS) || this;
            _this.xtype = 'pivotconfigcontainer';
            return _this;
        }
        ExtPivotconfigcontainerComponent_1 = ExtPivotconfigcontainerComponent;
        ExtPivotconfigcontainerComponent.prototype.ngOnInit = function () {
            this.baseOnInit();
        };
        ExtPivotconfigcontainerComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit();
        };
        ExtPivotconfigcontainerComponent.prototype.ngOnChanges = function (changes) {
            this.baseOnChanges(changes);
        };
        ExtPivotconfigcontainerComponent.prototype.ngOnDestroy = function () {
            this.baseOnDestroy();
        };
        var ExtPivotconfigcontainerComponent_1;
        ExtPivotconfigcontainerComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: EngBase, decorators: [{ type: core.Host }, { type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        ExtPivotconfigcontainerComponent = ExtPivotconfigcontainerComponent_1 = __decorate([
            core.Component({
                selector: 'ext-pivotconfigcontainer',
                inputs: ExtPivotconfigcontainerMetaData.PROPERTIES,
                outputs: ExtPivotconfigcontainerMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtPivotconfigcontainerComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef,
                EngBase])
        ], ExtPivotconfigcontainerComponent);
        return ExtPivotconfigcontainerComponent;
    }(EngBase));

    var ExtPivotconfigformMetaData = /** @class */ (function () {
        function ExtPivotconfigformMetaData() {
        }
        ExtPivotconfigformMetaData.PROPERTIES = [
            'activeChildTabIndex',
            'activeItem',
            'alignSelf',
            'allowFocusingDisabledChildren',
            'alwaysOnTop',
            'anchor',
            'anchorPosition',
            'api',
            'ariaAttributes',
            'ariaDescribedBy',
            'ariaLabel',
            'ariaLabelledBy',
            'autoDestroy',
            'autoSize',
            'axisLock',
            'baseParams',
            'bbar',
            'bind',
            'bodyBorder',
            'bodyCls',
            'bodyPadding',
            'bodyStyle',
            'border',
            'bottom',
            'bubbleDirty',
            'buttonAlign',
            'buttons',
            'buttonToolbar',
            'cardSwitchAnimation',
            'centered',
            'closable',
            'closeAction',
            'closeToolText',
            'cls',
            'collapsed',
            'collapsible',
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultToolWeights',
            'defaultType',
            'dirty',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'enableSubmissionForm',
            'enctype',
            'fieldDefaults',
            'fieldSeparators',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'fullscreen',
            'header',
            'headerPosition',
            'height',
            'hidden',
            'hideAnimation',
            'hideMode',
            'hideOnMaskTap',
            'html',
            'icon',
            'iconAlign',
            'iconCls',
            'id',
            'inactiveChildTabIndex',
            'innerCls',
            'inputBorders',
            'instanceCls',
            'itemId',
            'items',
            'jsonSubmit',
            'keyMap',
            'keyMapEnabled',
            'keyMapTarget',
            'layout',
            'lbar',
            'left',
            'listeners',
            'manageBorders',
            'margin',
            'masked',
            'maxHeight',
            'maxWidth',
            'method',
            'minButtonWidth',
            'minHeight',
            'minWidth',
            'modal',
            'modelValidation',
            'multipartDetection',
            'name',
            'nameable',
            'nameHolder',
            'padding',
            'paramOrder',
            'paramsAsHash',
            'plugins',
            'publishes',
            'rbar',
            'record',
            'reference',
            'referenceHolder',
            'relative',
            'renderTo',
            'resetFocusPosition',
            'resizable',
            'right',
            'ripple',
            'scrollable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'standardButtons',
            'standardSubmit',
            'stateful',
            'statefulDefaults',
            'stateId',
            'style',
            'submitOnAction',
            'tabIndex',
            'tbar',
            'timeout',
            'title',
            'titleAlign',
            'titleCollapse',
            'toFrontOnShow',
            'toolDefaults',
            'tools',
            'tooltip',
            'top',
            'touchAction',
            'tpl',
            'tplWriteMode',
            'trackResetOnLoad',
            'translatable',
            'twoWayBindable',
            'ui',
            'url',
            'userCls',
            'userSelectable',
            'viewModel',
            'weight',
            'weighted',
            'width',
            'x',
            'xtype',
            'y',
            'zIndex',
            'platformConfig',
            'responsiveConfig',
            'fitToParent',
            'config'
        ];
        ExtPivotconfigformMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,pivotconfigform,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'pivotconfigform,item,index' },
            { name: 'added', parameters: 'sender,container,index' },
            { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecollapse', parameters: 'pivotconfigform' },
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeexpand', parameters: 'pivotconfigform' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehide', parameters: 'sender' },
            { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeorientationchange', parameters: '' },
            { name: 'beforeresizedragstart', parameters: 'pivotconfigform,context' },
            { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeshow', parameters: 'sender' },
            { name: 'beforesubmit', parameters: 'pivotconfigform,values,options,e' },
            { name: 'beforetofront', parameters: 'pivotconfigform' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'pivotconfigform,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'collapse', parameters: 'pivotconfigform' },
            { name: 'deactivate', parameters: 'oldActiveItem,pivotconfigform,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'dirtychange', parameters: 'pivotconfigform,dirty' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'drawerhide', parameters: 'pivotconfigform' },
            { name: 'drawershow', parameters: 'pivotconfigform' },
            { name: 'erased', parameters: 'sender' },
            { name: 'exception', parameters: 'pivotconfigform,result' },
            { name: 'expand', parameters: 'pivotconfigform' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'pivotconfigform,event' },
            { name: 'focusenter', parameters: 'pivotconfigform,event' },
            { name: 'focusleave', parameters: 'pivotconfigform,event' },
            { name: 'fullscreen', parameters: 'sender' },
            { name: 'heightchange', parameters: 'sender,value,oldValue' },
            { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
            { name: 'hide', parameters: 'sender' },
            { name: 'initialize', parameters: 'sender' },
            { name: 'leftchange', parameters: 'sender,value,oldValue' },
            { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'move', parameters: 'pivotconfigform,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'pivotconfigform,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'pivotconfigform,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'resizedrag', parameters: 'pivotconfigform,context' },
            { name: 'resizedragcancel', parameters: 'pivotconfigform,context' },
            { name: 'resizedragend', parameters: 'pivotconfigform,context' },
            { name: 'resizedragstart', parameters: 'pivotconfigform,context' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'submit', parameters: 'pivotconfigform,result,e' },
            { name: 'tofront', parameters: 'pivotconfigform' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        ExtPivotconfigformMetaData.EVENTNAMES = [
            'activate',
            'activeItemchange',
            'add',
            'added',
            'beforeactiveItemchange',
            'beforebottomchange',
            'beforecenteredchange',
            'beforecollapse',
            'beforedisabledchange',
            'beforedockedchange',
            'beforeexpand',
            'beforeheightchange',
            'beforehiddenchange',
            'beforehide',
            'beforeleftchange',
            'beforemaxHeightchange',
            'beforemaxWidthchange',
            'beforeminHeightchange',
            'beforeminWidthchange',
            'beforeorientationchange',
            'beforeresizedragstart',
            'beforerightchange',
            'beforescrollablechange',
            'beforeshow',
            'beforesubmit',
            'beforetofront',
            'beforetopchange',
            'beforewidthchange',
            'blur',
            'bottomchange',
            'centeredchange',
            'collapse',
            'deactivate',
            'destroy',
            'dirtychange',
            'disabledchange',
            'dockedchange',
            'drawerhide',
            'drawershow',
            'erased',
            'exception',
            'expand',
            'floatingchange',
            'focus',
            'focusenter',
            'focusleave',
            'fullscreen',
            'heightchange',
            'hiddenchange',
            'hide',
            'initialize',
            'leftchange',
            'maxHeightchange',
            'maxWidthchange',
            'minHeightchange',
            'minWidthchange',
            'move',
            'moved',
            'orientationchange',
            'painted',
            'positionedchange',
            'remove',
            'removed',
            'renderedchange',
            'resize',
            'resizedrag',
            'resizedragcancel',
            'resizedragend',
            'resizedragstart',
            'rightchange',
            'scrollablechange',
            'show',
            'submit',
            'tofront',
            'topchange',
            'updatedata',
            'widthchange',
            'ready'
        ];
        return ExtPivotconfigformMetaData;
    }());
    var ExtPivotconfigformComponent = /** @class */ (function (_super) {
        __extends(ExtPivotconfigformComponent, _super);
        function ExtPivotconfigformComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef, hostComponent, ExtPivotconfigformMetaData.PROPERTIES, ExtPivotconfigformMetaData.EVENTS) || this;
            _this.xtype = 'pivotconfigform';
            return _this;
        }
        ExtPivotconfigformComponent_1 = ExtPivotconfigformComponent;
        ExtPivotconfigformComponent.prototype.ngOnInit = function () {
            this.baseOnInit();
        };
        ExtPivotconfigformComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit();
        };
        ExtPivotconfigformComponent.prototype.ngOnChanges = function (changes) {
            this.baseOnChanges(changes);
        };
        ExtPivotconfigformComponent.prototype.ngOnDestroy = function () {
            this.baseOnDestroy();
        };
        var ExtPivotconfigformComponent_1;
        ExtPivotconfigformComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: EngBase, decorators: [{ type: core.Host }, { type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        ExtPivotconfigformComponent = ExtPivotconfigformComponent_1 = __decorate([
            core.Component({
                selector: 'ext-pivotconfigform',
                inputs: ExtPivotconfigformMetaData.PROPERTIES,
                outputs: ExtPivotconfigformMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtPivotconfigformComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef,
                EngBase])
        ], ExtPivotconfigformComponent);
        return ExtPivotconfigformComponent;
    }(EngBase));

    var ExtPivotconfigpanelMetaData = /** @class */ (function () {
        function ExtPivotconfigpanelMetaData() {
        }
        ExtPivotconfigpanelMetaData.PROPERTIES = [
            'activeChildTabIndex',
            'activeItem',
            'alignSelf',
            'allowFocusingDisabledChildren',
            'alwaysOnTop',
            'anchor',
            'anchorPosition',
            'ariaAttributes',
            'ariaDescribedBy',
            'ariaLabel',
            'ariaLabelledBy',
            'autoDestroy',
            'autoSize',
            'axisLock',
            'bbar',
            'bind',
            'bodyBorder',
            'bodyCls',
            'bodyPadding',
            'bodyStyle',
            'border',
            'bottom',
            'buttonAlign',
            'buttons',
            'buttonToolbar',
            'cardSwitchAnimation',
            'centered',
            'closable',
            'closeAction',
            'closeToolText',
            'cls',
            'collapsed',
            'collapsible',
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultToolWeights',
            'defaultType',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'fullscreen',
            'header',
            'headerPosition',
            'height',
            'hidden',
            'hideAnimation',
            'hideMode',
            'hideOnMaskTap',
            'html',
            'icon',
            'iconAlign',
            'iconCls',
            'id',
            'inactiveChildTabIndex',
            'innerCls',
            'instanceCls',
            'itemId',
            'items',
            'keyMap',
            'keyMapEnabled',
            'keyMapTarget',
            'layout',
            'lbar',
            'left',
            'listeners',
            'manageBorders',
            'margin',
            'masked',
            'maxHeight',
            'maxWidth',
            'minButtonWidth',
            'minHeight',
            'minWidth',
            'modal',
            'modelValidation',
            'name',
            'nameable',
            'nameHolder',
            'padding',
            'panelAggFieldsText',
            'panelAggFieldsTitle',
            'panelAllFieldsText',
            'panelAllFieldsTitle',
            'panelLeftFieldsText',
            'panelLeftFieldsTitle',
            'panelTopFieldsText',
            'panelTopFieldsTitle',
            'plugins',
            'publishes',
            'rbar',
            'record',
            'reference',
            'referenceHolder',
            'relative',
            'renderTo',
            'resetFocusPosition',
            'resizable',
            'right',
            'ripple',
            'scrollable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'standardButtons',
            'stateful',
            'statefulDefaults',
            'stateId',
            'style',
            'tabIndex',
            'tbar',
            'title',
            'titleAlign',
            'titleCollapse',
            'toFrontOnShow',
            'toolDefaults',
            'tools',
            'tooltip',
            'top',
            'touchAction',
            'tpl',
            'tplWriteMode',
            'translatable',
            'twoWayBindable',
            'ui',
            'userCls',
            'userSelectable',
            'viewModel',
            'weight',
            'weighted',
            'width',
            'x',
            'xtype',
            'y',
            'zIndex',
            'platformConfig',
            'responsiveConfig',
            'fitToParent',
            'config'
        ];
        ExtPivotconfigpanelMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,pivotconfigpanel,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'pivotconfigpanel,item,index' },
            { name: 'added', parameters: 'sender,container,index' },
            { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecollapse', parameters: 'pivotconfigpanel' },
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeexpand', parameters: 'pivotconfigpanel' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehide', parameters: 'sender' },
            { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeorientationchange', parameters: '' },
            { name: 'beforeresizedragstart', parameters: 'pivotconfigpanel,context' },
            { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeshow', parameters: 'sender' },
            { name: 'beforetofront', parameters: 'pivotconfigpanel' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'pivotconfigpanel,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'collapse', parameters: 'pivotconfigpanel' },
            { name: 'deactivate', parameters: 'oldActiveItem,pivotconfigpanel,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'drawerhide', parameters: 'pivotconfigpanel' },
            { name: 'drawershow', parameters: 'pivotconfigpanel' },
            { name: 'erased', parameters: 'sender' },
            { name: 'expand', parameters: 'pivotconfigpanel' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'pivotconfigpanel,event' },
            { name: 'focusenter', parameters: 'pivotconfigpanel,event' },
            { name: 'focusleave', parameters: 'pivotconfigpanel,event' },
            { name: 'fullscreen', parameters: 'sender' },
            { name: 'heightchange', parameters: 'sender,value,oldValue' },
            { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
            { name: 'hide', parameters: 'sender' },
            { name: 'initialize', parameters: 'sender' },
            { name: 'leftchange', parameters: 'sender,value,oldValue' },
            { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'move', parameters: 'pivotconfigpanel,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'pivotconfigpanel,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'pivotconfigpanel,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'resizedrag', parameters: 'pivotconfigpanel,context' },
            { name: 'resizedragcancel', parameters: 'pivotconfigpanel,context' },
            { name: 'resizedragend', parameters: 'pivotconfigpanel,context' },
            { name: 'resizedragstart', parameters: 'pivotconfigpanel,context' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'pivotconfigpanel' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        ExtPivotconfigpanelMetaData.EVENTNAMES = [
            'activate',
            'activeItemchange',
            'add',
            'added',
            'beforeactiveItemchange',
            'beforebottomchange',
            'beforecenteredchange',
            'beforecollapse',
            'beforedisabledchange',
            'beforedockedchange',
            'beforeexpand',
            'beforeheightchange',
            'beforehiddenchange',
            'beforehide',
            'beforeleftchange',
            'beforemaxHeightchange',
            'beforemaxWidthchange',
            'beforeminHeightchange',
            'beforeminWidthchange',
            'beforeorientationchange',
            'beforeresizedragstart',
            'beforerightchange',
            'beforescrollablechange',
            'beforeshow',
            'beforetofront',
            'beforetopchange',
            'beforewidthchange',
            'blur',
            'bottomchange',
            'centeredchange',
            'collapse',
            'deactivate',
            'destroy',
            'disabledchange',
            'dockedchange',
            'drawerhide',
            'drawershow',
            'erased',
            'expand',
            'floatingchange',
            'focus',
            'focusenter',
            'focusleave',
            'fullscreen',
            'heightchange',
            'hiddenchange',
            'hide',
            'initialize',
            'leftchange',
            'maxHeightchange',
            'maxWidthchange',
            'minHeightchange',
            'minWidthchange',
            'move',
            'moved',
            'orientationchange',
            'painted',
            'positionedchange',
            'remove',
            'removed',
            'renderedchange',
            'resize',
            'resizedrag',
            'resizedragcancel',
            'resizedragend',
            'resizedragstart',
            'rightchange',
            'scrollablechange',
            'show',
            'tofront',
            'topchange',
            'updatedata',
            'widthchange',
            'ready'
        ];
        return ExtPivotconfigpanelMetaData;
    }());
    var ExtPivotconfigpanelComponent = /** @class */ (function (_super) {
        __extends(ExtPivotconfigpanelComponent, _super);
        function ExtPivotconfigpanelComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef, hostComponent, ExtPivotconfigpanelMetaData.PROPERTIES, ExtPivotconfigpanelMetaData.EVENTS) || this;
            _this.xtype = 'pivotconfigpanel';
            return _this;
        }
        ExtPivotconfigpanelComponent_1 = ExtPivotconfigpanelComponent;
        ExtPivotconfigpanelComponent.prototype.ngOnInit = function () {
            this.baseOnInit();
        };
        ExtPivotconfigpanelComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit();
        };
        ExtPivotconfigpanelComponent.prototype.ngOnChanges = function (changes) {
            this.baseOnChanges(changes);
        };
        ExtPivotconfigpanelComponent.prototype.ngOnDestroy = function () {
            this.baseOnDestroy();
        };
        var ExtPivotconfigpanelComponent_1;
        ExtPivotconfigpanelComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: EngBase, decorators: [{ type: core.Host }, { type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        ExtPivotconfigpanelComponent = ExtPivotconfigpanelComponent_1 = __decorate([
            core.Component({
                selector: 'ext-pivotconfigpanel',
                inputs: ExtPivotconfigpanelMetaData.PROPERTIES,
                outputs: ExtPivotconfigpanelMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtPivotconfigpanelComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef,
                EngBase])
        ], ExtPivotconfigpanelComponent);
        return ExtPivotconfigpanelComponent;
    }(EngBase));

    var ExtPivotsettingsMetaData = /** @class */ (function () {
        function ExtPivotsettingsMetaData() {
        }
        ExtPivotsettingsMetaData.PROPERTIES = [
            'activeChildTabIndex',
            'activeItem',
            'alignSelf',
            'allowFocusingDisabledChildren',
            'alwaysOnTop',
            'anchor',
            'anchorPosition',
            'api',
            'ariaAttributes',
            'ariaDescribedBy',
            'ariaLabel',
            'ariaLabelledBy',
            'autoDestroy',
            'autoSize',
            'axisLock',
            'baseParams',
            'bbar',
            'bind',
            'bodyBorder',
            'bodyCls',
            'bodyPadding',
            'bodyStyle',
            'border',
            'bottom',
            'bubbleDirty',
            'buttonAlign',
            'buttons',
            'buttonToolbar',
            'cardSwitchAnimation',
            'centered',
            'closable',
            'closeAction',
            'closeToolText',
            'cls',
            'collapsed',
            'collapsible',
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultToolWeights',
            'defaultType',
            'dirty',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'enableSubmissionForm',
            'enctype',
            'fieldDefaults',
            'fieldSeparators',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'fullscreen',
            'header',
            'headerPosition',
            'height',
            'hidden',
            'hideAnimation',
            'hideMode',
            'hideOnMaskTap',
            'html',
            'icon',
            'iconAlign',
            'iconCls',
            'id',
            'inactiveChildTabIndex',
            'innerCls',
            'inputBorders',
            'instanceCls',
            'itemId',
            'items',
            'jsonSubmit',
            'keyMap',
            'keyMapEnabled',
            'keyMapTarget',
            'layout',
            'lbar',
            'left',
            'listeners',
            'manageBorders',
            'margin',
            'masked',
            'maxHeight',
            'maxWidth',
            'method',
            'minButtonWidth',
            'minHeight',
            'minWidth',
            'modal',
            'modelValidation',
            'multipartDetection',
            'name',
            'nameable',
            'nameHolder',
            'padding',
            'paramOrder',
            'paramsAsHash',
            'plugins',
            'publishes',
            'rbar',
            'record',
            'reference',
            'referenceHolder',
            'relative',
            'renderTo',
            'resetFocusPosition',
            'resizable',
            'right',
            'ripple',
            'scrollable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'standardButtons',
            'standardSubmit',
            'stateful',
            'statefulDefaults',
            'stateId',
            'style',
            'submitOnAction',
            'tabIndex',
            'tbar',
            'timeout',
            'title',
            'titleAlign',
            'titleCollapse',
            'toFrontOnShow',
            'toolDefaults',
            'tools',
            'tooltip',
            'top',
            'touchAction',
            'tpl',
            'tplWriteMode',
            'trackResetOnLoad',
            'translatable',
            'twoWayBindable',
            'ui',
            'url',
            'userCls',
            'userSelectable',
            'viewModel',
            'weight',
            'weighted',
            'width',
            'x',
            'xtype',
            'y',
            'zIndex',
            'platformConfig',
            'responsiveConfig',
            'fitToParent',
            'config'
        ];
        ExtPivotsettingsMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,pivotsettings,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'pivotsettings,item,index' },
            { name: 'added', parameters: 'sender,container,index' },
            { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecollapse', parameters: 'pivotsettings' },
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeexpand', parameters: 'pivotsettings' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehide', parameters: 'sender' },
            { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeorientationchange', parameters: '' },
            { name: 'beforeresizedragstart', parameters: 'pivotsettings,context' },
            { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeshow', parameters: 'sender' },
            { name: 'beforesubmit', parameters: 'pivotsettings,values,options,e' },
            { name: 'beforetofront', parameters: 'pivotsettings' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'pivotsettings,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'collapse', parameters: 'pivotsettings' },
            { name: 'deactivate', parameters: 'oldActiveItem,pivotsettings,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'dirtychange', parameters: 'pivotsettings,dirty' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'drawerhide', parameters: 'pivotsettings' },
            { name: 'drawershow', parameters: 'pivotsettings' },
            { name: 'erased', parameters: 'sender' },
            { name: 'exception', parameters: 'pivotsettings,result' },
            { name: 'expand', parameters: 'pivotsettings' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'pivotsettings,event' },
            { name: 'focusenter', parameters: 'pivotsettings,event' },
            { name: 'focusleave', parameters: 'pivotsettings,event' },
            { name: 'fullscreen', parameters: 'sender' },
            { name: 'heightchange', parameters: 'sender,value,oldValue' },
            { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
            { name: 'hide', parameters: 'sender' },
            { name: 'initialize', parameters: 'sender' },
            { name: 'leftchange', parameters: 'sender,value,oldValue' },
            { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'move', parameters: 'pivotsettings,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'pivotsettings,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'pivotsettings,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'resizedrag', parameters: 'pivotsettings,context' },
            { name: 'resizedragcancel', parameters: 'pivotsettings,context' },
            { name: 'resizedragend', parameters: 'pivotsettings,context' },
            { name: 'resizedragstart', parameters: 'pivotsettings,context' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'submit', parameters: 'pivotsettings,result,e' },
            { name: 'tofront', parameters: 'pivotsettings' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        ExtPivotsettingsMetaData.EVENTNAMES = [
            'activate',
            'activeItemchange',
            'add',
            'added',
            'beforeactiveItemchange',
            'beforebottomchange',
            'beforecenteredchange',
            'beforecollapse',
            'beforedisabledchange',
            'beforedockedchange',
            'beforeexpand',
            'beforeheightchange',
            'beforehiddenchange',
            'beforehide',
            'beforeleftchange',
            'beforemaxHeightchange',
            'beforemaxWidthchange',
            'beforeminHeightchange',
            'beforeminWidthchange',
            'beforeorientationchange',
            'beforeresizedragstart',
            'beforerightchange',
            'beforescrollablechange',
            'beforeshow',
            'beforesubmit',
            'beforetofront',
            'beforetopchange',
            'beforewidthchange',
            'blur',
            'bottomchange',
            'centeredchange',
            'collapse',
            'deactivate',
            'destroy',
            'dirtychange',
            'disabledchange',
            'dockedchange',
            'drawerhide',
            'drawershow',
            'erased',
            'exception',
            'expand',
            'floatingchange',
            'focus',
            'focusenter',
            'focusleave',
            'fullscreen',
            'heightchange',
            'hiddenchange',
            'hide',
            'initialize',
            'leftchange',
            'maxHeightchange',
            'maxWidthchange',
            'minHeightchange',
            'minWidthchange',
            'move',
            'moved',
            'orientationchange',
            'painted',
            'positionedchange',
            'remove',
            'removed',
            'renderedchange',
            'resize',
            'resizedrag',
            'resizedragcancel',
            'resizedragend',
            'resizedragstart',
            'rightchange',
            'scrollablechange',
            'show',
            'submit',
            'tofront',
            'topchange',
            'updatedata',
            'widthchange',
            'ready'
        ];
        return ExtPivotsettingsMetaData;
    }());
    var ExtPivotsettingsComponent = /** @class */ (function (_super) {
        __extends(ExtPivotsettingsComponent, _super);
        function ExtPivotsettingsComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef, hostComponent, ExtPivotsettingsMetaData.PROPERTIES, ExtPivotsettingsMetaData.EVENTS) || this;
            _this.xtype = 'pivotsettings';
            return _this;
        }
        ExtPivotsettingsComponent_1 = ExtPivotsettingsComponent;
        ExtPivotsettingsComponent.prototype.ngOnInit = function () {
            this.baseOnInit();
        };
        ExtPivotsettingsComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit();
        };
        ExtPivotsettingsComponent.prototype.ngOnChanges = function (changes) {
            this.baseOnChanges(changes);
        };
        ExtPivotsettingsComponent.prototype.ngOnDestroy = function () {
            this.baseOnDestroy();
        };
        var ExtPivotsettingsComponent_1;
        ExtPivotsettingsComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: EngBase, decorators: [{ type: core.Host }, { type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        ExtPivotsettingsComponent = ExtPivotsettingsComponent_1 = __decorate([
            core.Component({
                selector: 'ext-pivotsettings',
                inputs: ExtPivotsettingsMetaData.PROPERTIES,
                outputs: ExtPivotsettingsMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtPivotsettingsComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef,
                EngBase])
        ], ExtPivotsettingsComponent);
        return ExtPivotsettingsComponent;
    }(EngBase));

    var ExtPivotrangeeditorMetaData = /** @class */ (function () {
        function ExtPivotrangeeditorMetaData() {
        }
        ExtPivotrangeeditorMetaData.PROPERTIES = [
            'activeChildTabIndex',
            'activeItem',
            'alignSelf',
            'allowFocusingDisabledChildren',
            'alwaysOnTop',
            'anchor',
            'anchorPosition',
            'api',
            'ariaAttributes',
            'ariaDescribedBy',
            'ariaLabel',
            'ariaLabelledBy',
            'autoDestroy',
            'autoSize',
            'axisLock',
            'baseParams',
            'bbar',
            'bind',
            'bodyBorder',
            'bodyCls',
            'bodyPadding',
            'bodyStyle',
            'border',
            'bottom',
            'bubbleDirty',
            'buttonAlign',
            'buttons',
            'buttonToolbar',
            'cardSwitchAnimation',
            'centered',
            'closable',
            'closeAction',
            'closeToolText',
            'cls',
            'collapsed',
            'collapsible',
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultToolWeights',
            'defaultType',
            'dirty',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'enableSubmissionForm',
            'enctype',
            'fieldDefaults',
            'fieldSeparators',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'fullscreen',
            'header',
            'headerPosition',
            'height',
            'hidden',
            'hideAnimation',
            'hideMode',
            'hideOnMaskTap',
            'html',
            'icon',
            'iconAlign',
            'iconCls',
            'id',
            'inactiveChildTabIndex',
            'innerCls',
            'inputBorders',
            'instanceCls',
            'itemId',
            'items',
            'jsonSubmit',
            'keyMap',
            'keyMapEnabled',
            'keyMapTarget',
            'layout',
            'lbar',
            'left',
            'listeners',
            'manageBorders',
            'margin',
            'masked',
            'maxHeight',
            'maxWidth',
            'method',
            'minButtonWidth',
            'minHeight',
            'minWidth',
            'modal',
            'modelValidation',
            'multipartDetection',
            'name',
            'nameable',
            'nameHolder',
            'padding',
            'paramOrder',
            'paramsAsHash',
            'plugins',
            'publishes',
            'rbar',
            'record',
            'reference',
            'referenceHolder',
            'relative',
            'renderTo',
            'resetFocusPosition',
            'resizable',
            'right',
            'ripple',
            'scrollable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'standardButtons',
            'standardSubmit',
            'stateful',
            'statefulDefaults',
            'stateId',
            'style',
            'submitOnAction',
            'tabIndex',
            'tbar',
            'timeout',
            'title',
            'titleAlign',
            'titleCollapse',
            'toFrontOnShow',
            'toolDefaults',
            'tools',
            'tooltip',
            'top',
            'touchAction',
            'tpl',
            'tplWriteMode',
            'trackResetOnLoad',
            'translatable',
            'twoWayBindable',
            'ui',
            'url',
            'userCls',
            'userSelectable',
            'viewModel',
            'weight',
            'weighted',
            'width',
            'x',
            'xtype',
            'y',
            'zIndex',
            'platformConfig',
            'responsiveConfig',
            'fitToParent',
            'config'
        ];
        ExtPivotrangeeditorMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,pivotrangeeditor,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'pivotrangeeditor,item,index' },
            { name: 'added', parameters: 'sender,container,index' },
            { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecollapse', parameters: 'pivotrangeeditor' },
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeexpand', parameters: 'pivotrangeeditor' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehide', parameters: 'sender' },
            { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeorientationchange', parameters: '' },
            { name: 'beforeresizedragstart', parameters: 'pivotrangeeditor,context' },
            { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeshow', parameters: 'sender' },
            { name: 'beforesubmit', parameters: 'pivotrangeeditor,values,options,e' },
            { name: 'beforetofront', parameters: 'pivotrangeeditor' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'pivotrangeeditor,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'collapse', parameters: 'pivotrangeeditor' },
            { name: 'deactivate', parameters: 'oldActiveItem,pivotrangeeditor,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'dirtychange', parameters: 'pivotrangeeditor,dirty' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'drawerhide', parameters: 'pivotrangeeditor' },
            { name: 'drawershow', parameters: 'pivotrangeeditor' },
            { name: 'erased', parameters: 'sender' },
            { name: 'exception', parameters: 'pivotrangeeditor,result' },
            { name: 'expand', parameters: 'pivotrangeeditor' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'pivotrangeeditor,event' },
            { name: 'focusenter', parameters: 'pivotrangeeditor,event' },
            { name: 'focusleave', parameters: 'pivotrangeeditor,event' },
            { name: 'fullscreen', parameters: 'sender' },
            { name: 'heightchange', parameters: 'sender,value,oldValue' },
            { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
            { name: 'hide', parameters: 'sender' },
            { name: 'initialize', parameters: 'sender' },
            { name: 'leftchange', parameters: 'sender,value,oldValue' },
            { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'move', parameters: 'pivotrangeeditor,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'pivotrangeeditor,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'pivotrangeeditor,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'resizedrag', parameters: 'pivotrangeeditor,context' },
            { name: 'resizedragcancel', parameters: 'pivotrangeeditor,context' },
            { name: 'resizedragend', parameters: 'pivotrangeeditor,context' },
            { name: 'resizedragstart', parameters: 'pivotrangeeditor,context' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'submit', parameters: 'pivotrangeeditor,result,e' },
            { name: 'tofront', parameters: 'pivotrangeeditor' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        ExtPivotrangeeditorMetaData.EVENTNAMES = [
            'activate',
            'activeItemchange',
            'add',
            'added',
            'beforeactiveItemchange',
            'beforebottomchange',
            'beforecenteredchange',
            'beforecollapse',
            'beforedisabledchange',
            'beforedockedchange',
            'beforeexpand',
            'beforeheightchange',
            'beforehiddenchange',
            'beforehide',
            'beforeleftchange',
            'beforemaxHeightchange',
            'beforemaxWidthchange',
            'beforeminHeightchange',
            'beforeminWidthchange',
            'beforeorientationchange',
            'beforeresizedragstart',
            'beforerightchange',
            'beforescrollablechange',
            'beforeshow',
            'beforesubmit',
            'beforetofront',
            'beforetopchange',
            'beforewidthchange',
            'blur',
            'bottomchange',
            'centeredchange',
            'collapse',
            'deactivate',
            'destroy',
            'dirtychange',
            'disabledchange',
            'dockedchange',
            'drawerhide',
            'drawershow',
            'erased',
            'exception',
            'expand',
            'floatingchange',
            'focus',
            'focusenter',
            'focusleave',
            'fullscreen',
            'heightchange',
            'hiddenchange',
            'hide',
            'initialize',
            'leftchange',
            'maxHeightchange',
            'maxWidthchange',
            'minHeightchange',
            'minWidthchange',
            'move',
            'moved',
            'orientationchange',
            'painted',
            'positionedchange',
            'remove',
            'removed',
            'renderedchange',
            'resize',
            'resizedrag',
            'resizedragcancel',
            'resizedragend',
            'resizedragstart',
            'rightchange',
            'scrollablechange',
            'show',
            'submit',
            'tofront',
            'topchange',
            'updatedata',
            'widthchange',
            'ready'
        ];
        return ExtPivotrangeeditorMetaData;
    }());
    var ExtPivotrangeeditorComponent = /** @class */ (function (_super) {
        __extends(ExtPivotrangeeditorComponent, _super);
        function ExtPivotrangeeditorComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef, hostComponent, ExtPivotrangeeditorMetaData.PROPERTIES, ExtPivotrangeeditorMetaData.EVENTS) || this;
            _this.xtype = 'pivotrangeeditor';
            return _this;
        }
        ExtPivotrangeeditorComponent_1 = ExtPivotrangeeditorComponent;
        ExtPivotrangeeditorComponent.prototype.ngOnInit = function () {
            this.baseOnInit();
        };
        ExtPivotrangeeditorComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit();
        };
        ExtPivotrangeeditorComponent.prototype.ngOnChanges = function (changes) {
            this.baseOnChanges(changes);
        };
        ExtPivotrangeeditorComponent.prototype.ngOnDestroy = function () {
            this.baseOnDestroy();
        };
        var ExtPivotrangeeditorComponent_1;
        ExtPivotrangeeditorComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: EngBase, decorators: [{ type: core.Host }, { type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        ExtPivotrangeeditorComponent = ExtPivotrangeeditorComponent_1 = __decorate([
            core.Component({
                selector: 'ext-pivotrangeeditor',
                inputs: ExtPivotrangeeditorMetaData.PROPERTIES,
                outputs: ExtPivotrangeeditorMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtPivotrangeeditorComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef,
                EngBase])
        ], ExtPivotrangeeditorComponent);
        return ExtPivotrangeeditorComponent;
    }(EngBase));

    var ExtPivotgridrowMetaData = /** @class */ (function () {
        function ExtPivotgridrowMetaData() {
        }
        ExtPivotgridrowMetaData.PROPERTIES = [
            'alignSelf',
            'alwaysOnTop',
            'ariaAttributes',
            'ariaDescribedBy',
            'ariaLabel',
            'ariaLabelledBy',
            'axisLock',
            'bind',
            'body',
            'border',
            'bottom',
            'centered',
            'cls',
            'constrainAlign',
            'contentEl',
            'controller',
            'data',
            'defaultCellUI',
            'defaultListenerScope',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'expandedField',
            'flex',
            'floated',
            'focusCls',
            'fullscreen',
            'height',
            'hidden',
            'hideAnimation',
            'hideMode',
            'hideOnMaskTap',
            'html',
            'id',
            'instanceCls',
            'itemId',
            'keyMap',
            'keyMapEnabled',
            'keyMapTarget',
            'left',
            'listeners',
            'margin',
            'maxHeight',
            'maxWidth',
            'minHeight',
            'minWidth',
            'modal',
            'modelValidation',
            'name',
            'nameable',
            'padding',
            'pinned',
            'plugins',
            'publishes',
            'record',
            'recordIndex',
            'reference',
            'relative',
            'renderTo',
            'right',
            'ripple',
            'scrollable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'stateful',
            'statefulDefaults',
            'stateId',
            'stickyVisibility',
            'style',
            'tabIndex',
            'toFrontOnShow',
            'tooltip',
            'top',
            'touchAction',
            'tpl',
            'tplWriteMode',
            'translatable',
            'twoWayBindable',
            'ui',
            'userCls',
            'userSelectable',
            'viewModel',
            'weight',
            'width',
            'x',
            'xtype',
            'y',
            'zIndex',
            'platformConfig',
            'responsiveConfig',
            'fitToParent',
            'config'
        ];
        ExtPivotgridrowMetaData.EVENTS = [
            { name: 'added', parameters: 'sender,container,index' },
            { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehide', parameters: 'sender' },
            { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeorientationchange', parameters: '' },
            { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeshow', parameters: 'sender' },
            { name: 'beforetofront', parameters: 'pivotgridrow' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'pivotgridrow,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'pivotgridrow,event' },
            { name: 'focusenter', parameters: 'pivotgridrow,event' },
            { name: 'focusleave', parameters: 'pivotgridrow,event' },
            { name: 'fullscreen', parameters: 'sender' },
            { name: 'heightchange', parameters: 'sender,value,oldValue' },
            { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
            { name: 'hide', parameters: 'sender' },
            { name: 'initialize', parameters: 'sender' },
            { name: 'leftchange', parameters: 'sender,value,oldValue' },
            { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'pivotgridrow' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        ExtPivotgridrowMetaData.EVENTNAMES = [
            'added',
            'beforebottomchange',
            'beforecenteredchange',
            'beforedisabledchange',
            'beforedockedchange',
            'beforeheightchange',
            'beforehiddenchange',
            'beforehide',
            'beforeleftchange',
            'beforemaxHeightchange',
            'beforemaxWidthchange',
            'beforeminHeightchange',
            'beforeminWidthchange',
            'beforeorientationchange',
            'beforerightchange',
            'beforescrollablechange',
            'beforeshow',
            'beforetofront',
            'beforetopchange',
            'beforewidthchange',
            'blur',
            'bottomchange',
            'centeredchange',
            'destroy',
            'disabledchange',
            'dockedchange',
            'erased',
            'floatingchange',
            'focus',
            'focusenter',
            'focusleave',
            'fullscreen',
            'heightchange',
            'hiddenchange',
            'hide',
            'initialize',
            'leftchange',
            'maxHeightchange',
            'maxWidthchange',
            'minHeightchange',
            'minWidthchange',
            'moved',
            'orientationchange',
            'painted',
            'positionedchange',
            'removed',
            'resize',
            'rightchange',
            'scrollablechange',
            'show',
            'tofront',
            'topchange',
            'updatedata',
            'widthchange',
            'ready'
        ];
        return ExtPivotgridrowMetaData;
    }());
    var ExtPivotgridrowComponent = /** @class */ (function (_super) {
        __extends(ExtPivotgridrowComponent, _super);
        function ExtPivotgridrowComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef, hostComponent, ExtPivotgridrowMetaData.PROPERTIES, ExtPivotgridrowMetaData.EVENTS) || this;
            _this.xtype = 'pivotgridrow';
            return _this;
        }
        ExtPivotgridrowComponent_1 = ExtPivotgridrowComponent;
        ExtPivotgridrowComponent.prototype.ngOnInit = function () {
            this.baseOnInit();
        };
        ExtPivotgridrowComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit();
        };
        ExtPivotgridrowComponent.prototype.ngOnChanges = function (changes) {
            this.baseOnChanges(changes);
        };
        ExtPivotgridrowComponent.prototype.ngOnDestroy = function () {
            this.baseOnDestroy();
        };
        var ExtPivotgridrowComponent_1;
        ExtPivotgridrowComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: EngBase, decorators: [{ type: core.Host }, { type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        ExtPivotgridrowComponent = ExtPivotgridrowComponent_1 = __decorate([
            core.Component({
                selector: 'ext-pivotgridrow',
                inputs: ExtPivotgridrowMetaData.PROPERTIES,
                outputs: ExtPivotgridrowMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtPivotgridrowComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef,
                EngBase])
        ], ExtPivotgridrowComponent);
        return ExtPivotgridrowComponent;
    }(EngBase));

    var ExtAngularPivotModule = /** @class */ (function () {
        function ExtAngularPivotModule() {
        }
        ExtAngularPivotModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [
                    ExtPivotgridcellComponent,
                    ExtPivotgridgroupcellComponent,
                    ExtPivotd3containerComponent,
                    ExtPivotheatmapComponent,
                    ExtPivottreemapComponent,
                    ExtPivotgridComponent,
                    ExtPivotconfigfieldComponent,
                    ExtPivotconfigcontainerComponent,
                    ExtPivotconfigformComponent,
                    ExtPivotconfigpanelComponent,
                    ExtPivotsettingsComponent,
                    ExtPivotrangeeditorComponent,
                    ExtPivotgridrowComponent,
                ],
                providers: [],
                entryComponents: [],
                exports: [
                    ExtPivotgridcellComponent,
                    ExtPivotgridgroupcellComponent,
                    ExtPivotd3containerComponent,
                    ExtPivotheatmapComponent,
                    ExtPivottreemapComponent,
                    ExtPivotgridComponent,
                    ExtPivotconfigfieldComponent,
                    ExtPivotconfigcontainerComponent,
                    ExtPivotconfigformComponent,
                    ExtPivotconfigpanelComponent,
                    ExtPivotsettingsComponent,
                    ExtPivotrangeeditorComponent,
                    ExtPivotgridrowComponent,
                ]
            })
        ], ExtAngularPivotModule);
        return ExtAngularPivotModule;
    }());

    exports.ExtAngularPivotModule = ExtAngularPivotModule;
    exports.ɵa = ExtPivotgridcellMetaData;
    exports.ɵb = ExtPivotgridcellComponent;
    exports.ɵba = ExtPivotgridrowComponent;
    exports.ɵc = EngBase;
    exports.ɵd = ExtPivotgridgroupcellMetaData;
    exports.ɵe = ExtPivotgridgroupcellComponent;
    exports.ɵf = ExtPivotd3containerMetaData;
    exports.ɵg = ExtPivotd3containerComponent;
    exports.ɵh = ExtPivotheatmapMetaData;
    exports.ɵi = ExtPivotheatmapComponent;
    exports.ɵj = ExtPivottreemapMetaData;
    exports.ɵk = ExtPivottreemapComponent;
    exports.ɵl = ExtPivotgridMetaData;
    exports.ɵm = ExtPivotgridComponent;
    exports.ɵn = ExtPivotconfigfieldMetaData;
    exports.ɵo = ExtPivotconfigfieldComponent;
    exports.ɵp = ExtPivotconfigcontainerMetaData;
    exports.ɵq = ExtPivotconfigcontainerComponent;
    exports.ɵr = ExtPivotconfigformMetaData;
    exports.ɵs = ExtPivotconfigformComponent;
    exports.ɵt = ExtPivotconfigpanelMetaData;
    exports.ɵu = ExtPivotconfigpanelComponent;
    exports.ɵv = ExtPivotsettingsMetaData;
    exports.ɵw = ExtPivotsettingsComponent;
    exports.ɵx = ExtPivotrangeeditorMetaData;
    exports.ɵy = ExtPivotrangeeditorComponent;
    exports.ɵz = ExtPivotgridrowMetaData;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=sencha-ext-angular-pivot.umd.js.map