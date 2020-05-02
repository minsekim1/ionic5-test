import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Policy4Page } from './policy4.page';

describe('Policy4Page', () => {
  let component: Policy4Page;
  let fixture: ComponentFixture<Policy4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Policy4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Policy4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
