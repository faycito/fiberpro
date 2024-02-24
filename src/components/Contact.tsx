'use client'
import React, { useState } from 'react';
// @ts-ignore
import Checkbox from "react-custom-checkbox";

import { Montserrat } from 'next/font/google';

const exoFont = Montserrat({subsets: ['latin']});

const Contact = () => {

	const [phone, setPhone] = useState('');
	const [docNum, setDocNum] = useState('');
	const [checked, setChecked] = useState(false);

	const onChangeInput = (name: string, event: React.ChangeEvent<HTMLInputElement>) => {
		if(name === 'documento') setDocNum(event.target.value);
		
		if(name === 'telefono') setPhone(event.target.value);
	}


	const onSubmit =  (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault()
		console.log(ev);
	}
	
	return (
	<div className="absolute w-[300px] bg-white rounded-xl h-[300px] text-center p-4 pt-6  form">
		<p className={exoFont.className}
			style={{
				color: '#0027B5',
				fontWeight: 'bold',
				fontSize: 18
			}}
		>¡Déjanos tus datos y te llamamos!</p>
		<form onSubmit={onSubmit}>
		<input 
			type="text"
			value={docNum}
			name="documento"
			placeholder="DNI/CEX"
			onChange={(ev) => onChangeInput('documento', ev)}
			className="text-center border-2 border-primary mt-4 mb-1 text-sm py-2 rounded-xl w-full"
		/>
		<input 
			type="tel"
			value={phone}
			name="telefono" 
			placeholder="Teléfono" 
			onChange={(ev) => onChangeInput('telefono', ev)}
			className="text-center border-2 border-primary my-2 text-sm py-2 rounded-xl w-full" 
		/>
		<Checkbox
			name="check"
			checked={checked}
			icon={<div>
				<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 48 48">
					<path fill="#FFF" stroke='2px' d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"></path>
				</svg>
			</div>}
			onChange={(val: boolean) => setChecked(val)}
			label={'Acepto los términos y condiciones'}
			size={20}
			borderRadius={20}
			style={{
				backgroundColor: checked ? '#007aff'  : ''
			}}
			borderColor={checked ? '#00000000':'#bababa'}
			labelStyle={{fontSize: 10, marginLeft: 4, color: '#EB5612'}}
		/>
		<button
			className='px-6 py-2 bg-primary text-white rounded-full font-medium mt-4 disabled:opacity-50'
			disabled={
				!(phone.length > 6 &&
				docNum.length >= 8 && docNum.length <= 13 &&
				checked)
			}
			type={'submit'}
		>Llámenme</button>
		</form>
  	</div>
  )
}
export default React.memo(Contact);