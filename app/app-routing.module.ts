import { AddProductsComponent } from './add-products/add-products.component';
import { VfxComponent } from './services/vfx/vfx.component';
import { VdComponent } from './services/vd/vd.component';
import { GdComponent } from './services/gd/gd.component';

import { ParentComponent } from './parent/parent.component';
import { WmComponent } from './products/wm/wm.component';
import { TelevisionComponent } from './products/television/television.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { PnfComponent } from './pnf/pnf.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { UiComponent } from './services/ui/ui.component';



const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'buy-products', component:ParentComponent},
  {path:'contact', component:ContactComponent},
  {path:'products',component:ProductsComponent, children:[
    {path:'laptop', component:LaptopComponent},
    {path:'mobile', component:MobileComponent},
    {path:'television', component:TelevisionComponent},
    {path:'washing-machine', component:WmComponent}
  ] },
  {path:'services', children:[
    {path:'', component:ServicesComponent},
    {path:'ui', component:UiComponent},
    {path:'graphic', component:GdComponent},
    {path:'video', component:VdComponent},
    {path:'vfx', component:VfxComponent}
  ]},
  {path:'add-products', component:AddProductsComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'**', component:PnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
