import {Injectable} from '@angular/core';
import {LoginUserModel} from "../model/login-user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {AppService} from "./app.service";
import {UserModel} from "../model/user.model";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private appService: AppService) { }

  public login(userData: LoginUserModel): Observable<UserModel> {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const options = {
      headers: headers,
      withCredentials: true
    };

    const body = `username=${userData.email}&password=${userData.password}`;

    return this.http.post("/api/login", body, options).pipe(map((loggedUser: UserModel) => {
      this.appService.setLoggedUser(loggedUser);
      return loggedUser;
    }));
  }

  public logout() {
    return this.http.post("/api/logout", {}).pipe((data) => {
      this.appService.logout();
      return data;
    });
  }

}
