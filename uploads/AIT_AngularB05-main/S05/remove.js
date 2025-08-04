var user = {
  name: "Riya Sharma",
  email: "riya@gmail.com",
  gender: "female",
  phone: 1234567,
};
console.log(user);
console.log("-------------------------");

delete user.phone;
delete user["email"];

console.log(user);
