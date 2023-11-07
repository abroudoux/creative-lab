import React, { useEffect } from 'react';

import HeroBanner from '../sections/HeroBanner';
import About from '../sections/About';
import Products from '../sections/Products';


export default function Home() {

	useEffect(() => {
		const bubble: HTMLSpanElement | null = document.querySelector('.bubble');
	
		function handleBubble(e: MouseEvent) {
		  	if (bubble) {
				bubble.style.left = `${e.x}px`;
				bubble.style.top = `${e.y}px`;
		  	}
		}
	
		window.addEventListener('mousemove', (e) => handleBubble(e));
	
		return () => {
		  	window.removeEventListener('mousemove', (e) => handleBubble(e));
		};
	}, []);

	return (

		<section>

			<span className='bubble'></span>

			<HeroBanner/>
			<About/>
			<Products/>

		</section>
  	)

}
