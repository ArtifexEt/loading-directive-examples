import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirectiveExampleRootComponent } from './attribute-directive-example-root.component';

describe('AttributeDirectiveExampleRootComponent', () => {
  let component: AttributeDirectiveExampleRootComponent;
  let fixture: ComponentFixture<AttributeDirectiveExampleRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeDirectiveExampleRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeDirectiveExampleRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
