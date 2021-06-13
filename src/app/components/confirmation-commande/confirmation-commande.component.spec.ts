import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationCommandeComponent } from './confirmation-commande.component';

describe('ConfirmationCommandeComponent', () => {
  let component: ConfirmationCommandeComponent;
  let fixture: ComponentFixture<ConfirmationCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
