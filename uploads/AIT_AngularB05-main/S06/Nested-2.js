var user = {
  name: "sagar",
  gender: "male",
  address: {
    city: {
      cityName: "Latur",
      CityNo: "MH24",
    },
    state: "MH",
  },
};

console.log(user.address.city.CityNo);

console.log(user["address"]["city"]["cityName"]);
