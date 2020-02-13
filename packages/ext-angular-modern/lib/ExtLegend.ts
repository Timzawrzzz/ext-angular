//import EWCLegend from '../dist/ext-legend.component.js';
//inputs: (new EWCLegend()).properties,
//import EWCLegend from '@sencha/ext-web-components-modern/dist/ext-legend.component.js';
import { EWCLegend } from '@sencha/ext-web-components-modern';
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
    selector: 'ExtLegend',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','associatedData','autoDestroy','autoSize','axisLock','bind','bodyCls','border','bottom','cardSwitchAnimation','centered','cls','constrainAlign','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaults','defaultType','deferEmptyText','deselectOnContainerClick','disabled','disableSelection','displayed','docked','draggable','emptyItemText','emptyState','emptyText','emptyTextDefaults','emptyTextProperty','undefined','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','id','inactiveChildTabIndex','inline','innerCls','instanceCls','itemButtonMode','itemCls','itemId','itemRipple','items','itemsFocusable','itemTpl','keyMap','keyMapEnabled','keyMapTarget','lastSelected','layout','left','listeners','loadingHeight','loadingText','manageBorders','margin','markDirty','masked','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','padding','plugins','pressedDelay','publishes','record','rect','reference','referenceHolder','relative','renderTo','resetFocusPosition','right','ripple','scrollable','scrollDock','scrollToTopOnRefresh','selectable','selected','selection','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','store','style','tabIndex','toFrontOnShow','toggleable','tooltip','top','touchAction','tpl','tplWriteMode','translatable','triggerCtEvent','triggerEvent','twoWayBindable','ui','userCls','userSelectable','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
    outputs: ['ready','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforestorechange','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','childdoubletap','childlongpress','childmouseenter','childmouseleave','childsingletap','childtap','childtaphold','childtouchcancel','childtouchend','childtouchmove','childtouchstart','deactivate','deselect','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','itemdoubletap','itemlongpress','itemmouseenter','itemmouseleave','itemsingletap','itemswipe','itemtap','itemtaphold','itemtouchcancel','itemtouchend','itemtouchmove','itemtouchstart','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','navigate','orientationchange','painted','positionedchange','refresh','remove','removed','renderedchange','resize','rightchange','rowselection','scrollablechange','select','selectionchange','show','storechange','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtLegendComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtLegendComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','associatedData','autoDestroy','autoSize','axisLock','bind','bodyCls','border','bottom','cardSwitchAnimation','centered','cls','constrainAlign','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaults','defaultType','deferEmptyText','deselectOnContainerClick','disabled','disableSelection','displayed','docked','draggable','emptyItemText','emptyState','emptyText','emptyTextDefaults','emptyTextProperty','undefined','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','id','inactiveChildTabIndex','inline','innerCls','instanceCls','itemButtonMode','itemCls','itemId','itemRipple','items','itemsFocusable','itemTpl','keyMap','keyMapEnabled','keyMapTarget','lastSelected','layout','left','listeners','loadingHeight','loadingText','manageBorders','margin','markDirty','masked','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','padding','plugins','pressedDelay','publishes','record','rect','reference','referenceHolder','relative','renderTo','resetFocusPosition','right','ripple','scrollable','scrollDock','scrollToTopOnRefresh','selectable','selected','selection','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','store','style','tabIndex','toFrontOnShow','toggleable','tooltip','top','touchAction','tpl','tplWriteMode','translatable','triggerCtEvent','triggerEvent','twoWayBindable','ui','userCls','userSelectable','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
            (new EWCLegend()).events,
            ['ready','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforestorechange','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','childdoubletap','childlongpress','childmouseenter','childmouseleave','childsingletap','childtap','childtaphold','childtouchcancel','childtouchend','childtouchmove','childtouchstart','deactivate','deselect','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','itemdoubletap','itemlongpress','itemmouseenter','itemmouseleave','itemsingletap','itemswipe','itemtap','itemtaphold','itemtouchcancel','itemtouchend','itemtouchmove','itemtouchstart','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','navigate','orientationchange','painted','positionedchange','refresh','remove','removed','renderedchange','resize','rightchange','rowselection','scrollablechange','select','selectionchange','show','storechange','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'legend'
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

//var events = (new EWCLegend()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
