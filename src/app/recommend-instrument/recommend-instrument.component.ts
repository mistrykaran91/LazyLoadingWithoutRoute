import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recommend-instrument',
  templateUrl: './recommend-instrument.component.html',
  styleUrls: ['./recommend-instrument.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendInstrumentComponent implements OnInit {

  @Input()
  recommendation: FormGroup;

  @Input()
  isFromFocusList: boolean;

  constructor() { }

  ngOnInit() {
    debugger;
  }

}
