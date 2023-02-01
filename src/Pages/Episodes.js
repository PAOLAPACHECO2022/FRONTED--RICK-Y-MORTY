import React, { useEffect, useState } from 'react'
import Card from '../components/Card/Card'
import InputGroup from '../components/Filter/category/InputGroup'

export default function Episodes() {

	const [results, setResults] = React.useState([])
	const [info, setInfo] = useState([])
	const { air_date: airDate, name } = info
	const [id, setID] = useState(1)

	const api = `https://rickandmortyapi.com/api/episode/${id}`

	useEffect(() => {
		;(async function () {
			const data = await fetch(api).then((res) => res.json())
			setInfo(data)

			const a = await Promise.all(
				data.characters.map((x) => {
					return fetch(x).then((res) => res.json())
				})
			)
			setResults(a)
		})()
	}, [api])

	return (
		<div className="container">
			<div className="row mb-3">
				<h1 className="text-center mb-3">
					Episode : <span className="text-primary">{name === '' ? 'Unknown' : name}</span>
				</h1>
				<h5 className="text-center">Air Date: {airDate === '' ? 'Unknown' : airDate}</h5>
			</div>
			<div className="row">
				<div className="col-lg-3 col-12 mb-4">
					<h4 className="text-center mb-4">Pick Episode</h4>
					<InputGroup name="Episode" changeID={setID} total={51} />
				</div>
				<div className="col-lg-8 col-12 mx-2">
					<div className="row">
						<Card page="/episodes/" results={results} />
					</div>
				</div>
			</div>
		</div>
	)
}


