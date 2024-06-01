export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const symbol = Symbol('desc');
    const clone = Object.create(this, {
      [symbol]: {
        value: 'Car Clone',
      },
    });
    return clone;
  }
}
