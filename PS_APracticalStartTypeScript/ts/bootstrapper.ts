/// <reference path="vendingMachine.ts" />

let machine = new vendingMachine();
machine.size = VendingMachineSize.medium;

ko.applyBindings(machine);