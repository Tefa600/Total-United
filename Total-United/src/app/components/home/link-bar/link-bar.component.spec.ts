import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkBarComponent } from './link-bar.component';

describe('LinkBarComponent', () => {
  let component: LinkBarComponent;
  let fixture: ComponentFixture<LinkBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
