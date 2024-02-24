'use client'
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Next from '../../public/arrownext.png';
import Back from '../../public/arrowback.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const products = [
	{ 
		speed: 200,
		speedBonus: 400,
		amount: 7000,
		applyDouble: true
	},
	{
		speed: 300,
		speedBonus: 600,
		amount: 9000,
		applyDouble: true
	},
	{
		speed: 400,
		speedBonus: 800,
		amount: 11000,
		applyDouble: true
	},
	{
		speed: 600,
		speedBonus: 0,
		amount: 15000,
		applyDouble: false
	},
	{
		speed: 800,
		speedBonus: 0,
		amount: 25000,
		applyDouble: false
	}
]

const Slider = () => {
	const sliderRef = useRef(null);

	const handleNext = () => {
		if(!sliderRef.current) return;
		//@ts-ignore
		sliderRef.current?.swiper?.slideNext();
	}

	const handlePrev = () => {
		if(!sliderRef.current) return;
		//@ts-ignore
		sliderRef.current?.swiper?.slidePrev();
	}


	return (
		<div className='flex flex-row'>
			<button onClick={handlePrev}>
				<Image
					src={Back}
					alt={'flecha atras'}
					width={40}
					height={40}
				/>
			</button>
			<Swiper
				ref={sliderRef}
				slidesPerView={1}
				spaceBetween={10}
				pagination={{
				  clickable: true,
				}}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 15
					},
					768: {
						slidesPerView:3,
						spaceBetween: 25
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 10,
					},
				}}
        		className="mySwiper"
			>
				{ products.map((product, indx) => (
					<SwiperSlide
						key={indx}
						className='border-xl border-primary py-4 px-2 rounded-3xl bg-[#020CCC]'
					>
						<p className='text-[12px] text-center font-bold text-white mb-2'>INTERNET 100% FIBRA ÓPTICA</p>
						{ product.speedBonus ? (
							<>
								<p className='text-center line-through decoration-white font-bold text-white text-xl'>{product.speed} mbps</p>
								<h3 className='text-4xl text-white font-bold text-center my-4'>{product.speedBonus} Mbps</h3>
							</>
						) : (
							<h3 className='text-4xl text-white font-bold text-center mt-[50px]'>{product.speed} Mbps</h3>
						)}
						{ product.applyDouble ? (
							<>
								<p className='text-sm text-center text-white font-thin'>DUPLICA TU VELOCIDAD</p>
								<p className='text-sm text-center text-white mt-2 mb-6'>x3 meses</p>
							</>
						) : (
							<>
								<p className='text-sm text-center text-white mt-4'>REPETIDOR</p>
								<p className='text-sm text-center text-white mt-2 mb-6'>WIFI 6</p>
							</>
						)}
						<div className='relative pb-6'>
							<p className='text-center text-3xl my-2 text-white bg-secondary py-2 rounded-full'>s/ <strong>{Math.floor(product.amount/100)}</strong></p>
							<p className='text-primary bg-white absolute px-4 rounded-full font-bold text-[12px] bottom-[20px] left-10'>MENSUALES</p>
						</div>
						<div className='mt-2 text-center'>
							<p className='text-sm text-white font-thin'>s/ 0 costo de instalación</p>
							<button
								className='bg-white text-primary rounded-full text-xl py-2 mt-4 w-full font-bold'
							>¡LO QUIERO!</button>
							<div className='flex flex-row flex-wrap justify-evenly mt-4'>
								<div className='max-w-[50px] text-center'>
									<img
										src={'/fibra.png'}
										alt={'fiberpro simetria'}
										width={40}
										className='ml-2 mb-2'
										height={40}
									/>
									<p className='text-white text-[10px]'>Internet 100% fibra óptica</p>
								</div>
								<div className='max-w-[50px] text-center'>
									<img
										src={'/simetria.png'}
										alt={'fiberpro simetria'}
										width={40}
										height={40}
										className='ml-2 mb-2'
									/>
									<p className='text-white text-[10px]'>Internet Ilimitado y simétrico</p>
								</div>
								<div className='max-w-[50px] text-center'>
									<img
										src={'/velocidad.png'}
										alt={'fiberpro velocidad'}
										width={40}
										height={40}
										className='ml-2 mb-2'
									/>
									<p className='text-white text-[10px]'>Máxima velocidad</p>
								</div>
							</div>
						</div>

					</SwiperSlide>
				))
				}
			</Swiper>
			<button onClick={handleNext}>
				<Image
					src={Next}
					alt={'flecha atras'}
					width={40}
					height={40}
				/>
			</button>
		</div>
	)
}

export default React.memo(Slider);