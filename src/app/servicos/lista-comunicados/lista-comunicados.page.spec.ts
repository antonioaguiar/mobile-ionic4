import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaComunicadosPage } from './lista-comunicados.page';

describe('ListaComunicadosPage', () => {
  let component: ListaComunicadosPage;
  let fixture: ComponentFixture<ListaComunicadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaComunicadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaComunicadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
