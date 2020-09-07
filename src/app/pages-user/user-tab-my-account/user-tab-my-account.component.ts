import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-tab-my-account',
  templateUrl: './user-tab-my-account.component.html',
  styleUrls: ['./user-tab-my-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserTabMyAccountComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
