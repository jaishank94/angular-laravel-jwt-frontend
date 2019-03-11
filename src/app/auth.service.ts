import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';
@Injectable()
export class AuthService {
    constructor(private http:HttpClient){

    }

    signup(username: string, email:string, password:string){
        let body = {name:username, email:email,password:password};
        return this.http.post('http://localhost:8000/api/user', body);
    }

    signin(email:string, password:string){
        let body = {email:email,password:password};
        return this.http.post('http://localhost:8000/api/signin', body)
        //     .then(
        //     (response: Response)=>{
        //         const token = response.json().token;
        //         const base64Url = token.split('.')[1];
        //         const base64 = base64Url.replace('-','+').replace('_','/');
        //         return {token:token, decodes:JSON.parse(window.atob(base64))};
        //     }
        // );
    }
}