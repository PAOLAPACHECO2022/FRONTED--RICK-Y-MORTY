import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Card.module.scss'
import "./Card.module.scss";
// import CardDetails from './CardDetails'

const Card = ({ page, results }) => {
	let display;
	console.log(results);
	if (results) {
		display = results.map((x) => {
			const { id, image, name, status, location } = x

			return (
				<Link
					style={{ textDecoration: 'none' }}
					to={`${page}${id}`}
					key={id}
					className=" zoom  col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative  text-dark"
				>
					<div className={`${styles.card} zoom  d-flex flex-column thumbnail  bg-light`}>
						<img className={`${styles.img} zoom img-fluid img-thumbnail rounded-4 `} src={image} alt="" />
						<div className={`${styles.content}  text-muted`}>
							<div className="fs-5 fw-bold ">{name}</div>
							<div className="">
								<div className=" fw-normal">Last Location</div>
								<div className="">{location.name}</div>
							</div>
						</div>
					</div>

					{(() => {
						if (status === 'Dead') {
							return <div className={`${styles.badge} position-absolute badge bg-danger`}>{status}</div>
						} else if (status === 'Alive') {
							return <div className={`${styles.badge} position-absolute badge bg-success`}>{status}</div>
						} else {
							return <div className={`${styles.badge} position-absolute badge bg-secondary`}>{status}</div>
						}
					})()}
				</Link>
			)
		})
	} else {display = <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/no-data-1995355-1686641.png" alt="loading..."  />
	} return <>{display}</>
}

Card.propTypes = {
	page: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	results: PropTypes.array,
}

export default Card
