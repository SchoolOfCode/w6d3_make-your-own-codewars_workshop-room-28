//👉 Write your tests below here:
import { calculateChristmasPuddings } from "./main.js";

// Test 1

test("return 0 for eggs as the limiting factor", () => {
  const cupboard = [
    { driedFruit: "6 cups" },
    { flour: "1 cup" },
    { butter: "1 cup" },
    { breadcrumbs: "1 cup" },
    { sugar: "1 cup" },
    { nuts: "1 cup" },
    { milk: "1 cup" },
    { eggs: "0" },
  ];

  const actual = calculateChristmasPuddings(cupboard);
  const expected = 0;

  expect(actual).toBe(expected);
});

// Test 2
test("return 1 for driedFruit as the limiting factor", () => {
  const cupboard = [
    { driedFruit: "3 cups" },
    { flour: "2 cup" },
    { butter: "2 cup" },
    { breadcrumbs: "2 cup" },
    { sugar: "2 cup" },
    { nuts: "2 cup" },
    { milk: "2 cup" },
    { eggs: "12" },
  ];

  const actual = calculateChristmasPuddings(cupboard);
  const expected = 1;

  expect(actual).toBe(expected);
});

// test 3
test("return 0 for an empty array", () => {
  const cupboard = [];

  const actual = calculateChristmasPuddings(cupboard);
  const expected = 0;

  expect(actual).toBe(expected);
});

// test 4
test("return 7 for all multiplied by 7", () => {
  const cupboard = [
    { driedFruit: "14 cups" },
    { flour: "7 cup" },
    { butter: "7 cup" },
    { breadcrumbs: "7 cup" },
    { sugar: "7 cup" },
    { nuts: "7 cup" },
    { milk: "7 cup" },
    { eggs: "7" },
  ];
  const actual = calculateChristmasPuddings(cupboard);
  const expected = 7;

  expect(actual).toBe(expected);
});


// Test 5
test("return 0 for one missing ingredient", () => {
    const cupboard = [
      { driedFruit: "14 cups" },
      { flour: "7 cup" },
      { butter: "7 cup" },
      { sugar: "7 cup" },
      { nuts: "7 cup" },
      { milk: "7 cup" },
      { eggs: "7" },
    ];
    const actual = calculateChristmasPuddings(cupboard);
    const expected = 0;
  
    expect(actual).toBe(expected);
  });
