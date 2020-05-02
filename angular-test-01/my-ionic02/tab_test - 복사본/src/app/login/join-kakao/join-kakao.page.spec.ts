import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JoinKakaoPage } from './join-kakao.page';

describe('JoinKakaoPage', () => {
  let component: JoinKakaoPage;
  let fixture: ComponentFixture<JoinKakaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinKakaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JoinKakaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
