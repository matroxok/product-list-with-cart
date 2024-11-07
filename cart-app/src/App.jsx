import ProductBox from './components/product-box'
import MyCart from './components/cartStatusInfo'

function App() {
	return (
		<div className="p-8 bg-slate-50">
			<h1 className="text-4xl font-bold">Desserts</h1>
			<div className="flex flex-col items-center justify-center mt-5">
				<ProductBox></ProductBox>
				<ProductBox></ProductBox>
				<MyCart></MyCart>
			</div>
		</div>
	)
}

export default App
