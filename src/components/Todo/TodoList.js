import React from 'react'
import { TodoContext } from '../../store/context';
import Card from '../UI/Card/Card';
import TodoItem from './TodoItem';
import classes from './TodoList.module.css'


class TodoList extends React.Component {
    static contextType = TodoContext
    render() {
        return (
            <Card className={classes.todos}>
                <ul>
                    {this.context.todos.map(el=>{
                        return(
                            <TodoItem key={el.id} title={el.title} date={el.date} id={el.id} completed={el.completed}/>
                        )
                    })}
                    
                </ul>
            </Card>
        )
    }
};

export default TodoList;