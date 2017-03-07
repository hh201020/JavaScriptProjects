import * as Coin from "./coin"
import { Product, Initial as Init } from "./product"
import getVendingProduct from "./productFactory"

export enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}

class Cell {
    constructor(public product: Product){
    }
    stock = ko.observable(3)
    sold = ko.observable(false)
}

export class VendingMachine {
    private paid = ko.observable(0);
    selectedCell = ko.observable(new Cell(new Init()))
    acceptedCoins: Coin.Coin[] = [new Coin.Dime(), new Coin.Quarter(), new Coin.Half(), new Coin.Dollar()]
    cells = ko.observableArray([])
    canPay = ko.pureComputed(() => this.paid() - this.selectedCell().product.price >= 0)

    set size(givenSize: VendingMachineSize) {
        this.cells([]);

        for (let index = 0; index < givenSize; index++) {
            let product = getVendingProduct();
            this.cells.push(new Cell(product));            
        };
    }
    
    select = (cell: Cell): void => {
        cell.sold(false);
        this.selectedCell(cell);
    }

    acceptCoin = (coin: Coin.Quarter): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.value);
    }
        
    pay = (): void => {               
        if (this.selectedCell().stock() < 1) {
            alert("I'm sorry, we're out of them!")
            return;
        }
        
        let currentPayed = this.paid();
        this.paid(Math.round(((currentPayed - this.selectedCell().product.price) * 100))/100);
        let currentStock = this.selectedCell().stock();
        this.selectedCell().stock(currentStock-1);
        this.selectedCell().sold(true);
    }
}