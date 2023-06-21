export class CracklePop{
        
    public static printToOneHundred() {
        for (let i = 1; i <=100 ; i++) {
            console.log(this.cracklePop(i));
        }
    }
    
    public static cracklePop(numberToCheck: number): string {
        let returnString = "";
        if (isNaN(numberToCheck)) {
            return returnString;
        }

        if (numberToCheck % 3 === 0) {
            returnString += "Crackle";
        }

        if (numberToCheck % 5 === 0) {
            returnString +=  "Pop";
        }
        if (returnString.length) {
            return returnString;
        }

        return numberToCheck.toString();
    }
}