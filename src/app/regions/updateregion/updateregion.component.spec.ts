import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateregionComponent } from './updateregion.component';

describe('UpdateregionComponent', () => {
  let component: UpdateregionComponent;
  let fixture: ComponentFixture<UpdateregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateregionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
