//import EWCD3_horizontal_tree from '../dist/ext-d3-horizontal-tree.component.js';
//inputs: (new EWCD3_horizontal_tree()).properties,
//import EWCD3_horizontal_tree from '@sencha/ext-web-components-modern/dist/ext-d3-horizontal-tree.component.js';
import { EWCD3_horizontal_tree } from '@sencha/ext-web-components-modern';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef,
    ViewContainerRef
  } from '@angular/core';
import { EngBase } from './angularbase';

@Component({
    selector: 'ExtD3_horizontal_tree',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','axisLock','bind','border','bottom','centered','clipScene','cls','colorAxis','componentCls','constrainAlign','contentEl','controller','data','defaultListenerScope','depth','disabled','displayed','docked','draggable','undefined','undefined','undefined','expandEventName','flex','floated','focusCls','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','hierarchyCls','html','id','instanceCls','interactions','itemId','keyMap','keyMapEnabled','keyMapTarget','layout','left','linkKey','listeners','margin','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','nodeChildren','nodeClass','nodeKey','nodeRadius','nodeSize','nodeText','nodeTransform','nodeValue','noParentValue','noSizeLayout','padding','plugins','publishes','record','reference','relative','renderLinks','renderTo','right','ripple','rootVisible','scrollable','selectEventName','selection','session','shadow','shareableName','shim','showAnimation','size','sorter','stateful','statefulDefaults','stateId','store','style','tabIndex','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','transitions','translatable','twoWayBindable','ui','userCls','userSelectable','viewModel','weight','width','x','xtype','y','zIndex',],
    outputs: ['ready','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','layout','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','moved','orientationchange','painted','positionedchange','removed','resize','rightchange','sceneresize','scenesetup','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtD3_horizontal_treeComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtD3_horizontal_treeComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','axisLock','bind','border','bottom','centered','clipScene','cls','colorAxis','componentCls','constrainAlign','contentEl','controller','data','defaultListenerScope','depth','disabled','displayed','docked','draggable','undefined','undefined','undefined','expandEventName','flex','floated','focusCls','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','hierarchyCls','html','id','instanceCls','interactions','itemId','keyMap','keyMapEnabled','keyMapTarget','layout','left','linkKey','listeners','margin','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','nodeChildren','nodeClass','nodeKey','nodeRadius','nodeSize','nodeText','nodeTransform','nodeValue','noParentValue','noSizeLayout','padding','plugins','publishes','record','reference','relative','renderLinks','renderTo','right','ripple','rootVisible','scrollable','selectEventName','selection','session','shadow','shareableName','shim','showAnimation','size','sorter','stateful','statefulDefaults','stateId','store','style','tabIndex','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','transitions','translatable','twoWayBindable','ui','userCls','userSelectable','viewModel','weight','width','x','xtype','y','zIndex',],
            (new EWCD3_horizontal_tree()).events,
            ['ready','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','layout','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','moved','orientationchange','painted','positionedchange','removed','resize','rightchange','sceneresize','scenesetup','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'd3-horizontal-tree'
    }

    public ngOnInit() {
        this.baseOnInit()
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit()
    }

    public ngOnChanges(changes) {
        this.baseOnChanges(changes)
    }

    public ngOnDestroy() {
        this.baseOnDestroy()
    }
}


// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)

//var events = (new EWCD3_horizontal_tree()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
