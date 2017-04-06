import { Component } from '@angular/core';

import { Home } from '../home/home';
import { Rates } from '../rates/rates';
import { About } from '../about/about';

@Component({
	templateUrl: 'tabs.html'
})

export class TabsPage {
	tab1Root: any = Home;
	tab2Root: any = Rates;
	tab3Root: any = About;

	constructor() { }
}
