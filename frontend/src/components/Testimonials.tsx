import React from 'react';

function Testimonials() {
  // testimonial expansion functionality here

  return (
    <div className="grid grid-cols-3 min-h-full gap-3">
      <div className=" min-w-[33%]  grid-rows-3 rounded-3xl bg-white border-2 border-black pt-8 drop-shadow-2xl max-h-[300px]">
        <img
          className="grid h-24 w-24 text-sm rounded-full ring-2  ring-zinc-500 mx-auto"
          src="/Test1.jpg
								"
          alt="Great CS"
        />
        <p className="py-8 px-8 font-mono text-sm text-center">
          Momma always said, you spend money on good shoes, good tires, and good
          dedicated technical support teams for your integral SaaS technologies
          so that you can expand your business rapidly.
        </p>
        <div className=""></div>
      </div>
      <div className=" min-w-[33%] grid-rows-3 rounded-3xl bg-white border-2 border-black pt-8 drop-shadow-2xl max-h-[300px]">
        <img
          className="grid h-24 w-24 text-sm rounded-full ring-2  ring-zinc-500 mx-auto"
          src="/Test2.jpg
								"
          alt="Great CS"
        />
        <p className="py-8 px-8 font-mono text-sm text-center">
          My life was irrevocably changed by this experience. Just wow. Ten
          thumbs up!
        </p>
        <div className=""></div>
      </div>
      <div className=" min-w-[33%] grid-rows-3 rounded-3xl bg-white border-2 border-black pt-8 drop-shadow-2xl max-h-[300px]">
        <img
          className="grid h-24 w-24 text-sm rounded-full ring-2  ring-zinc-500 mx-auto"
          src="/Test3.jpg
								"
          alt="Great CS"
        />
        <p className="py-8 px-8 font-mono text-sm text-center">
          Help, I'm trapped in a circle and if I stop smiling they'll make me
          listen to the Bee Gees again.
        </p>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Testimonials;
