import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-provider-login',
  templateUrl: './provider-login.component.html',
  styleUrls: ['./provider-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProviderLoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
