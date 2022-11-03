import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSendSuccessComponent } from './link-send-success.component';

describe('LinkSendSuccessComponent', () => {
  let component: LinkSendSuccessComponent;
  let fixture: ComponentFixture<LinkSendSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkSendSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkSendSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
