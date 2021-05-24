const expect = require('chai').expect;
const converter = require('../public/converter'); 

describe("Color Code Converter", function() {
    describe("RGB to Hex conversion", function() {
      it("converts the basic colors", function() {
        var redHex   = converter.rgbToHex(255, 0, 0);
        var greenHex = converter.rgbToHex(0, 255, 0);
        var blueHex  = converter.rgbToHex(0, 0, 255);
  
        expect(redHex).to.equal("ff0000");
        expect(greenHex).to.equal("00ff00");
        expect(blueHex).to.equal("0000ff");
      });
    });
  });




















  

/*
1. för att se översiktigt + veta vilka libs som ska addas:
https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha

2. kolla exemplen i 
https://www.chaijs.com/api/bdd/

expect(body).to.have.property('number');
expect(body).to.deep.equal({vowels: 2});
Tänk på att ibland kan JSON.parse krävas:
expect(JSON.parse(body))...


3. hur man sätter ihop allt
https://github.com/juiceghost/recipe-king/
*/