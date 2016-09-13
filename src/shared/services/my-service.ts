import {Injectable} from '@angular/core';

@Injectable()
export class MyService {
  animals: Array<string>;

  constructor() {
    this.animals = [
      'golden retriever',
      'french bulldog',
      'german shepherd'
      ];
  }

  getDogs(count: number) {
    var result = [];

    if (count > this.animals.length) count = this.animals.length;

    for (var i = 0; i < count; i++) {
      result.push(this.animals[i]);
    }

    return result;
  }
}