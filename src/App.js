import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Navbar from './components/Navbar/Navbar'
import Episodes from './Pages/Episodes'
import Location from './Pages/Location'
import CardDetails from './components/Card/CardDetails'
/**
 * It returns Router
 * @return {void}.
 */
function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
			</div>
			<Routes>
			
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<CardDetails />} />

				<Route path="/episodes" element={<Episodes />} />
				<Route path="/episodes/:id" element={<CardDetails />} />

				<Route path="/location" element={<Location />} />
				<Route path="/location/:id" element={<CardDetails />} />
			</Routes>
		</Router>
	)
}

export default App
