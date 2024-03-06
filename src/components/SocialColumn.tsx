//usando reactjs haceer una columna con iconos de redes sociales
//usando tailwindcss
import Link from 'next/link';
import React from 'react';

const images = [
	{ src: '/facebook-white.png', alt: 'fiberpro facebook', url: 'https://www.facebook.com/FiberProPeru' },
	{ src: '/instagram-white.png', alt: 'fiberpro instagram', url: 'https://www.instagram.com/fiberpro_oficial/'},
	{ src: '/discord-white.png', alt: 'fiberpro discord' , url: 'https://discord.gg/KjC2JUWhvc'},
	{ src: '/twich-white.png', alt: 'fiberpro twich', url: 'https://www.twitch.tv/fiberpro_pe'},
	{ src: '/yt-white.png', alt: 'fiberpro youtube', url: 'https://www.youtube.com/@fiberpro'},
	{ src: '/tiktok-white.png', alt: 'fiberpro tiktok', url: 'https://www.tiktok.com/@fiberpro_peru'},
];

const SocialColumn = () => {
	return (
		<div className="flex flex-col items-center justify-center absolute top-[10%] translate-y-[10%] colsocials">
			{ images.map((image, index) => (
				<Link
					key={`${image.alt}-white image-${index}`}
					href={image.url}
					target={image.url.includes('#') ? '_self' : '_blank'}
				>
					<img
						src={image.src}
						alt={image.alt}
						className="w-8 h-8 mb-6"
					/>
				</Link>
			))}
		</div>
	)
}	
export default SocialColumn
