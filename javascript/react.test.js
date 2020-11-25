import { expect } from '@jest/globals';
import { KeysValuesObject, ListObjects } from './react';

describe('React Component `KeysValuesObject`', () => {
 test('Render with key and value', () => {
  const WrapperComponent = mount(<KeysValuesObject obj={{ name: 'Pablo', last_name: 'Hernández', age: 35 }}/>);
  const textRender = WrapperComponent.text();

  expect(textRender).toEqual(expect.stringContaining('name'));
  expect(textRender).toEqual(expect.stringContaining('Pablo'));

  expect(textRender).toEqual(expect.stringContaining('last_name'));
  expect(textRender).toEqual(expect.stringContaining('Hernández'));

  expect(textRender).toEqual(expect.stringContaining('age'));
  expect(textRender).toEqual(expect.stringContaining('35'));
 });

 test('Render list of object and select', () => {
  const data = [{
   name: 'Pablo',
   age: 68,
   country: 'México'
  }, {
   name: 'Luis',
   age: 45,
   country: 'EU'
  }, {
   name: 'Roberto',
   age: 40,
   country: 'Cánada'
  }];

  const WrapperComponent = mount(<ListObjects data={data}/>);
  const PabloDescriptor = WrapperComponent.find(KeysValuesObject).at(0);
  const LuisDescriptor = WrapperComponent.find(KeysValuesObject).at(1);
  const RobertoDescriptor = WrapperComponent.find(KeysValuesObject).at(2);

  expect(PabloDescriptor.text()).toEqual(expect.stringContaining('name'));
  expect(PabloDescriptor.text()).toEqual(expect.stringContaining('Pablo'));
  expect(PabloDescriptor.text()).toEqual(expect.stringContaining('age'));
  expect(PabloDescriptor.text()).toEqual(expect.stringContaining('68'));
  expect(PabloDescriptor.text()).toEqual(expect.stringContaining('country'));
  expect(PabloDescriptor.text()).toEqual(expect.stringContaining('México'));

  expect(LuisDescriptor.text()).toEqual(expect.stringContaining('name'));
  expect(LuisDescriptor.text()).toEqual(expect.stringContaining('Luis'));
  expect(LuisDescriptor.text()).toEqual(expect.stringContaining('age'));
  expect(LuisDescriptor.text()).toEqual(expect.stringContaining('45'));
  expect(LuisDescriptor.text()).toEqual(expect.stringContaining('country'));
  expect(LuisDescriptor.text()).toEqual(expect.stringContaining('EU'));

  expect(RobertoDescriptor.text()).toEqual(expect.stringContaining('name'));
  expect(RobertoDescriptor.text()).toEqual(expect.stringContaining('Roberto'));
  expect(RobertoDescriptor.text()).toEqual(expect.stringContaining('age'));
  expect(RobertoDescriptor.text()).toEqual(expect.stringContaining('40'));
  expect(RobertoDescriptor.text()).toEqual(expect.stringContaining('country'));
  expect(RobertoDescriptor.text()).toEqual(expect.stringContaining('Cánada'));

  expect(WrapperComponent.find('.active').hostNodes()).toHaveLength(0);

  // Selecciona el segundo item
  WrapperComponent.find(KeysValuesObject).at(1).simulate('click');

  expect(WrapperComponent.find(KeysValuesObject).at(1).hasClass('active')).toBeTruthy();
 });
});
