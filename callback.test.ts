const getNameCB = (callback: (str: string) => void): void => {
  const name: string = "Tetz";
  setTimeout(() => {
    try {
      if (Math.floor(Math.random() * 2) % 2 === 0) {
        console.log("정상 케이스");
        callback(name);
      } else {
        console.log("에러 케이스");
        throw new Error("에러");
      }
    } catch (err) {
      callback(err);
    }
  }, 2000);
};

test("2초 뒤에 이름을 받아오는 테스트", (done) => {
  function callback(data: any): void {
    try {
      if (data instanceof Error) {
        expect(data.message).toBe("에러");
      } else {
        expect(data).toBe("Tetz");
        done();
      }
    } catch (err) {
      done(err);
    }
  }

  getNameCB(callback);
});
