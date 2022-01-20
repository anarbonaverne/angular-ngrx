import { createReducer, on } from '@ngrx/store'; //NOTE: paquetes que debemos importar para usar NgRX

import { ItemsState } from '@core/models/item.state';
import { loadedItems, loadItems } from '../actions/items.actions';

//NOTE: declaramos un estado inicial
export const initialState: ItemsState = { loading: false, items: [] };

export const itemsReducer = createReducer(
  initialState,
  on(loadItems, (state) => ({
    ...state, //NOTE: Con los ... estamos haciendo una copia del state, ya que NgRX debe sustituir un estado por otro
    loading: true,
  })),
  //NOTE: como vemos, podemos configurar un reducer para que ejecuta varias acciones.
  on(loadedItems, (state, { items }) => ({
    ...state, //NOTE: Con los ... estamos haciendo una copia del state, ya que NgRX debe sustituir un estado por otro
    loading: false,
    items,
  }))
);
