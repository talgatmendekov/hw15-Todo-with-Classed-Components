import React, { createContext } from "react";


export const TodoContext = createContext({
    todos: [],
    onGet: () => {},
    setState: () => {},
})

class TodoContextProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
        this.getDataHandler = this.getDataHandler.bind(this)
        this.setState = this.setState.bind(this)
    }

    componentDidMount() {
        let localData = JSON.parse(localStorage.getItem('todos'))
        this.setState({todos: [...localData || [

        ]]})
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.todos !== prevState.todos){
            localStorage.setItem('todos', JSON.stringify(this.state.todos))
        }
       
    }
    getDataHandler(item) {
        this.setState({todos: [...this.state.todos, item]})
        console.log('kjhkj')
    }


    
    render() {
        return (
            <TodoContext.Provider value={{todos:this.state.todos, onGet: this.getDataHandler, setState:this.setState}}>
                {this.props.children}
            </TodoContext.Provider>
        )
    }
};

export default TodoContextProvider;