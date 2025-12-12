import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10 scanlines" />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover grayscale opacity-60"
        >
          {/* Using a high quality abstract background video */}
          <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center w-full px-4 mix-blend-difference">
        <h1 className="text-[12vw] md:text-[15vw] leading-[0.85] font-['Anton'] text-white uppercase tracking-tighter mb-2 reveal-on-scroll">
          We Are <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">Solestra</span>
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 reveal-on-scroll transition-delay-200">
           <div className="h-[2px] w-24 bg-white hidden md:block" />
           <p className="font-['Oswald'] text-xl md:text-2xl uppercase tracking-[0.3em] text-white">
             Culture • Strategy • Impact
           </p>
           <div className="h-[2px] w-24 bg-white hidden md:block" />
        </div>
      </div>

      {/* Footer / Scroll Text */}
      <div className="absolute bottom-12 left-8 md:left-12 z-20 hidden md:block">
        <p className="font-['Oswald'] text-xs uppercase tracking-widest text-white/80">
          Est. 2024 / Global
        </p>
      </div>
      
      <div className="absolute bottom-12 right-8 md:right-12 z-20 animate-bounce">
        <ArrowDown className="text-white w-8 h-8" />
      </div>
    </div>
  );
};

export default Hero;