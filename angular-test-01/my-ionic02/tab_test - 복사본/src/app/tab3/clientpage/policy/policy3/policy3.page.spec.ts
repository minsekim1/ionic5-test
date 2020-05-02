import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Policy3Page } from './policy3.page';

describe('Policy3Page', () => {
  let component: Policy3Page;
  let fixture: ComponentFixture<Policy3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Policy3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Policy3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
