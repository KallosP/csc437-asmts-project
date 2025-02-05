import React from 'react'

function AddTaskForm({ onNewTask }) {
	const [textField, setTextField] = React.useState('')
	function handleChange(e) {
		setTextField(e.target.value)
	}
	function handleButtonClicked() {
		onNewTask(textField) // onNewTask is from props
		setTextField('')
	}
	return (
		<div>
			{' '}
			{/* Unfortunately comments in JSX have to be done like this */}
			<input
				className="p-2 border-2 rounded-md mr-2"
				placeholder="New task name"
				value={textField}
				onChange={handleChange}
			/>
			<button
				onClick={handleButtonClicked}
				className="px-2 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800">
				Add task
			</button>
		</div>
	)
}

export default AddTaskForm
