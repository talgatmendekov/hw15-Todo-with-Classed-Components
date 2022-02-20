import React from 'react';
import classes from './AddTodo.module.css'
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import { TodoContext } from '../../store/context';


class AddTodo extends React.Component {
    static contextType = TodoContext
    constructor() {
        super();
        this.state = { title: ''};
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        

    }
    
    inputChangeHandler(event) {
        this.setState({title: event.target.value});
    };

    submitHandler(event) {
        if(this.state.title.trim().length === 0){
            alert('Fill the input')
            return
        }
        event.preventDefault()
        const todoData = {
            id: Math.random().toString(),
            title : this.state.title,
            date: new Date().toLocaleDateString(),
            completed: false,
        }
        console.log(this.context.todos);
        this.context.onGet(todoData)
        this.setState({title: ''})
    };

    
    render() {
        return (
            <>
            <Card className={classes.input}>
                <form onSubmit={this.submitHandler}>
                    <input name='text' type='text' onChange={this.inputChangeHandler} value={this.state.title}/>
                    <Button type='submit'>AddTodo</Button>
                </form>
            </Card>
            </>
        )
    }
}

export default AddTodo;