import { useState } from 'react'

export default function CommentSection() {
	const [comment, setComment] = useState('')
	const [comments, setComments] = useState([])

	const handlePostComment = () => {
		// Ignore empty comments
		if (comment.trim() === '') return
		// Add new comment at the top
		setComments([{ text: comment, id: Date.now() }, ...comments])
		// Clear input field
		setComment('')
	}

	return (
		<div className="flex flex-col w-full mx-auto mt-4 py-4 px-16 rounded-lg ">
            <h3 className="text-2xl dark:text-dark-normal-text text-normal-text">Add Comment</h3>
			{/* Comment Input */}
			<div className="flex gap-2 items-center mt-2">
				<input
					type="text"
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					placeholder="Write a comment..."
					className="flex-1 text-lg dark:text-lg placeholder:text-lg dark:text-dark-normal-text text-normal-text placeholder:text-hint-text dark:placeholder:text-dark-hint-text  px-3 py-4 rounded-lg bg-elevated-background dark:bg-dark-elevated-background rounded-lg focus:outline-none focus:ring-2 focus:ring-input-border-ring dark:focus:ring-dark-input-border-ring dark:border-dark-input-border"
				/>
				<button
					onClick={handlePostComment}
					className="text-button-text h-10 dark:text-dark-button-text cursor-pointer transition-all duration-300 bg-button-background dark:bg-dark-button-background hover:bg-button-hover dark:hover:bg-dark-button-hover focus:bg-button-focus dark:focus:bg-dark-button-focus font-medium rounded-lg text-sm px-4 py-2 ">
					Post
				</button>
			</div>

            <h3 className="mt-8 text-2xl dark:text-dark-normal-text text-normal-text">Posted Comments</h3>
			{/* Comment List */}
			<ul className="mt-2 space-y-2">
				{comments.map((c) => (
					<li key={c.id} className="p-4 rounded-lg h-auto text-wrap break-words bg-elevated-background dark:bg-dark-elevated-background">
						<p className="dark:text-dark-normal-text text-normal-text text-lg">{c.text}</p>
					</li>
				))}
			</ul>
		</div>
	)
}
