import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatTableModule, MatIconModule, 
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from 'ng-sidebar';
import { CardComponent } from './card/card.component';
import { LoansTableComponent } from './loans-table/loans-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoanService } from 'src/services/loan.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LoansTableComponent,
    DashboardComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    SidebarModule.forRoot()
  ],
  exports: [
    // Material
    MatTableModule,
    MatIconModule,
  ],
  providers: [LoanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
