import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects'; //NOTE: importamos los elementos necesarios desde @ngrx/effects
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { ShowCaseService } from '@modules/show-case/services/show-case.service';

@Injectable()
export class ItemsEffects {
  //NOTE: vamos a crear un effect que se encargue de pedir los datos a la API
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      //NOTE2: tenemos que indicar la acción que va a disparar la petición de los datos
      ofType('[Items List] Load items'),
      mergeMap(() =>
        //NOTE: ahora llamamos al servicio, que a su vez llamará a la API
        this.showCaseService.getDataApi().pipe(
          map((items) => ({
            //NOTE2: una vez el servicio tiene los datos, se los pasamos a la acción que se encarga de guardarlos en el store de la APP
            type: '[Item List] Loaded success',
            items,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private showCaseService: ShowCaseService //NOTE: inyectamos el servicio que va a conectarse con la API
  ) {}
}
