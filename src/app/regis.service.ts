import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Eventregis } from './eventregis';
import { Loginuser } from './loginuser';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class RegisService {

  _url='http://localhost:3000/registration';
  urllogin='http://localhost:3000/login';
  urleventregis='http://localhost:3000/eregis';
  constructor(private _http: HttpClient) { }
  registration(userData: User)
  {
    return this._http.post<any>(this._url, userData);
  }
  userlogin(logindata: Loginuser)
  {
    return this._http.post<any>(this.urllogin, logindata);
  }
  eventregis(eventdata:Eventregis)
  {
    return this._http.post<any>(this.urleventregis, eventdata);
  }
}
