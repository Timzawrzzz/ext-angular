import { EngBase } from './eng-base';
export declare class ExtBooleancolumnMetaData {
    static PROPERTIES: string[];
    static EVENTS: any[];
    static EVENTNAMES: string[];
}
import { ElementRef } from '@angular/core';
export declare class ExtBooleancolumnComponent extends EngBase {
    xtype: string;
    constructor(eRef: ElementRef, hostComponent: EngBase);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
}