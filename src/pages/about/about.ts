import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { _ } from 'lodash';
import { RatesService } from '../../services/RatesService';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})

export class About {

    constructor(public navCtrl: NavController,
                private ratesService: RatesService) { }
}