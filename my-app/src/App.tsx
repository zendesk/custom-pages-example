import React from 'react';
import './App.css';
import Modal from './components/Modal';
import Testimonials from './components/Testimonials';

const Bot = ({}: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 26 26">
    <path
      className="fill-[#16494D] "
      d="M19 5c1.054 0 1.918.816 1.995 1.85L21 7v12a2.001 2.001 0 01-1.85 1.995L19 21H7a2.001 2.001 0 01-1.995-1.85L5 19V7c0-1.054.816-1.918 1.85-1.995L7 5h12zm-3 11h-6v2h6v-2zM2.5 10a.5.5 0 01.492.41L3 10.5v5a.5.5 0 01-.5.5c-1 0-2.5-1.165-2.5-3s1.5-3 2.5-3zm21 0c1 0 2.5 1.165 2.5 3s-1.5 3-2.5 3a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5zm-7 0c-.825 0-1.5.675-1.5 1.5 0 .776.598 1.42 1.356 1.493L16.5 13l.144-.007A1.505 1.505 0 0018 11.5c0-.825-.675-1.5-1.5-1.5zm-7 0c-.776 0-1.42.598-1.493 1.356L8 11.5l.007.144A1.505 1.505 0 009.5 13c.825 0 1.5-.675 1.5-1.5S10.325 10 9.5 10z"
    />
  </svg>
);
const Person = ({}: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 26 26">
    <g className="fill-[#16494D] ">
      <circle cx="13" cy="9" r="4" />
      <path d="M7.019 21c-.613 0-1.105-.538-1.007-1.136C6.561 16.538 9.481 14 13 14s6.439 2.538 6.987 5.864c.099.598-.394 1.136-1.006 1.136H7.019z" />
    </g>
  </svg>
);
function App() {
  return (
    <div className="bg-[#E4F0D6]">
      <div className="min-h-screen flex flex-wrap mx-auto max-w-[800px]">
        <div className="grid grid-cols1 md:grid-cols-2 gap-8 w-full">
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
                className="bg-[#16494D] rounded-sm text-sm text-white py-2 px-4"
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
            Hello my baby, holy my honey
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
