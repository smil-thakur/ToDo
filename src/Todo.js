import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <>
                <div className='card m-2'>
                    <div className='card-body'>
                        <h4 className='card-title'>{this.props.todo.title}</h4>
                        <p className='card-text'>{this.props.todo.desc}</p>
                        <a onClick={() => this.props.onClick(this.props.todo)} className=" btn btn-danger btn-sm ">Delete</a>
                    </div>
                </div>
            </>
        )
    }
}
