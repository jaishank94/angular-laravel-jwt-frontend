import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontendAngular';

  loggedIn = false;

  ngOnInit(){
    
    if(localStorage.getItem('user_token')!==null){
      this.loggedIn = true;
    }
  }

  onLogout(){
    localStorage.removeItem('user_token');
    window.location.reload();
  }
}
