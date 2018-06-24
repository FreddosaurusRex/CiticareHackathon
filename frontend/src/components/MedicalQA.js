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

export default class MedicalQA extends Component {
  state = {
    questions: [
      {
        q: "How do I convince someone...",
        a: 2,
        lastAnswered: "3h"
      }
    ],
    comments: [
      {
        author: "Doctor M.D.",
        authorCreds: "Therapist at Hartford Hospital",
        answer: "yeah yeah yeah"
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
              <CollectionItem key={i} active href="#">
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
          <h2>How do I convince someone to do something?</h2>
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
