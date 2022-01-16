import React from 'react';
import './App.css';
import Modal from './components/Modal';
import Bot from './SVGs/Bot';
import Person from './SVGs/Person';
import Testimonials from './components/Testimonials';
import Facebook from './SVGs/FB';
import LinkedIn from './SVGs/LinkedIn';
import Twitter from './SVGs/Twitter';
import Github from './SVGs/Github';

function App() {
  return (
    <div className="bg-[#E4F0D6]">
      <div className="min-h-screen flex flex-wrap mx-auto max-w-screen-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="font-sans text-[#050138] grid-rows-3 text-center mx-20 md:m-4 space-y-4 order-2 md:order-1 col-span-2 md:col-span-1">
            <div className="text-2xl justify-center font-semibold">
              Sign-up for VIP support
            </div>

            <p className="text-base">
              Tailored help and guidance experience for your evolving business
              needs and technical environment.
            </p>
            <div className="pt-3 md:pt-5">
              <button
                className="bg-[#16494D] hover:shadow-xl hover:-translate-y-0.5 rounded-sm text-sm text-white py-2 px-4"
                onClick={Modal}
              >
                Learn more
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2 col-span-2 md:col-span-1">
            <img
              className="w-full h-[250px] object-center object-cover"
              src="/support800.jpg"
              alt="Great CS"
            />
          </div>

          <div className="order-3 grid-rows-3 col-span-2 md:col-span-1 mx-auto text-center pt-5 md:pt-0  ">
            <svg className="h-20 mx-auto">
              <Bot />
            </svg>
            <div className="text-md">Proactive Monitoring</div>
            <div className="mx-auto pt-2 text-xs font-mono w-3/5">
              We keep an eye on your KPIs so you don't have to
            </div>
          </div>
          <div className="order-4 grid-rows-3 mx-auto col-span-2 md:col-span-1 text-center">
            <svg className="h-20 mx-auto">
              <Person />
            </svg>
            <div className="text-md">A dedicated support team</div>
            <div className="mx-auto pt-2 text-xs font-mono w-3/5">
              You'll have a support team that understands your use-case
            </div>
          </div>
          <div className="order-5 col-span-2 md:col-span-1 md:mx-0 mx-auto">
            <img
              className="w-full h-[250px] object-center object-cover "
              src="/stats800.jpg
								"
              alt="Great CS"
            />
          </div>
          <div className="font-sans text-[#050138] grid-rows-3 text-center space-y-4 order-6 col-span-2 md:col-span-1">
            <div className="text-2xl justify-center font-semibold">
              Here are some cool stats
            </div>
            <div>
              <ul className="list-disc list-inside">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
            <div className="pt-5">
              <button
                className="bg-[#16494D] rounded-sm text-sm text-white py-2 px-4 hover:shadow-xl hover:-translate-y-0.5"
                onClick={Modal}
              >
                Learn more
              </button>
            </div>
          </div>
          <div className="order-7 col-span-2 mx-auto">
            <div className="text-lg text-[#050138] mx-auto font-sans font-semibold">
              Don't take our word for it
            </div>
            <Testimonials />
          </div>
          <div className="order-8 col-span-2 bg-[#050138]">
            <div className="flex place-content-center pt-8 space-x-5">
              <div className="">
                <a href="https://www.facebook.com/zendesk/">
                  <Facebook />
                </a>
              </div>

              <div className="">
                <a href="https://twitter.com/Zendesk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                  <Twitter />
                </a>
              </div>

              <div className="">
                <a href="https://www.linkedin.com/company/zendesk/mycompany/verification/">
                  <LinkedIn />
                </a>
              </div>
              <div className="">
                <a href="https://github.com/zendesk">
                  <Github />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 text-white text-xs ml-10 font-mono pt-10 pb-10">
              <div className="grid-rows-3 space-y-1">
                <div>Contact</div>
                <div>About Us</div>
                <div>Terms and Conditions</div>
              </div>
              <div className="grid-rows-3 space-y-1">
                <div>Careers</div>
                <div>Change Country</div>
                <div>FAQ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
