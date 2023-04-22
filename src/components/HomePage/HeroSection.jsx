import "./styles.css"

const HeroSection = () => {
	return (
		<>
			<div className="background-main">
				<div className="bg-gray-950/50">
					<img
						src="/images/icon-logo2.png"
						alt=""
						className="w-1/6 mx-auto pt-48 backdrop-blur-sm rounded-full"
					/>

					<h2 className="text-slate-50 text-8xl font-semibold mx-auto max-w-6xl pt-16 text-center">
						Кулинарное приключение для всех органов чувств
					</h2>

					<h3 className='text-slate-50 text-2xl font-["Neucha"] max-w-5xl text-center pt-20 pb-48 mx-auto '>
						Насыщенность вкусов и эмоций - это "Островок счастья"! Путешествуйте
						во времени и пространстве, открывая для себя лучшие блюда и традиции
						мира, не выходя из дома. "Островок счастья - это место, где
						кулинарные мечты становятся реальностью!
					</h3>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
