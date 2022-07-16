import myFunc from '../index';

it('expect myFunc(5) to equal 25', () => {
  expect(myFunc(5)).toEqual(25);
});

it('expect myFunc(6) to equal 36', () =>{
    expect(myFunc(8.9)).toBeCloseTo(45,0);
});