const makeObj = (id, name) => {
  return { id, name, age: undefined };
};

test("toBe의 문제점 파악하기", () => {
  expect(makeObj("tetz", "이효석")).toStrictEqual({
    id: "tetz",
    name: "이효석",
    age: undefined,
  });
});
