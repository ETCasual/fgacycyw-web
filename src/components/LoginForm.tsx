import React from 'react'
import * as Yup from 'yup'
import { Field, Form, Formik } from 'formik'

export const LoginForm: React.FC = () => {
	return (
		<Formik
			initialValues={{ email: '', pw: '', rememberMe: false }}
			validateOnBlur={false}
			validationSchema={Yup.object({
				email: Yup.string()
					.email('Invalid Email Address')
					.required('Required'),
				pw: Yup.string()
					.min(8, 'Must be 8 characters or more')
					.required('Required'),
				rememberMe: Yup.boolean()
			})}
			onSubmit={() => {}}
		>
			{({ errors, touched, values }) => (
				<Form className="w-full flex flex-col items-center h-full justify-center">
					<Field
						id="email"
						name="email"
						placeholder={values.email !== '' ? null : 'Email'}
						className="focus-within:outline-none  text-[#210440] bg-[#FFBA00] w-full text-center font-century text-base py-1 px-3 rounded-[4px] placeholder-[#210440]"
					/>
					{errors.email && touched.email ? (
						<div className="text-red-700 h-7">{errors.email}</div>
					) : (
						<div className="h-7" />
					)}
					<Field
						id="pw"
						name="pw"
						type="password"
						placeholder={values.pw !== '' ? null : 'Password'}
						className="focus-within:outline-none  text-[#210440] bg-[#FFBA00] w-full text-center font-century text-base py-1 px-3 rounded-[4px] placeholder-[#210440]"
					/>
					{errors.pw && touched.pw ? (
						<div className="text-red-700 h-7">{errors.pw}</div>
					) : (
						<div className="h-7" />
					)}
					<button
						type="submit"
						className="rounded-[4px] bg-[#FFBA00] text-[#210440] font-century text-sm py-1 text-center w-[100px]"
					>
						Log In
					</button>
				</Form>
			)}
		</Formik>
	)
}
