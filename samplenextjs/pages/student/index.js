//only do it this way as in 'folder in' and do an index.js when you need to use a [studentId].js file

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

class Student {
    constructor(fname, lname, address, city, state, zip, studentId){
        this.fname = fname;
        this.lname = lname;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.studentId = studentId;
    }
}



export default function StudentsPage({ students }) {
    //const router = useRouter();
    
    //gives you access to a nested object. get access to values in the URL.
    //const studentId = router.query.studentId; 
    /*const students = [
        new Student('Mike', 'Conley', '301 S Temple', 'Salt Lake City', 'UT', '84101', 1),
        new Student('Donovan', 'Mitchell', '301 S Temple', 'Salt Lake City', 'UT', '84101', 2),
        new Student('Bojan', 'Bogdanovic', '301 S Temple', 'Salt Lake City', 'UT', '84101', 3),
        new Student('Royce', 'O Neale', '301 S Temple', 'Salt Lake City', 'UT', '84101', 4),
        new Student('Rudy', 'Gobert', '301 S Temple', 'Salt Lake City', 'UT', '84101', 5)
    ];*/
    
    return (
        <>
            <h3>Players Page</h3>
            <ul>
                <li><a href={students[0].studentId}>{students[0].fname + " " + students[0].lname}</a></li>
                <li><a href={students[1].studentId}>{students[1].fname + " " + students[1].lname}</a></li>
                <li><a href={students[2].studentId}>{students[2].fname + " " + students[2].lname}</a></li>
                <li><a href={students[3].studentId}>{students[3].fname + " " + students[3].lname}</a></li>
                <li><a href={students[4].studentId}>{students[4].fname + " " + students[4].lname}</a></li>
            </ul>
        </>
    );
}