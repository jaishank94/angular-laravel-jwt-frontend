import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs';
import { Observable } from 'rxjs';
import { Quote } from './quote.interface';
import { AuthService } from './auth.service';

@Injectable()

export class QuoteService {
    constructor(private http: HttpClient,
        private authService: AuthService){

    }

    addQuote(content:string){
        const token = localStorage.getItem('user_token');
        const body = {content: content};
        const headers = new Headers({'Content-Type':'application/json'});
        console.log('ggg',body);
        return this.http.post('http://localhost:8000/api/quote?token='+token, body);
    }

    getQuotes(): Observable<any>{
        return this.http.get('http://127.0.0.1:8000/api/quotes');
    }

    updateQuote(id: number, newContent:string){
        const token = localStorage.getItem('user_token');
        const body = {content: newContent};
        const headers = new Headers({'Content-Type':'application/json'});
        return this.http.put('http://127.0.0.1:8000/api/quote/'+ id +'?token='+token, body);
    }

    deleteQuote(id:number){
        const token = localStorage.getItem('user_token');
        return this.http.delete('http://127.0.0.1:8000/api/quote/' + id+'?token='+token);
    }
}
