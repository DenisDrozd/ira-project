import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderModule} from './header/header.module';
import {AsideModule} from './aside/aside.module';
import {BodyModule} from './body/body.module';

@NgModule({
    imports: [
        BrowserModule,
        HeaderModule,
        AsideModule,
        BodyModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
