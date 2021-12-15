//our-domain.com/
//import React from 'react'; //<- you can ommit this because it is added in the background
import { Fragment } from "react";

function HomePage() {
    return (
    <Fragment>
        <h1>Add New Student</h1> <br/>
        <div class="row">
            <span><label for="fname">First Name:</label></span>
            <span><input type="text" id="fname" name="fname"/></span>
        </div> <br/>

        <div class="row">
            <span><label for="lname">Last Name:</label></span>
            <span><input type="text" id="lname" name="lname"/></span>
        </div> <br/>

        <div class="row">
            <span><label for="address">Street Address:</label></span>
            <span><input type="text" id="street_address" name="street_address"/></span>
        </div> <br/>
        
        <div class="row">
            <span><label for="city">City:</label></span>
            <span><input type="text" id="city" name="city"/></span>
        </div> <br/>
                
        <div class="row">
            <span><label for="state">State:</label></span>
            <span><input type="text" id="state" name="state"/></span>
        </div> <br/>
                        
        <div class="row">
            <span><label for="zip">Zip Code:</label></span>
            <span><input type="text" id="zip" name="zip"/></span>
        </div> <br/>

        <button class="submit_form">Save Info</button>
    </Fragment>
    );
}


//must do this so that next.js can find it.
export default HomePage;