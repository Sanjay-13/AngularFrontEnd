import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateTopicsComponent } from './update-topics.component';

describe('UpdateTopicsComponent', () => {
  let component: UpdateTopicsComponent;
  let fixture: ComponentFixture<UpdateTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
