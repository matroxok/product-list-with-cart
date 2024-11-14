import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { useState } from 'react'

const AddCartButton = () => {
	const [showButton, setShowButton] = useState(false) // Użyj bardziej opisowej nazwy
	const [count, setCount] = useState(0)
	const [isAdded, setIsAdded] = useState(false)

	const handleClick = () => {
		setShowButton(true)
		setCount(count + 1) // Zwiększamy licznik kliknięć
		setIsAdded(true)
	}

	return (
		<div>
			<button
				onClick={handleClick}
				className="w-auto h-auto absolute -bottom-5 start-20 bg-white px-5 py-2 rounded-full flex gap-1 items-center justify-center border border-red-600 hover:scale-110 ease-in-out duration-300 focus:bg-red-400">
				{showButton && (
					<div>
						<p>Testowy przycisk</p>
					</div>
				)}
				{isAdded || <AddShoppingCartIcon sx={{ color: 'red' }} />}
				{isAdded ? <p>{count}</p> : <p>Add to Cart</p>}
				{showButton && (
					<div>
						<p>Testowy przycisk</p>
					</div>
				)}
			</button>
		</div>
	)
}

export default AddCartButton
