import Header from 'components/Header';
import './App.css'


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
						"Островок счастья" - это большой семейный ресторан, который
						позволит Вам провести вечер в расслабляющем окружении. Свежие цветы,
						утонченный интерьер и великолепные блюда создадут атмосферу идеального свидания
						или уютного ужина вдвоем. Приходите и наслаждайтесь настоящим островком счастья в самом сердце города.
					</h3>
				</div>
			</div >

			<div className='content flex py-20'>
				<div className='w-1/2 text-2xl'>
					<p className='pb-2'>
						<span className='text-teal-500 font-["Neucha"]'>Ресторан "Островок счастья" - </span> это настоящая жемчужина Стамбула c прекрасным видом на городские достопримечательности.
					</p>

					<p className='pb-2'>
						<span className='text-teal-500 font-["Neucha"]'>У нас есть </span>открытая терраса, на которой можно провести романтический ужин или просто насладиться
						прекрасным вечерним видом на город. Интерьер выполнен в приятных теплых тонах, которые создают комфортное
						и расслабляющее настроение. А кухня представляет собой настоящее путешествие по миру вкусов!
					</p>

					<p className='text-teal-500 font-["Neucha"]'>	Мы готовы сделать ваш визит в наш ресторан полным удовольствия. Ждем вас у нас в гостях!</p>
				</div>


				<div className='w-1/2 ml-12 my-auto'>
					<img src='/images/about-us.jpeg' alt='' className='rounded-2xl' />
				</div>
			</div>
		</>
	);
}

export default App;
