import React from 'react';
import './App.css';
import Modal from './components/Modal';
import Testimonials from './components/Testimonials';

function App() {
	return (
		<div className="bg-[#E4F0D6]">
			<div className="min-h-screen">
				<div className="grid md:grid-cols-2 grid-cols-1 gap-8 w-full">
					<div className="font-sans text-[#050138] grid-rows-3 text-center md:text-left md:m-4 space-y-4 order-2 md:order-1">
						<div className="text-2xl justify-center font-bold">
							Sign-up for VIP support
						</div>

						<p className="text-base">
							Tailored help and guidance experience for your evolving business
							needs and technical environment.
						</p>
						<div className="pt-3 md:pt-5">
							<button
								className="bg-[#16494D] rounded-sm text-sm text-white py-2 px-4"
								onClick={Modal}
							>
								Learn more
							</button>
						</div>
					</div>

					<div className="order-1 md:order-2 md:cols-span-2">
						
							<img
								className="w-full h-[250px] object-center object-cover"
								src="/support800.jpg"
								alt="Great CS"
							/>
						
					</div>

					<div className="order-3 grid-rows-3 mx-auto text-center">
						<img className="mx-auto pb-2" src="/robo50.png" alt="robo" />
						<div className="text-md">Proactive Monitoring</div>
						<div className="mx-auto pt-2 text-xs font-mono w-3/5">
							We keep an eye on your KPIs so you don't have to
						</div>
					</div>
					<div className="order-4 grid-rows-3 mx-auto text-center">
						<div className="mx-auto">
							<img className="mx-auto pb-2" src="/team50.png" alt="robo" />
						</div>
						<div className="text-md">A designated support team</div>
						<div className="mx-auto pt-2 text-xs font-mono w-3/5">
							You'll have a support team that understands your use-case
						</div>
					</div>
					<div className="order-5">
						<div className="">
							<img
								className="w-full h-[250px] object-center object-cover"
								src="/info800.png
								"
								alt="Great CS"
							/>
						</div>
					</div>
					<div className="font-sans text-[#050138] text-center md:text-left md:m-4 space-y-4 order-6">
						<div className="text-2xl justify-center font-bold">
							Here are some cool stats
						</div>
						<div>
							<ul className="list-disc text-base">
								<li>1</li>
								<li>2</li>
								<li>3</li>
							</ul>
						</div>
						<div className="pt-5">
							<button
								className="bg-[#16494D] rounded-sm text-sm text-white py-2 px-4"
								onClick={Modal}
							>
								Learn more
							</button>
						</div>
					</div>
					<div className="order-7 col-span-2 mx-auto">
						<div className="text-lg text-[#050138] mx-auto font-sans font-bold">
							Don't take our word for it
						</div>
						<Testimonials />
					</div>
					<div className="order-8 col-span-2 bg-[#050138]"></div>
				</div>
			</div>
		</div>
	);
}

export default App;
