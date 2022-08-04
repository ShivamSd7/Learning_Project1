import { ApiService } from './../AppServices/api.service';
import { ProductData } from './products.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  formValue!:FormGroup
  productModelObj : ProductData = new ProductData;
  allProductData:any;
  showAdd!:boolean;
  showBtn!:boolean;

  constructor(private formBuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name:[''],
      email:[''],
      mobile:[''],
      address:[''],
      products:[''],
    })
      this.getAllData();
  }

  clickAddProduct(){
    this.formValue.reset();
    this.showAdd=true;
    this.showBtn=false;
  }

  addProduct(){
    this.productModelObj.name = this.formValue.value.name;
    this.productModelObj.email = this.formValue.value.email;
    this.productModelObj.mobile = this.formValue.value.mobile;
    this.productModelObj.address = this.formValue.value.address;
    this.productModelObj.products = this.formValue.value.products;

    this.api.postProduct(this.productModelObj).subscribe(res=>{
      console.log(res)
      alert("Products Records added Successfully");
      let ref = document.getElementById('clear');
      ref?.click();

      this.formValue.reset();
      this.getAllData();
    },
    err=>{
      alert ("Something Went Wrong !")
    })
  }

  getAllData(){
    this.api.getProduct().subscribe(res=>{
      this.allProductData = res;
    })
  }

  deleteProduct(data:any) {
    this.api.deleteProduct(data.id).subscribe(res=>{
      alert("Product Deleted")
      this.getAllData();
    })
  }

  onEdit(data:any){
    this.showAdd=false;
    this.showBtn=true;
    this.productModelObj.id = data.id
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['products'].setValue(data.productse);
  }

  update(){
    this.productModelObj.name = this.formValue.value.name;
    this.productModelObj.email = this.formValue.value.email;
    this.productModelObj.mobile = this.formValue.value.mobile;
    this.productModelObj.address = this.formValue.value.address;
    this.productModelObj.products = this.formValue.value.products;

    this.api.updateProduct(this.productModelObj, this.productModelObj.id).subscribe(res=>{
      alert("Product Updated Successfully...")
      let ref = document.getElementById('clear');
      ref?.click();

      this.formValue.reset();
      this.getAllData();
    })
  }

  }


