var promiseObject = new Promise(function (resolve, reject) {
  //   resolve(100);
  //   resolve("hello ia ma string data");
  //   resolve([{ name: "sagar", city: "pune" }]);

  reject({ ok: false, error: "failed to create account" });
});

console.log(promiseObject);
