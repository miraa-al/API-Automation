const request = require("supertest");
const { expect } = require("chai");
const supertest = require("supertest");
const baseUrl = require("../globalVariable/baseUrl");
const baseId = require("../globalVariable/baseId");

//const url = supertest ("https://api.restful-api.dev/objects") // global variable url
const url = `${baseUrl}`; //define global variable
//const id = `${baseId}`;

async function getMethod () {
    const response = await request(url).get("/objects");
        //verifikasi
        expect(response.status).to.equal(200);
        console.log(response.body);
}

async function postMethod () {
    const response = await request(url)
    .post("/objects")
    .send({
            name: 'Almira',
            data: { 
                Generation: '2024', 
                Price: '11000000', 
                Capacity: '256 GB' },
    });
    expect(response.status).to.equal(200);
    const id = response.body.id;
    console.log("id after POST:", id);
    //return id;
}

async function putMethod (id) {
    const response = await request(url)
    .put(/objects/id)
    .send({
            name: 'Almira Almira'
    });
    expect(response.body.name).to.equal('Almira Almira');
    console.log(response.body);
}

module.exports = { getMethod, postMethod, putMethod }
//module.exports = { postMethod }
