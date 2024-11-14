import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { useState } from 'react'



const AddCartButton = () => {
	
	const [button, setbutton] = useState(false)

	const handleCLick = () => {
		setbutton(true)
	 }
	

	return (
		<div>
			<button onClick={handleCLick} className="w-auto h-auto absolute -bottom-5 start-20 bg-white px-5 py-2 rounded-full flex gap-1 items-center justify-center border border-red-600 hover:scale-110 ease-in-out duration-300 focus:bg-red-400 onc">
			{button && <div>siemanko</div>}
			<AddShoppingCartIcon sx={{ color: 'red' }} />
				<p>Add to Cart</p>
			{button && <div>
				</div>}
			</button>
		</div>
	)
}

export default AddCartButton
