import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-provider-tab-home',
  templateUrl: './provider-tab-home.component.html',
  styleUrls: ['./provider-tab-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProviderTabHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
