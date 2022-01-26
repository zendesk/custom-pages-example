import React from 'react';

function Testimonials() {
  // testimonial expansion functionality here

  return (
    <div className="flex md:flex-row md:gap-3 flex-col gap-6 mx-36 md:mx-0">
      <div className="basis-1/3 rounded-3xl bg-white border-2 border-black pt-8">
        <img
          className="h-[8rem] w-[8rem] rounded-full ring-2 ring-zinc-500 ring-offset-2 ring-offset-zinc-400 mx-auto"
          src="/Test1.jpg
								"
          alt="Great CS"
        />
        <p className="py-6 px-6 font-mono text-sm text-center">
          Momma always said, you spend money on good shoes, good tires, and good
          dedicated technical support teams for your integral SaaS technologies
          so that you can expand your business rapidly.
        </p>
      </div>
      <div className="flex-row  basis-1/3 rounded-3xl bg-white border-2 border-black pt-8">
        <img
          className="h-[8rem] w-[8rem] rounded-full ring-2 ring-zinc-500 ring-offset-2 ring-offset-zinc-400 mx-auto"
          src="/Test2.jpg
								"
          alt="Great CS"
        />
        <p className="py-6 px-6 font-mono text-sm text-center">
          My life was irrevocably changed by this experience. Just wow. Ten
          thumbs up!
        </p>
      </div>
      <div className="basis-1/3 rounded-3xl bg-white border-2 border-black pt-8 ">
        <img
          className="h-[8rem] w-[8rem] rounded-full ring-2 ring-zinc-500 ring-offset-2 ring-offset-zinc-400 mx-auto"
          src="/Test3.jpg
								"
          alt="Great CS"
        />
        <p className="py-6 px-6 font-mono text-sm text-center">
          Help, I'm trapped in a circle and if I stop smiling they'll make me
          listen to the Bee Gees again.
        </p>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Testimonials;
