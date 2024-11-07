import ProductBox from './components/product-box'

function App() {
	return (
		<div className='p-8'>
			<h1 className='text-4xl font-bold'>Desserts</h1>
			<div className='flex items-center justify-center mt-5'>
				<ProductBox></ProductBox>
			</div>
		</div>
	)
}

export default App
