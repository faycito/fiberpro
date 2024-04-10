'use client'
import React from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';


const terms_conditions = [
	{
	  header: 'Promo Fiber',
	  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar mauris in ultrices varius. Aliquam egestas sapien ac sapien eleifend tristique. Praesent tempus viverra elit eu elementum. Suspendisse tincidunt et lorem mattis vulputate. Sed a diam lorem. Donec vel nisl id ligula fringilla tincidunt feugiat nec ligula. Donec libero urna, tempus et risus a, accumsan mollis libero. Pellentesque nec quam sed odio ultrices varius in sit amet purus. Nam iaculis ante vitae enim imperdiet tincidunt.'
	},
	{
	  header: 'Vigencia',
	  content: 'Esta promoción está vigente para las contrataciones realizadas desde el 01.04.24 al 30.04.24'
	},
]

const Terms = () => {
	return (
        <Accordion>
          {terms_conditions.map(({header, content}) => (
            <AccordionItem key={header}
				header={<>
					{header}
					<img
						className='chevron'
						src={'/chevron.png'}
						width={30}
						height={30}
						alt={'FiberPro chevron arrow'}
					/>
				</>}
				buttonProps={{
					className: ({isEnter}) => `itemBtn ${isEnter && 'itemBtnExpanded'}`
				}}
				className={'item'}
				contentProps={{className: 'itemContent'}}
				panelProps={{className: 'itemPanel'}}
			>
              {header === 'Promo Fiber' ? (
				<>
					<ul>
						<li>
						El plan de 200 Mbps tiene una tarifa mensual (Inc. IGV) de S/70.00. Este cuenta con una velocidad (máxima) promocional de 400 Mbps por 1 año. Sin costo de instalación.
						</li>
						<li>
						El plan de 250 Mbps tiene una tarifa mensual (Inc. IGV) de S/90.00. Este cuenta con una velocidad (máxima) promocional de 500 Mbps por 1 año. Sin costo de instalación.
						</li>
						<li>
						El plan de 300 Mbps tiene una tarifa mensual (Inc. IGV) de S/110.00. Este cuenta con una velocidad (máxima) promocional de 600 Mbps por 1 año. Sin costo de instalación.
						</li>
						<li>
						El plan de 700 Mbps tiene una tarifa mensual (Inc. IGV) de S/150.00. Este cuenta con una velocidad máxima de 700 Mbps. Sin costo de instalación.
						</li>
						<li>
						El plan de 800 Mbps tiene una tarifa mensual (Inc. IGV) de S/250.00. Este cuenta con una velocidad máxima de 800 Mbps. Sin costo de instalación.
						</li>
					</ul>
					<h3 className='my-2 font-bold'>Consideraciones de la promoción</h3>
					<ul>
						<li>
						Aplica para altas nuevas (Nuevos clientes o nuevas instalaciones).
						</li>
						<li>
							Máximo una promoción por servicio.
						</li>
						<li>
							Promoción personal e intransferible.
						</li>
						<li>
							No acumulable con otras promociones.
						</li>
						<li>
							La duplicidad promocional se aplicará mientras el servicio permanezca activo, se mantenga en el mismo plan contratado y no sea suspendido por falta de pago o a solicitud del cliente.
						</li>
						<li>
							Una vez se cumpla este plazo, se aplicarán las condiciones regulares según el plan contratado.
						</li>
						<li>
							Promoción válida sujeto a cobertura y según el plan contratado.
						</li>
					</ul>
					<h3 className='my-2 font-bold'>Condiciones Generales</h3>
					<ul>
						<li>
						Aplica para personas naturales mayores de edad (18 años) con DNI, CE, pasaporte y RUC.
						</li>
						<li>
							Los equipos instalados para funcionamiento de los servicios comercializados por FiberPRO son en calidad de préstamo, siempre y cuando los servicios mencionados estén activos; en caso el cliente solicite la baja del/los servicios, deberá devolver los equipos en buenas condiciones, de lo contrario, deberá cancelar el valor de cada equipo.
						</li>
						<li>
							La velocidad de internet mínima garantizada es de 70% y deberá ser medida mediante cable ethernet, otorgado por FiberPRO. Además, solo debe de estar conectado el equipo que está realizando el testeo.
						</li>
						<li>
							Las tarifas aplicadas están expresadas en soles e incluyen impuesto de Ley (I.G.V.).
						</li>
						<li>
							Servicios sujetos a cobertura y facilidades técnicas.
						</li>
					</ul>

				</>
			  ): (
				<> {content}</>
			  )}
            </AccordionItem>
          ))}
        </Accordion>
	)
}

export default React.memo(Terms);