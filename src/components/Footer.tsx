import Link from 'next/link';
import React  from 'react';

const Footer = () => {
	return (
		<footer className='w-full bg-primary h-[120px] flex flex-col items-center'>
			<div className='w-full max-w-[1100px] m-auto flex flex-row justify-between items-center flex-wrap px-4 bg-primary py-4'>
				<img
					src={'/logo.svg'}
					width={200}
					alt={'FiberPro logo'}
				/>
				<Link href={'https://fiberpro.com.pe/files/T%C3%89RMINOS%20Y%20CONDICIONES%20DE%20LOS%20PLANES%20DE%20CONTRATACION%2006.04.24.pdf'} target='_blank' className='text-white'>
					Aviso Legal
				</Link>
				<Link href={'https://fiberpro.com.pe/files/Terminos%20y%20condiciones%20del%20sitio%20web.pdf'} target='_blank' className='text-white'>
					Políticas de Privacidad
				</Link>
				<div>
					<Link href={'tel:014187185'}>
						<p className='text-bold text-white text-right text-[12px]'>Llámanos al</p>
						<p className='text-white text-2xl'>(01) <strong>418-7185</strong></p>
					</Link>
				</div>
			</div>
			<div className='w-full bg-[#020CA8] text-center py-2 text-white'>
				<p className='text-[14px]'>Desarrollado por <Link href={'https://pixeliope.com'}>pixeliope.com</Link></p>
			</div>
		</footer>
	)
}

export default React.memo(Footer);