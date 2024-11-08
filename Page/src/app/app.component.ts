import { Component, ViewChild, ElementRef,AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './Index.html',
  styleUrls: ['./style.css']
})
export class AppComponent {

  currentPage:string='';
  @ViewChild('item1') item1!: ElementRef ;
  @ViewChild('item2') item2!:ElementRef;
  @ViewChild('item3') item3!:ElementRef;
  @ViewChild('item4') item4!:ElementRef;
  constructor(private location: Location) { 
 
   
  }
  ngOnInit():void{
    this.obtenerDireccionActual();
  }

  ngAfterViewInit():void{
    const current= this.location.path();
    
    if(current ==='/Contacto'){
      this.item3.nativeElement.classList="nav-item active";
      this.item1.nativeElement.classList="nav-item";
      this.item2.nativeElement.classList="nav-item";
      this.item4.nativeElement.classList="nav-item";
    }
    else if(current ===''){
      this.item3.nativeElement.classList="nav-item";
      this.item1.nativeElement.classList="nav-item active";
      this.item2.nativeElement.classList="nav-item";
      this.item4.nativeElement.classList="nav-item";
    }
    else if(current ==='/Actividades'){
      this.item3.nativeElement.classList="nav-item";
      this.item1.nativeElement.classList="nav-item";
      this.item2.nativeElement.classList="nav-item";
      this.item4.nativeElement.classList="nav-item active";
    }
    else if(current ==='/QuienesSomos'){
      this.item3.nativeElement.classList="nav-item";
      this.item1.nativeElement.classList="nav-item";
      this.item2.nativeElement.classList="nav-item active";
      this.item4.nativeElement.classList="nav-item";
    }
    else{
      this.item3.nativeElement.classList="nav-item";
      this.item1.nativeElement.classList="nav-item";
      this.item2.nativeElement.classList="nav-item";
      this.item4.nativeElement.classList="nav-item";
    }
  
  }
  obtenerDireccionActual(): void {
    this.currentPage= this.location.path();    
  }
  
}



