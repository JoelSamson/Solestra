import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-amber-500 text-black py-24">
      <div className="max-w-[95%] mx-auto px-4">
        
        {/* Massive Marquee Text */}
        <div className="overflow-hidden mb-20 border-y-4 border-black py-4">
            <div className="flex whitespace-nowrap animate-marquee">
                <span className="text-[10vw] font-['Anton'] uppercase leading-none mx-4">Let's Work Together • </span>
                <span className="text-[10vw] font-['Anton'] uppercase leading-none mx-4">Let's Work Together • </span>
                <span className="text-[10vw] font-['Anton'] uppercase leading-none mx-4">Let's Work Together • </span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div>
                <p className="font-['Oswald'] text-2xl uppercase tracking-wider mb-2">Inquiries</p>
                <a href="mailto:hello@solestra.agency" className="text-4xl md:text-6xl font-['Anton'] uppercase hover:opacity-50 transition-opacity underline decoration-4">
                    hello@solestra.agency
                </a>
            </div>
            
            <div className="flex flex-col md:items-end">
                 <p className="font-['Oswald'] text-2xl uppercase tracking-wider mb-2">Location</p>
                 <address className="not-italic text-xl md:text-2xl font-['Anton'] uppercase text-right">
                    101 Innovation Blvd<br/>
                    San Francisco, CA
                 </address>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;