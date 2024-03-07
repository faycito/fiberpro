'use client'
import React, { useMemo, useRef } from 'react';
import { Montserrat } from "next/font/google";
import Slider from "react-slick";
import { register } from 'swiper/element/bundle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
register();
import Link from 'next/link';

const mont = Montserrat({subsets: ['latin']});

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
	accessibility: true,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

const SliderLocal = () => {

	const ref = useRef<any>([]);
	const products = useMemo(() => [
		{ 
			speed: 200,
			speedBonus: 400,
			amount: 7000,
			applyDouble: true
		},
		{
			speed: 250,
			speedBonus: 500,
			amount: 9000,
			applyDouble: true
		},
		{
			speed: 300,
			speedBonus: 600,
			amount: 11000,
			applyDouble: true
		},
		{
			speed: 700,
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
	], [])

	return (
		<div className='px-8 sm:px-0 animate-fade-up'>
			
			<Slider {...settings}>
			{ products.map((product, indx) => (
					<div
						key={indx}
						className={`element-slider md:max-w-[210px]`}
						onMouseOver={(e) => {
							if(ref.current[indx]){
								ref.current[indx].src = '/X3-azul.svg'
							}
						}}
						onMouseLeave={(e) => {
							if(ref.current[indx]){
								ref.current[indx].src = '/X3-white.svg'
							}
						}}
					>
						<p className='text-[12px] text-center font-bold text-white mb-2'>INTERNET 100% FIBRA ÓPTICA</p>
						{ product.speedBonus ? (
							<>
								<p className='text-center line-through decoration-white font-bold text-white text-sm'>{product.speed} mbps</p>
								<h3 className='text-[4rem] text-white font-[800] text-center mt-10 mb-2 leading-4'>{product.speedBonus}</h3>
								<p className='text-white text-[3rem] text-center font-[800]'>mbps</p>
							</>
						) : (
							<>
								<img
									src={'/repetidor.png'}
									width={120}
									height={120}
									alt={'Repetidor Fiber Pro'}
									className='m-auto mt-6'
								/>
								<h3 className='text-[3rem] text-white font-[800] text-center mb-2 leading-4'>{product.speed}</h3>
								<p className='text-white text-3xl text-center font-[800]'>mbps</p>
							</>
						)}
						{ product.applyDouble ? (
							<>
								<p className={`${mont.className} text-[12px] text-center text-white font-regular mt-4`}>DUPLICA TU VELOCIDAD</p>
								<img
									ref={el => ref.current[indx] = el}
									src={'/X3-white.svg'}
									width={75}
									height={75}
									className='m-auto mt-[-15px]'
									alt={'Fibiber Pro x3'}
								/>
								<p className='text-2xl text-center text-white mb-2 font-[800] mt-[-10px]'>meses</p>
							</>
						) : (
							<>
								<p className='text-sm text-center text-white mt-4'>REPETIDOR</p>
								<p className='text-sm text-center text-white mt-2 mb-6'>WIFI 6</p>
							</>
						)}
						<div className='relative mb-6'>
							<p className={`font-[800] text-center text-5xl my-2 text-white bg-secondary py-2 rounded-full priceItem`}><span className={'text-2xl priceItem'}>s/</span>{Math.floor(product.amount/100)}</p>
							<p className='text-primary bg-white absolute px-4 rounded-full font-bold text-[12px] bottom-[-10px] right-[50%] translate-x-[50%] monthly'>MENSUALES</p>
						</div>
						<div className='mt-2 text-center want'>
							<p className='text-3xl text-white font-bold'>s/ 0</p>
							<p className='text-white mb-4'>costo de instalación</p>
							<Link
								className='bg-white text-primary rounded-full text-xl py-2 px-8 mt-6 w-full font-bold'
								href={`https://wa.me/51014187185?text=Hola quiero información de${product.speedBonus ? ' la promo' : 'l servicio'} de ${product.speedBonus || product.speed} mpbs`}
							>¡LO QUIERO!</Link>
							<div className='flex flex-row flex-wrap justify-evenly mt-4'>
								<div className='max-w-[50px] text-center'>
									<img
										src={'/fibra.png'}
										alt={'fiberpro simetria'}
										width={40}
										className='ml-2 mb-2 icon-img'
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
										className='ml-2 mb-2 icon-img'
									/>
									<p className='text-white text-[10px]'>Internet Ilimitado y simétrico</p>
								</div>
								<div className='max-w-[50px] text-center'>
									<img
										src={'/velocidad.png'}
										alt={'fiberpro velocidad'}
										width={40}
										height={40}
										className='ml-2 mb-2 icon-img'
									/>
									<p className='text-white text-[10px]'>Máxima velocidad</p>
								</div>
							</div>
						</div>

					</div>
				))}
			</Slider>
			
		</div>
	)
}

export default React.memo(SliderLocal);