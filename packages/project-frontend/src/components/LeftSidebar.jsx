import React from 'react'
import FilterItem from './FilterItem'

export default function LeftSidebar() {
	return (
		<aside className="w-72 h-auto hidden lg:flex flex-col shadow-lg relative overflow-y-auto bg-white">
			<div className="p-6 space-y-10">
				{/* Sport Filters */}
				<div className="space-y-2">
					<h1 className="text-2xl">Sport</h1>
					<ul className="space-y-1">
						<FilterItem id="soccer" name="Soccer" />
						<FilterItem id="basketball" name="Basketball" />
						<FilterItem id="baseball" name="Baseball" />
						<FilterItem id="football" name="Football" />
						<FilterItem id="volleyball" name="Volleyball" />
						<FilterItem id="tennis" name="Tennis" />
						<FilterItem id="other" name="Other" />
					</ul>
				</div>
			</div>
			<hr className="w-full border-gray-300"></hr>
			<div className="p-6 space-y-10">
				{/* Level Filters */}
				<div className="space-y-2">
					<h1 className="text-2xl">Level</h1>
					<ul className="space-y-1">
						<FilterItem id="all" name="All" />
						<FilterItem id="casual" name="Casual" />
						<FilterItem id="recreational" name="Recreational" />
						<FilterItem id="competitive" name="Competitive" />
					</ul>
				</div>
			</div>
		</aside>
	)
}
