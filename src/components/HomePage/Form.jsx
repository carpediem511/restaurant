import { useState } from 'react';
import SuccessModal from './SuccessModal';
import ErrorModal from './ErrorModal';

const Form = () => {

	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		banquetAddress: "",
		contactMethod: "",
	});

	const [successModal, setSuccessModal] = useState(false);
	const [errorModal, setErrorModal] = useState(false);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;

		if (type === "checkbox") {
			// Если это чекбокс, обновляем его состояние
			setFormData(prevFormData => ({ ...prevFormData, [name]: checked ? value : '' }));
		} else {
			setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let isFormFilled = true;

		// Проверяем каждое поле формы на пустоту
		for (const field in formData) {
			if (formData[field] === '') {
				isFormFilled = false;
				break;
			}
		}

		// Проверяем, выбран ли чекбокс
		if (formData.contactMethod === '') {
			isFormFilled = false;
		}

		// Обновляем состояния модальных окон в зависимости от результата проверки
		if (isFormFilled) {
			setSuccessModal(true);
			setErrorModal(false);
		} else {
			setErrorModal(true);
			setSuccessModal(false);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit} id="orderBanquet" className="w-1/2 mx-auto mt-40">
				<div className="space-y-12">
					<div className="border-b border-gray-900/10 pb-12">
						<p className="font-semibold leading-7 text-2xl text-gray-900">
							Форма обратной связи для заказа банкета
						</p>

						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div className="sm:col-span-3">
								<label
									htmlFor="firstName"
									className="block text-xl font-medium leading-6 text-gray-900"
								>
									Имя
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="firstName"
										id="firstName"
										onChange={handleChange}
										className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 outline-none sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-3">
								<label
									htmlFor="lastName"
									className="block text-xl font-medium leading-6 text-gray-900"
								>
									Фамилия
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="lastName"
										id="lastName"
										value={formData.lastName}
										onChange={handleChange}
										className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 outline-none sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-4">
								<label
									htmlFor="email"
									className="block text-xl font-medium leading-6 text-gray-900"
								>
									Адрес электронной почты
								</label>
								<div className="mt-2">
									<input
										id="email"
										name="email"
										type="email"
										value={formData.email}
										onChange={handleChange}
										className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 outline-none sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-4">
								<label
									htmlFor="phone"
									className="block text-xl font-medium leading-6 text-gray-900"
								>
									Номер телефона
								</label>
								<div className="mt-2">
									<input
										id="phone"
										name="phone"
										type="text"
										value={formData.phone}
										onChange={handleChange}
										className="pl-3 block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 outline-none sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="col-span-full">
								<label
									htmlFor="banquetAddress"
									className="block text-xl font-medium leading-6 text-gray-900"
								>
									Адрес, по которому планируется банкет
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="banquetAddress"
										id="banquetAddress"
										value={formData.banquetAddress}
										onChange={handleChange}
										className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 outline-none sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="border-b border-gray-900/10 pb-12">
						<div className="mt-10 space-y-10">
							<fieldset>
								<legend className="text-2xl font-semibold leading-6 text-gray-900">
									Как лучше с вами связаться?
								</legend>
								<p className="mt-1 text-xl leading-6 text-gray-600">
									Выберите один из удобных способов:
								</p>
								<div className="mt-6 space-y-6">
									<div className="flex items-center gap-x-3">
										<input
											id="pushEverything"
											name="contactMethod"
											type="radio"
											value='getContactByPhone'
											checked={formData.contactMethod === 'getContactByPhone'}
											onChange={handleChange}
											className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-600"
										/>
										<label
											htmlFor="pushEverything"
											className="block text-xl font-medium leading-6 text-gray-900"
										>
											По номеру телефона
										</label>
									</div>
									<div className="flex items-center gap-x-3">
										<input
											id="pushEmail"
											name="contactMethod"
											type="radio"
											value='getContactByEmail'
											onChange={handleChange}
											checked={formData.contactMethod === 'getContactByEmail'}
											className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-600"
										/>
										<label
											htmlFor="pushEmail"
											className="block text-xl font-medium leading-6 text-gray-900"
										>
											По электронной почте
										</label>
									</div>
									<div className="flex items-center gap-x-3">
										<input
											id="pushNothing"
											name="contactMethod"
											type="radio"
											checked={formData.contactMethod === 'getContactByTelegram'}
											value='getContactByTelegram'
											onChange={handleChange}
											className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-600"
										/>
										<label
											htmlFor="pushNothing"
											className="block text-xl font-medium leading-6 text-gray-900"
										>
											По Telegram
										</label>
									</div>
								</div>
							</fieldset>
						</div>
					</div>
				</div>

				<div className="mt-6 flex items-center justify-end gap-x-6">
					<button
						type="reset"
						className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-600"
					>
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
			<div className="border-b border-gray-900/10 pb-12"></div>
			<SuccessModal isOpen={successModal} onClose={() => setSuccessModal(false)} />
			<ErrorModal isOpen={errorModal} onClose={() => setErrorModal(false)} />
		</>

	);
};

export default Form;
