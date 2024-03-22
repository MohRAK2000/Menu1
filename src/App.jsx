import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Bergar, Creps, Juices, Potato, MainLayout, Sandwich, Sweets, Wafels, Home } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
	return (

		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route path='Creps' element={<Creps />} />
						<Route path='Potato' element={<Potato />} />
						<Route path='Sandwich' element={<Sandwich />} />
						<Route path='Bergar' element={<Bergar />} />
						<Route path='Juices' element={<Juices />} />
						<Route path='Wafels' element={<Wafels />} />
						<Route path='Sweets' element={<Sweets />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
