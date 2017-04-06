import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { _ } from 'lodash';
import { RatesService } from '../../services/RatesService';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-rates',
    templateUrl: 'rates.html'
})

export class Rates {

    constructor(public navCtrl: NavController,
                private ratesService: RatesService) { }

    rates;

    base = 'GBP';

    ngOnInit() {

        this.ratesService.get$(this.base).subscribe(
            data => this.rates = data.rates
        );

    }
}