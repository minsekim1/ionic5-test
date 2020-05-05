import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemoDetailPage } from './memo-detail.page';

describe('MemoDetailPage', () => {
  let component: MemoDetailPage;
  let fixture: ComponentFixture<MemoDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
