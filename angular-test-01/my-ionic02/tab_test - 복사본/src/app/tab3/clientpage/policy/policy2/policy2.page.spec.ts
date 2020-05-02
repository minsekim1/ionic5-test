import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Policy2Page } from './policy2.page';

describe('Policy2Page', () => {
  let component: Policy2Page;
  let fixture: ComponentFixture<Policy2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Policy2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Policy2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
