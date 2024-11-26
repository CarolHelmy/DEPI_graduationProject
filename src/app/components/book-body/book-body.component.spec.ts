import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBodyComponent } from './book-body.component';

describe('BookBodyComponent', () => {
  let component: BookBodyComponent;
  let fixture: ComponentFixture<BookBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
