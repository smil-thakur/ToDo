import React, { Component } from 'react'
import Todo from './Todo'

export default class Todos extends Component {
    render() {
        return (
            <div className='container'>
                <h3 className='text-center mt-5 mb-5'>List of ToDos</h3>
                {this.props.todos.length === 0 ? <h5>No ToDos to display</h5> : this.props.todos.map((todo) => {
                    return <Todo todo={todo} key={todo.key} onClick={this.props.onClick} />
                })}
            </div>
        )
    }
}
