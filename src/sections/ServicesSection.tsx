import React from 'react';
import FadeIn from '../components/FadeIn';

const services = [
  { num: '01', name: 'Frontend Development', desc: 'Building responsive, accessible, and highly interactive user interfaces using modern frameworks like React and Next.js.' },
  { num: '02', name: 'Backend Architecture', desc: 'Designing robust, scalable, and secure server-side architectures and APIs to power complex digital platforms.' },
  { num: '03', name: 'Interactive & 3D Web', desc: 'Creating immersive web experiences with WebGL, Three.js, and advanced motion graphics to captivate your audience.' },
  { num: '04', name: 'E-Commerce Solutions', desc: 'Developing custom, high-conversion headless e-commerce storefronts tailored for modern brands.' },
  { num: '05', name: 'Performance Optimization', desc: 'Auditing and optimizing core web vitals, load times, and overall site architecture for peak performance.' },
];

const ServicesSection: React.FC = () => (
  <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
    <h2 className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>Services</h2>
    <div className="max-w-5xl mx-auto">
      {services.map((s, i) => (
        <FadeIn key={s.num} delay={i * 0.1} y={30}>
          <div className="flex items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12" style={{ borderBottom: i < services.length - 1 ? '1px solid rgba(12,12,12,0.15)' : 'none', borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : 'none' }}>
            <span className="font-black text-[#0C0C0C] flex-shrink-0" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>{s.num}</span>
            <div className="flex flex-col justify-center pt-2 sm:pt-4 md:pt-6">
              <h3 className="font-medium uppercase text-[#0C0C0C]" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>{s.name}</h3>
              <p className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60 mt-2" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>{s.desc}</p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

export default ServicesSection;
