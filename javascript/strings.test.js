import { eliminateSpaces, toTitle, eliminateSpacesAndToTitle } from './strings';

describe('Function `eliminateSpaces`', () => {
 it('Should not eliminate spaces if only one', () => {
  expect(eliminateSpaces('Hello world')).toBe('Hello world');
 });

 it('Should remove spaces more of one', () => {
  expect(eliminateSpaces('Hello  world')).toBe('Hello world');
 });

 it('Should remove spaces begin and end', () => {
  expect(eliminateSpaces('  Hello     world')).toBe('Hello world');
 });
});

describe('Function `toTitle`', () => {
 it('Should to uppercase first letter', () => {
  expect(toTitle('Hello world')).toBe('Hello World');
 });

 it('Should to not afected numbers', () => {
  expect(toTitle('Hello world 5')).toBe('Hello World 5');
 });

 it('Should to uppercase first letter', () => {
  expect(toTitle('En un lugar de La Mancha de cuyo nombre, no quiero acordarme...'))
  .toBe('En Un Lugar De La Mancha De Cuyo Nombre, No Quiero Acordarme...');
 });
});

describe('Refactor functions `eliminateSpaces` and `toTitle`', () => {
 it('Should only to uppercase first letter', () => {
  expect(
   eliminateSpacesAndToTitle('[...] En resolución, él se enfrascó tanto en su lectura, que se le pasaban las noches leyendo de claro en claro...')
  ).toBe('[...] En Resolución, Él Se Enfrascó Tanto En Su Lectura, Que Se Le Pasaban Las Noches Leyendo De Claro En Claro...');
 });

 it('Should remove spaces and to uppercase first letter', () => {
  expect(eliminateSpacesAndToTitle('  `Tal vez si el ingenioso hidalgo hubiera comprendido lo mal que le hacía...`  '))
   .toBe('`Tal Vez Si El Ingenioso Hidalgo Hubiera Comprendido Lo Mal Que Le Hacía...`');
 });
});
