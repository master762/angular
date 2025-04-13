import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubscribwComponent } from './cubscribw.component';

describe('CubscribwComponent', () => {
  let component: CubscribwComponent;
  let fixture: ComponentFixture<CubscribwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CubscribwComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CubscribwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
