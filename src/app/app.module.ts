import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavleftComponent } from './navleft/navleft.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductitemComponent } from './productitem/productitem.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavleftComponent,
    FooterComponent,
    ContentComponent,
    ProductlistComponent,
    ProductitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
