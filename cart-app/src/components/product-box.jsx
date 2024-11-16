import AddCartButton from './addCartButton'

const ProductBox = () => {
	return (
		<div className="w-full h-auto flex flex-col justify-center mb-10">
			<div className={'relative flex justify-center'}>
				<AddCartButton />
				<img className="rounded-lg" src="/assets/image-waffle-mobile.jpg" alt="" />
			</div>
			<div className="mt-10 text-sm">
				<p className="font-thin">Waffle</p>
				<p className="font-bold">Waffle with Berries</p>
				<p className="font-normal text-red-500">$6.50</p>
			</div>
		</div>
	)
}

export default ProductBox
