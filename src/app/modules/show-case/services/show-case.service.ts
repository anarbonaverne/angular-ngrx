import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShowCaseService {


  constructor() { }

  getDataApi(): Observable<any> {
    //NOTE: Aqui podemos hacer http.get('api...')
    //NOTE: es en este tipo de ficheros, en los servicios, dónde van las peticiones a la/s api/s -> this.http.get('api')
    const data = [
      {
        name: 'Pudgy Penguin #1',
        price: 0.2,
        image: 'https://picsum.photos/id/1062/200/300',
      },
      {
        name: 'Pudgy Penguin #2',
        price: 0.1,
        image: 'https://picsum.photos/id/169/200/300',
      },
      {
        name: 'Pudgy Penguin #3',
        price: 0.3,
        image: 'https://picsum.photos/id/237/200/300',
      },
      {
        name: 'Pudgy Penguin #4',
        price: 0.4,
        image: 'https://picsum.photos/id/343/200/300',
      },
      {
        name: 'Pudgy Penguin #5',
        price: 0.5,
        image: 'https://picsum.photos/id/456/200/300',
      },
      {
        name: 'Pudgy Penguin #6',
        price: 0.6,
        image: 'https://picsum.photos/id/256/200/300',
      },
      {
        name: 'Pudgy Penguin #7',
        price: 0.7,
        image: 'https://picsum.photos/id/135/200/300',
      },
      {
        name: 'Pudgy Penguin #8',
        price: 0.8,
        image: 'https://picsum.photos/id/190/200/300',
      },
      {
        name: 'Pudgy Penguin #9',
        price: 0.9,
        image: 'https://picsum.photos/id/259/200/300',
      },
      {
        name: 'Pudgy Penguin #10',
        price: 0.9,
        image: 'https://picsum.photos/id/936/200/300',
      },
      {
        name: 'Pudgy Penguin #11',
        price: 0.9,
        image: 'https://picsum.photos/id/278/200/300',
      },
      {
        name: 'Pudgy Penguin #12',
        price: 0.9,
        image: 'https://picsum.photos/id/576/200/300',
      },
    ];

    return of(data).pipe(delay(1500));
  }



}
