import React from 'react'
import FilterItem from './FilterItem'

export default function LeftSidebar({ openLeftSidebar }) {
	return (
		<aside
			className={`absolute top-0 left-0 w-72 h-full shadow-lg bg-elevated-background dark:bg-dark-elevated-background duration-300 transition-transform ${
				openLeftSidebar ? 'translate-x-0' : '-translate-x-full'
			} lg:translate-x-0 lg:relative lg:flex lg:flex-col z-50 overflow-y-auto`}>
			<div className="p-6 space-y-10">
				{/* Sport Filters */}
				<div className="space-y-2">
					<h1 className="text-2xl dark:text-dark-hint-text text-normal-text">Sport</h1>
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
			<hr className="w-full border-divider dark:border-dark-divider"></hr>
			<div className="p-6 space-y-10">
				{/* Level Filters */}
				<div className="space-y-2">
					<h1 className="text-2xl dark:text-dark-hint-text text-normal-text">Level</h1>
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
