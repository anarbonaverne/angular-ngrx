import { ItemsState } from '@core/models/item.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

/* #region  Dejo unos comentarios en plan formativo sobre el fichero original */
/*
  En nuestro caso estamos declarando los stados de los objetos dentro de la ruta src/app/core/models/Item.state.ts
*/
// export interface FeatureState {
//   counter: number;
// }

/*
  En nuestro caso estamos declarando el estado de la aplicación dentro de la ruta src/app/state/models/app.state.ts
*/
// export interface AppState {
//   feature: FeatureState;
// }
/* #endregion */

/**
 * NOTE: es el selector que tiene relación con la propiedad "items" (lo que hemos llamado tabla)
 * Es el selector para poder obtener todos los datos
 * @param state
 * @returns
 */
// NOTE: este selector se considera el PADRE de los dos de abajo
export const selectItemsFeature = (state: AppState) => state.itemsList;

/**
 * Selector que nos devuelve sólo la lista de items
 */
//NOTE: este sería un selector HIJO
export const selectListItems = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.items
);

/**
 * Selector que nos devuelve sólo la lista de items
 */
//NOTE: este sería otro selector hijo
export const selectLoading = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.loading
);
