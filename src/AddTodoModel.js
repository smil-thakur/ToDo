import React from 'react'
import { useState } from 'react';

function AddTodoModel({ addToDoFun }) {
    var [title, setTitle] = useState("");
    var [desc, setDesc] = useState("");


    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Todo</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className='col text-start mb-3'>
                                <label className='col-form-label' htmlFor="title">Title</label>
                                <input className='form-control' value={title} type="text" id="title" onChange={(e) => { setTitle(e.target.value) }}></input>
                            </div>
                            <div className='col text-start mb-3'>
                                <label className='col-form-label' htmlFor="title">Desc</label>
                                <input className='form-control' value={desc} type="text" id="title" onChange={(e) => { setDesc(e.target.value) }}></input>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { addToDoFun(title, desc); setTitle(""); setDesc(""); }}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTodoModel