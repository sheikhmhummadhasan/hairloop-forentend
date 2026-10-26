import React from 'react';
import Image from 'next/image';

const CtaSection = () => {
  return (
    <section className="relative bg-[#050608] text-white overflow-hidden py-28 px-4 border-t border-slate-900 min-h-[500px] flex items-center justify-center">
      {/* Background Image using Next/Image */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Image
          src="/images/cta-bg.png" 
          alt="Blackhole Grid Background"
          height={500}
          width={500}
          className="object-cover object-bottom"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-[#050608]/80" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
          Your next role is <br /> already looking for you
        </h2>
        
        <p className="text-slate-400 text-xs md:text-sm mb-8">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs hover:bg-slate-200 transition">
            Create a free account
          </button>
          <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#12141c]/80 backdrop-blur-sm text-white border border-slate-800 font-semibold text-xs hover:bg-[#1a1d28] transition">
            View pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;