//our-domain.com/news
//using Link instead of the a tag makes it so you go to the page instantly without fetching a new html page
import Link from "next/link"; //imports the Link component from next/link  &  this imports the default export 

import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJS is a great framework
          </Link>
        </li>
        <li>
            <label for="fname">First Name:</label> &#9;
            <input type="text" id="fname" name="fname"/> <br/>
        </li>
        <li>
            <label for="lname">Last Name:</label> &#9;
            <input type="text" id="lname" name="lname"/> <br/>            
        </li>
      </ul>
    </Fragment>
  );
}

//must do this so that next.js can find it.
export default NewsPage;
