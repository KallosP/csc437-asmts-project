export default function FilterItem(props) {
	return (
		<div className="c-cb flex items-center gap-2">
			<input
				id={props.id}
				type="checkbox"
				className="w-4 h-4 accent-blue-500" // Make checkbox bigger and add color
			/>
			<label className="text-md" htmlFor={props.id}>
				{props.name}
			</label>
		</div>
	)
}
