var user = {
  name: "sagar",
  gender: "male",
  address: {
    city: "Pune", //Nagpur
    state: "MH",
  },
};

var value = user.address.city;
console.log(value); //pune

user.address.city = "Nagpur";

var value = user.address.city;
console.log(value); //nagpur

//remove state property
delete user.address.state;

console.log(user);
