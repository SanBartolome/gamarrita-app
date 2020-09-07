import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-provider-statistics',
  templateUrl: './provider-statistics.component.html',
  styleUrls: ['./provider-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProviderStatisticsComponent implements OnInit {
  isHistoric = false;

  constructor() {}

  ngOnInit(): void {}

  changeToHistoric(value: boolean) {
    if (this.isHistoric === value) {
      return;
    }
    this.isHistoric = value;
  }
}
