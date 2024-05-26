const utils = require("../../index.js");
describe("Utilities", function() { 

    beforeAll(function() {
        spyOn(utils, 'toLowerCase').and.callThrough();
        // spyOn(utils, 'toLowerCase').and.stub();
        // spyOn(utils, 'toLowerCase').and.returnValue("Hello World!");
    });

    describe("String Utils", function() { 
        it("should be able to lower case a string",function() {    
            expect(utils.toLowerCase).toBeDefined();
            expect(utils.toLowerCase("HELLO WORLD")).toEqual("hello world");
            
            expect(utils.toLowerCase).toHaveBeenCalled();
        });  

        it("should be able to upper case a string",function() {    
            expect(utils.toUpperCase).toBeDefined();
            expect(utils.toUpperCase("hello world")).toEqual("HELLO WORLD");
        });  

        it("should be able to confirm if a string contains a substring",function() {    
            expect(utils.contains).toBeDefined();    
            expect(utils.contains("hello world","hello",0)).toBeTruthy();
        });  

        it("should be able repeat a string multiple times",function() {    
            expect(utils.repeat).toBeDefined();    
            expect(utils.repeat("hello", 3)).toEqual("hellohellohello");
        });
    });
    
    describe("Math Utils", function() { 
        describe("Basic Math Utils", function() {   
            it("should be able to tell if a number is even",function() {
                expect(utils.isEven(2)).toBe(true);
            });

            it("should be able to tell if a number is odd",function() {    
                expect(utils.isOdd(3)).toBe(true);
            });  
        }); 
    
        describe("Advanced Math Utils", function() {   
            it("should be able to tell if a number is prime",function() {    
                expect(utils.isPrime(5)).toBe(true);
            });   

            it("should be able to calculate the fibonacci of a number",function() {    
                expect().nothing();
            });
        });
    });

    describe("Async Op", function () {
        var  asyncOpCompleted  =  false;
        beforeEach(function (done) {
            utils.simulateAsyncOp(function() {  
                asyncOpCompleted  =  true;  
                done();
            });
        });
        it("should be able to tell if the async call has completed", function () {  
            expect(asyncOpCompleted).toEqual(true);
        });
        it("should work with async/await", async () => { 
            let completed = false; 
            completed = await utils.simulateAsyncOp1(); 
            expect(completed).toEqual(true); 
        });
    });
});

