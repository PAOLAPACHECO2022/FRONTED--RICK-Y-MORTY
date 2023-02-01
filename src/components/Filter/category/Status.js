import React from 'react'
import PropTypes from 'prop-types'
import FilterBTN from '../FilterBTN'

const Status = ({ updateStatus, updatePageNumber }) => {
	const status = ['Alive', 'Dead', 'Unknown']
	return (
		<div className="accordion-item">
			<h2 className="accordion-header" id="headingOne">
				<button
					className="accordion-button bg-warning fw-bold"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseOne"
					aria-expanded="true"
					aria-controls="collapseOne"
				>
					Status
				</button>
			</h2>
			<div
				id="collapseOne"
				className="accordion-collapse collapse show"
				aria-labelledby="headingOne"
				data-bs-parent="#accordionExample"
			>
				<div className="accordion-body d-flex flex-wrap bg-warning gap-3">
					{status.map((item, index) => (
						<FilterBTN
							key={index}
							index={index}
							name="status"
							task={updateStatus}
							updatePageNumber={updatePageNumber}
							input={item}
							
						/>
					))}
				</div>
			</div>
		</div>
	)
}

Status.propTypes = {
	updateStatus: PropTypes.func,
	updatePageNumber: PropTypes.func,
}

export default Status
