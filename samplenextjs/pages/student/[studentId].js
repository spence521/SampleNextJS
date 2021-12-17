import { useRouter } from "next/router";

//our-domain.com/news/<this can be any string value>

class Student {
  constructor(fname, lname, address, city, state, zip, studentId, playerId) {
    this.fname = fname;
    this.lname = lname;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.studentId = studentId;
    this.playerId = playerId;
  }
}

function StudentDetailPage() {
  //get access to values encoded in the URL
  const router = useRouter();

  //gives you access to a nested object. get access to values in the URL.
  const newsId = router.query.newsId; // hold the concrete value in the URl for this dynamic segment for which this page was visited.
  //console.log(router.query.newsId);

  // Send a request to the backend API to fetch the news item with newsId [building dynamic pages]

  var students = [
    new Student(
      "Mike",
      "Conley",
      "301 S Temple",
      "Salt Lake City",
      "UT",
      "84101",
      1,
      10
    ),
    new Student(
      "Donovan",
      "Mitchell",
      "301 S Temple",
      "Salt Lake City",
      "UT",
      "84101",
      2,
      45
    ),
    new Student(
      "Bojan",
      "Bogdanovic",
      "301 S Temple",
      "Salt Lake City",
      "UT",
      "84101",
      3,
      44
    ),
    new Student(
      "Royce",
      "O Neale",
      "301 S Temple",
      "Salt Lake City",
      "UT",
      "84101",
      4,
      23
    ),
    new Student(
      "Rudy",
      "Gobert",
      "301 S Temple",
      "Salt Lake City",
      "UT",
      "84101",
      5,
      27
    ),
  ];

  return (
    <>
      <h1>Player Detail Page</h1>
      <ul>
        <li>
          <a href={students[0].playerId}>
            {students[0].fname + " " + students[0].lname}
          </a>
        </li>
        <li>
          <a href={students[1].playerId}>
            {students[1].fname + " " + students[1].lname}
          </a>
        </li>
        <li>
          <a href={students[2].playerId}>
            {students[2].fname + " " + students[2].lname}
          </a>
        </li>
        <li>
          <a href={students[3].playerId}>
            {students[3].fname + " " + students[3].lname}
          </a>
        </li>
        <li>
          <a href={students[4].playerId}>
            {students[4].fname + " " + students[4].lname}
          </a>
        </li>
      </ul> <br/>
      <div class="row">
        <span><a href="../">back</a></span>
      </div>
    </>
  );
}

//must do this so that next.js can find it.
export default StudentDetailPage;
