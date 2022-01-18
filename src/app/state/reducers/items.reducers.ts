import { createReducer, on } from '@ngrx/store'; //NOTE: paquetes que debemos importar para usar NgRX

import { ItemsState } from '@core/models/item.state';
import { loadItems } from '../actions/items.actions';

//NOTE: declaramos un estado inicial
export const initialState: ItemsState = { loading: false, items: [] };

export const itemsReducer = createReducer(
  initialState,
  on(loadItems, (state) => {
    return {
      ...state, //NOTE: Con los ... estamos haciendo una copia del state, ya que NgRX debe sustituir un estado por otro
      loading: true,
    };
  })
);
