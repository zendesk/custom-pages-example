import React from 'react';

function Testimonials() {
  return (
    <div className="flex flex-col md:flex-row mx-36 md:mx-0 gap-6 md:gap-3">
      <div className="basis-1/3 p-2 md:p-0 rounded-3xl bg-white border-2 border-black md:pb-5 content-center" >
        <img
          className=" md:float-none  md:mx-auto h-[5rem] w-[5rem] m-2 md:h-[8rem] md:w-[8rem] md:m-6 rounded-full ring-2 ring-zinc-500 ring-offset-2 ring-offset-zinc-400"
          src="//theme.zdassets.com/theme_assets/958528/9ef1b712145ab47cdfa1a4d3f6b7e47526257a2d.jpg"
          alt="Happy customer number one"
        />
        <p className=" md:pr-5 pt-12 md:pt-3 md:px-6 font-mono text-sm text-center">
          This VIP service has given us a path towards enlightment that few hope
          to ever achieve.
        </p>
      </div>
      <div className="basis-1/3 rounded-3xl bg-white border-2 border-black md:pb-5">
        <img
          className="md:float-none float-left md:mx-auto h-[5rem] w-[5rem] m-4 md:h-[8rem] md:w-[8rem] md:m-6 rounded-full ring-2 ring-zinc-500 ring-offset-2 ring-offset-zinc-400"
          src="//theme.zdassets.com/theme_assets/958528/202db06691aa3c4fb8758cf4245e14ef275a2859.jpg"
          alt="Super satisfied customer number two"
        />
        <p className="md:pr-5 pt-12 md:pt-3 md:px-6 font-mono text-sm text-center">
          My life was irrevocably changed by this experience. Just wow. Ten
          thumbs up!
        </p>
      </div>
      <div className="basis-1/3 rounded-3xl bg-white border-2 border-black md:pb-5">
        <img
          className="md:float-none float-left md:mx-auto h-[5rem] w-[5rem] m-4 md:h-[8rem] md:w-[8rem] md:m-6 rounded-full ring-2 ring-zinc-500 ring-offset-2 ring-offset-zinc-400"
          src="//theme.zdassets.com/theme_assets/958528/762d86cf90f765eee030940bbab073aad4f51310.jpg"
          alt="Very pleased customer #3"
        />
        <p className="md:pr-5 pt-12 md:pt-3 md:px-6 font-mono text-sm text-center">
          Help, I'm trapped in a circle and if I stop smiling they'll fire me.
        </p>
      </div>
    </div>
  );
}

export default Testimonials;
