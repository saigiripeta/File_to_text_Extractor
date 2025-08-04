var User = /** @class */ (function () {
    function User() {
        this.uname = "raj verma"; //property
    }
    User.prototype.f1 = function () {
        console.log("f1 method is called");
    };
    return User;
}());
var obj1 = new User();
obj1.uname = "Sneha";
var obj2 = new User();
obj2.uname = "Riya";
console.log(obj1.uname, obj2.uname);
//    console.log(obj1.gender)
//    obj1.f1()
//    obj2.f1()
