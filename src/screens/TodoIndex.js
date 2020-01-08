import React from 'react';
import { Container, Form, Spinner, Row, Col, Button, ButtonToolbar } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchTodo, storeTodo, updateTodo, deleteTodo } from "../actions/TodoAction";
import TodoFormComponent from "../components/TodoFormComponent";
import TodoItemFormComponent from "../components/TodoItemFormComponent";

class TodoIndex extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            edit: -1
        };
        this.submit = this.submit.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.props.fetchTodo();
    }

    submit(todo) {
        todo.status = 0;
        this.props.storeTodo(todo);

    }

    completeToggle(todo) {
        todo.status = todo.status === 0 ? 1 : 0;
        console.log(todo);
        this.update(todo);
    }

    async update(todo) {
        await this.props.updateTodo(todo.id, todo);
        if (this.props.todo_update && this.props.todo_update.status === 'success') {
            this.props.fetchTodo();
            this.setState({ edit: -1 });
        }
    }

    async delete(id) {
        await this.props.deleteTodo(id);
        if (this.props.todo_delete && this.props.todo_delete.status === 'success') {
            this.props.fetchTodo();
        }
    }

    loadingContent() {
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    }

    todoList(todos) {
        return (
            <Form.Group controlId="formBasicCheckbox">
                { todos.map((item, i) => {
                    if (this.state.edit === i) {
                        return (
                            <Row key={i}>
                                <Col xs={9}><TodoItemFormComponent todo={item} onSubmit={ this.update }/></Col>
                                <Col><Button className="btn-secondary" block onClick={() => { this.setState({ edit: -1 })}}>Cancel</Button></Col>
                            </Row>
                        )
                    } else {
                        return (
                            <Row key={i}>
                                <Col xs={6}>
                                    <p className="text-left">{ item.todo }</p>
                                </Col>
                                <Col>
                                    <ButtonToolbar className="float-right">
                                        { item.status === 0 ? (
                                            <Button size="sm" className="mr-2" onClick={() => this.completeToggle(item) }>Complete</Button>
                                        ) : (
                                            <Button size="sm" className="mr-2 btn-secondary" onClick={() => this.completeToggle(item) }>Uncomplete</Button>
                                        )}

                                        <Button type="button" size="sm" className="mr-2 btn-warning" onClick={() => { this.setState({ edit: i })}}>Edit</Button>
                                        <Button size="sm" className="btn-danger" onClick={() => this.delete(item.id) }>Delete</Button>
                                    </ButtonToolbar>
                                </Col>
                            </Row>
                        );
                    }
                })}
            </Form.Group>
        )
    }

    todoForm(todo) {
        return (
            <TodoFormComponent todo={ todo } onSubmit={ this.submit }/>
        )
    }

    render() {
        const loading = this.props.loading;
        const todos = this.props.todos;
        return (
            <Container className="p-4">
                <Row className="justify-content-md-center">
                    <Col lg={6} xs={12}>
                        { this.todoForm(this.props.todo)}

                        <h3 className="mb-2">Todo List</h3>
                        { loading && this.loadingContent() }
                        { todos.length !== 0 && this.todoList(todos) }
                    </Col>
                </Row>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        todo: state.todoStore.todo,
        todos : state.todoStore.todos,
        todo_update: state.todoStore.todo_update,
        todo_delete: state.todoStore.todo_delete,
        loading: state.todoStore.loading,
        errors: state.todoStore.errors
    }
}

export default connect(mapStateToProps, { fetchTodo, storeTodo, updateTodo, deleteTodo })(TodoIndex);
