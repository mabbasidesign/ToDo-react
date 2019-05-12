// import React, { Component } from 'react';

// const Todos = (todos, deleteTodos) => {


//     const todoList = todos.length ? (
//         todos.map( todo => {
//             return (
//                 <div className="collection-item" key={todo.id} >
//                     <span onClick={ () => deleteTodos(todo.id)}> {todo.content} </span>
//                 </div>
//             )
//         })
//     ) :
//     (
//     <p className="center"> you have no todos left </p>
//     )


//     return ( 
//         <div className="todos collection">
//             {todoList}
//         </div>
//      );
// }
 
// export default Todos;




import React from 'react';

const Todos = (props) => {
    return ( 
        <div className="todos collection">
            <ul className="collection-item">
            { props.todos.map(t => {
                return (
                    <li key={t.id} className="collection-item">{t.content}
                    <button
                    className="waves-effect waves-light btn-large red"
                    onClick={() => {props.deleteTodos(t.id)}}
                    >Delete
                    </button>
                    </li>
                )
            }) }
            </ul>
        </div>
     );
}
 
export default Todos;




