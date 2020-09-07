import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-user-tabs',
  templateUrl: './user-tabs.component.html',
  styleUrls: ['./user-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserTabsComponent implements OnInit {
  constructor(public cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}
}
