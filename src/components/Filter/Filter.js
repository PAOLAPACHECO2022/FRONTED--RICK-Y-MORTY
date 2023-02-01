import React from 'react'
import PropTypes from 'prop-types'
import Gender from './category/Gender'
import Species from './category/Species'
import Status from './category/Status'
import "../Card/Card.module.scss";

const Filter = ({ pageNumber, setPageNumber, updateStatus, updateGender, updateSpecies }) => {

	let UpdateAll = () => {
		updateStatus('')
		updateGender('')
		updateSpecies('')
		setPageNumber(1)
		window.location.reload(false)
	
	}
	return (
		<div className="col-lg-3 col-12 mb-5">
			<div className="text-center fw-bold fs-4 mb-2">Filters</div>
			
			<div
				style={{ cursor: 'pointer' }}
				onClick={UpdateAll}
				className="text-dark btn btn-outline bg-primary fw-bold text-decoration-underline text-center mb-3"
			>
				All Filters
			</div>
			<div className="accordion fw-bold" id="accordionExample">
			<Status
          setPageNumber={setPageNumber}
          updateStatus={updateStatus}
        />
        <Species
          setPageNumber={setPageNumber}
          updateSpecies={updateSpecies}
        />
        <Gender
          setPageNumber={setPageNumber}
          updateGender={updateGender}
        />
			</div>
		</div>
	)
}

Filter.propTypes = {
	pageNumber: PropTypes.number,
	updatePageNumber: PropTypes.number,
	updateStatus: PropTypes.func,
	updateGender: PropTypes.func,
	updateSpecies: PropTypes.func,
}

export default Filter
