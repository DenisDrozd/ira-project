import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule
    ],
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    entryComponents: [
        HeaderComponent
    ],
    providers: [],
    bootstrap: [HeaderComponent]
})
export class HeaderModule { }
