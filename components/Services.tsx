import React from 'react';

const projects = [
  {
    id: 1,
    client: "Nike Sportswear",
    service: "Digital Campaign",
    title: "Run The City",
    video: "https://videos.pexels.com/video-files/2795748/2795748-uhd_2560_1440_25fps.mp4", 
    size: "col-span-1 md:col-span-1"
  },
  {
    id: 2,
    client: "Spotify",
    service: "Brand Identity",
    title: "Sound of Summer",
    video: "https://videos.pexels.com/video-files/6847849/6847849-uhd_2560_1440_25fps.mp4",
    size: "col-span-1 md:col-span-2"
  },
  {
    id: 3,
    client: "Tesla",
    service: "Web Experience",
    title: "Future Drive",
    video: "https://videos.pexels.com/video-files/5045479/5045479-uhd_2560_1440_25fps.mp4",
    size: "col-span-1 md:col-span-2"
  },
  {
    id: 4,
    client: "Aesop",
    service: "Social Strategy",
    title: "Rituals",
    video: "https://videos.pexels.com/video-files/4201389/4201389-uhd_2560_1440_25fps.mp4",
    size: "col-span-1 md:col-span-1"
  }
];

const Services: React.FC = () => {
  return (
    <section id="work" className="bg-black py-24 md:py-40">
      <div className="max-w-[95%] mx-auto px-4">
        
        {/* Section Header */}
        <div className="border-t border-white/20 pt-8 mb-20 flex flex-col md:flex-row justify-between items-start reveal-on-scroll">
          <h2 className="text-6xl md:text-8xl font-['Anton'] text-white uppercase leading-none">
            Selected<br/>Work
          </h2>
          <p className="font-['Oswald'] text-gray-400 uppercase tracking-widest mt-8 md:mt-0 max-w-sm text-right">
            We don't just participate in culture.<br/>We create it.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`group relative aspect-[4/5] md:aspect-auto md:h-[600px] overflow-hidden bg-neutral-900 ${project.size} reveal-on-scroll`}
            >
              {/* Video */}
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
              >
                <source src={project.video} type="video/mp4" />
              </video>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="overflow-hidden mb-2">
                  <p className="font-['Oswald'] text-amber-500 uppercase tracking-widest text-sm translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    {project.service}
                  </p>
                </div>
                <h3 className="text-4xl md:text-5xl font-['Anton'] text-white uppercase leading-none mb-2">
                  {project.client}
                </h3>
                <p className="font-['Inter'] text-gray-400 text-sm">
                  {project.title}
                </p>
              </div>

              {/* Hover Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <a href="#" className="inline-block border border-white/30 px-12 py-4 font-['Oswald'] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                View Full Archive
            </a>
        </div>

      </div>
    </section>
  );
};

export default Services;