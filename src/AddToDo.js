import React from 'react'
import AddTodoModel from './AddTodoModel'

function AddToDo({ addToDofun }) {
    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col text-center'>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Add ToDo
                        </button>

                        <AddTodoModel addToDoFun={addToDofun} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddToDo