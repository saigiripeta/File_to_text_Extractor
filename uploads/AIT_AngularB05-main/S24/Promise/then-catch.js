var promiseObject = new Promise(function (resolve, reject) {
  reject({ ok: false, error: "error data" });

  resolve({ ok: true, result: [{ name: "s1" }, { name: "s2" }] });
});

// console.log(promiseObject);

promiseObject
  .then(function (success) {
    console.log("then is executed");
    console.log(success);
  })
  .catch(function (error) {
    console.log("catch is executed");
    console.log(error);
  });
