import React, { Component } from "react";
import {
  Col,
  Row,
  Collection,
  CollectionItem,
  Navbar,
  Divider,
  Card
} from "react-materialize";

// How should get a traumatized child help at their public school?
// What is the best way to talk to a child about a traumatic event in a therapeutic way?

export default class MedicalQA extends Component {
  state = {
    questions: [
      {
        q:
          "Where should I go to get help for a my child who has extreme anxiety after gunfight?",
        a: 2,
        lastAnswered: "3h"
      },
      {
        q: "What should I do when a gunshot goes off nearby a youth I know?",
        a: 16,
        lastAnswered: "1d"
      },
      {
        q:
          "Who is someone that I can go to for gunshot trauma therapy for my child after 10 pm?",
        a: 3,
        lastAnswered: "17h"
      }
    ],
    comments: [
      {
        author: "Doctor M.D.",
        authorCreds: "Therapist at Hartford Hospital",
        answer: "Professional answer goes here."
      }
    ]
  };
  render() {
    return (
      <Row id="qa" style={{ borderRight: "1px solid black" }}>
        <Col s={4}>
          <Navbar brand="Q&A" />
          <Collection>
            {this.state.questions.map((question, i) => (
              <CollectionItem
                key={i}
                className={i == 0 ? "active" : null}
                href="#"
              >
                {question.q}
                <br />
                <font style={{ color: "lightgrey" }}>
                  {question.a} answers · {question.lastAnswered}
                </font>
              </CollectionItem>
            ))}
          </Collection>
        </Col>
        <Col
          s={8}
          style={{
            paddingLeft: "35px",
            paddingTop: "30px",
            paddingRight: "30px"
          }}
        >
          <h2>{this.state.questions[0].q}</h2>
          <Divider />
          {this.state.comments.map((comment, i) => (
            <Card
              key={i}
              horizontal
              actions={[<a href="#">REPLY</a>]}
              title={comment.author}
            >
              <b>{comment.authorCreds}</b>
              <br />
              <br />
              <p>{comment.answer}</p>
            </Card>
          ))}
        </Col>
      </Row>
    );
  }
}
