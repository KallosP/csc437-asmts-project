import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'

export default function Modal(props) {
	const modalRef = useRef(null)

	function handleOverlayClick(event) {
		// Check if ref exists and the click was outside the modal
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			props.onCloseRequested()
		}
	}
	return (
		// Screen overlay
		<div
			onClick={handleOverlayClick}
			className="flex inset-0 justify-center items-center h-screen w-screen absolute bg-blue-200/50 ">
			<div ref={modalRef} className="flex flex-col relative h-fit p-4 bg-white rounded-md">
				<div className="flex justify-between mb-4 align-center items-center">
					<header className="text-center">{props.headerLabel}</header>
					<button
						onClick={props.onCloseRequested}
						aria-label="Close"
						className="mt-1 cursor-pointer">
						<FontAwesomeIcon icon={faX} className="w-2 h-2" />
					</button>
				</div>
				{props.children}
			</div>
		</div>
	)
}
