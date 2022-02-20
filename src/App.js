import React from 'react'
import './App.css'
import AddTodo from './components/Todo/AddTodo'
import TodoList from './components/Todo/TodoList'

class App extends React.Component {
	// constructor(props) {
	//   super(props);
	//   this.state = {todos: []}
	//   this.getDataHandler = this.getDataHandler.bind(this)
	// }

	// getDataHandler(item) {
	//   this.setState({todos:[...this.state.todos, item]})
	//   console.log(this.state)

	// };

	render() {
		return (
			<div className='App'>
				<AddTodo />
				<TodoList />
			</div>
		)
	}
}
export default App
