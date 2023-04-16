import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const Form = () => {

	return (

		<>
			<form className='w-1/2 mx-auto mt-40'>
				<div className="space-y-12">


					<div className="border-b border-gray-900/10 pb-12">
						<p className="font-semibold leading-7 text-2xl text-gray-900">
							Форма обратной связи для заказа банкета
						</p>

						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div className="sm:col-span-3">
								<label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
									Имя
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="first-name"
										id="first-name"
										autoComplete="given-name"
										className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 outline-none sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-3">
								<label htmlFor="last-name" className="block text-xl font-medium leading-6 text-gray-900">
									Фамилия
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="last-name"
										id="last-name"
										autoComplete="family-name"
										className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 outline-none sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-4">
								<label htmlFor="email" className="block text-xlfont-medium leading-6 text-gray-900">
									Адрес электронной почты
								</label>
								<div className="mt-2">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 outline-none sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-4">
								<label htmlFor="phone" className="block text-xl font-medium leading-6 text-gray-900">
									Номер телефона
								</label>
								<div className="mt-2">
									<input
										id="phone"
										name="phone"
										type="text"
										autoComplete="phone"
										className="pl-3 block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 outline-none sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="col-span-full">
								<label htmlFor="street-address" className="block text-xl font-medium leading-6 text-gray-900">
									Адрес, по которому планируется банкет
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="street-address"
										id="street-address"
										autoComplete="street-address"
										className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 outline-none sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

						</div>
					</div>

					<div className="border-b border-gray-900/10 pb-12">

						<div className="mt-10 space-y-10">

							<fieldset>
								<legend className="text-2xl font-semibold leading-6 text-gray-900">Как лучше с вами связаться?</legend>
								<p className="mt-1 text-xl leading-6 text-gray-600">Выберите один из удобных способов:</p>
								<div className="mt-6 space-y-6">
									<div className="flex items-center gap-x-3">
										<input
											id="push-everything"
											name="push-notifications"
											type="radio"
											className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-teal-600"
										/>
										<label htmlFor="push-everything" className="block text-xl font-medium leading-6 text-gray-900">
											По номеру телефона
										</label>
									</div>
									<div className="flex items-center gap-x-3">
										<input
											id="push-email"
											name="push-notifications"
											type="radio"
											className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-teal-600"
										/>
										<label htmlFor="push-email" className="block text-xl font-medium leading-6 text-gray-900">
											По электронной почте
										</label>
									</div>
									<div className="flex items-center gap-x-3">
										<input
											id="push-nothing"
											name="push-notifications"
											type="radio"
											className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-teal-600"
										/>
										<label htmlFor="push-nothing" className="block text-xl font-medium leading-6 text-gray-900">
											По Telegram
										</label>
									</div>
								</div>
							</fieldset>
						</div>
					</div>
				</div>

				<div className="mt-6 flex items-center justify-end gap-x-6">
					<button type="reset" className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-600">
						Очистить форму
					</button>
					<button
						type="submit"
						className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-slate-100 shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Отправить
					</button>
				</div>
			</form>

		</>
	)
}

export default Form