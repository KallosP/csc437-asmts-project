import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Todo(props) {
	return (
		<li className="todo flex">
			<div className="c-cb mr-5">
				<input id={props.id} type="checkbox" defaultChecked={props.completed} />
				<label className="todo-label ml-1" htmlFor="todo-0">
					{props.name}
				</label>
			</div>
			<button>
				<FontAwesomeIcon icon={faTrash} title="Delete" className="text-gray-500" />
			</button>
		</li>
	)
}

export default Todo
