import React from 'react'

export const Layout: React.FC = (props) => {
	return (
		<div className="flex flex-col justify-center items-center ">
			{props.children}
		</div>
	)
}
