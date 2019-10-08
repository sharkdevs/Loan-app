import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loan-stats-header',
  templateUrl: './loan-stats-header.component.html',
  styleUrls: ['./loan-stats-header.component.scss']
})
export class LoanStatsHeaderComponent implements OnInit {
  @Input() totalOutstanding;
  @Input() totalLoan;
  
  constructor() { }

  ngOnInit() {
  }

}
