type Props = {
	id: string;
	children: React.ReactNode
}
const FSection = ({id, children}: Props) => {
	return (
		<section 
			id={id}
			className="w-full md:max-w-[1150px] m-auto py-10"
		>
			{children}
		</section>
	)
}

export default FSection;