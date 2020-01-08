import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col, Form, Button, ButtonToolbar} from "react-bootstrap";

class TodoItemFormComponent extends React.Component {

    componentDidMount() {
        if (this.props.todo) {
            const todo = this.props.todo;
            this.props.initialize({ todo: todo });
        }
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <Form onSubmit={ handleSubmit }>
                    <Row>
                        <Col xs={9}>
                            <Form.Group>
                                <Field name="id" component="input" placeholder="Add Todo" style={{ display: 'none' }}/>
                                <Field name="todo.todo" type="text" component="input" placeholder="Add Todo" className="form-control"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button type="submit" block>Save</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default reduxForm({form: 'todo_item'})(TodoItemFormComponent);
