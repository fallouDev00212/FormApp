import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IapageComponent } from './iapage.component';

describe('IapageComponent', () => {
  let component: IapageComponent;
  let fixture: ComponentFixture<IapageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IapageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
