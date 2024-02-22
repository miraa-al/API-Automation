const { getMethod, postMethod, putMethod } = require("../apiServer/apiObjects");

//test Suite
describe("Tugas API Automation", function () {
    //Test GET all ID
    it("Test GET from function", async function () {
        getMethod();
    });

    //Test POST 
    it("Test POST from function", async function () {
        postMethod();
    });

    //Test PUT 
    it("Test PUT from function", async function () {
        putMethod();
    });
});