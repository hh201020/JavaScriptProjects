var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Coin = (function () {
    function Coin(value) {
        this.value = value;
    }
    return Coin;
}());
var Dime = (function (_super) {
    __extends(Dime, _super);
    function Dime() {
        return _super.call(this, .1) || this;
    }
    Dime.prototype.getImageUrl = function () {
        return "img/Dime.png";
    };
    return Dime;
}(Coin));
var Quarter = (function (_super) {
    __extends(Quarter, _super);
    function Quarter() {
        return _super.call(this, .25) || this;
    }
    Quarter.prototype.getImageUrl = function () {
        return "img/Quarter.png";
    };
    return Quarter;
}(Coin));
var Half = (function (_super) {
    __extends(Half, _super);
    function Half() {
        return _super.call(this, .5) || this;
    }
    Half.prototype.getImageUrl = function () {
        return "img/Half.png";
    };
    return Half;
}(Coin));
var Dollar = (function (_super) {
    __extends(Dollar, _super);
    function Dollar() {
        return _super.call(this, 1) || this;
    }
    Dollar.prototype.getImageUrl = function () {
        return "img/Dollar.jpg";
    };
    return Dollar;
}(Coin));
/// <reference path="./coin.ts" />
var vendingMachine = (function () {
    function vendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.acceptedCoins = [new Quarter()];
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.value);
        };
    }
    return vendingMachine;
}());
/// <reference path="vendingMachine.ts" />
var machine = new vendingMachine();
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map