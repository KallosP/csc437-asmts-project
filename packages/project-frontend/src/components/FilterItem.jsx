export default function FilterItem(props) {
	return (
		<div className="c-cb flex items-center gap-2">
			<input
				id={props.id}
				type="checkbox"
				className="w-4 h-4 bg-blue-500  accent-checkbox-checked dark:accent-dark-checkbox-checked" 
			/>
			<label className="text-md text-normal-text dark:text-dark-normal-text" htmlFor={props.id}>
				{props.name}
			</label>
		</div>
	)
}
