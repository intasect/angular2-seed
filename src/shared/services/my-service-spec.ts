import {inject} from '@angular/core/testing';
import {MyService} from './my-service';

describe('MyService Tests', () => {
  let service: MyService = new MyService();

  it('Should return a list of dogs', () => {
    var items = service.getDogs(4);

    expect(items).toEqual(
      [
      'golden retriever',
      'french bulldog',
      'german shepherd'
      ]
    );
  });

  it('Should get all dogs available', () => {
    var items = service.getDogs(100);

    expect(items).toEqual(
      [
      'golden retriever',
      'french bulldog',
      'german shepherd'
      ]
    );
  });
});
