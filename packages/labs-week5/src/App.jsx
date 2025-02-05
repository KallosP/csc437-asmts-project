import TodoItem from './components/TodoItem.jsx'
import AddTaskForm from './components/AddTaskForm.jsx'
import { useState } from 'react'
import { nanoid } from 'nanoid'

function App(props) {
	const [tasks, setTasks] = useState(props.tasks)

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

	return (
		<main className="m-4">
			{' '}
			{/* Tailwind: margin level 4 on all sides */}
			<AddTaskForm onNewTask={addTask} />
			<section className="flex flex-col mt-4 gap-2">
				<h1 className="text-xl font-bold">To do</h1>
				<ul className="flex flex-col gap-1">{taskList}</ul>
			</section>
		</main>
	)
}

export default App
