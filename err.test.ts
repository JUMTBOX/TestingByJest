const throwError = (): never => {
  throw new Error("에러 발생!");
};

test("에러가 발생하는지 테스트", () => {
  expect(() => throwError()).toThrow();
});

test("에러가 발생하는지 테스트", () => {
  expect(() => throwError()).toThrow();
});
