import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-user-search-products',
  templateUrl: './user-search-products.component.html',
  styleUrls: ['./user-search-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSearchProductsComponent implements OnInit {
  options$: Observable<any[]>;
  moreOptions$: Observable<any[]>;
  userMessage: string;
  chatbotMessage$: Observable<string>;
  options = [
    { id: 1, description: 'Quiero buscar una prenda' },
    { id: 2, description: 'Quiero ver las prendas de una categoría' },
    { id: 3, description: 'Quiero ver las prendas de una marca en especial' },
    { id: 4, description: 'Quiero buscar una tienda' },
  ];
  options1 = [
    { id: 1, description: 'Ver camisas' },
    { id: 2, description: 'Ver vestidos' },
    { id: 3, description: 'Ver casacas' },
  ];
  options2 = [
    { id: 1, description: 'Ver ropa de niña' },
    { id: 2, description: 'Ver ropa de niño' },
    { id: 3, description: 'Ver ropa de mujer' },
    { id: 4, description: 'Ver ropa de hombre' },
  ];
  options3 = [
    { id: 1, description: 'Ver ropa marca John Holden' },
    { id: 2, description: 'Ver ropa marca Miguelito' },
    { id: 2, description: 'Ver ropa marca Rossil' },
  ];
  options4 = [{ id: 1, description: 'Nombre de la tienda o dirección' }];

  constructor(private cdr: ChangeDetectorRef) {
    this.options$ = of(this.options).pipe(delay(300));
  }

  ngOnInit(): void {}

  createUserMessage(id: number) {
    this.userMessage = this.options.find((a) => a.id === id).description;
    this.chatbotMessage$ = of('Le tengo algunas sugerencias').pipe(delay(100));
    this.cdr.detectChanges();
    switch (id) {
      case 1:
        this.moreOptions$ = of(this.options1).pipe(delay(300));
        this.cdr.detectChanges();
        break;
      case 2:
        this.moreOptions$ = of(this.options2).pipe(delay(300));
        this.cdr.detectChanges();
        break;
      case 3:
        this.moreOptions$ = of(this.options3).pipe(delay(300));
        this.cdr.detectChanges();
        break;
      case 4:
        this.moreOptions$ = of(this.options4).pipe(delay(300));
        this.cdr.detectChanges();
        break;
    }
  }
}
