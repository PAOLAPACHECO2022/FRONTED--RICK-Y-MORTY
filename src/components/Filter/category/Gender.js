import React from 'react'
import PropTypes from 'prop-types'
import FilterBTN from '../FilterBTN'

const Gender = ({ updateGender, updatePageNumber }) => {
	const genders = ['Female', 'Male', 'Genderless', 'Unknown']
	const index = 1
	return (
		<div className="accordion-item">
			<h2 className="accordion-header" id="headingThree">
				<button
					key={`button-${index + 1}`}
					className="accordion-button bg-light collapsed fw-bold"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseThree"
					aria-expanded="false"
					aria-controls="collapseThree"
				>
					Gender
				</button>
			</h2>
			<div
				id="collapseThree"
				className="accordion-collapse collapse"
				aria-labelledby="headingThree"
				data-bs-parent="#accordionExample"
			>
				<div className="accordion-body d-flex flex-wrap bg-light gap-3 bg-warning">
					{genders.map((items, index) => {
						return (
							<FilterBTN
								name="gender"
								index={index}
								key={index}
								updatePageNumber={updatePageNumber}
								task={updateGender}
								input={items}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}

Gender.propTypes = {
	updateGender: PropTypes.func,
	updatePageNumber: PropTypes.func,
}

export default Gender
