import Link from 'next/link';
import React  from 'react';

const Footer = () => {
	return (
		<footer className='w-full bg-primary h-[120px] flex flex-col items-center'>
			<div className='w-full max-w-[1100px] m-auto'>
				<img
					src={'/logo.png'}
					width={200}
					alt={'FiberPro logo'}
				/>
			</div>
			<div className='w-full bg-[#020CA8] text-center py-2 text-white'>
				<p className='text-[14px]'>Desarrollado por <Link href={'https://pixeliope.com'}>pixeliope.com</Link></p>
			</div>
		</footer>
	)
}

export default React.memo(Footer);