import { ItemModel } from "@core/models/Item.interface";

//NOTE: este fichero actua a modo de base de datos local
export interface AppState {
  itemsList: ReadonlyArray<ItemModel>; //NOTE: actua cómo una tabla de base de datos
}
