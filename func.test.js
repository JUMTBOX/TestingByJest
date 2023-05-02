const sum = require("./func");

test("sum 함수 테스트 코드", () => {
  expect(sum(1, 2)).toBe(3);
});

test("변수의 얕은 비교는 테스가 되나요?", () => {
  const str = "테스트다";
  expect(str + " 가능?").toBe("테스트다 가능?");
});
