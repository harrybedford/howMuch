import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { About } from '../pages/about/about';
import { Home } from '../pages/home/home';
import { Rates } from '../pages/rates/rates';
import { TabsPage } from '../pages/tabs/tabs';
import { RatesService } from '../services/RatesService';

@NgModule({
    declarations: [
        MyApp,
        About,
        Rates,
        Home,
        TabsPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        About,
        Rates,
        Home,
        TabsPage
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        RatesService
    ]
})

export class AppModule { }
