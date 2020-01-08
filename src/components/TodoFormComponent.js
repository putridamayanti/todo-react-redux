import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Row, Col, Form, Button } from "react-bootstrap";

class TodoFormComponent extends React.Component {

    componentDidMount() {
        if (this.props.todo) {
            this.props.initialize({ todo: this.props.todo });
        }
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <Form onSubmit={ handleSubmit }>
                <Row>
                    <Col xs={10}>
                        <Form.Group>
                            <Field name="todo.todo" type="text" component="input" placeholder="Add Todo" className="form-control"/>
                        </Form.Group>
                    </Col>
                    <Col xs={2}>
                        <Button type="submit">Add</Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default reduxForm({form: 'todo'})(TodoFormComponent);
