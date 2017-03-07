/// <reference path="./coin.ts" />

class vendingMachine {
    private paid = ko.observable(0)
    acceptedCoins: Quarter[] = [new Quarter()]

    acceptCoin = (coin: Quarter): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.value);
    }
}