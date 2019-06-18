import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BodyComponent} from './body.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule
    ],
    declarations: [
        BodyComponent
    ],
    exports: [
        BodyComponent
    ],
    entryComponents: [
        BodyComponent
    ],
    providers: [],
    bootstrap: [BodyComponent]
})
export class BodyModule { }
