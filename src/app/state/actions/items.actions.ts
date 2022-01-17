import { ItemModel } from '@core/models/Item.interface';
import { createAction, props } from '@ngrx/store';//NOTE: paquetes que debemos importar para usar NgRX

/**
 * Acción que se ejecuta para cargar los artículos
 */
export const loadItems = createAction(
  '[Items List] Load items' //NOTE: indicamos el valor de type
);

/**
 * Acción que se ejecuta cuando ya están cargados los artículos
 */
export const loadedItems = createAction(
  '[Item List] Loaded success',
  props<{items: ItemModel[]}>()//NOTE: lista de items que hemos recuperado desde el servidor
);


