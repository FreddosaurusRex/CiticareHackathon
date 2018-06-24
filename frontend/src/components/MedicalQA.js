import React, { Component } from "react";
import {
  Col,
  Row,
  Collection,
  CollectionItem,
  Navbar,
  Divider,
  Card, Button
} from "react-materialize";

export default class MedicalQA extends Component {
  state = {
    questions: [
      {
        q:
          "Where should I go to get help for my child who has extreme anxiety after gunfight?",
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
      },
      {
        q: "How should get a traumatized child help at their public school?",
        a: 1,
        lastAnswered: "7d"
      },
      {
        q:
          "What is the best way to talk to a child about a traumatic event in a therapeutic way?",
        a: 24,
        lastAnswered: "18d"
      }
    ],
    comments: [
      {
        author: "Doctor M.D.",
        authorCreds: "Therapist at Hartford Hospital",
        answer: "Professional answer goes here."
      },
      {
        author: "John Bard",
        authorCreds: "Community Leader",
        answer: "Life experience goes here."
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
          <h4>{this.state.questions[0].q}</h4>
          <Divider />
          {this.state.comments.map((comment, i) => (
            <Card
              key={i}
              horizontal
              actions={[<Button href="#">REPLY</Button>]}
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
