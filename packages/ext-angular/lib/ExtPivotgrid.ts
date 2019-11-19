//import EWCPivotgrid from '../dist/ext-pivotgrid.component.js';
//inputs: (new EWCPivotgrid()).properties,
import EWCPivotgrid from '@sencha/ext-web-components/dist/ext-pivotgrid.component.js';
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
    selector: 'ExtPivotgrid',
    inputs: ['renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','associatedData','autoDestroy','autoSize','axisLock','bind','bodyCls','border','bottom','bufferSize','cardSwitchAnimation','centered','cls','clsGrandTotal','clsGroupTotal','collapseDefaults','collapsible','columnLines','columnMenu','columnResize','columns','columnsMenuItem','constrainAlign','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaults','defaultType','deferEmptyText','deselectOnContainerClick','disabled','disableSelection','disclosureProperty','displayed','docked','draggable','emptyItemText','emptyState','emptyText','emptyTextDefaults','emptyTextProperty','enableColumnMove','enableColumnSort','enableLoadMask','undefined','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','grouped','groupFooter','groupHeader','grouping','groupPlaceholder','height','hidden','hideAnimation','hideHeaders','hideMode','hideOnMaskTap','hideScrollbar','horizontalOverflow','html','id','inactiveChildTabIndex','indexBar','infinite','inline','innerCls','innerCtHeight','innerWidth','instanceCls','itemButtonMode','itemCls','itemConfig','itemContentCls','itemDataMap','itemId','itemInnerCls','itemRipple','items','itemsFocusable','itemTpl','keyMap','keyMapEnabled','keyMapTarget','layout','left','leftAxisCellConfig','listeners','loadingHeight','loadingText','maintainChildNodes','manageBorders','margin','markDirty','masked','matrix','maxHeight','maxItemCache','maxWidth','minHeight','minimumBufferDistance','minWidth','modal','modelValidation','multiColumnSort','name','nameable','nameHolder','onItemDisclosure','padding','pinFooters','pinHeaders','pinnedFooter','pinnedFooterHeight','pinnedHeader','pinnedHeaderHeight','plugins','pressedDelay','preventSelectionOnDisclose','preventSelectionOnTool','publishes','record','reference','referenceHolder','relative','renderTo','reserveScrollbar','resetFocusPosition','right','ripple','rowLines','rowNumbers','scrollable','scrollDock','scrollToTopOnRefresh','selectable','selection','session','shadow','shareableName','shim','showAnimation','sortable','startColGroupsCollapsed','startRowGroupsCollapsed','stateful','statefulDefaults','stateId','store','striped','style','tabIndex','title','titleBar','toFrontOnShow','tooltip','top','topAxisCellConfig','topRenderedIndex','touchAction','tpl','tplWriteMode','translatable','triggerCtEvent','triggerEvent','twoWayBindable','ui','userCls','userSelectable','undefined','variableHeights','verticalOverflow','viewModel','visibleHeight','visibleLeft','visibleTop','visibleWidth','weight','weighted','width','x','xtype','y','zIndex',],
    outputs: ['ready','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforecomplete','beforedisabledchange','beforedockedchange','beforeedit','beforegroupcollapse','beforegroupexpand','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeselectionextend','beforeshow','beforestartedit','beforestorechange','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','canceledit','cellselection','centeredchange','childdoubletap','childlongpress','childmouseenter','childmouseleave','childsingletap','childtap','childtaphold','childtouchcancel','childtouchend','childtouchmove','childtouchstart','columnadd','columnhide','columnmenucreated','columnmove','columnremove','columnresize','columnselection','columnshow','columnsort','complete','deactivate','deselect','destroy','disabledchange','disclose','dockedchange','edit','erased','floatingchange','focus','focusenter','focusleave','fullscreen','groupcollapse','groupexpand','heightchange','hiddenchange','hide','initialize','itemaction','itemdoubletap','itemlongpress','itemmouseenter','itemmouseleave','itemsingletap','itemswipe','itemtap','itemtaphold','itemtouchcancel','itemtouchend','itemtouchmove','itemtouchstart','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','navigate','orientationchange','painted','pivotbeforereconfigure','pivotbeforerequest','pivotbuildtotals','pivotcolumnsbuilt','pivotdone','pivotgroupcelldoubletap','pivotgroupcelltap','pivotgroupcelltaphold','pivotgroupcollapse','pivotgroupdoubletap','pivotgroupexpand','pivotgrouptap','pivotgrouptaphold','pivotitemcelldoubletap','pivotitemcelltap','pivotitemcelltaphold','pivotitemdoubletap','pivotitemtap','pivotitemtaphold','pivotmodelbuilt','pivotprogress','pivotreconfigure','pivotrecordbuilt','pivotrequestexception','pivotstart','pivotstorebuilt','pivottotalcelldoubletap','pivottotalcelltap','pivottotalcelltaphold','pivottotaldoubletap','pivottotaltap','pivottotaltaphold','positionedchange','refresh','remove','removed','renderedchange','resize','rightchange','scrollablechange','select','selectionextenderdrag','show','specialkey','startedit','storechange','tofront','topchange','updatedata','validateedit','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPivotgridComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtPivotgridComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','associatedData','autoDestroy','autoSize','axisLock','bind','bodyCls','border','bottom','bufferSize','cardSwitchAnimation','centered','cls','clsGrandTotal','clsGroupTotal','collapseDefaults','collapsible','columnLines','columnMenu','columnResize','columns','columnsMenuItem','constrainAlign','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaults','defaultType','deferEmptyText','deselectOnContainerClick','disabled','disableSelection','disclosureProperty','displayed','docked','draggable','emptyItemText','emptyState','emptyText','emptyTextDefaults','emptyTextProperty','enableColumnMove','enableColumnSort','enableLoadMask','undefined','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','grouped','groupFooter','groupHeader','grouping','groupPlaceholder','height','hidden','hideAnimation','hideHeaders','hideMode','hideOnMaskTap','hideScrollbar','horizontalOverflow','html','id','inactiveChildTabIndex','indexBar','infinite','inline','innerCls','innerCtHeight','innerWidth','instanceCls','itemButtonMode','itemCls','itemConfig','itemContentCls','itemDataMap','itemId','itemInnerCls','itemRipple','items','itemsFocusable','itemTpl','keyMap','keyMapEnabled','keyMapTarget','layout','left','leftAxisCellConfig','listeners','loadingHeight','loadingText','maintainChildNodes','manageBorders','margin','markDirty','masked','matrix','maxHeight','maxItemCache','maxWidth','minHeight','minimumBufferDistance','minWidth','modal','modelValidation','multiColumnSort','name','nameable','nameHolder','onItemDisclosure','padding','pinFooters','pinHeaders','pinnedFooter','pinnedFooterHeight','pinnedHeader','pinnedHeaderHeight','plugins','pressedDelay','preventSelectionOnDisclose','preventSelectionOnTool','publishes','record','reference','referenceHolder','relative','renderTo','reserveScrollbar','resetFocusPosition','right','ripple','rowLines','rowNumbers','scrollable','scrollDock','scrollToTopOnRefresh','selectable','selection','session','shadow','shareableName','shim','showAnimation','sortable','startColGroupsCollapsed','startRowGroupsCollapsed','stateful','statefulDefaults','stateId','store','striped','style','tabIndex','title','titleBar','toFrontOnShow','tooltip','top','topAxisCellConfig','topRenderedIndex','touchAction','tpl','tplWriteMode','translatable','triggerCtEvent','triggerEvent','twoWayBindable','ui','userCls','userSelectable','undefined','variableHeights','verticalOverflow','viewModel','visibleHeight','visibleLeft','visibleTop','visibleWidth','weight','weighted','width','x','xtype','y','zIndex',],
            (new EWCPivotgrid()).events,
            ['ready','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforecomplete','beforedisabledchange','beforedockedchange','beforeedit','beforegroupcollapse','beforegroupexpand','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeselectionextend','beforeshow','beforestartedit','beforestorechange','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','canceledit','cellselection','centeredchange','childdoubletap','childlongpress','childmouseenter','childmouseleave','childsingletap','childtap','childtaphold','childtouchcancel','childtouchend','childtouchmove','childtouchstart','columnadd','columnhide','columnmenucreated','columnmove','columnremove','columnresize','columnselection','columnshow','columnsort','complete','deactivate','deselect','destroy','disabledchange','disclose','dockedchange','edit','erased','floatingchange','focus','focusenter','focusleave','fullscreen','groupcollapse','groupexpand','heightchange','hiddenchange','hide','initialize','itemaction','itemdoubletap','itemlongpress','itemmouseenter','itemmouseleave','itemsingletap','itemswipe','itemtap','itemtaphold','itemtouchcancel','itemtouchend','itemtouchmove','itemtouchstart','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','navigate','orientationchange','painted','pivotbeforereconfigure','pivotbeforerequest','pivotbuildtotals','pivotcolumnsbuilt','pivotdone','pivotgroupcelldoubletap','pivotgroupcelltap','pivotgroupcelltaphold','pivotgroupcollapse','pivotgroupdoubletap','pivotgroupexpand','pivotgrouptap','pivotgrouptaphold','pivotitemcelldoubletap','pivotitemcelltap','pivotitemcelltaphold','pivotitemdoubletap','pivotitemtap','pivotitemtaphold','pivotmodelbuilt','pivotprogress','pivotreconfigure','pivotrecordbuilt','pivotrequestexception','pivotstart','pivotstorebuilt','pivottotalcelldoubletap','pivottotalcelltap','pivottotalcelltaphold','pivottotaldoubletap','pivottotaltap','pivottotaltaphold','positionedchange','refresh','remove','removed','renderedchange','resize','rightchange','scrollablechange','select','selectionextenderdrag','show','specialkey','startedit','storechange','tofront','topchange','updatedata','validateedit','widthchange',],
            vc
        )
        this.xtype = 'pivotgrid'
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

//var events = (new EWCPivotgrid()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
