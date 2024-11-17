import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useState, useEffect } from 'react'

const AddCartButton = () => {
	const [showButton, setShowButton] = useState(false)
	const [isAdded, setIsAdded] = useState(false)
	const [isClicked, setIsClicked] = useState(false)
	const [counter, setCounter] = useState(0)

	const handleClick = () => {
		setShowButton(true)
		setIsAdded(true)
		setIsClicked(true)
		setCounter(prevCount => prevCount + 1)
	}

	const minusCounter = () => {
		setCounter(prevCount => Math.max(prevCount - 1, 0))
	}

	const plusCounter = () => {
		setCounter(prevCount => prevCount + 1)
	}

	// Resetuje stan przycisku do pierwotnej formy, gdy counter === 0
	useEffect(() => {
		if (counter === 0) {
			setShowButton(false)
			setIsAdded(false)
			setIsClicked(false)
		}
	}, [counter])

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
						onClick={e => {
							e.stopPropagation()
							minusCounter()
						}}
						className="bg-red-800 rounded-full flex justify-center items-center hover:scale-110">
						<RemoveIcon />
					</div>
				)}
				{isAdded || <AddShoppingCartIcon sx={{ color: 'red' }} />}
				{isAdded ? <p className="font-bold text-xl">{counter}</p> : <p>Add to Cart</p>}
				{showButton && (
					<div
						onClick={e => {
							e.stopPropagation()
							plusCounter()
						}}
						className="bg-red-800 rounded-full flex justify-center items-center hover:scale-110">
						<AddIcon />
					</div>
				)}
			</button>
		</div>
	)
}

export default AddCartButton
