var ExtItemheaderComponent_1;
import { __decorate, __param } from "tslib";
//import EWCItemheader from '../dist/ext-itemheader.component.js';
//inputs: (new EWCItemheader()).properties,
//import EWCItemheader from '@sencha/ext-web-components-modern/dist/ext-itemheader.component.js';
import { EWCItemheader } from '@sencha/ext-web-components-modern';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
let ExtItemheaderComponent = ExtItemheaderComponent_1 = class ExtItemheaderComponent extends EngBase {
    constructor(eRef, hostComponent, vc) {
        super(eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'axisLock', 'bind', 'border', 'bottom', 'centered', 'cls', 'constrainAlign', 'contentEl', 'controller', 'data', 'defaultListenerScope', 'defaultToolWeights', 'disabled', 'displayed', 'docked', 'draggable', 'undefined', 'undefined', 'undefined', 'flex', 'floated', 'focusCls', 'fullscreen', 'group', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'left', 'listeners', 'margin', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'padding', 'pinned', 'plugins', 'publishes', 'record', 'reference', 'relative', 'renderTo', 'right', 'ripple', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'stateful', 'statefulDefaults', 'stateId', 'style', 'tabIndex', 'toFrontOnShow', 'toolDefaults', 'tools', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'viewModel', 'weight', 'width', 'x', 'xtype', 'y', 'zIndex',], (new EWCItemheader()).events, ['ready', 'added', 'beforebottomchange', 'beforecenteredchange', 'beforedisabledchange', 'beforedockedchange', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'destroy', 'disabledchange', 'dockedchange', 'erased', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'moved', 'orientationchange', 'painted', 'positionedchange', 'removed', 'resize', 'rightchange', 'scrollablechange', 'show', 'tofront', 'topchange', 'updatedata', 'widthchange',], vc);
        this.xtype = 'itemheader';
    }
    ngOnInit() {
        this.baseOnInit();
    }
    ngAfterViewInit() {
        this.baseAfterViewInit();
    }
    ngOnChanges(changes) {
        this.baseOnChanges(changes);
    }
    ngOnDestroy() {
        this.baseOnDestroy();
    }
};
ExtItemheaderComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
    { type: ViewContainerRef }
];
ExtItemheaderComponent = ExtItemheaderComponent_1 = __decorate([
    Component({
        selector: 'ExtItemheader',
        inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'axisLock', 'bind', 'border', 'bottom', 'centered', 'cls', 'constrainAlign', 'contentEl', 'controller', 'data', 'defaultListenerScope', 'defaultToolWeights', 'disabled', 'displayed', 'docked', 'draggable', 'undefined', 'undefined', 'undefined', 'flex', 'floated', 'focusCls', 'fullscreen', 'group', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'left', 'listeners', 'margin', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'padding', 'pinned', 'plugins', 'publishes', 'record', 'reference', 'relative', 'renderTo', 'right', 'ripple', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'stateful', 'statefulDefaults', 'stateId', 'style', 'tabIndex', 'toFrontOnShow', 'toolDefaults', 'tools', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'viewModel', 'weight', 'width', 'x', 'xtype', 'y', 'zIndex',],
        outputs: ['ready', 'added', 'beforebottomchange', 'beforecenteredchange', 'beforedisabledchange', 'beforedockedchange', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'destroy', 'disabledchange', 'dockedchange', 'erased', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'moved', 'orientationchange', 'painted', 'positionedchange', 'removed', 'resize', 'rightchange', 'scrollablechange', 'show', 'tofront', 'topchange', 'updatedata', 'widthchange',],
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtItemheaderComponent_1) }],
        template: '<ng-content></ng-content>'
    }),
    __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf())
], ExtItemheaderComponent);
export { ExtItemheaderComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCItemheader()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0SXRlbWhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuLyIsInNvdXJjZXMiOlsic3JjL0V4dEl0ZW1oZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrRUFBa0U7QUFDbEUsMkNBQTJDO0FBQzNDLGlHQUFpRztBQUNqRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbEUsT0FBTyxFQUNILElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU3hDLElBQWEsc0JBQXNCLDhCQUFuQyxNQUFhLHNCQUF1QixTQUFRLE9BQU87SUFDL0MsWUFDSSxJQUFnQixFQUNnQixhQUFzQixFQUN0RCxFQUFvQjtRQUVwQixLQUFLLENBQ0QsSUFBSSxFQUNKLGFBQWEsRUFDYixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsb0JBQW9CLEVBQUMsV0FBVyxFQUFDLGFBQWEsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxXQUFXLEVBQUMsZ0JBQWdCLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUMsc0JBQXNCLEVBQUMsb0JBQW9CLEVBQUMsVUFBVSxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMs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RSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsb0JBQW9CLEVBQUMsV0FBVyxFQUFDLGFBQWEsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxXQUFXLEVBQUMsZ0JBQWdCLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUMsc0JBQXNCLEVBQUMsb0JBQW9CLEVBQUMsVUFBVSxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsV0FBVyxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxlQUFlLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxjQUFjLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxlQUFlLEVBQUMsTUFBTSxFQUFDLGVBQWUsRUFBQyxVQUFVLEVBQUMsa0JBQWtCLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsZUFBZSxFQUFDLGNBQWMsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLGNBQWMsRUFBQyxjQUFjLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxnQkFBZ0IsRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUU7UUFDOXNDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsc0JBQXNCLEVBQUMsc0JBQXNCLEVBQUMsb0JBQW9CLEVBQUMsb0JBQW9CLEVBQUMsb0JBQW9CLEVBQUMsWUFBWSxFQUFDLGtCQUFrQixFQUFDLHVCQUF1QixFQUFDLHNCQUFzQixFQUFDLHVCQUF1QixFQUFDLHNCQUFzQixFQUFDLHlCQUF5QixFQUFDLG1CQUFtQixFQUFDLHdCQUF3QixFQUFDLFlBQVksRUFBQyxlQUFlLEVBQUMsaUJBQWlCLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxFQUFDLGNBQWMsRUFBQyxnQkFBZ0IsRUFBQyxTQUFTLEVBQUMsZ0JBQWdCLEVBQUMsY0FBYyxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxPQUFPLEVBQUMsWUFBWSxFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsY0FBYyxFQUFDLGNBQWMsRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFDLFlBQVksRUFBQyxpQkFBaUIsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxnQkFBZ0IsRUFBQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsYUFBYSxFQUFDLGtCQUFrQixFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxhQUFhLEVBQUU7UUFDejJCLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUFzQixDQUFDLEVBQUMsQ0FBQztRQUN0RixRQUFRLEVBQUUsMkJBQTJCO0tBQ3hDLENBQUM7SUFJTyxXQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUE7R0FIMUIsc0JBQXNCLENBZ0NsQztTQWhDWSxzQkFBc0I7QUFtQ25DLDZCQUE2QjtBQUM3QixpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDLGlGQUFpRjtBQUNqRixhQUFhO0FBQ2Isb0JBQW9CO0FBQ3BCLElBQUk7QUFDSix5Q0FBeUM7QUFFekMsZ0RBQWdEO0FBQ2hELHlCQUF5QjtBQUN6QiwyQ0FBMkM7QUFDM0Msb0NBQW9DO0FBQ3BDLElBQUk7QUFDSiw0Q0FBNEM7QUFDNUMsbUJBQW1CO0FBQ25CLDJDQUEyQztBQUMzQyxHQUFHO0FBQ0gsa0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgRVdDSXRlbWhlYWRlciBmcm9tICcuLi9kaXN0L2V4dC1pdGVtaGVhZGVyLmNvbXBvbmVudC5qcyc7XG4vL2lucHV0czogKG5ldyBFV0NJdGVtaGVhZGVyKCkpLnByb3BlcnRpZXMsXG4vL2ltcG9ydCBFV0NJdGVtaGVhZGVyIGZyb20gJ0BzZW5jaGEvZXh0LXdlYi1jb21wb25lbnRzLW1vZGVybi9kaXN0L2V4dC1pdGVtaGVhZGVyLmNvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBFV0NJdGVtaGVhZGVyIH0gZnJvbSAnQHNlbmNoYS9leHQtd2ViLWNvbXBvbmVudHMtbW9kZXJuJztcbmltcG9ydCB7XG4gICAgSG9zdCxcbiAgICBPcHRpb25hbCxcbiAgICBTa2lwU2VsZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBmb3J3YXJkUmVmLFxuICAgIFZpZXdDb250YWluZXJSZWZcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2FuZ3VsYXJiYXNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdFeHRJdGVtaGVhZGVyJyxcbiAgICBpbnB1dHM6IFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWxpZ25TZWxmJywnYWx3YXlzT25Ub3AnLCdhcmlhQXR0cmlidXRlcycsJ2FyaWFEZXNjcmliZWRCeScsJ2FyaWFMYWJlbCcsJ2FyaWFMYWJlbGxlZEJ5JywnYXhpc0xvY2snLCdiaW5kJywnYm9yZGVyJywnYm90dG9tJywnY2VudGVyZWQnLCdjbHMnLCdjb25zdHJhaW5BbGlnbicsJ2NvbnRlbnRFbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkZWZhdWx0VG9vbFdlaWdodHMnLCdkaXNhYmxlZCcsJ2Rpc3BsYXllZCcsJ2RvY2tlZCcsJ2RyYWdnYWJsZScsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ2ZsZXgnLCdmbG9hdGVkJywnZm9jdXNDbHMnLCdmdWxsc2NyZWVuJywnZ3JvdXAnLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRlQW5pbWF0aW9uJywnaGlkZU1vZGUnLCdoaWRlT25NYXNrVGFwJywnaHRtbCcsJ2lkJywnaW5zdGFuY2VDbHMnLCdpdGVtSWQnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGVmdCcsJ2xpc3RlbmVycycsJ21hcmdpbicsJ21heEhlaWdodCcsJ21heFdpZHRoJywnbWluSGVpZ2h0JywnbWluV2lkdGgnLCdtb2RhbCcsJ21vZGVsVmFsaWRhdGlvbicsJ25hbWUnLCduYW1lYWJsZScsJ3BhZGRpbmcnLCdwaW5uZWQnLCdwbHVnaW5zJywncHVibGlzaGVzJywncmVjb3JkJywncmVmZXJlbmNlJywncmVsYXRpdmUnLCdyZW5kZXJUbycsJ3JpZ2h0JywncmlwcGxlJywnc2Nyb2xsYWJsZScsJ3Nlc3Npb24nLCdzaGFkb3cnLCdzaGFyZWFibGVOYW1lJywnc2hpbScsJ3Nob3dBbmltYXRpb24nLCdzdGF0ZWZ1bCcsJ3N0YXRlZnVsRGVmYXVsdHMnLCdzdGF0ZUlkJywnc3R5bGUnLCd0YWJJbmRleCcsJ3RvRnJvbnRPblNob3cnLCd0b29sRGVmYXVsdHMnLCd0b29scycsJ3Rvb2x0aXAnLCd0b3AnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RwbFdyaXRlTW9kZScsJ3RyYW5zbGF0YWJsZScsJ3R3b1dheUJpbmRhYmxlJywndWknLCd1c2VyQ2xzJywndXNlclNlbGVjdGFibGUnLCd2aWV3TW9kZWwnLCd3ZWlnaHQnLCd3aWR0aCcsJ3gnLCd4dHlwZScsJ3knLCd6SW5kZXgnLF0sXG4gICAgb3V0cHV0czogWydyZWFkeScsJ2FkZGVkJywnYmVmb3JlYm90dG9tY2hhbmdlJywnYmVmb3JlY2VudGVyZWRjaGFuZ2UnLCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsJ2JlZm9yZWRvY2tlZGNoYW5nZScsJ2JlZm9yZWhlaWdodGNoYW5nZScsJ2JlZm9yZWhpZGRlbmNoYW5nZScsJ2JlZm9yZWhpZGUnLCdiZWZvcmVsZWZ0Y2hhbmdlJywnYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJywnYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLCdiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLCdiZWZvcmVtaW5XaWR0aGNoYW5nZScsJ2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJywnYmVmb3JlcmlnaHRjaGFuZ2UnLCdiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJywnYmVmb3Jlc2hvdycsJ2JlZm9yZXRvZnJvbnQnLCdiZWZvcmV0b3BjaGFuZ2UnLCdiZWZvcmV3aWR0aGNoYW5nZScsJ2JsdXInLCdib3R0b21jaGFuZ2UnLCdjZW50ZXJlZGNoYW5nZScsJ2Rlc3Ryb3knLCdkaXNhYmxlZGNoYW5nZScsJ2RvY2tlZGNoYW5nZScsJ2VyYXNlZCcsJ2Zsb2F0aW5nY2hhbmdlJywnZm9jdXMnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2Z1bGxzY3JlZW4nLCdoZWlnaHRjaGFuZ2UnLCdoaWRkZW5jaGFuZ2UnLCdoaWRlJywnaW5pdGlhbGl6ZScsJ2xlZnRjaGFuZ2UnLCdtYXhIZWlnaHRjaGFuZ2UnLCdtYXhXaWR0aGNoYW5nZScsJ21pbkhlaWdodGNoYW5nZScsJ21pbldpZHRoY2hhbmdlJywnbW92ZWQnLCdvcmllbnRhdGlvbmNoYW5nZScsJ3BhaW50ZWQnLCdwb3NpdGlvbmVkY2hhbmdlJywncmVtb3ZlZCcsJ3Jlc2l6ZScsJ3JpZ2h0Y2hhbmdlJywnc2Nyb2xsYWJsZWNoYW5nZScsJ3Nob3cnLCd0b2Zyb250JywndG9wY2hhbmdlJywndXBkYXRlZGF0YScsJ3dpZHRoY2hhbmdlJyxdLFxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRJdGVtaGVhZGVyQ29tcG9uZW50KX1dLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgRXh0SXRlbWhlYWRlckNvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2UsXG4gICAgICAgIHZjOiBWaWV3Q29udGFpbmVyUmVmXG4gICAgICAgICkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgWydhTWUnLCAnaGVhZGVyJywgJ3JlbmRlcmVyJywgJ2xhYmVsJywnZml0VG9QYXJlbnQnLCd0YWInLCdjb25maWcnLCdwbGF0Zm9ybUNvbmZpZycsJ2V4dG5hbWUnLCd2aWV3cG9ydCcsJ2FsaWduJywncGx1Z2lucycsJ3Jlc3BvbnNpdmVDb25maWcnLCdyZXNwb25zaXZlRm9ybXVsYXMnLCdhbGlnblNlbGYnLCdhbHdheXNPblRvcCcsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdheGlzTG9jaycsJ2JpbmQnLCdib3JkZXInLCdib3R0b20nLCdjZW50ZXJlZCcsJ2NscycsJ2NvbnN0cmFpbkFsaWduJywnY29udGVudEVsJywnY29udHJvbGxlcicsJ2RhdGEnLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2RlZmF1bHRUb29sV2VpZ2h0cycsJ2Rpc2FibGVkJywnZGlzcGxheWVkJywnZG9ja2VkJywnZHJhZ2dhYmxlJywndW5kZWZpbmVkJywndW5kZWZpbmVkJywndW5kZWZpbmVkJywnZmxleCcsJ2Zsb2F0ZWQnLCdmb2N1c0NscycsJ2Z1bGxzY3JlZW4nLCdncm91cCcsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVBbmltYXRpb24nLCdoaWRlTW9kZScsJ2hpZGVPbk1hc2tUYXAnLCdodG1sJywnaWQnLCdpbnN0YW5jZUNscycsJ2l0ZW1JZCcsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsZWZ0JywnbGlzdGVuZXJzJywnbWFyZ2luJywnbWF4SGVpZ2h0JywnbWF4V2lkdGgnLCdtaW5IZWlnaHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywnbmFtZScsJ25hbWVhYmxlJywncGFkZGluZycsJ3Bpbm5lZCcsJ3BsdWdpbnMnLCdwdWJsaXNoZXMnLCdyZWNvcmQnLCdyZWZlcmVuY2UnLCdyZWxhdGl2ZScsJ3JlbmRlclRvJywncmlnaHQnLCdyaXBwbGUnLCdzY3JvbGxhYmxlJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hvd0FuaW1hdGlvbicsJ3N0YXRlZnVsJywnc3RhdGVmdWxEZWZhdWx0cycsJ3N0YXRlSWQnLCdzdHlsZScsJ3RhYkluZGV4JywndG9Gcm9udE9uU2hvdycsJ3Rvb2xEZWZhdWx0cycsJ3Rvb2xzJywndG9vbHRpcCcsJ3RvcCcsJ3RvdWNoQWN0aW9uJywndHBsJywndHBsV3JpdGVNb2RlJywndHJhbnNsYXRhYmxlJywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VzZXJDbHMnLCd1c2VyU2VsZWN0YWJsZScsJ3ZpZXdNb2RlbCcsJ3dlaWdodCcsJ3dpZHRoJywneCcsJ3h0eXBlJywneScsJ3pJbmRleCcsXSxcbiAgICAgICAgICAgIChuZXcgRVdDSXRlbWhlYWRlcigpKS5ldmVudHMsXG4gICAgICAgICAgICBbJ3JlYWR5JywnYWRkZWQnLCdiZWZvcmVib3R0b21jaGFuZ2UnLCdiZWZvcmVjZW50ZXJlZGNoYW5nZScsJ2JlZm9yZWRpc2FibGVkY2hhbmdlJywnYmVmb3JlZG9ja2VkY2hhbmdlJywnYmVmb3JlaGVpZ2h0Y2hhbmdlJywnYmVmb3JlaGlkZGVuY2hhbmdlJywnYmVmb3JlaGlkZScsJ2JlZm9yZWxlZnRjaGFuZ2UnLCdiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLCdiZWZvcmVtYXhXaWR0aGNoYW5nZScsJ2JlZm9yZW1pbkhlaWdodGNoYW5nZScsJ2JlZm9yZW1pbldpZHRoY2hhbmdlJywnYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLCdiZWZvcmVyaWdodGNoYW5nZScsJ2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLCdiZWZvcmVzaG93JywnYmVmb3JldG9mcm9udCcsJ2JlZm9yZXRvcGNoYW5nZScsJ2JlZm9yZXdpZHRoY2hhbmdlJywnYmx1cicsJ2JvdHRvbWNoYW5nZScsJ2NlbnRlcmVkY2hhbmdlJywnZGVzdHJveScsJ2Rpc2FibGVkY2hhbmdlJywnZG9ja2VkY2hhbmdlJywnZXJhc2VkJywnZmxvYXRpbmdjaGFuZ2UnLCdmb2N1cycsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnZnVsbHNjcmVlbicsJ2hlaWdodGNoYW5nZScsJ2hpZGRlbmNoYW5nZScsJ2hpZGUnLCdpbml0aWFsaXplJywnbGVmdGNoYW5nZScsJ21heEhlaWdodGNoYW5nZScsJ21heFdpZHRoY2hhbmdlJywnbWluSGVpZ2h0Y2hhbmdlJywnbWluV2lkdGhjaGFuZ2UnLCdtb3ZlZCcsJ29yaWVudGF0aW9uY2hhbmdlJywncGFpbnRlZCcsJ3Bvc2l0aW9uZWRjaGFuZ2UnLCdyZW1vdmVkJywncmVzaXplJywncmlnaHRjaGFuZ2UnLCdzY3JvbGxhYmxlY2hhbmdlJywnc2hvdycsJ3RvZnJvbnQnLCd0b3BjaGFuZ2UnLCd1cGRhdGVkYXRhJywnd2lkdGhjaGFuZ2UnLF0sXG4gICAgICAgICAgICB2Y1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAnaXRlbWhlYWRlcidcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cblxuXG4vLyBmdW5jdGlvbiB0b1Bhc2NhbENhc2Uocykge1xuLy8gICAgIHJldHVybiBzLm1hdGNoKC9bYS16XSsvZ2kpXG4vLyAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHdvcmQpIHtcbi8vICAgICAgICAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAuam9pbignJylcbi8vIH1cbi8vIHZhciBwYXNjYWxOYW1lID0gdG9QYXNjYWxDYXNlKHRhZ05hbWUpXG5cbi8vdmFyIGV2ZW50cyA9IChuZXcgRVdDSXRlbWhlYWRlcigpKS5ldmVudG5hbWVzO1xuLy92YXIgZXZlbnRuYW1lc2FsbCA9IFtdO1xuLy9ldmVudHMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuLy8gICAgZXZlbnRuYW1lc2FsbC5wdXNoKGV2ZW50Lm5hbWUpXG4vL30pXG4vL2NvbnN0IGRpc3RpbmN0ID0gKHZhbHVlLCBpbmRleCwgc2VsZikgPT4ge1xuLy8gICAgLy9yZXR1cm4gdHJ1ZVxuLy8gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xuLy99XG4vL3ZhciBldmVudG5hbWVzID0gZXZlbnRuYW1lc2FsbC5maWx0ZXIoZGlzdGluY3QpO1xuIl19