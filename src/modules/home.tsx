import { NextPage } from 'next'
import React from 'react'
import { Layout, LoginForm } from '../components'
import TitleText from '../graphics/TitleText'

// const firebaseConfig = {
// 	apiKey: 'AIzaSyBsMCphihnd55R_ujryu8CG5OHbgAG4gxg',
// 	authDomain: 'fgacycyw-web.firebaseapp.com',
// 	projectId: 'fgacycyw-web',
// 	storageBucket: 'fgacycyw-web.appspot.com',
// 	messagingSenderId: '1043771250555',
// 	appId: '1:1043771250555:web:8591e12f5035cd8d00cfde',
// 	measurementId: 'G-4HD88K0LF1'
// }

const Home: NextPage = () => {
	return (
		<Layout>
			<div className="w-full h-screen flex flex-col justify-evenly">
				<div className="flex flex-row my-20 mx-auto">
					<img
						src="/assets/logo.jpg"
						alt="Logo"
						className="object-scale-down rounded-xl w-[75px]"
					/>
					<p className="text-[white] font-montserrat font-extrabold my-auto ml-5 text-3xl">
						FGACYC Young Warrior KL
					</p>
				</div>
				<div
					className="max-w-[640px] mx-auto rounded-2xl w-full h-full bg-cover flex flex-col bg-center relative z-[1] mb-5"
					style={{ backgroundImage: "url('/assets/homeBg.png')" }}
				>
					<div className="flex flex-col m-auto w-full h-1/2 z-[3]">
						<TitleText className="transform scale-50 sm:scale-[0.85] my-auto" />
					</div>
					<div className="m-auto sm:w-[400px] w-[310px] z-[3] h-1/2 flex flex-col">
						<LoginForm />
						<div className="flex flex-col items-center mb-2">
							<p className="font-century text-sm text-[#210440]">
								Don&apos;t have an account?
							</p>
							<a href="/signup">
								<p className="font-century text-base underline text-[#210440]">
									Create an account
								</p>
							</a>
						</div>
					</div>
					<div
						className="w-full h-full absolute z-[2] rounded-2xl"
						style={{
							backgroundImage:
								'linear-gradient(to bottom, rgba(0, 0, 0, 0), #FDB095 85%, #E5958E)'
						}}
					/>
				</div>
			</div>
		</Layout>
	)
}

export default Home
