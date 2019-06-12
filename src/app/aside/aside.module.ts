import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AsideComponent} from './aside.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule
    ],
    declarations: [
        AsideComponent
    ],
    exports: [
        AsideComponent
    ],
    entryComponents: [
        AsideComponent
    ],
    providers: [],
    bootstrap: [AsideComponent]
})
export class AsideModule { }
