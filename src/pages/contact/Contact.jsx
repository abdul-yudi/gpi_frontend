import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Container} from 'reactstrap';
import './Contact.css';

const Contact = () => {
  return (
    <Container className="page">
      <h1 className="main-title">Contact</h1>
      <Form method="post">
        <Row>
          <Col md="6">
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="Your Name *" />
            </FormGroup>
            <FormGroup>
              <Label for="subject">Subject</Label>
              <Input type="text" name="subject" id="subject" placeholder="Your Subject *" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Your Email *" />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="message">Message</Label>
              <Input type="textarea" rows="8" name="message" id="message" placeholder="Your Message *" />
            </FormGroup>
          </Col>
          <Col xs="12" sm="12" md="12">
            <FormGroup>
              <Button color="success">Submit</Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default Contact;