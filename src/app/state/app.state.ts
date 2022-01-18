import { ItemsState } from '@core/models/item.state';
import { ActionReducerMap } from '@ngrx/store';
import { itemsReducer } from './reducers/items.reducers';

//NOTE: este fichero actua a modo de base de datos local
export interface AppState {
  //itemsList: ReadonlyArray<ItemModel>; // Declaración vieja
  itemsList: ItemsState; //NOTE: actua cómo una tabla de base de datos
}

/*
  Lo que estamos haciendo con este cambio es definir que el estado inicial de los items sea un objeto compuesto.

  En un primer paso teníamos declarado que fuera una array de sólo lectura de objetos de tipo ItemModel,
  pero queremos que sea un objeto que además de la lista de items, nos de información complementaria
*/

/* Cómo buena práctica, hay quién recomienda declarar una constante que contendrá todo el estado de la
 */
export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  itemsList: itemsReducer,
};
