import React from 'react'
import '../coursedetails.css'

export default function CourseDetails() {
    console.log("hi")
  return (
    <>
   <div className='coursemain'>
    <div className="banner">
    </div>
    <div className='bottomhalf'>
        <div className='allto'>
    <div className="subtheory">
        <div className="track">React.js, often simply referred to as React, is a JavaScript library that has revolutionized the way web applications are built. With its component-based architecture and declarative syntax, React has become the go-to choice for developers looking to create modern, interactive, and highly performant web applications. In this blog post, we'll embark on a journey to explore the key concepts, features, and benefits of React.js, as well as how to get started with building your own web applications using this cutting-edge framework. Whether you're a seasoned developer or just beginning your coding adventure, React.js has something to offer, making it an essential skill for any web developer.
        </div>
</div>
    <div className='menroll'>
    <div className="enrollment">
        <button className='enroll-button'>Enroll</button>
        <hr/>
        <div id="subthry">
        <h3><b>Prerequisites </b>: Html&Css ,Javascript</h3>
        <h3><b>No. of registrations</b> :5</h3>
        <h3><b>Course DeadLine </b>:13/6/89</h3>
        </div>
    </div>
    <div className="mentors">
        <button id="teacher"><b>Mentors</b></button>
   
    <div id="mentors">
        <img className='img1' src="/background1.jpg">
        </img>
        <img className='img2' src="/background1.jpg">
        </img>
        </div>
        <div className='names'>
            <div>Naveen</div>
            <div>Karthik</div>
        </div>
        </div>
    </div>
    </div>
    <div className="outcomes">
        <p className='head'>Heading</p>
        <div className='outcome-ptags'>
        <p>	&#10004; Teach React.js</p>
        <p> &#10004; RealLife Projects</p>
        <p> &#10004; Live Sessions</p>
        <p> &#10004; Mock Interview Sessions</p>
        <p> &#10004; Doubt Assistance</p>
        <p> &#10004; Dive into Concepts relating to Version control</p>
        </div>
    </div>
    </div>
   </div>
    </>
  )
}
