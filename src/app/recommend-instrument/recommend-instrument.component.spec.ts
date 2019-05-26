import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendInstrumentComponent } from './recommend-instrument.component';

describe('RecommendInstrumentComponent', () => {
  let component: RecommendInstrumentComponent;
  let fixture: ComponentFixture<RecommendInstrumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendInstrumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
