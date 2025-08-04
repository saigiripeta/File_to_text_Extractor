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
var PaymentMode = /** @class */ (function () {
    function PaymentMode() {
    }
    PaymentMode.prototype.pay = function () {
        console.log("-----------");
    };
    return PaymentMode;
}());
var Gpay = /** @class */ (function (_super) {
    __extends(Gpay, _super);
    function Gpay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gpay.prototype.pay = function () {
        console.log("payment is done through Gpay");
    };
    return Gpay;
}(PaymentMode));
var Phonepay = /** @class */ (function (_super) {
    __extends(Phonepay, _super);
    function Phonepay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Phonepay.prototype.pay = function () {
        console.log("payment is done through Phonepay");
    };
    return Phonepay;
}(PaymentMode));
var Razorpay = /** @class */ (function (_super) {
    __extends(Razorpay, _super);
    function Razorpay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Razorpay.prototype.pay = function () {
        console.log("payment is done through razor pay");
    };
    return Razorpay;
}(PaymentMode));
function doPayment(mode) {
    mode.pay();
}
doPayment(new Gpay());
doPayment(new Phonepay());
doPayment(new Razorpay());
