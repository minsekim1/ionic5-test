import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlramPage } from './alram.page';

describe('AlramPage', () => {
  let component: AlramPage;
  let fixture: ComponentFixture<AlramPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlramPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
