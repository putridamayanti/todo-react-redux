import React from 'react';
import { Container, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchTodo } from "../actions/TodoAction";

class TodoForm extends React.Component {

    componentDidMount() {
        console.log('aa');
        this.props.fetchTodo();
    }

    render() {
        return (
            <Container class="p-4">
                <h3>Todo List</h3>
                <Button>New Todo</Button>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos : state.todoStore.todos,
        loading: state.todoStore.loading,
        errors: state.todoStore.errors
    }
}

export default connect(mapStateToProps, { fetchTodo })(TodoIndex);
