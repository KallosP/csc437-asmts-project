import { groceryFetcher } from './groceryFetcher'
import React, { useEffect } from 'react'

const MDN_URL =
	'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'

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
		fetch(MDN_URL)
			.then((response) => {
				if (!response.ok) {
					throw Error('Something went wrong fetching MDN')
				}
				return response.json()
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
