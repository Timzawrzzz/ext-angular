import {
  Injectable,
  Host,
  Optional,
  SkipSelf,
  Output,
  OnInit,
  AfterContentInit,
  OnChanges,
  Component,
  ElementRef,
  forwardRef
} from '@angular/core';
import { base } from './base';
export class emailfieldMetaData {
  public static XTYPE: string = 'emailfield';
  public static PROPERTIES: string[] = [
    'alwaysOnTop',
    'animateUnderline',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoCapitalize',
    'autoComplete',
    'autoCorrect',
    'autoFitErrors',
    'autoHideInputMask',
    'axisLock',
    'badFormatMessage',
    'bind',
    'bodyAlign',
    'border',
    'bottom',
    'centered',
    'clearable',
    'cls',
    'constrainAlign',
    'contentEl',
    'controller',
    'data',
    'defaultListenerScope',
    'disabled',
    'displayed',
    'docked',
    'draggable',
    'editable',
    'enterAnimation',
    'error',
    'errorMessage',
    'errorTarget',
    'errorTip',
    'errorTpl',
    'eventHandlers',
    'exitAnimation',
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
    'inline',
    'inputCls',
    'inputMask',
    'inputType',
    'inputValue',
    'instanceCls',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'label',
    'labelAlign',
    'labelCls',
    'labelInPlaceholder',
    'labelMinWidth',
    'labelTextAlign',
    'labelWidth',
    'labelWrap',
    'left',
    'listeners',
    'margin',
    'maxHeight',
    'maxLength',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'name',
    'nameable',
    'padding',
    'parseValidator',
    'pattern',
    'placeholder',
    'placeHolder',
    'plugins',
    'publishes',
    'readOnly',
    'record',
    'reference',
    'relative',
    'renderTo',
    'required',
    'requiredMessage',
    'right',
    'ripple',
    'scrollable',
    'selfAlign',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'sideError',
    'stateful',
    'statefulDefaults',
    'stateId',
    'style',
    'tabIndex',
    'textAlign',
    'tipError',
    'titleError',
    'toFrontOnShow',
    'tooltip',
    'top',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'translatable',
    'triggers',
    'twoWayBindable',
    'ui',
    'underError',
    'userCls',
    'userSelectable',
    'validateDisabled',
    'validationMessage',
    'validators',
    'value',
    'viewModel',
    'weight',
    'width',
    'x',
    'xtype',
    'y',
    'zIndex',
    'platformConfig',
    'responsiveConfig',
    'align',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'action',parameters:'emailfield,e'},
		{name:'added',parameters:'sender,container,index'},
		{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehide',parameters:'sender'},
		{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeshow',parameters:'sender'},
		{name:'beforetofront',parameters:'emailfield'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'emailfield,e'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'change',parameters:'emailfield,newValue,oldValue'},
		{name:'clearicontap',parameters:'emailfield,input,e'},
		{name:'click',parameters:'e'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'erased',parameters:'sender'},
		{name:'errorchange',parameters:'emailfield,error'},
		{name:'floatingchange',parameters:'sender,positioned'},
		{name:'focus',parameters:'emailfield,e'},
		{name:'focusenter',parameters:'emailfield,event'},
		{name:'focusleave',parameters:'emailfield,event'},
		{name:'fullscreen',parameters:'sender'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'sender'},
		{name:'initialize',parameters:'sender'},
		{name:'keyup',parameters:'emailfield,e'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'mousedown',parameters:'emailfield,e'},
		{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'sender,element'},
		{name:'paste',parameters:'emailfield,e'},
		{name:'positionedchange',parameters:'sender,positioned'},
		{name:'removed',parameters:'sender,container,index'},
		{name:'resize',parameters:'element,info'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'show',parameters:'sender'},
		{name:'tofront',parameters:'emailfield'},
		{name:'topchange',parameters:'sender,value,oldValue'},
		{name:'updatedata',parameters:'sender,newData'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'action',
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
		'change',
		'clearicontap',
		'click',
		'destroy',
		'disabledchange',
		'dockedchange',
		'erased',
		'errorchange',
		'floatingchange',
		'focus',
		'focusenter',
		'focusleave',
		'fullscreen',
		'heightchange',
		'hiddenchange',
		'hide',
		'initialize',
		'keyup',
		'leftchange',
		'maxHeightchange',
		'maxWidthchange',
		'minHeightchange',
		'minWidthchange',
		'mousedown',
		'moved',
		'orientationchange',
		'painted',
		'paste',
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
}
@Component({
  selector: 'emailfield', 
  inputs: emailfieldMetaData.PROPERTIES,
  outputs: emailfieldMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtEmailfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtEmailfieldComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(
    eRef:ElementRef, @Host() @Optional() @SkipSelf() public hostComponent : base) {
      super(eRef.nativeElement,emailfieldMetaData,hostComponent)
    }
  public ngOnInit() {
    this.baseOnInit(emailfieldMetaData)
  }
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    //this['ready'].emit(this)
  }
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}

}