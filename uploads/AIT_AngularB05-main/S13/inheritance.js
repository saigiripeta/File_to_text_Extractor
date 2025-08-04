var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    User.prototype.displayDetails = function () {
        console.log(this.name, this.gender);
    };
    return User;
}());
// var a1 = new A("Aditya","male") // a1 = {name:"--",gender:"--",displayDetails:function(){}}
// var a2 = new A("Shubham","male")
// a1.displayDetails()
// a2.displayDetails()
var Address = /** @class */ (function (_super) {
    __extends(Address, _super);
    function Address(city, state) {
        var _this = _super.call(this, "Aman", "male") || this;
        _this.city = city;
        _this.state = state;
        return _this;
    }
    Address.prototype.displayAddressDetails = function () {
        this.displayDetails();
        console.log(this.city, this.state);
    };
    return Address;
}(User));
// var address1 = new Address("pune","MH")
// address1.displayAddressDetails()
var Contact = /** @class */ (function (_super) {
    __extends(Contact, _super);
    function Contact() {
        var _this = _super.call(this, "Indore", "MP") || this;
        _this.email = "aman@gmail.com";
        _this.phone = 999999999999;
        return _this;
    }
    Contact.prototype.displayContactDetails = function () {
        this.displayAddressDetails();
        console.log(this.email, this.phone);
    };
    return Contact;
}(Address));
var c1 = new Contact();
c1.displayContactDetails();
