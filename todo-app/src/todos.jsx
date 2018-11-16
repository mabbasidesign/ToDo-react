import React, { Component } from 'react';

const Todos = (todos) => {

    const todoList = todos.length < 0 ? (
        todos.map( todo => {
            return (
                <div className="collection-item" key={todo.id} >
                    <span> {todo.content} </span>
                </div>
            )
        })
    ) :
    (
    <p className="center"> you have no todos left </p>
    )


    // const todoList = todos.map( todo => {
    //     return(
    //         <div className="collection-item">
    //             <span> {todo.content} </span>
    //         </div>
    //     )
    // })

    // const todoList = todos.map( (todo) => {
    //     return(
    //         <div>
    //             <span> {todo.content} </span>
    //         </div>
    //     )
    // })


    return ( 
        <div className="todos collection">
            {todoList}
        </div>
     );
}
 
export default Todos;



