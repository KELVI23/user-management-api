"use strict";

var expect = require("chai").expect;

var request = require("request");

var data = require("../user-data");

describe("Access users", function () {
  describe("Access all the users", function () {
    var url = "http://localhost:3000/api/users";
    it("returns status 200", function (done) {
      request(url, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    it("returns JSON data of all the users", function () {
      request(url, function (error, response, body) {
        expect(body).to.equal(JSON.stringify(data));
      });
    });
  });
  describe("Acess individual users", function () {
    j = 1;

    for (i = 0; i < data.length; i++) {
      while (j <= data.length) {
        var url = "http://localhost:3000/api/users/".concat(j);
        it("returns JSON data of requested user", function () {
          request(url, function (error, response, body) {
            expect(body[i].id = j).to.equal(data[i].id = j); // console.log(body[i].id=j);
          });
        });
        j++;
      }

      ;
    }

    ;
  });
});