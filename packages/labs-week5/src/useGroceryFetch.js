import { groceryFetcher } from './groceryFetcher'
import React, { useEffect } from 'react'

export function useGroceryFetch(source) {
	const [isLoading, setIsLoading] = React.useState(false)
	const [error, setError] = React.useState(null)
	const [groceryData, setGroceryData] = React.useState([])

	useEffect(() => {
		fetchData(source)
		return () => {
			isStale = true
		}
	}, [source])

	useEffect(() => {
        setIsLoading(true)
		groceryFetcher.fetch("MDN")
			.then((response) => {
				return response
			})
			.then((data) => {
				setGroceryData(data)
			})
			.catch((error) => {
				console.log(error)
				setError(error)
			})
            .finally(() => {
                setIsLoading(false)
            })
	}, [])

	let isStale = false
	async function fetchData(url) {
		setGroceryData([])
		console.log('fetching data from ' + url)
		setError(null)
		setIsLoading(true)

		if (url === '') {
			setIsLoading(false)
			return
		}

		groceryFetcher
			.fetch(url)
			.then((response) => {
				console.log('loading', isLoading)
				return response
			})
			.then((data) => {
				if (!isStale) {
					setGroceryData(data)
				}
			})
			.catch((error) => {
				if (!isStale) {
					console.log('TEST', error)
					setError(error)
				}
			})
			.finally(() => {
				if (!isStale) {
					setIsLoading(false)
				}
			})
	}

	return { isLoading, error, groceryData }
}
