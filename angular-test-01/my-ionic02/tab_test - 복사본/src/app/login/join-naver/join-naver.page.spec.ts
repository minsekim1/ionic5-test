import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JoinNaverPage } from './join-naver.page';

describe('JoinNaverPage', () => {
  let component: JoinNaverPage;
  let fixture: ComponentFixture<JoinNaverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinNaverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JoinNaverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
