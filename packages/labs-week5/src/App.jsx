import TodoItem from './components/TodoItem.jsx'
import AddTaskForm from './components/AddTaskForm.jsx'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import Modal from './components/Modal.jsx'
import { GroceryPanel } from './GroceryPanel.jsx'

function App(props) {
	const [tasks, setTasks] = useState(props.tasks)
	const [isOpen, setIsOpen] = useState(false)

	const taskList = tasks.map((task) => (
		<TodoItem
			id={task.id}
			name={task.name}
			completed={task.completed}
			key={task.id}
			toggleTaskCompleted={toggleTaskCompleted}
			deleteTask={deleteTask}
		/>
	))

	function addTask(name) {
		const newTaskList = [...tasks, { id: `todo-${nanoid()}`, name, completed: false }]
		setTasks(newTaskList)
	}

	function deleteTask(id) {
		// Filter out id
		const remainingTasks = tasks.filter((task) => id !== task.id)
		setTasks(remainingTasks)
	}

	function toggleTaskCompleted(id) {
		const updatedTasks = tasks.map((task) => {
			// if this task has the same ID as the edited task
			if (id === task.id) {
				// use object spread to make a new object
				// whose `completed` prop has been inverted
				return { ...task, completed: !task.completed }
			}
			return task
		})
		setTasks(updatedTasks)
	}

	function toggleModal() {
		setIsOpen(!isOpen)
	}

	return (
		<main className="m-4">
			{' '}
			<button
				onClick={toggleModal}
				className="px-2 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800">
				Add Task
			</button>
			{isOpen ? (
				<Modal headerLabel="Add Task" onCloseRequested={toggleModal}>
					{/* Tailwind: margin level 4 on all sides */}
					<AddTaskForm onNewTask={addTask} closeModal={toggleModal} />
				</Modal>
			) : null}
			<section className="flex flex-col mt-4 gap-2">
				<h1 className="text-xl font-bold">To do</h1>
				<ul className="flex flex-col gap-1">{taskList}</ul>
			</section>
			<section className="mt-4">
				<GroceryPanel addTask={addTask} />
			</section>
		</main>
	)
}

export default App
