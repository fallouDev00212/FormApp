import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaPageComponent } from './ia-page.component';

describe('IaPageComponent', () => {
  let component: IaPageComponent;
  let fixture: ComponentFixture<IaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
