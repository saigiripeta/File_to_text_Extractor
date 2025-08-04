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
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.changeName = function (newname) {
        this.username = newname;
    };
    return A;
}());
var A1 = /** @class */ (function (_super) {
    __extends(A1, _super);
    function A1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    A1.prototype.display = function (name, gender) {
        console.log(this.username, name, gender);
    };
    return A1;
}(A));
var B1 = /** @class */ (function (_super) {
    __extends(B1, _super);
    function B1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B1.prototype.display = function (name, gender) {
        this.username = "jdsbcjdksb";
        console.log(this.username);
    };
    return B1;
}(A));
