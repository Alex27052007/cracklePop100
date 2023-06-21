import { CracklePop } from "./crackle-pop"

describe("CracklePop", () => {
    describe("printToOneHundred", () => {
        it("should log the expected output", () => {
          const consoleOutput: string[] = [];
          const spy = jest.spyOn(console, "log").mockImplementation((output) => {
            consoleOutput.push(output);
          });
      
          CracklePop.printToOneHundred();
      
          const expectedResult =
            "1 2 Crackle 4 Pop Crackle 7 8 Crackle Pop 11 Crackle 13 14 CracklePop 16 17 Crackle " +
            "19 Pop Crackle 22 23 Crackle Pop 26 Crackle 28 29 CracklePop 31 32 Crackle 34 Pop Crackle 37 38 Crackle " +
            "Pop 41 Crackle 43 44 CracklePop 46 47 Crackle 49 Pop Crackle 52 53 Crackle Pop 56 Crackle 58 59 CracklePop " +
            "61 62 Crackle 64 Pop Crackle 67 68 Crackle Pop 71 Crackle 73 74 CracklePop 76 77 Crackle 79 Pop " +
            "Crackle 82 83 Crackle Pop 86 Crackle 88 89 CracklePop 91 92 Crackle 94 Pop Crackle 97 98 Crackle Pop";
      
          expect(consoleOutput.length).toBe(100);
          expect(consoleOutput.join(" ")).toEqual(expectedResult);
      
          spy.mockRestore();
        });
      });
    describe("cracklePop", () => {
        it("should return undefined if no number given", () => {
            const result = CracklePop.cracklePop("a" as any);
            expect(result).toEqual("");
        })

        it("should return 1 as string if number 1 given", () => {
            const result = CracklePop.cracklePop(1);
            expect(result).toEqual("1");
        })

        it("should return -10001 as string if number -10001 given", () => {
            const result = CracklePop.cracklePop(-10001);
            expect(result).toEqual("-10001");
        })

        it("should return Crackle if number 3 given", () => {
            const result = CracklePop.cracklePop(3);
            expect(result).toEqual("Crackle");
        })

        it("should return Crackle if number 9 given", () => {
            const result = CracklePop.cracklePop(9);
            expect(result).toEqual("Crackle");
        })

        it("should return Pop if number 5 given", () => {
            const result = CracklePop.cracklePop(5);
            expect(result).toEqual("Pop");
        })

        it("should return Pop if number -5 given", () => {
            const result = CracklePop.cracklePop(-5);
            expect(result).toEqual("Pop");
        })


        it("should return Pop if number 10 given", () => {
            const result = CracklePop.cracklePop(20);
            expect(result).toEqual("Pop");
        })

        it("should return CracklePop if number 15 given", () => {
            const result = CracklePop.cracklePop(15);
            expect(result).toEqual("CracklePop");
        })

        it("should return CracklePop if number 90 given", () => {
            const result = CracklePop.cracklePop(90);
            expect(result).toEqual("CracklePop");
        })

        it("should return CracklePop if number -423 given", () => {
            const result = CracklePop.cracklePop("Herbert Werbert" as any);
            expect(result).toEqual("");
        })
    })
})