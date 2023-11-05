import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DialogEditUserComponent } from './dialog-edit-user.component';



describe('DialogEditUserComponent', () => {
  let component: DialogEditUserComponent;
  let fixture: ComponentFixture<DialogEditUserComponent>;


  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [DialogEditUserComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: []
    })
      .compileComponents();
  }));
  fixture = TestBed.createComponent(DialogEditUserComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





