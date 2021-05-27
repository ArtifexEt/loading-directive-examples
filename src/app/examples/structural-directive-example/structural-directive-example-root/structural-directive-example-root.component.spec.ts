import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveExampleRootComponent } from './structural-directive-example-root.component';

describe('StructuralDirectiveExampleRootComponent', () => {
  let component: StructuralDirectiveExampleRootComponent;
  let fixture: ComponentFixture<StructuralDirectiveExampleRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDirectiveExampleRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectiveExampleRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
