import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostDetailsComponent } from './admin-post-details.component';

describe('AdminPostDetailsComponent', () => {
  let component: AdminPostDetailsComponent;
  let fixture: ComponentFixture<AdminPostDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPostDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
