import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceBlockComponent } from './choice-block.component';

describe('ChoiceBlockComponent', () => {
  let component: ChoiceBlockComponent;
  let fixture: ComponentFixture<ChoiceBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
