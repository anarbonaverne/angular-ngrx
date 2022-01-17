import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { itemsReducer } from './state/reducers/items.reducers';
import { ROOT_REDUCERS } from './state/app.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS), //NOTE: esta línea ha sido añadida por @ngrx/store
    StoreDevtoolsModule.instrument({ name: 'TEST' }), //NOTE: esta línea ha sido añadida por @ngrx/store-devtools
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
