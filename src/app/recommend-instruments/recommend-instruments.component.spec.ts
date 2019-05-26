import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendInstrumentsComponent } from './recommend-instruments.component';

describe('RecommendInstrumentsComponent', () => {
  let component: RecommendInstrumentsComponent;
  let fixture: ComponentFixture<RecommendInstrumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendInstrumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
