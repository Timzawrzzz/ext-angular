import * as tslib_1 from "tslib";
//import EWCD3_sunburst from '../dist/ext-d3-sunburst.component.js';
//inputs: (new EWCD3_sunburst()).properties,
import EWCD3_sunburst from '@sencha/ext-web-components-classic/dist/ext-d3-sunburst.component.js';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
var ExtD3_sunburstComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtD3_sunburstComponent, _super);
    function ExtD3_sunburstComponent(eRef, hostComponent, vc) {
        var _this = _super.call(this, eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'clipScene', 'cls', 'colorAxis', 'componentCls', 'controller', 'defaultListenerScope', 'disabled', 'undefined', 'expandEventName', 'focusCls', 'height', 'hidden', 'hideMode', 'hierarchyCls', 'instanceCls', 'interactions', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'linkKey', 'listeners', 'margin', 'name', 'nameable', 'nodeChildren', 'nodeClass', 'nodeKey', 'nodeText', 'nodeTransform', 'nodeValue', 'noParentValue', 'noSizeLayout', 'padding', 'plugins', 'publishes', 'reference', 'renderLinks', 'renderTo', 'ripple', 'rootVisible', 'selectEventName', 'selection', 'session', 'shareableName', 'size', 'sorter', 'store', 'style', 'textPadding', 'tooltip', 'touchAction', 'transitions', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width', 'zoomParentDotRadius',], (new EWCD3_sunburst()).events, ['ready', 'beforedisabledchange', 'beforeheightchange', 'beforehiddenchange', 'beforewidthchange', 'blur', 'disabledchange', 'focus', 'focusenter', 'focusleave', 'heightchange', 'hiddenchange', 'layout', 'sceneresize', 'scenesetup', 'widthchange',], vc) || this;
        _this.xtype = 'd3-sunburst';
        return _this;
    }
    ExtD3_sunburstComponent_1 = ExtD3_sunburstComponent;
    ExtD3_sunburstComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtD3_sunburstComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtD3_sunburstComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtD3_sunburstComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtD3_sunburstComponent_1;
    ExtD3_sunburstComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
        { type: ViewContainerRef }
    ]; };
    ExtD3_sunburstComponent = ExtD3_sunburstComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ExtD3_sunburst',
            inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'clipScene', 'cls', 'colorAxis', 'componentCls', 'controller', 'defaultListenerScope', 'disabled', 'undefined', 'expandEventName', 'focusCls', 'height', 'hidden', 'hideMode', 'hierarchyCls', 'instanceCls', 'interactions', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'linkKey', 'listeners', 'margin', 'name', 'nameable', 'nodeChildren', 'nodeClass', 'nodeKey', 'nodeText', 'nodeTransform', 'nodeValue', 'noParentValue', 'noSizeLayout', 'padding', 'plugins', 'publishes', 'reference', 'renderLinks', 'renderTo', 'ripple', 'rootVisible', 'selectEventName', 'selection', 'session', 'shareableName', 'size', 'sorter', 'store', 'style', 'textPadding', 'tooltip', 'touchAction', 'transitions', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width', 'zoomParentDotRadius',],
            outputs: ['ready', 'beforedisabledchange', 'beforeheightchange', 'beforehiddenchange', 'beforewidthchange', 'blur', 'disabledchange', 'focus', 'focusenter', 'focusleave', 'heightchange', 'hiddenchange', 'layout', 'sceneresize', 'scenesetup', 'widthchange',],
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtD3_sunburstComponent_1; }) }],
            template: '<ng-content></ng-content>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf())
    ], ExtD3_sunburstComponent);
    return ExtD3_sunburstComponent;
}(EngBase));
export { ExtD3_sunburstComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCD3_sunburst()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0RDNfc3VuYnVyc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLWNsYXNzaWMvIiwic291cmNlcyI6WyJzcmMvRXh0RDNfc3VuYnVyc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9FQUFvRTtBQUNwRSw0Q0FBNEM7QUFDNUMsT0FBTyxjQUFjLE1BQU0sc0VBQXNFLENBQUM7QUFDbEcsT0FBTyxFQUNILElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU3hDO0lBQTZDLG1EQUFPO0lBQ2hELGlDQUNJLElBQWdCLEVBQ2dCLGFBQXNCLEVBQ3RELEVBQW9CO1FBSHhCLFlBS0ksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsb0JBQW9CLEVBQUMsZ0JBQWdCLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLEtBQUssRUFBQyxXQUFXLEVBQUMsY0FBYyxFQUFDLFlBQVksRUFBQyxzQkFBc0IsRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLGlCQUFpQixFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxjQUFjLEVBQUMsYUFBYSxFQUFDLGNBQWMsRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFDLGNBQWMsRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMs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QUFhLEVBQUMsYUFBYSxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFDLE9BQU8sRUFBQyxxQkFBcUIsRUFBRTtZQUN6OEIsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFDLHNCQUFzQixFQUFDLG9CQUFvQixFQUFDLG9CQUFvQixFQUFDLG1CQUFtQixFQUFDLE1BQU0sRUFBQyxnQkFBZ0IsRUFBQyxPQUFPLEVBQUMsWUFBWSxFQUFDLFlBQVksRUFBQyxjQUFjLEVBQUMsY0FBYyxFQUFDLFFBQVEsRUFBQyxhQUFhLEVBQUMsWUFBWSxFQUFDLGFBQWEsRUFBRTtZQUNsUCxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEseUJBQXVCLEVBQXZCLENBQXVCLENBQUMsRUFBQyxDQUFDO1lBQ3ZGLFFBQVEsRUFBRSwyQkFBMkI7U0FDeEMsQ0FBQztRQUlPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtPQUgxQix1QkFBdUIsQ0FnQ25DO0lBQUQsOEJBQUM7Q0FBQSxBQWhDRCxDQUE2QyxPQUFPLEdBZ0NuRDtTQWhDWSx1QkFBdUI7QUFtQ3BDLDZCQUE2QjtBQUM3QixpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDLGlGQUFpRjtBQUNqRixhQUFhO0FBQ2Isb0JBQW9CO0FBQ3BCLElBQUk7QUFDSix5Q0FBeUM7QUFFekMsaURBQWlEO0FBQ2pELHlCQUF5QjtBQUN6QiwyQ0FBMkM7QUFDM0Msb0NBQW9DO0FBQ3BDLElBQUk7QUFDSiw0Q0FBNEM7QUFDNUMsbUJBQW1CO0FBQ25CLDJDQUEyQztBQUMzQyxHQUFHO0FBQ0gsa0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgRVdDRDNfc3VuYnVyc3QgZnJvbSAnLi4vZGlzdC9leHQtZDMtc3VuYnVyc3QuY29tcG9uZW50LmpzJztcbi8vaW5wdXRzOiAobmV3IEVXQ0QzX3N1bmJ1cnN0KCkpLnByb3BlcnRpZXMsXG5pbXBvcnQgRVdDRDNfc3VuYnVyc3QgZnJvbSAnQHNlbmNoYS9leHQtd2ViLWNvbXBvbmVudHMtY2xhc3NpYy9kaXN0L2V4dC1kMy1zdW5idXJzdC5jb21wb25lbnQuanMnO1xuaW1wb3J0IHtcbiAgICBIb3N0LFxuICAgIE9wdGlvbmFsLFxuICAgIFNraXBTZWxmLFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIGZvcndhcmRSZWYsXG4gICAgVmlld0NvbnRhaW5lclJlZlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vYW5ndWxhcmJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ0V4dEQzX3N1bmJ1cnN0JyxcbiAgICBpbnB1dHM6IFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2JpbmQnLCdib3JkZXInLCdjbGlwU2NlbmUnLCdjbHMnLCdjb2xvckF4aXMnLCdjb21wb25lbnRDbHMnLCdjb250cm9sbGVyJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkaXNhYmxlZCcsJ3VuZGVmaW5lZCcsJ2V4cGFuZEV2ZW50TmFtZScsJ2ZvY3VzQ2xzJywnaGVpZ2h0JywnaGlkZGVuJywnaGlkZU1vZGUnLCdoaWVyYXJjaHlDbHMnLCdpbnN0YW5jZUNscycsJ2ludGVyYWN0aW9ucycsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsYXlvdXQnLCdsaW5rS2V5JywnbGlzdGVuZXJzJywnbWFyZ2luJywnbmFtZScsJ25hbWVhYmxlJywnbm9kZUNoaWxkcmVuJywnbm9kZUNsYXNzJywnbm9kZUtleScsJ25vZGVUZXh0Jywnbm9kZVRyYW5zZm9ybScsJ25vZGVWYWx1ZScsJ25vUGFyZW50VmFsdWUnLCdub1NpemVMYXlvdXQnLCdwYWRkaW5nJywncGx1Z2lucycsJ3B1Ymxpc2hlcycsJ3JlZmVyZW5jZScsJ3JlbmRlckxpbmtzJywncmVuZGVyVG8nLCdyaXBwbGUnLCdyb290VmlzaWJsZScsJ3NlbGVjdEV2ZW50TmFtZScsJ3NlbGVjdGlvbicsJ3Nlc3Npb24nLCdzaGFyZWFibGVOYW1lJywnc2l6ZScsJ3NvcnRlcicsJ3N0b3JlJywnc3R5bGUnLCd0ZXh0UGFkZGluZycsJ3Rvb2x0aXAnLCd0b3VjaEFjdGlvbicsJ3RyYW5zaXRpb25zJywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VzZXJDbHMnLCd2aWV3TW9kZWwnLCd3aWR0aCcsJ3pvb21QYXJlbnREb3RSYWRpdXMnLF0sXG4gICAgb3V0cHV0czogWydyZWFkeScsJ2JlZm9yZWRpc2FibGVkY2hhbmdlJywnYmVmb3JlaGVpZ2h0Y2hhbmdlJywnYmVmb3JlaGlkZGVuY2hhbmdlJywnYmVmb3Jld2lkdGhjaGFuZ2UnLCdibHVyJywnZGlzYWJsZWRjaGFuZ2UnLCdmb2N1cycsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnaGVpZ2h0Y2hhbmdlJywnaGlkZGVuY2hhbmdlJywnbGF5b3V0Jywnc2NlbmVyZXNpemUnLCdzY2VuZXNldHVwJywnd2lkdGhjaGFuZ2UnLF0sXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEQzX3N1bmJ1cnN0Q29tcG9uZW50KX1dLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgRXh0RDNfc3VuYnVyc3RDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlLFxuICAgICAgICB2YzogVmlld0NvbnRhaW5lclJlZlxuICAgICAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2JpbmQnLCdib3JkZXInLCdjbGlwU2NlbmUnLCdjbHMnLCdjb2xvckF4aXMnLCdjb21wb25lbnRDbHMnLCdjb250cm9sbGVyJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkaXNhYmxlZCcsJ3VuZGVmaW5lZCcsJ2V4cGFuZEV2ZW50TmFtZScsJ2ZvY3VzQ2xzJywnaGVpZ2h0JywnaGlkZGVuJywnaGlkZU1vZGUnLCdoaWVyYXJjaHlDbHMnLCdpbnN0YW5jZUNscycsJ2ludGVyYWN0aW9ucycsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsYXlvdXQnLCdsaW5rS2V5JywnbGlzdGVuZXJzJywnbWFyZ2luJywnbmFtZScsJ25hbWVhYmxlJywnbm9kZUNoaWxkcmVuJywnbm9kZUNsYXNzJywnbm9kZUtleScsJ25vZGVUZXh0Jywnbm9kZVRyYW5zZm9ybScsJ25vZGVWYWx1ZScsJ25vUGFyZW50VmFsdWUnLCdub1NpemVMYXlvdXQnLCdwYWRkaW5nJywncGx1Z2lucycsJ3B1Ymxpc2hlcycsJ3JlZmVyZW5jZScsJ3JlbmRlckxpbmtzJywncmVuZGVyVG8nLCdyaXBwbGUnLCdyb290VmlzaWJsZScsJ3NlbGVjdEV2ZW50TmFtZScsJ3NlbGVjdGlvbicsJ3Nlc3Npb24nLCdzaGFyZWFibGVOYW1lJywnc2l6ZScsJ3NvcnRlcicsJ3N0b3JlJywnc3R5bGUnLCd0ZXh0UGFkZGluZycsJ3Rvb2x0aXAnLCd0b3VjaEFjdGlvbicsJ3RyYW5zaXRpb25zJywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VzZXJDbHMnLCd2aWV3TW9kZWwnLCd3aWR0aCcsJ3pvb21QYXJlbnREb3RSYWRpdXMnLF0sXG4gICAgICAgICAgICAobmV3IEVXQ0QzX3N1bmJ1cnN0KCkpLmV2ZW50cyxcbiAgICAgICAgICAgIFsncmVhZHknLCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsJ2JlZm9yZWhlaWdodGNoYW5nZScsJ2JlZm9yZWhpZGRlbmNoYW5nZScsJ2JlZm9yZXdpZHRoY2hhbmdlJywnYmx1cicsJ2Rpc2FibGVkY2hhbmdlJywnZm9jdXMnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2hlaWdodGNoYW5nZScsJ2hpZGRlbmNoYW5nZScsJ2xheW91dCcsJ3NjZW5lcmVzaXplJywnc2NlbmVzZXR1cCcsJ3dpZHRoY2hhbmdlJyxdLFxuICAgICAgICAgICAgdmNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ2QzLXN1bmJ1cnN0J1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuXG5cbi8vIGZ1bmN0aW9uIHRvUGFzY2FsQ2FzZShzKSB7XG4vLyAgICAgcmV0dXJuIHMubWF0Y2goL1thLXpdKy9naSlcbi8vICAgICAgICAgLm1hcChmdW5jdGlvbiAod29yZCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgIC5qb2luKCcnKVxuLy8gfVxuLy8gdmFyIHBhc2NhbE5hbWUgPSB0b1Bhc2NhbENhc2UodGFnTmFtZSlcblxuLy92YXIgZXZlbnRzID0gKG5ldyBFV0NEM19zdW5idXJzdCgpKS5ldmVudG5hbWVzO1xuLy92YXIgZXZlbnRuYW1lc2FsbCA9IFtdO1xuLy9ldmVudHMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuLy8gICAgZXZlbnRuYW1lc2FsbC5wdXNoKGV2ZW50Lm5hbWUpXG4vL30pXG4vL2NvbnN0IGRpc3RpbmN0ID0gKHZhbHVlLCBpbmRleCwgc2VsZikgPT4ge1xuLy8gICAgLy9yZXR1cm4gdHJ1ZVxuLy8gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xuLy99XG4vL3ZhciBldmVudG5hbWVzID0gZXZlbnRuYW1lc2FsbC5maWx0ZXIoZGlzdGluY3QpO1xuIl19