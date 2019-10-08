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
import { LoanService } from 'src/app/services/loan.service';
import { HttpClientModule } from '@angular/common/http';
import { FarmersChartComponent } from './farmers-chart/farmers-chart.component';
import { ChartsModule } from 'ng2-charts';
import { LoanStatsHeaderComponent } from './loan-stats-header/loan-stats-header.component';
import { ManagerService } from './services/manager.service';
import { OfficerPerformanceComponent } from './officer-performance/officer-performance.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LoansTableComponent,
    DashboardComponent,
    FarmersChartComponent,
    LoanStatsHeaderComponent,
    OfficerPerformanceComponent,
  ],
  imports: [
  HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    ChartsModule,
    MatIconModule,
    SidebarModule.forRoot()
  ],
  exports: [
    // Material
    MatTableModule,
    MatIconModule,
  ],
  providers: [LoanService, ManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
