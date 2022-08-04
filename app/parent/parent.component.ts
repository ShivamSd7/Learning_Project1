import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  proSelected:boolean= false;
  selProduct:string[]=[];
  addedProducts:any;

  onSelectProduct(product:any){
    this.proSelected = true;
    this.selProduct = product;
    }

    onAddedProduct(proData:any){
      this.addedProducts = proData;
    }  

    orderSuccess(){
      alert("Order Placed Successfully..")
    }
  }


  

