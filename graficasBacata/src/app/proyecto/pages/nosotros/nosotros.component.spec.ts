import { ComponentFixture, TestBed } from '@angular/core/testing';
import { nosotrosComponent } from './nosotros.component';


describe('ProyectoComponent', () => {
  let component: nosotrosComponent;
  let fixture: ComponentFixture<nosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ nosotrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(nosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
