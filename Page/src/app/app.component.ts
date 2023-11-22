import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './Index.html',
  styleUrls: ['./style.css']
})
export class AppComponent {

  currentPage:string='';

  constructor(private router: Router){
    
  }
  
}

