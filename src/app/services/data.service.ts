import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) { }

  getEnterprises() {
    return this.http.get('/api/enterprise').map(res => res.json());
  }
}
