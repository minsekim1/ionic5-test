import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JoinGooglePage } from './join-google.page';

describe('JoinGooglePage', () => {
  let component: JoinGooglePage;
  let fixture: ComponentFixture<JoinGooglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinGooglePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JoinGooglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
