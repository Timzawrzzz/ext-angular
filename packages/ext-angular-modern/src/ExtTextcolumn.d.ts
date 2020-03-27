import { ElementRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './runtime/angularbase';
import * as ɵngcc0 from '@angular/core';
export declare class ExtTextcolumnComponent extends EngBase {
    constructor(eRef: ElementRef, hostComponent: EngBase, vc: ViewContainerRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExtTextcolumnComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ExtTextcolumnComponent, "ExtTextcolumn", never, {
    "aMe": "aMe";
    "header": "header";
    "renderer": "renderer";
    "label": "label";
    "fitToParent": "fitToParent";
    "tab": "tab";
    "config": "config";
    "platformConfig": "platformConfig";
    "extname": "extname";
    "viewport": "viewport";
    "align": "align";
    "plugins": "plugins";
    "responsiveConfig": "responsiveConfig";
    "responsiveFormulas": "responsiveFormulas";
    "activeChildTabIndex": "activeChildTabIndex";
    "activeItem": "activeItem";
    "alignSelf": "alignSelf";
    "allowFocusingDisabledChildren": "allowFocusingDisabledChildren";
    "alwaysOnTop": "alwaysOnTop";
    "ariaAttributes": "ariaAttributes";
    "ariaDescribedBy": "ariaDescribedBy";
    "ariaLabel": "ariaLabel";
    "ariaLabelledBy": "ariaLabelledBy";
    "autoDestroy": "autoDestroy";
    "autoSize": "autoSize";
    "axisLock": "axisLock";
    "bind": "bind";
    "bodyCls": "bodyCls";
    "border": "border";
    "bottom": "bottom";
    "cardSwitchAnimation": "cardSwitchAnimation";
    "cell": "cell";
    "centered": "centered";
    "cls": "cls";
    "columns": "columns";
    "computedWidth": "computedWidth";
    "constrainAlign": "constrainAlign";
    "contentEl": "contentEl";
    "control": "control";
    "controller": "controller";
    "data": "data";
    "dataIndex": "dataIndex";
    "defaultColumnUI": "defaultColumnUI";
    "defaultEditor": "defaultEditor";
    "defaultFocus": "defaultFocus";
    "defaultListenerScope": "defaultListenerScope";
    "defaults": "defaults";
    "defaultToolWeights": "defaultToolWeights";
    "defaultType": "defaultType";
    "defaultWidth": "defaultWidth";
    "depends": "depends";
    "disabled": "disabled";
    "displayed": "displayed";
    "docked": "docked";
    "draggable": "draggable";
    "editable": "editable";
    "editor": "editor";
    "editorDefaults": "editorDefaults";
    "undefined": "undefined";
    "exportRenderer": "exportRenderer";
    "exportStyle": "exportStyle";
    "exportSummaryRenderer": "exportSummaryRenderer";
    "filter": "filter";
    "flex": "flex";
    "floated": "floated";
    "focusableContainer": "focusableContainer";
    "focusCls": "focusCls";
    "formatter": "formatter";
    "fullscreen": "fullscreen";
    "groupable": "groupable";
    "grouper": "grouper";
    "groupHeaderTpl": "groupHeaderTpl";
    "height": "height";
    "hidden": "hidden";
    "hideable": "hideable";
    "hideAnimation": "hideAnimation";
    "hideMode": "hideMode";
    "hideOnMaskTap": "hideOnMaskTap";
    "hideShowMenuItem": "hideShowMenuItem";
    "html": "html";
    "id": "id";
    "ignore": "ignore";
    "ignoreExport": "ignoreExport";
    "inactiveChildTabIndex": "inactiveChildTabIndex";
    "innerCls": "innerCls";
    "instanceCls": "instanceCls";
    "itemId": "itemId";
    "items": "items";
    "keyMap": "keyMap";
    "keyMapEnabled": "keyMapEnabled";
    "keyMapTarget": "keyMapTarget";
    "layout": "layout";
    "left": "left";
    "listeners": "listeners";
    "locked": "locked";
    "manageBorders": "manageBorders";
    "margin": "margin";
    "masked": "masked";
    "maxHeight": "maxHeight";
    "maxWidth": "maxWidth";
    "menu": "menu";
    "menuDisabled": "menuDisabled";
    "minHeight": "minHeight";
    "minWidth": "minWidth";
    "modal": "modal";
    "modelValidation": "modelValidation";
    "name": "name";
    "nameable": "nameable";
    "nameHolder": "nameHolder";
    "padding": "padding";
    "publishes": "publishes";
    "record": "record";
    "reference": "reference";
    "referenceHolder": "referenceHolder";
    "relative": "relative";
    "renderTo": "renderTo";
    "reserveScrollbar": "reserveScrollbar";
    "resetFocusPosition": "resetFocusPosition";
    "resizable": "resizable";
    "right": "right";
    "ripple": "ripple";
    "scope": "scope";
    "scratchCell": "scratchCell";
    "scrollable": "scrollable";
    "session": "session";
    "shadow": "shadow";
    "shareableName": "shareableName";
    "shim": "shim";
    "showAnimation": "showAnimation";
    "sortable": "sortable";
    "sorter": "sorter";
    "stateful": "stateful";
    "statefulDefaults": "statefulDefaults";
    "stateId": "stateId";
    "style": "style";
    "summary": "summary";
    "summaryCell": "summaryCell";
    "summaryDataIndex": "summaryDataIndex";
    "summaryFormatter": "summaryFormatter";
    "summaryRenderer": "summaryRenderer";
    "tabIndex": "tabIndex";
    "text": "text";
    "toFrontOnShow": "toFrontOnShow";
    "toolDefaults": "toolDefaults";
    "tools": "tools";
    "tooltip": "tooltip";
    "top": "top";
    "touchAction": "touchAction";
    "tpl": "tpl";
    "tplWriteMode": "tplWriteMode";
    "translatable": "translatable";
    "twoWayBindable": "twoWayBindable";
    "ui": "ui";
    "userCls": "userCls";
    "userSelectable": "userSelectable";
    "verticalOverflow": "verticalOverflow";
    "viewModel": "viewModel";
    "weight": "weight";
    "weighted": "weighted";
    "width": "width";
    "x": "x";
    "xtype": "xtype";
    "y": "y";
    "zIndex": "zIndex";
}, {
    "ready": "ready";
    "created": "created";
    "activate": "activate";
    "activeItemchange": "activeItemchange";
    "add": "add";
    "added": "added";
    "beforeactiveItemchange": "beforeactiveItemchange";
    "beforebottomchange": "beforebottomchange";
    "beforecenteredchange": "beforecenteredchange";
    "beforedisabledchange": "beforedisabledchange";
    "beforedockedchange": "beforedockedchange";
    "beforeheightchange": "beforeheightchange";
    "beforehiddenchange": "beforehiddenchange";
    "beforehide": "beforehide";
    "beforeleftchange": "beforeleftchange";
    "beforemaxHeightchange": "beforemaxHeightchange";
    "beforemaxWidthchange": "beforemaxWidthchange";
    "beforeminHeightchange": "beforeminHeightchange";
    "beforeminWidthchange": "beforeminWidthchange";
    "beforeorientationchange": "beforeorientationchange";
    "beforerightchange": "beforerightchange";
    "beforescrollablechange": "beforescrollablechange";
    "beforeshow": "beforeshow";
    "beforetofront": "beforetofront";
    "beforetopchange": "beforetopchange";
    "beforewidthchange": "beforewidthchange";
    "blur": "blur";
    "bottomchange": "bottomchange";
    "centeredchange": "centeredchange";
    "deactivate": "deactivate";
    "destroy": "destroy";
    "disabledchange": "disabledchange";
    "dockedchange": "dockedchange";
    "erased": "erased";
    "floatingchange": "floatingchange";
    "focus": "focus";
    "focusenter": "focusenter";
    "focusleave": "focusleave";
    "fullscreen": "fullscreen";
    "heightchange": "heightchange";
    "hiddenchange": "hiddenchange";
    "hide": "hide";
    "initialize": "initialize";
    "leftchange": "leftchange";
    "maxHeightchange": "maxHeightchange";
    "maxWidthchange": "maxWidthchange";
    "minHeightchange": "minHeightchange";
    "minWidthchange": "minWidthchange";
    "move": "move";
    "moved": "moved";
    "orientationchange": "orientationchange";
    "painted": "painted";
    "positionedchange": "positionedchange";
    "remove": "remove";
    "removed": "removed";
    "renderedchange": "renderedchange";
    "resize": "resize";
    "rightchange": "rightchange";
    "scrollablechange": "scrollablechange";
    "show": "show";
    "tofront": "tofront";
    "topchange": "topchange";
    "updatedata": "updatedata";
    "widthchange": "widthchange";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0VGV4dGNvbHVtbi5kLnRzIiwic291cmNlcyI6WyJFeHRUZXh0Y29sdW1uLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9ydW50aW1lL2FuZ3VsYXJiYXNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEV4dFRleHRjb2x1bW5Db21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihlUmVmOiBFbGVtZW50UmVmLCBob3N0Q29tcG9uZW50OiBFbmdCYXNlLCB2YzogVmlld0NvbnRhaW5lclJlZik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=