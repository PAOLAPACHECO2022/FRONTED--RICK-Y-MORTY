import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


import "./Card.module.scss";

const CardDetails = () => {
	const { id } = useParams()

	const [fetchedData, updateFetchedData] = useState([])
	const { name, location, origin, gender, image, status, species,episode } = fetchedData

	const api = `https://rickandmortyapi.com/api/character/${id}`

	useEffect(() => {
		;(async function () {
			const data = await fetch(api).then((res) => res.json())
			updateFetchedData(data)
		})()
	}, [api])

	return ( 
		<div className="container d-flex justify-content-center  mb-5">
			
			<div className="img-thumbnail zoom d-flex flex-column mx-3 gap-3 bg-light  rounded-4 border-4"
			style = {{
				
				position: "absolute",
				top: "50%",
				left: "50%",
		
				minWidth: 300,
				maxWidth: 500,
				bgcolor: "background.primary",
				
				maxHeight: 300,
				overflowY: "auto",
				
				boxShadow: 24,
				p: 4,
				
			
			}
			}
			>
				<h1 className="text-center">{name}</h1>

				<img className="img-thumbnail zoom  rounded-4 border-4" src={image} alt="" />
				{(() => {
					if (status === 'Dead') {
						return <div className="badge bg-danger fs-5">{status}</div>
					} else if (status === 'Alive') {
						return <div className=" badge bg-success fs-5">{status}</div>
					} else {
						return <div className="badge bg-secondary fs-5">{status}</div>
					}
				})()}
				<div className="content" id="content"
				>
					<div className="">
						<span className="fw-bold">Gender : </span>
						{gender}
					</div>
					<div className="">
						<span className="fw-bold">Location: </span>
						{location?.name}
					</div>
					<div className="">
						<span className="fw-bold">Origin: </span>
						{origin?.name}
					</div>
					<div className="">
						<span className="fw-bold">Species: </span>
						{species}
					</div>
					<div className="">
					
						<span className="fw-bold">N° de Episodios en el que aparece: </span>
						{episode?.length} 

						
					</div>
					
				</div>
			</div>
		</div>
	)
}

export default CardDetails
