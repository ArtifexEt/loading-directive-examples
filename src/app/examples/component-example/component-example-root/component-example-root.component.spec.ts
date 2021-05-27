import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentExampleRootComponent } from './component-example-root.component';

describe('ComponentExampleRootComponent', () => {
  let component: ComponentExampleRootComponent;
  let fixture: ComponentFixture<ComponentExampleRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentExampleRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentExampleRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
