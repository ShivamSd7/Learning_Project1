import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  
  Product(){
    this.router.navigate(['products'])
    }

    Services(){
      this.router.navigate(['services']) 
    }  

  }


