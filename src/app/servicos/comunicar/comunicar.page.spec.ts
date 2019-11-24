import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComunicarPage } from './comunicar.page';

describe('ComunicarPage', () => {
  let component: ComunicarPage;
  let fixture: ComponentFixture<ComunicarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComunicarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
