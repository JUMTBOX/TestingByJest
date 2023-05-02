interface User {
  email: string;
  name: string;
  age: number;
}

const user: Array<User> = [
  { email: "tetz@kdt.com", name: "이효석", age: 39 },
  { email: "faker@t1.com", name: "이상혁", age: 26 },
  { email: "owner@t1.com", name: "문현준", age: 20 },
  { email: "keria@t1.com", name: "류민석", age: 20 },
];

const allUser = (user: Array<User>): Array<string> => {
  return user.map((el: User) => el.name);
};

const oldUser = (user: Array<User>, specificAge: number): number => {
  return user.filter((el: User) => el.age > specificAge).length;
};

const findUser = (
  user: Array<User>,
  specificName: string
): string | undefined => {
  const find = user.filter((el: User) => el.name === specificName)[0].email;
  if (find) return find;
  return "해당 회원을 찾을 수가 없습니다.";
};

test("전체 회원 수 테스트 ", () => {
  expect(allUser(user)).toHaveLength(4);
});

test("25살 이상인 회원은 2명이상인가", () => {
  expect(oldUser(user, 25)).toBeGreaterThanOrEqual(2);
});

test("25살 이상인 회원은 2명이하인가", () => {
  expect(oldUser(user, 25)).toBeLessThanOrEqual(10);
});

test("특정 이름을 가진 회원의 email은 양식을 따르는가", () => {
  expect(findUser(user, "이상혁")).toMatch(
    /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$/
  );
});
