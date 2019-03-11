import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { QuoteService } from '../quote.service';
@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {
  content:string = "";

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.quoteService.addQuote(this.content)
    .subscribe(
      (quote:any)=>{
        alert("Quote Created!"+ quote)
      }
    );
    this.content= '';
  }

}
