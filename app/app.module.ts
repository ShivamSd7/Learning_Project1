import { ApiService } from './AppServices/api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PnfComponent } from './pnf/pnf.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { TelevisionComponent } from './products/television/television.component';
import { WmComponent } from './products/wm/wm.component';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ServicesComponent } from './services/services.component';
import { UiComponent } from './services/ui/ui.component';
import { GdComponent } from './services/gd/gd.component';
import { VdComponent } from './services/vd/vd.component';
import { VfxComponent } from './services/vfx/vfx.component';
import { AddProductsComponent } from './add-products/add-products.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductsComponent,
    LoginComponent,
    SignupComponent,
    PnfComponent,
    LaptopComponent,
    MobileComponent,
    TelevisionComponent,
    WmComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    NavBarComponent,
    ServicesComponent,
    UiComponent,
    GdComponent,
    VdComponent,
    VfxComponent,
    AddProductsComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
