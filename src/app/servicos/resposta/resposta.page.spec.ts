import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespostaPage } from './resposta.page';

describe('RespostaPage', () => {
  let component: RespostaPage;
  let fixture: ComponentFixture<RespostaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespostaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespostaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
