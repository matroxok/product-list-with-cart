import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import React, { useState } from 'react'

const AddCartButton = () => {
	const [isClicked, setIsClicked] = useState(false)
	const buttonClick = () => {
		if (onclick === false) {
			setIsClicked(isClicked)
		} else {
			setIsClicked(!isClicked)
		}
	}

	//  to fix

	return (
		<button
			className='w-auto h-auto px-5 py-2 rounded-full flex gap-1 items-center justify-center border border-red-600 hover:scale-110 ease-in-out duration-300 focus:bg-red-400 onc'
			onClick={buttonClick}>
			<AddShoppingCartIcon sx={{ color: isClicked ? 'white' : 'red' }} />
			<p>Add to Cart</p>
		</button>
	)
}

export default AddCartButton
