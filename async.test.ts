const getNameAsync = (id: string): Promise<string> => {
  const name: string = "이효석";
  return new Promise<string>((res, rej) => {
    setTimeout(() => {
      if (id === "Tetz") {
        console.log("정상 케이스");
        res(name);
      } else {
        console.log("에러 케이스");
        rej(new Error("id가 다릅니다"));
      }
    }, 2000);
  });
};

test("2초 후에 이름을 async-await로 받아오는 함수 테스트", async () => {
  try {
    const result: any = await getNameAsync("Tetz");
    expect(result).toBe("이효석");
  } catch (err) {
    expect(err.message).toBe("id가 다릅니다");
  }
});
