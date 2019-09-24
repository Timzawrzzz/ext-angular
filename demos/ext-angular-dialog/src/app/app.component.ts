import { Component, ChangeDetectorRef } from '@angular/core';


@Component({
    selector: 'app-root',
    template: `
    <ext-panel title="Application Home" [padding]="10" [fitToParent]="true">

        <ext-container html="<h1>Double-Click on an item in this list for the details dialog</h1>"></ext-container>

        <ext-grid
            height="200px"
            [shadow]="true"
            (ready)="readyGrid($event)"
            (childdoubletap)="childdoubletapGrid($event)"
        >
            <ext-column text="name" dataIndex="name"></ext-column>
            <ext-column text="email" dataIndex="email" flex="1"></ext-column>
        </ext-grid>

        <ext-toolbar docked="bottom">
            <ext-spacer></ext-spacer>
            <ext-button [text]="'Show dialog'" (tap)="showDialog()" [ui]="'action raised'"></ext-button>
        </ext-toolbar>

    <ext-dialog
        [title]="'Dialog2'"
        [displayed]="isDialog1Showing"
        layout="fit"
        [width]="dialog1Width"
        [height]="dialog1Height"
        [constrainDrag]="false"
        [closable]="false"
        [maximizable]="true"
        [closeAction]="'hide'"
        [bodyPadding]="0"
        [defaultFocus]="'#ok'"
        (onHide)="onHide()"
    >
        <ext-formpanel [padding]="20">
            <ext-fieldset
                [title]="'Personal Info'"
                [defaults]="{ labelAlign: 'placeholder' }"
            >
                <ext-textfield
                    [label]="'Name'"
                    [required]="true"
                    [placeholder]="'This field is required'"
                    [disabled]="disabled"
                >
                </ext-textfield>
                <ext-passwordfield
                    [label]="'Password'"
                    [required]="true"
                    [revealable]="true"
                    [disabled]="disabled"
                >
                </ext-passwordfield>
                <ext-emailfield
                    [label]="'Email'"
                    [placeholder]="'me@sencha.com'"
                    [disabled]="disabled"
                >
                </ext-emailfield>
                <ext-textfield
                    [label]="'Phone Number'"
                    [inputMask]="'(999) 999-9999'"
                    [inputType]="'tel'"
                    [disabled]="disabled"
                >
                </ext-textfield>
                <ext-urlfield
                    [label]="'URL'"
                    [placeholder]="'http://sencha.com'"
                    [disabled]="disabled"
                >
                </ext-urlfield>
                <ext-spinnerfield
                    [label]="'Spinner'"
                    [minValue]="0"
                    [maxValue]="1000"
                    [stepValue]="1"
                    [cycle]="true"
                    [margin]="'15 0 0 0'"
                    [labelAlign]="'top'"
                    [disabled]="disabled"
                ></ext-spinnerfield>
                <ext-datepickerfield
                    [label]="'Start Date'"
                    [disabled]="disabled"
                ></ext-datepickerfield>
                <ext-selectfield
                    [label]="'Rank'"
                    [disabled]="disabled"
                    [options]="[
                        { text: 'Master', value: 'master' },
                        { text: 'Journeyman', value: 'journeyman' },
                        { text: 'Apprentice', value: 'apprentice' }
                    ]"
                ></ext-selectfield>
                <ext-textfield
                    [label]="'With Error'"
                    [errorMessage]="'This field is invalid'"
                    [errorTarget]="'under'"
                    [disabled]="disabled"
                >
                </ext-textfield>
                <ext-sliderfield
                    [label]="'Slider'"
                    [disabled]="disabled"
                ></ext-sliderfield>
                <ext-togglefield
                    [label]="'Toggle'"
                    [disabled]="disabled"
                ></ext-togglefield>
                <ext-textareafield
                    [label]="'Bio'"
                    [maxRows]="5"
                    [disabled]="disabled"
                ></ext-textareafield>
            </ext-fieldset>

        </ext-formpanel>

        <ext-toolbar docked="bottom">
            <ext-spacer></ext-spacer>
            <ext-button align="right" text="Cancel" (tap)="onCancel1()"></ext-button>
            <ext-button text="OK" (tap)="onOk1()"></ext-button>
        </ext-toolbar>

    </ext-dialog>

    <ext-dialog
        [displayed]="isDialog2Showing"
        [title]="'Dialog2'"
        [width]="600"
        [height]="600"
        [constrainDrag]="false"
        [closable]="false"
        [maximizable]="true"
        [closeAction]="'hide'"
        [bodyPadding]="0"
        [defaultFocus]="'#ok'"
        (onHide)="onHide()"
        [html]="
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                "
        >

        <ext-toolbar docked="bottom">
            <ext-spacer></ext-spacer>
            <ext-button align="right" text="Cancel" (tap)="onCancel2()"></ext-button>
            <ext-button text="OK" (tap)="onOk2()"></ext-button>
        </ext-toolbar>

    </ext-dialog>

    <ext-dialog
        [displayed]="isDialog3Showing"
        [title]="'Dialog3'"
        [width]="400"
        [height]="400"
        [constrainDrag]="false"
        [closable]="false"
        [maximizable]="true"
        [closeAction]="'hide'"
        [bodyPadding]="20"
        [defaultFocus]="'#ok'"
        (onHide)="onHide()"
        [html]="
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            "
    >

        <ext-toolbar docked="bottom">
            <ext-spacer></ext-spacer>
            <ext-button align="right" text="Cancel" (tap)="onCancel3()"></ext-button>
            <ext-button text="OK" (tap)="onOk3()"></ext-button>
        </ext-toolbar>

    </ext-dialog>





</ext-panel>
    `,
    styles: []
})
export class AppComponent {
    constructor(private cd: ChangeDetectorRef) {};

    title = 'the grid';
    data=[
        {name: 'Marc', email: 'marc@gmail.com'},
        {name: 'Nick', email: 'nick@gmail.com'},
        {name: 'Andy', email: 'andy@gmail.com'},
    ]
    readyGrid(event) {
        console.log(event)
        var grid = event.detail.cmp;
        grid.setData(this.data)
    }
    childdoubletapGrid(event) {
        console.log(event);
        this.isDialog1Showing = true;
        this.cd.detectChanges();
    }

    dialog1Width:number = document.body.clientWidth - 100;
    dialog1Height:number = document.body.clientHeight - 100;

    isDialog1Showing:boolean = false;
    isDialog2Showing:boolean = false;
    isDialog3Showing:boolean = false;
    showDialog = () => {this.isDialog1Showing = true;this.cd.detectChanges();}

    onOk1 = () => {
        this.isDialog2Showing = true;
        this.cd.detectChanges();
    }
    onCancel1 = () => {this.isDialog1Showing = false;this.cd.detectChanges();}

    onOk2 = () => {
        this.isDialog3Showing = true;
        this.cd.detectChanges();
    }
    onCancel2 = () => {this.isDialog2Showing = false;this.cd.detectChanges();}

    onOk3 = () => {
        this.isDialog3Showing = true;

        this.cd.detectChanges();
    }
    onCancel3 = () => {this.isDialog3Showing = false;this.cd.detectChanges();}




    //onHide = () => {this.isDialogShowing = false;this.cd.detectChanges();}
}


