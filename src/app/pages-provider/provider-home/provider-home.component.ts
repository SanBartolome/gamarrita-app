import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-provider-home',
  templateUrl: './provider-home.component.html',
  styleUrls: ['./provider-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProviderHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
