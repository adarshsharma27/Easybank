import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsaidComponent } from './whatsaid.component';

describe('WhatsaidComponent', () => {
  let component: WhatsaidComponent;
  let fixture: ComponentFixture<WhatsaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
