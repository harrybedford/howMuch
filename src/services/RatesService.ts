//Example Http service using the fixer.io api for exchange rates

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Loading } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class RatesService {

	constructor(private http: Http) { }

	//ERROR HANDLER
	private handleError (error: Response | any) {
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}

	//OBSERVABLE METHODS
	get$(base) {
		return this.http.get('http://api.fixer.io/latest?base=' + base)
			.map(res => res.json())
			.catch(this.handleError);
	}


}
