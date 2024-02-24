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
	  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar mauris in ultrices varius. Aliquam egestas sapien ac sapien eleifend tristique. Praesent tempus viverra elit eu elementum. Suspendisse tincidunt et lorem mattis vulputate. Sed a diam lorem. Donec vel nisl id ligula fringilla tincidunt feugiat nec ligula. Donec libero urna, tempus et risus a, accumsan mollis libero. Pellentesque nec quam sed odio ultrices varius in sit amet purus. Nam iaculis ante vitae enim imperdiet tincidunt.'
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
              {content}
            </AccordionItem>
          ))}
        </Accordion>
	)
}

export default React.memo(Terms);