import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-focus-list',
  templateUrl: './focus-list.component.html',
  styleUrls: ['./focus-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FocusListComponent implements OnInit {

  @Input()
  focusListForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
