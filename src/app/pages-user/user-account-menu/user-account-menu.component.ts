import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-account-menu',
  templateUrl: './user-account-menu.component.html',
  styleUrls: ['./user-account-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAccountMenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
