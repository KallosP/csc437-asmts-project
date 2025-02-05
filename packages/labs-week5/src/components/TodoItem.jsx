import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function TodoItem(props) {
	return (
		<li className="todo flex">
			<div className="c-cb mr-5">
				<input
					id={props.id}
					type="checkbox"
					checked={props.completed}
					onChange={() => props.toggleTaskCompleted(props.id)}
				/>
				<label className="todo-label ml-1" htmlFor="todo-0">
					{props.name}
				</label>
			</div>
			<button className="ml-3" onClick={() => props.deleteTask(props.id)}>
				<FontAwesomeIcon icon={faTrash} title="Delete" className="text-gray-500" />
			</button>
		</li>
	)
}

export default TodoItem
