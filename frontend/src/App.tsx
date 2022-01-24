import React from "react";
import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Bot from "./SVGs/Bot";
import Person from "./SVGs/Person";
import Testimonials from "./components/Testimonials";
import Facebook from "./SVGs/FB";
import LinkedIn from "./SVGs/LinkedIn";
import Twitter from "./SVGs/Twitter";
import Github from "./SVGs/Github";

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleOverlay = () => {
    return showModal === true ? "overlay" : undefined;
  };
  return (
    <div className={toggleOverlay()}>
    <div className="bg-[#E4F0D6]">
      <div className="flex flex-wrap mx-auto max-w-screen-md">
        {/* Page grid layout, 2 columns medium screens and above, 1 column below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="font-sans text-[#050138] text-center grid-rows-3 mx-20 md:m-4 space-y-4 order-2 md:order-1 col-span-2 md:col-span-1">
            <div className="text-2xl justify-center font-semibold">
              Sign-up for VIP support
            </div>

            <p className="">
              Tailored help and guidance experience for your evolving business
              needs and technical environment.
            </p>
            <button
              className="bg-[#16494D] rounded-sm text-sm text-white py-2 px-4"
              onClick={(e) => {
                setShowModal(true);
              }}
            >
              Learn more
            </button>
            {showModal && <Modal setShowModal={setShowModal} />}
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
              onClick={(e) => {
                setShowModal(true);
              }}
            >
              Schedule a Call
            </button>
          </div>
        </div>
        <div className="order-7 col-span-2 mx-auto min-w-full pb-10 px-5 ">
          <div className="text-lg text-center text-[#050138] mx-auto pb-5 font-sans font-semibold">
            Don't take our word for it
          </div>
          <Testimonials />
        </div>
        <footer className="order-8 col-span-2 bg-[#050138] ">
          <div className="flex flex-row place-content-center pt-8 gap-4 ">
            <a href="https://www.facebook.com/zendesk/" target="_blank">
              <Facebook />
            </a>

            <a
              href="https://twitter.com/Zendesk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
            >
              <Twitter />
            </a>

            <a
              href="https://www.linkedin.com/company/zendesk/mycompany/verification/"
              target="_blank"
            >
              <LinkedIn />
            </a>

            <a href="https://github.com/zendesk" target="_blank">
              <Github />
            </a>
          </div>
          <div className="grid grid-cols-2 text-white text-xs font-mono pt-10 pb-10">
            <div className="grid-rows-3 space-y-1 ml-10">
              <div>
                <a
                  href="https://support.zendesk.com/hc/en-us/articles/4408843597850-Contacting-Zendesk-Customer-Support"
                  target="_blank"
                >
                  Contact
                </a>
              </div>
              <div>
                <a
                  href="https://support.zendesk.com/hc/en-us/articles/4408843597850-Contacting-Zendesk-Customer-Support"
                  target="_blank"
                >
                  About Us
                </a>
              </div>
              <div>
                <a
                  href="https://support.zendesk.com/hc/en-us/articles/4408843597850-Contacting-Zendesk-Customer-Support"
                  target="_blank"
                >
                  Terms and Conditions
                </a>
              </div>
            </div>
            <div className="grid-rows-3 space-y-1 ml-10">
              <div>
                <a
                  href="https://support.zendesk.com/hc/en-us/articles/4408843597850-Contacting-Zendesk-Customer-Support"
                  target="_blank"
                >
                  Careers
                </a>
              </div>
              <div>
                <a
                  href="https://support.zendesk.com/hc/en-us/articles/4408843597850-Contacting-Zendesk-Customer-Support"
                  target="_blank"
                >
                  Change Country
                </a>
              </div>
              <div>
                <a
                  href="https://support.zendesk.com/hc/en-us/articles/4408843597850-Contacting-Zendesk-Customer-Support"
                  target="_blank"
                >
                  FAQ
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </div>
  );
}

export default App;