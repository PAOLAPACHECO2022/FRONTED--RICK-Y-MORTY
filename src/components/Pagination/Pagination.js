import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
	const pageChange = (data) => {
		updatePageNumber(data.selected + 1)
	}

	const [width, setWidth] = useState(window.innerWidth)
	const updateDimensions = () => {
		setWidth(window.innerWidth)
	}
	useEffect(() => {
		window.addEventListener('resize', updateDimensions)
		return () => window.removeEventListener('resize', updateDimensions)
	}, [])

	return (
		<>
			<style jsx>
				{`
					@media (max-width: 768px) {
						.pagination {
							font-size: 12px;
						}
						.next,
						.prev {
							display: none;
						}
					}
					@media (max-width: 768px) {
						.pagination {
							font-size: 14px;
						}
					}
				`}
			</style>
			<ReactPaginate
				className="pagination thumbnail justify-content-center my-4 gap-4"
				nextLabel="Next"
				forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
				previousLabel="Previous"
				previousClassName="btn thumbnail btn-light fs-5 prev"
				nextClassName="btn thumbnail btn-light fs-5 next"
				activeClassName="active"
				marginPagesDisplayed={width < 576 ? 1 : 2}
				pageRangeDisplayed={width < 576 ? 1 : 2}
				pageCount={info?.pages}
				onPageChange={pageChange}
				pageClassName="page-item"
				pageLinkClassName="page-link"
			/>
		</>
	)
}

Pagination.propTypes = {
	pageNumber: PropTypes.number,
	info: PropTypes.any,
	updatePageNumber: PropTypes.func,
}

export default Pagination
