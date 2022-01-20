import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ItemsEffects } from './state/effects/items.effects';
import { ROOT_REDUCERS } from './state/app.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS), //NOTE: esta línea ha sido añadida por @ngrx/store
    StoreDevtoolsModule.instrument({ name: 'TEST' }), //NOTE2: esta línea ha sido añadida por @ngrx/store-devtools
    EffectsModule.forRoot([ItemsEffects]), //NOTE: esta línea ha sido añadida por @ngrx/effects y es dónde declaramos los effects
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
