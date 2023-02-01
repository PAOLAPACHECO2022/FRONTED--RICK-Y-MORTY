import React from 'react'
import PropTypes from 'prop-types'
import FilterBTN from '../FilterBTN'

const Species = ({ updateSpecies, updatePageNumber }) => {
	const species = [
		'Human',
		'Alien',
		'Humanoid',
		'Poopybutthole',
		'Mythological',
		'Unknown',
		'Animal',
		'Disease',
		'Robot',
		'Cronenberg',
		'Planet',
	]
	return (
		<div className="accordion-item ">
			<h2 className="accordion-header" id="headingTwo">
				<button
					className="accordion-button bg-info collapsed fw-bold"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseTwo"
					aria-expanded="false"
					aria-controls="collapseTwo"
				>
					Species
				</button>
			</h2>
			<div
				id="collapseTwo"
				className="accordion-collapse collapse"
				aria-labelledby="headingTwo"
				data-bs-parent="#accordionExample"
			>
				<div className="accordion-body d-flex bg-info flex-wrap gap-3">
					{species.map((item, index) => {
						return (
							<FilterBTN
								name="species"
								index={index}
								key={index}
								updatePageNumber={updatePageNumber}
								task={updateSpecies}
								input={item}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}

Species.propTypes = {
	updateSpecies: PropTypes.func,
	updatePageNumber: PropTypes.func,
}

export default Species
