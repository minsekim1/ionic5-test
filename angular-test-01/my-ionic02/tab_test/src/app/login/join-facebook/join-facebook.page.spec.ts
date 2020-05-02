import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JoinFacebookPage } from './join-facebook.page';

describe('JoinFacebookPage', () => {
  let component: JoinFacebookPage;
  let fixture: ComponentFixture<JoinFacebookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinFacebookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JoinFacebookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
