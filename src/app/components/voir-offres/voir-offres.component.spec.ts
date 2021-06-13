import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirOffresComponent } from './voir-offres.component';

describe('VoirOffresComponent', () => {
  let component: VoirOffresComponent;
  let fixture: ComponentFixture<VoirOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirOffresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
