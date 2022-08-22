import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} 
from "react-vertical-timeline-component";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";
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
          <p>
I participated in "Live The Code" Hackethon where I worked in a team and made a project using Web Development tools.Our team was among the top 5 teams in this hackethon.
</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </section>
  );
}

