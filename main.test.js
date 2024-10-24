import * as testers from "./main";

test("capitalize", () => {
  expect(testers.capitalize("test")).toBe("TEST");
});

test("reverse", () => {
  expect(testers.reverseString("test")).toBe("tset");
});

test("add", () => {
  expect(testers.calculator().add(1, 1)).toBe(2);
});

test("subtract", () => {
  expect(testers.calculator().subtract(5, 1)).toBe(4);
});

test("multiply", () => {
  expect(testers.calculator().multiply(10, 10)).toBe(100);
});

test("divide", () => {
  expect(testers.calculator().divide(100, 10)).toBe(10);
});

test("caesar", () => {
  expect(testers.caesarCipher("xyz", 3)).toBe("abc");
  expect(testers.caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("analyze", () => {
  expect(testers.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
