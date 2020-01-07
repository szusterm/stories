import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndingBlockComponent } from './ending-block.component';

describe('EndingBlockComponent', () => {
  let component: EndingBlockComponent;
  let fixture: ComponentFixture<EndingBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndingBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
