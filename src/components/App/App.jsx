import Header from 'components/Header';
import './App.css'
import Reviews from 'components/Reviews';
import Form from 'components/Form';
import Footer from 'components/Footer';

function App() {
	return (
		<>
			<div className='background-main'>
				<div className='bg-gray-950/50'>
					<Header />

					<img src='/images/icon-logo2.png' alt='' className='w-1/6 mx-auto pt-48 backdrop-blur-sm rounded-full' />

					<h2 className='text-slate-50 text-8xl font-semibold mx-auto max-w-6xl pt-16 text-center'>
						Кулинарное приключение для всех органов чувств
					</h2>

					<h3 className='text-slate-50 text-2xl font-["Neucha"] max-w-5xl text-center pt-20 pb-48 mx-auto '>
						Насыщенность вкусов и эмоций - это "Островок счастья"! Путешествуйте во времени и пространстве,
						открывая для себя лучшие блюда и традиции мира, не выходя из дома.
						"Островок счастья - это место, где кулинарные мечты становятся реальностью!
					</h3>
				</div>
			</div >

			<div className='content flex py-20 '>
				<div className='w-1/2 text-2xl'>

					<p className='pb-2'>
						<span className='text-teal-500 font-["Neucha"]'>
							"Островок счастья" - это ведущая платформа, </span> объединяющая лучшие рестораны города в одном месте.
						Здесь вы можете найти широкий выбор заведений, предлагающих различные кухни - от классических европейских
						блюд до экзотических восточных кулинарных традиций.
					</p>

					<p className='pb-2'>
						Платформа предоставляет пользователям удобный и быстрый способ заказа еды онлайн.
						Вы можете легко выбрать ресторан, меню и оплатить заказ через нашу платформу.
						Кроме того, "Островок счастья" предоставляет удобный сервис доставки еды
						прямо к вашей двери.
					</p>

					<p className='text-teal-500 font-["Neucha"]'>
						Мы гордимся тем, что "Островок счастья" представляет собой идеальное место для любителей кулинарии,
						желающих насладиться изысканными блюдами и находиться в кругу близких и друзей.
					</p>
				</div>


				<div className='w-1/2 ml-12 my-auto'>
					<img src='/images/about-us.jpeg' alt='' className='rounded-2xl' />
				</div>


			</div>
			<div className="border-b border-gray-900/10 pb-12"></div>
			<div className='content py-20 '>

				<Reviews />

				<Form />
			</div>
			<div className="border-b border-gray-900/10 pb-12"></div>

			<Footer />

		</>
	);
}

export default App;
