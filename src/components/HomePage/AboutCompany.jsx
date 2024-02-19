const AboutCompany = () => {
	return (
		<>
			<div id="values" className="content flex py-20 ">
				<div className="w-1/2 text-2xl">
					<p className="pb-2">
						<span className='text-teal-500 font-["Neucha"]'>
							"Островок счастья" - это ведущая платформа,{" "}
						</span>{" "}
						объединяющая лучшие рестораны города в одном месте. Здесь вы можете
						найти широкий выбор заведений, предлагающих различные кухни - от
						классических европейских блюд до экзотических восточных кулинарных
						традиций.
					</p>

					<p className="pb-2">
						Платформа предоставляет пользователям удобный и быстрый способ
						заказа еды онлайн. Вы можете легко выбрать ресторан, меню и оплатить
						заказ через нашу платформу. Кроме того, "Островок счастья"
						предоставляет удобный сервис доставки еды прямо к вашей двери.
					</p>

					<p className='text-teal-500 font-["Neucha"]'>
						Мы гордимся тем, что "Островок счастья" представляет собой идеальное
						место для любителей кулинарии, желающих насладиться изысканными
						блюдами и находиться в кругу близких и друзей.
					</p>
				</div>

				<div className="w-1/2 ml-12 my-auto">
					<img src="/images/about-us.jpeg" alt="Логотип о нас"
						className="rounded-2xl" />
				</div>
			</div>
			<div className="border-b border-gray-900/10 pb-12"></div>
		</>
	);
};

export default AboutCompany;
