export default function FilterItem(props) {
	return (
		<label className="c-cb flex items-center gap-2 cursor-pointer">
			<input
				id={props.id}
				type="checkbox"
				className="peer hidden"
			/>
			<div className="w-4 h-4 transition-all duration-200 rounded border border-checkbox-border bg-checkbox-background dark:bg-dark-checkbox-background peer-checked:bg-blue-500 peer-checked:border-blue-500" />
			<span className="text-md text-normal-text dark:text-dark-normal-text">
				{props.name}
			</span>
		</label>
	)
}
