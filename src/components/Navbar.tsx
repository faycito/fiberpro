import React  from 'react';

const NavBar = () => {
	return (
		<nav className='w-full bg-primary px-2 md:px-0 h-[60px] md:h-[100px] flex flex-row items-center'>
			<div className='w-full max-w-[1100px] m-auto flex flex-row justify-between items-center'>
				<img
					src={'/logo.png'}
					width={200}
					alt={'FiberPro logo'}
					className='w-[150px] md:w-[200px]'
				/>
				<div>
					<p className='text-bold text-white text-right text-[12px]'>Llámanos al</p>
					<p className='text-white text-2xl'>(01) <strong>418-7185</strong></p>
				</div>
			</div>
		</nav>
	)
}

export default React.memo(NavBar);