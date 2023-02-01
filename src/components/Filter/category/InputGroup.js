import React from 'react'
import PropTypes from 'prop-types'

const InputGroup = ({ name, changeID, total }) => {
	return (
		<div className="input-group mb-3">
			<select onChange={(e) => changeID(e.target.value)} className="form-select" id={name}>
				<option value="1">Choose...</option>
				{[...Array(total).keys()].map((x, index) => {
					return (
						<option value={x + 1} key={index}>
							{name} - {x + 1}
						</option>
					)
				})}
			</select>
		</div>
	)
}

InputGroup.propTypes = {
	name: PropTypes.string,
	changeID: PropTypes.number,
	total: PropTypes.number,
}

export default InputGroup
