import React from 'react'
import PropTypes from 'prop-types'



const FilterBTN = ({ input, task, updatePageNumber, index, name }) => {
	return (
		<div>
			<style jsx>
				{`
					.x:checked + label {
						background-color: #0b5ed7;
						color: white;
					}
					input[type='radio'] {
						display: none;
					}
				`}
			</style>

			<div className="form-check">
				<input className="form-check-input x" type="radio" name={name} id={`${name}-${index}`} />
				<label
					onClick={(x) => {
						task(input)
						updatePageNumber(1)
					}}
					className="btn btn-outline fw-bold h5"
					htmlFor={`${name}-${index}`}
				>
					{input}
				</label>
			</div>
		</div>
	)
}

FilterBTN.propTypes = {
	input: PropTypes.any,
	task: PropTypes.func,
	updatePageNumber: PropTypes.func,
	index: PropTypes.number,
	name: PropTypes.string,
}

export default FilterBTN
