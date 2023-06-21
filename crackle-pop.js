"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CracklePop = void 0;
class CracklePop {
    static printToOneHundred() {
        for (let i = 1; i <= 100; i++) {
            console.log(this.cracklePop(i));
        }
    }
    static cracklePop(numberToCheck) {
        let returnString = "";
        if (isNaN(numberToCheck)) {
            return returnString;
        }
        if (numberToCheck % 3 === 0) {
            returnString += "Crackle";
        }
        if (numberToCheck % 5 === 0) {
            returnString += "Pop";
        }
        if (returnString.length) {
            return returnString;
        }
        return numberToCheck.toString();
    }
}
exports.CracklePop = CracklePop;
