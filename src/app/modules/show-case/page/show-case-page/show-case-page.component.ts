import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { loadItems } from 'src/app/state/actions/items.actions';
import { selectLoading } from 'src/app/state/selectors/items.selectors';

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    //NOTE: Nos subscribimos a los cambios en el valor de loading, haciendo uso del selector
    this.loading$ = this.store.select(selectLoading);

    //NOTE: Hacemos dispatch (envío) de la acción loadItems, que será la que cambie el valor de this.loading$
    //NOTE2: Le indica a la aplicación que comience a cargar los datos
    this.store.dispatch(loadItems());
  }
}
