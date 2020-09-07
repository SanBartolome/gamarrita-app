import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-tab-home',
  templateUrl: './user-tab-home.component.html',
  styleUrls: ['./user-tab-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserTabHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
