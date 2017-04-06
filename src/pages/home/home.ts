import { Component } from '@angular/core';
//import { _ } from 'lodash';
import { RatesService } from '../../services/RatesService';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class Home {

    constructor(public navCtrl: NavController,
                private ratesService: RatesService) { }

    rates: Object;

    base = 'GBP';

    ngOnInit() {

        this.ratesService.get$(this.base).subscribe(
            data => this.rates = data.rates
        );

    }

    currency: string = 'USD';
    amount: number;

    
    //rate: number = _.find(this.rates, function(o) { return o.key === this.currency });

    rate: number = this.rates[this.currency];
    
    result: number = this.amount * this.rate;

}
