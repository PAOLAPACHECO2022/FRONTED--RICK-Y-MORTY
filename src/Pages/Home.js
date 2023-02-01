import React, { useState, useEffect } from 'react'

import Search from '../components/Search/Search'
import Card from '../components/Card/Card'
import Pagination from '../components/Pagination/Pagination'
import Filter from '../components/Filter/Filter'
export default function Home() {

	let [pageNumber, setPageNumber] = useState(1);
	let [status, updateStatus] = useState('');
	let [gender, updateGender] = useState('');
	let [species, updateSpecies] = useState('');
	let [search, setSearch] = useState('');
	let [fetchedData, updateFetchedData] = useState([]);
	let { info, results } = fetchedData;
	
   

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;


	useEffect(() => {
		;(async function () {
			const data = await fetch(api).then((res) => res.json())
			updateFetchedData(data)
		})()
	}, [api])

	return (
		<div className="App">
			<h1 className="text-center mb-3">Characters</h1>
			<Search setPageNumber={setPageNumber} setSearch={setSearch}  />
			<div className="container">
				<div className="row">
				<div className="col-lg-8 col-12">
						<div className="row">
							<Card page="/" results={results} />
						</div>
					</div>
					<Filter
						pageNumber={pageNumber}
						status={status}
						updateStatus={updateStatus}
						updateGender={updateGender}
						updateSpecies={updateSpecies}
						setPageNumber={setPageNumber}
						
					/>
				
				</div>
			</div>
			<Pagination info={info} pageNumber={pageNumber} updatePageNumber={setPageNumber} />
		</div>
	)
}


