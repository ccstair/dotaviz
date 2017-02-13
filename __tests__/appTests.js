import React from 'react';
import { mount } from 'enzyme';
import jsdom from 'jsdom';
import App from '../client/containers/app';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('App should exist', () => {
  let app;
  beforeEach(() => {
    app = mount(<App/>);
  });

  it('check to see if app exists', () => {
    expect(app).toBeTruthy();
  });
  //
  // it('clicking on the ', () => {
  //   app.find('button.addToCartButton').first().simulate('click');
  // });
  //
  // it('should update the productCount after clicking on a product', () => {
  //   app.find('button.addToCartButton').first().simulate('click');
  //   expect(app.state('productCount')).toBe(1);
  // });
  //
  // it('should dynamically update the totalCost after clicking on a product', () => {
  //   // I added two products to make sure that the totalCost function was calculating properly, rather than just tallying the types of products
  //   app.find('button.addToCartButton').first().simulate('click');
  //   app.find('button.addToCartButton').first().simulate('click');
  //   expect(app.state('totalCost')).toBe(3);
  // });
  //
  // it('should update the products array after clicking on a product', () => {
  //   app.find('button.addToCartButton').first().simulate('click');
  //   expect(app.state('products').length).toBe(1);
  // });

});
