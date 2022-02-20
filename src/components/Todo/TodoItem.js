import React from 'react'
import { TodoContext } from '../../store/context'
import Button from '../UI/Button/Button'
import classes from './TodoItem.module.css'

class TodoItem extends React.Component {
	static contextType = TodoContext
    constructor(){
        super()
    }
	onDeleteTodoHandler(event) {
		const filtered = this.context.todos.filter(
			(el) => el.id !== event.target.id,
		)
		this.context.setState({ todos: [...filtered] })
	}

	onCompleteTodoHandler(event) {
		this.context.setState({
			todos: this.context.todos.map((el) => {
				if (el.id === event.target.id) {
					el.completed = !el.completed
				}
				return el
			}),
		})

		console.log(this.context.todos)
	}

	render() {
		return (
			<li className={classes.todo}>
				<div>
					<input
						type='checkbox'
						id={this.props.id}
						onChange={this.onCompleteTodoHandler.bind(this)}
						checked={this.props.completed}
					/>
					<strong
						className={this.props.completed ? classes.done : ''}
					>
						{this.props.title}
					</strong>
                    {console.log(this.props.completed)}
					<div className={this.props.completed ? classes.done : ''}>{this.props.date}</div>
				</div>
				<Button
					onClick={this.onDeleteTodoHandler.bind(this)}
					id={this.props.id}
				>
					delete
				</Button>
			</li>
		)
	}
}

export default TodoItem
