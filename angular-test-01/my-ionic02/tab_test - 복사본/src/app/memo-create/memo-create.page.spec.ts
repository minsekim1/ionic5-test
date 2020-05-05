import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemoCreatePage } from './memo-create.page';

describe('MemoCreatePage', () => {
  let component: MemoCreatePage;
  let fixture: ComponentFixture<MemoCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemoCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
