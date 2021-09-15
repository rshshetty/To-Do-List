import React from 'react'

const TodoItem = (props) => {


    return (
        <div className="list" onClick={() => { props.delete(props.id) }}><li className="to">{props.todo}</li>

      
            
        </div>
    )
}

export default TodoItem;
