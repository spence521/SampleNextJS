//our-domain.com/
//import React from 'react'; //<- you can ommit this because it is added in the background
import { Fragment } from "react";
import Student from "./student/index";

/*const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("");

app.get("/", function (req, res) {
    res.send("express is working");
});
//app.post

app.listen(3000, function () {
    console.log("server is running on 3000");
});*/

function HomePage() {
  function saveUserInfo() {
    var firstName = document.getElementById("fname").value;
    document.getElementById("lname").value = firstName;
  }

  return (
    <Fragment>
      <h1>Add New Player</h1> <br />
      <div class="row">
        <span>
          <label for="fname">First Name:</label>
        </span>
        <span>
          <input type="text" id="fname" name="fname" />
        </span>
      </div>
      <br />
      <div class="row">
        <span>
          <label for="lname">Last Name:</label>
        </span>
        <span>
          <input type="text" id="lname" name="lname" />
        </span>
      </div>
      <br />
      <div class="row">
        <span>
          <label for="address">Street Address:</label>
        </span>
        <span>
          <input type="text" id="address" name="address" />
        </span>
      </div>
      <br />
      <div class="row">
        <span>
          <label for="city">City:</label>
        </span>
        <span>
          <input type="text" id="city" name="city" />
        </span>
      </div>
      <br />
      <div class="row">
        <span>
          <label for="state">State:</label>
        </span>
        <span>
          <input type="text" id="state" name="state" />
        </span>
      </div>
      <br />
      <div class="row">
        <span>
          <label for="zip">Zip Code:</label>
        </span>
        <span>
          <input type="text" id="zip" name="zip" />
        </span>
      </div>
      <br />
      <div class="row">
        <span>
          <button class="submit" onClick="{this.saveUserInfo}">
            Save Player
          </button>
        </span>
      </div>
      <br /> <br /> <br />
      <div class="row">
        <span>
          <a href="./student/index">View Players</a>
        </span>
      </div>
    </Fragment>
  );
}

//must do this so that next.js can find it.
//export default saveUserInfo;
export default HomePage;
