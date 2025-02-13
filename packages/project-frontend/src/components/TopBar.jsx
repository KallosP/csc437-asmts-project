import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function TopBar({handleMenuClick}) {
	return (
		<div className="flex w-full dark:bg-dark-header-background bg-header-background h-auto items-center justify-between px-8 py-2 lg:justify-center lg:p-2">
            {/* TODO: add hamburger button */}
            <button onClick={handleMenuClick} className="lg:hidden dark:focus:bg-dark-hamburger-hover focus:bg-hamburger-hover px-2 py-1 rounded-md transition-all duration-200">
				<FontAwesomeIcon icon={faBars} size="2x" className="dark:text-dark-hamburger text-hamburger" />
            </button>
			<p className="text-5xl font-header dark:text-dark-header-text text-header-text">SportSync</p>
		</div>
	)
}
