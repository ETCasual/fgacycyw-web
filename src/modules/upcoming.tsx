import React from 'react'
import { NextPage } from 'next'
import { Card, Layout, MyCarousel } from '../components'
import { user } from './home'

const texts = [
	{ text: 'YWKL Conference', textColor: '#210440', bgColor: '#FFBA00' },
	{ text: '6 Hours with God', textColor: '#FFBA00', bgColor: '#210440' }
]

const eventCards = ['/assets/upcoming.png', '/assets/6hrswithGod.jpg']

const Upcoming: NextPage = () => {
	return (
		<Layout currentPage="home">
			<div className="h-32 lg:h-52">
				<MyCarousel texts={texts} />
			</div>
			<div className="w-full px-3 sm:px-20 ">
				<p className="font-montserrat text-[#210440] text-5xl mt-3 font-bold">
					Hello, {user.username}
				</p>
			</div>
			<div className="w-full h-full flex flex-col px-3 sm:px-20">
				<p className="text-xl my-3 font-montserrat text-[#210440] font-semibold">
					Upcoming Events!
				</p>
			</div>
			<div className="flex lg:flex-row flex-col gap-2 lg:gap-5 px-10 sm:px-20 items-center justify-center w-full h-full">
				{eventCards.map((card, i) => (
					<Card key={i} image={card} />
				))}
			</div>
		</Layout>
	)
}

export default Upcoming
