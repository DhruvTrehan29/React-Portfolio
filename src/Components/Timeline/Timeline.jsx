import React from "react";
import './timeline.css'
import {
  VerticalTimeline,
  VerticalTimelineElement
} 
from "react-vertical-timeline-component";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";
import { FaBriefcase } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";


export default function App() {
  return (
    <section id="App">
      <h5>Educational Qualification And Achievments</h5>
      <h2>Timeline</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2c2c6c", color: "#4db5ff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2017 - 2018"
          iconStyle={{ background: "#4db5ff", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Class 10</h3>
          <p>
          I passed my class 10th with an aggregate of 93.2%
          </p>
        </VerticalTimelineElement>
        {}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2c2c6c", color: " #4db5ff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2019 - 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Class 12</h3>
          <p>I passed my class 12th with an aggregate of 94.2%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#2c2c6c", color: " #4db5ff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2020-2021"
          iconStyle={{ background: "#4db5ff", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Class 12 Achievments
          </h3>
          <p>Recieved Student Excellence award for highest marks in a zone in class 12</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#2c2c6c", color: " #4db5ff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2020-2024 (Present)"
          iconStyle={{ background: "#4db5ff", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Btech In Information Technology
          </h3>
          <p>I am currently pursuing Btech in Informtion Technology from Dr.Akhilesh Das Gupta Institute Of Technology And Management</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#2c2c6c", color: " #4db5ff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="December 2021"
          iconStyle={{ background: "#4db5ff", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Live The Code Hackethon
          </h3>
          <p className="paraAlignment">
I participated in "Live The Code" Hackethon where I worked in a team and made a project using Web Development tools.Our team was among the top 5 teams in this hackethon.
</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#2c2c6c", color: " #4db5ff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="August 2022-september 2022"
          iconStyle={{ background: "#4db5ff", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          IBM Training on Artificial Intellegence And Machine Learning.
          </h3>
          <p className="paraAlignment">
          •	Studied and developed familiarity with range of machine learning algorithms, including linear regression, Decision Tree and logistic regression.<br/><br/>
          •	Explored diverse applications of artificial intelligence, including computer vision, Natural Language P.rocessing (NLP) and expert systems.<br/><br/>
          •	Developed and successfully completed a project on Speech To Text recognition as a part of the training program

         </p>
        </VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: "#2c2c6c", color: "#4db5ff" }}
  contentArrowStyle={{
    borderRight: "7px solid rgb(33, 150, 243)",
  }}
  date="2024 - Present"
  iconStyle={{ background: "#4db5ff", color: "#fff" }}
  icon={<FaBriefcase/>}
>
  <h3 className="vertical-timeline-element-title">Software Engineer</h3>
  <h4 className="vertical-timeline-element-subtitle">Accenture</h4>

  <p>
    Working as a Java Backend Developer on the Google PlayHub project.
  </p>
<br />
  <ul>
    <li>
      • Developed and maintained backend services using Java and Spring Boot,
      focusing on scalable and reliable application development.
    </li>
    <br />
    <li>
      •	Worked with Google Cloud technologies including Spanner and integrated
      backend services with AppSheet.
    </li>
    <br />
    <li>
      •	Implemented and optimized database operations, caching mechanisms, and
      data-access layers to improve application performance.
    </li>
    <br />
    <li>
      •	Designed and enhanced APIs and backend components while troubleshooting
      production issues and resolving critical defects.
    </li>
    <br />
    <li>
      •	Worked with unit testing and Mockito to ensure reliability and maintain
      code quality across backend components.
    </li>
    <br />
  </ul>
</VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </section>
  );
}

