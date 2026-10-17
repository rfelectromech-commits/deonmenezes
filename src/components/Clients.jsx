import { motion } from "framer-motion";
import { getViewportSettings } from '../lib/utils';
// Transparent, tightly-cropped versions of the client logos (originals kept in ../assets).
import ajSteelLogo from "../assets/logos/client1.png"
import agsiLogo from "../assets/logos/client3.png"
import arcelorMittalLogo from "../assets/logos/client5.png"
import adnocLogo from "../assets/logos/client6.png"
import nmdcLogo from "../assets/logos/client7.png"
import npccLogo from "../assets/logos/client8.png"
import emsteelLogo from "../assets/logos/client9.png"
import jazeeraSteelLogo from "../assets/logos/client11.png"
import alGharbiaLogo from "../assets/logos/client12.png"
import jindalLogo from "../assets/logos/client14.png"
import etihadRailLogo from "../assets/logos/client15.png"
import donaldsonLogo from "../assets/logos/client16.png"
import micodaLogo from "../assets/logos/client17.png"
import armGroupLogo from "../assets/logos/client18.png"
import giscoLogo from "../assets/logos/client19.png"
import alMasaoodLogo from "../assets/logos/client20.png"
import anabeebLogo from "../assets/logos/client21.png"
import alGhurairFoodsLogo from "../assets/logos/al-ghurair.png"
import adsbLogo from "../assets/logos/adsb.png"
import khansahebLogo from "../assets/logos/khansaheb.png"

import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const clients = [
  { 
    name: "Oil & Gas Sector", 
    serviceId: "hydraulic-services",
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 9.949V19h2v7.949c5.16-.21 9-4.399 9-9.949V7l-10-5z"/>
      </svg>
    )
  },
  { 
    name: "Marine", 
    serviceId: "pneumatic-systems",
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.5 12C5.67 12 5 12.67 5 13.5S5.67 15 6.5 15 8 14.33 8 13.5 7.33 12 6.5 12M17.5 12C16.67 12 16 12.67 16 13.5S16.67 15 17.5 15 19 14.33 19 13.5 18.33 12 17.5 12M9.84 8.16L8.5 9.5L10.19 11.19C10.07 11.61 10 12.05 10 12.5C10 13.14 10.12 13.75 10.34 14.31L2.5 22.14L3.86 23.5L11.69 15.66C12.25 15.88 12.86 16 13.5 16S14.75 15.88 15.31 15.66L23.14 23.5L24.5 22.14L16.66 14.31C16.88 13.75 17 13.14 17 12.5C17 12.05 16.93 11.61 16.81 11.19L18.5 9.5L17.16 8.16L15.34 10C14.75 9.12 13.86 8.5 12.84 8.16V6H11.16V8.16C10.14 8.5 9.25 9.12 8.66 10L6.84 8.16Z"/>
      </svg>
    )
  },
  { 
    name: "Steel & Pipe Manufacturing", 
    serviceId: "fabrication-services",
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 9.949V19h2v7.949c5.16-.21 9-4.399 9-9.949V7l-10-5z"/>
      </svg>
    )
  },
  { 
    name: "Aviation Sector", 
    serviceId: "automation-retrofitting",
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
      </svg>
    )
  },
  { 
    name: "Railways", 
    serviceId: "electrical-services",
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
      </svg>
    )
  },
  { 
    name: "Construction & EPC Contractors", 
    serviceId: "maintenance-repair",
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3L2 12H5V20H19V12H22L12 3M12 7.7L17 12V18H15V14H9V18H7V12L12 7.7Z"/>
      </svg>
    )
  },
  { 
    name: "Erection & Commissioning", 
    serviceId: "erection-commissioning",
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2M12 21L10.91 14.74L2 14L10.91 13.26L12 7L13.09 13.26L22 14L13.09 14.74L12 21Z"/>
      </svg>
    )
  },
];

const clientCompanies = [
  { name: "AJ Steel", logo: ajSteelLogo },
  { name: "Arabian Gulf Steel Industries", logo: agsiLogo },
  { name: "ArcelorMittal", logo: arcelorMittalLogo },
  { name: "ADNOC", logo: adnocLogo },
  { name: "NMDC Dredging & Marine", logo: nmdcLogo },
  { name: "NPCC", logo: npccLogo },
  { name: "Emsteel", logo: emsteelLogo },
  { name: "Jazeera Steel", logo: jazeeraSteelLogo },
  { name: "Al Gharbia", logo: alGharbiaLogo },
  { name: "Jindal", logo: jindalLogo },
  { name: "Etihad Rail", logo: etihadRailLogo },
  { name: "Donaldson", logo: donaldsonLogo },
  { name: "MICODA", logo: micodaLogo },
  { name: "ARM Group", logo: armGroupLogo },
  { name: "GISCO", logo: giscoLogo },
  { name: "Al Masaood", logo: alMasaoodLogo },
  { name: "ANABEEB", logo: anabeebLogo },
  { name: "Al Ghurair Foods", logo: alGhurairFoodsLogo },
  { name: "ADSB - Abu Dhabi Ship Building", logo: adsbLogo },
  { name: "Khansaheb", logo: khansahebLogo },
];

const MARQUEE_SPEED_PX_PER_S = 40;

// Logos keep their natural width at a fixed height with the same gap after each
// one, so spacing is uniform. The strip holds two identical copies; translating
// by exactly -50% is seamless. Duration is measured so speed stays constant.
function LogoMarquee({ logos, direction, className }) {
  const stripRef = useRef(null);
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const update = () => setDuration(strip.scrollWidth / 2 / MARQUEE_SPEED_PX_PER_S);
    const ro = new ResizeObserver(update); // re-measure as logos load / on resize
    ro.observe(strip);
    return () => ro.disconnect();
  }, []);

  return (
    <div className={`relative overflow-hidden py-6 bg-white/60 rounded-2xl border border-blue-200/50 ${className}`}>
      <div
        ref={stripRef}
        className={`animate-marquee-${direction} flex w-max items-center`}
        style={duration ? { '--marquee-duration': `${duration}s` } : { animationPlayState: 'paused' }}
      >
        {[0, 1].map((copy) =>
          logos.map((company) => (
            <img
              key={`${copy}-${company.name}`}
              decoding="async"
              src={company.logo}
              alt={copy === 1 ? '' : company.name}
              aria-hidden={copy === 1 ? true : undefined}
              className="h-14 w-auto max-w-[180px] object-contain flex-shrink-0 mr-16"
              draggable={false}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default function Clients() {
  const navigate = useNavigate();

  const handleClientClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <motion.section
      className="py-20 relative bg-gradient-to-br from-blue-50 via-white to-blue-100 will-change-transform gpu-accelerated"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={getViewportSettings()}
      transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
    >
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating Geometric Elements */}
      <div className="decor-shape-float absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/30 to-cyan-400/30 blur-xl" />
      <div className="decor-shape-rotate absolute bottom-32 left-16 w-24 h-24 rounded-lg bg-gradient-to-br from-cyan-400/30 to-blue-500/30 blur-lg" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16 will-change-opacity"
          initial="hidden"
          whileInView="visible"
          viewport={getViewportSettings({ amount: 0.05 })}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-700 border border-blue-500/20">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Key Customers
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-black mb-6 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            We proudly serve{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
              diverse industries
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Providing tailored mechanical and electrical engineering solutions to match each industry's unique requirements.
          </motion.p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-6 mb-20">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              className="group relative h-32 bg-white/80 rounded-2xl border border-blue-200/50 overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20 cursor-pointer flex items-center justify-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              onClick={() => handleClientClick(client.serviceId)}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10 text-center px-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-400/30 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300 mx-auto mb-3">
                  {client.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 text-center">
                  {client.name}
                </h3>
                <motion.div 
                  className="mx-auto mt-2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-300"
                  initial={{ width: "20px" }}
                  whileHover={{ width: "40px" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted Partners Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-700 border border-blue-500/20 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Trusted Partners
          </span>
          
          <h3 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
            Companies We{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Work With
            </span>
          </h3>
        </motion.div>

        {/* Moving Company Logos */}
        <LogoMarquee className="mb-8" direction="left" logos={clientCompanies.slice(0, Math.ceil(clientCompanies.length / 2))} />
        <LogoMarquee className="mb-16" direction="right" logos={clientCompanies.slice(Math.ceil(clientCompanies.length / 2))} />

        
      </div>

      {/* Animated Gradient Orbs */}
      <div className="decor-orb absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl" />
      <div className="decor-orb-slow absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl" />
    </motion.section>
  );
}