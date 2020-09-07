import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-provider-tabs',
  templateUrl: './provider-tabs.component.html',
  styleUrls: ['./provider-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProviderTabsComponent implements OnInit {
  constructor(public cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}
}
