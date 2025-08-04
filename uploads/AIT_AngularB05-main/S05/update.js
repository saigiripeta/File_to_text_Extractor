var user = {
  name: "Riya Sharma",
  email: "riya@gmail.com",
  gender: "female",
  phone: 1234567,
};
console.log(user);
console.log("------------------------------");

user.email = "riyasharma@gmail.com";
user["phone"] = 989898;

console.log(user);
