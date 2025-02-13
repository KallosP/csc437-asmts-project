import React from 'react'

export default function TopBar() {
	return (
		<div className="flex w-full dark:bg-dark-header-background bg-header-background h-auto items-center justify-between px-8 py-2 lg:justify-center lg:p-2">
            {/* TODO: add hamburger button */}
            <button>
            </button>
			<p className="text-5xl font-header dark:text-dark-header-text text-header-text">SportSync</p>
		</div>
	)
}
