import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useState } from 'react'
import { useTheme } from '@emotion/react'

const AddCartButton = () => {
	const [showButton, setShowButton] = useState(false) // Użyj bardziej opisowej nazwy
	const [isAdded, setIsAdded] = useState(false)
	const [isClicked, setIsClicked] = useState(false)
	const [counter, setCounter] = useState(0)
	const [isClickedMinus, setIsClickedMinus] = useState(false)

	const handleClick = () => {
		setShowButton(true)
		setIsAdded(true)
		setIsClicked(true)
		setCounter(prevCount => prevCount + 1)
	}

	const minusCouner = () => {
		console.log(counter)
	}

	return (
		<div className="absolute -bottom-5">
			<button
				onClick={handleClick}
				className={
					isClicked
						? 'flex justify-center items-center bg-red-600 text-white px-2  py-2 gap-12 rounded-full'
						: 'bg-white px-5 py-2 rounded-full flex gap-1 items-center justify-center border border-red-600 hover:scale-110 ease-in-out duration-300'
				}>
				{showButton && (
					<div
						onClick={minusCouner}
						className="bg-red-800 rounded-full flex justify-center items-center  hover:scale-110">
						<RemoveIcon />
					</div>
				)}
				{isAdded || <AddShoppingCartIcon sx={{ color: 'red' }} />}
				{isAdded ? <p className="font-bold text-xl">{counter}</p> : <p>Add to Cart</p>}
				{showButton && (
					<div className="bg-red-800 rounded-full flex justify-center items-center  hover:scale-110">
						<AddIcon />
					</div>
				)}
			</button>
		</div>
	)
}

export default AddCartButton
