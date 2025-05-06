import React from 'react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import Image from "next/image";

 const sponsors = [
  {
    name: "Wolfram",
    tier: "platinum",
    logo: `Wolfram.png`,
    url: "https://wolfram.com"
  },
  {
    name: "Algoverse",
    tier: "platinum",
    logo: `Algoverse.jpg`,
    url: "https://algoverseairesearch.org/"
  },
  {
    name: "Interview Buddy",
    tier: "gold",
    logo: `Interview-Buddy.jpeg`,
    url: "https://interviewbuddyai.com/"
  },
  {
    name: "Verbwire",
    tier: "gold",
    logo: `Verbwire.png`,
    url: "https://verbwire.com"
  },
  {
    name: "1Password",
    tier: "silver",
    logo: `1Password.png`,
    url: "https://1password.com"
  },
  {
    name: "Aops",
    tier: "silver",
    logo: `Aops.png`,
    url: "https://artofproblemsolving.com"
  },
  {
    name: "Axure",
    tier: "silver",
    logo: `Axure.png`,
    url: "https://axure.com"
  },
  {
    name: "Dewey Smart",
    tier: "silver",
    logo: `Dewey-Smart.png`,
    url: "https://deweysmart.com"
  },
  {
    name: "GMC",
    tier: "silver",
    logo: `Gmc.png`,
    url: "https://givemycertificate.com/"
  },
  {
    name: "Interview Cake",
    tier: "silver",
    logo: `Interview-Cake.png`,
    url: "https://interviewcake.com"
  },
  {
    name: "TTmath",
    tier: "silver",
    logo: `TTmath.jpg`,
    url: "https://www.ttmath.ca/en/"
  },
  {
    name: "Xyz",
    tier: "silver",
    logo: `Xyz.png`,
    url: "https://www.gen.xyz"
  }    
 ];
 
 const Sponsors = () => {

  let delayCounter = 0;

  const getDelay = () => {
    const delay = delayCounter;
    delayCounter += 150;
    return delay;
  };

   return (
     <section className="py-16 bg-transparent" id='sponsors'>
       <div className="container mx-auto px-4">
         <h2 className="text-4xl font-bold text-center mb-12">Our Sponsors</h2>

         <ScrollReveal delay={0}>
          <h3 className="text-lg text-center mb-8 text-black max-w-4xl mx-auto">Become a part of Canada's premier high school hackathon. Your support helps inspire the next generation of innovators and leaders in technology. Looking to make an impact? Email us at <span className='text-blue-600'>sponsorships@recesshacks.ca</span>.</h3>
         </ScrollReveal>
         
         <div className="space-y-16">
           {/* Platinum Sponsors */}
           <div>
             <h3 className="text-2xl font-semibold text-center mb-8 text-purple-600">Platinum</h3>
             <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
               {sponsors
                 .filter(sponsor => sponsor.tier === "platinum")
                 .map(sponsor => (
                  <ScrollReveal key={sponsor.name} delay={getDelay()}>
                    <a
                      key={sponsor.name}
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <img
                        src={`/sponsors/${sponsor.logo}`}
                        alt={`${sponsor.name} logo`}
                        className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        width={80} 
                        height={80}
                      />
                    </a>
                  </ScrollReveal>
                 ))}
             </div>
           </div>
 
           {/* Gold Sponsors */}
           <div>
             <h3 className="text-2xl font-semibold text-center mb-8 text-yellow-600">Gold</h3>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
               {sponsors
                 .filter(sponsor => sponsor.tier === "gold")
                 .map(sponsor => (
                  <ScrollReveal key={sponsor.name} delay={getDelay()}>
                    <a
                      key={sponsor.name}
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <img
                        src={`/sponsors/${sponsor.logo}`}
                        alt={`${sponsor.name} logo`}
                        className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        width={80} 
                        height={80}
                      />
                    </a>
                  </ScrollReveal>
                 ))}
             </div>
           </div>
 
           {/* Silver Sponsors */}
           <div>
             <h3 className="text-2xl font-semibold text-center mb-8 text-gray-600">Silver</h3>
             <div className="grid grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
               {sponsors
                 .filter(sponsor => sponsor.tier === "silver")
                 .map(sponsor => (
                  <ScrollReveal key={sponsor.name} delay={getDelay()}>
                   <a
                     key={sponsor.name}
                     href={sponsor.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                   >
                     <img
                        src={`/sponsors/${sponsor.logo}`}
                        alt={`${sponsor.name} logo`}
                        className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        width={80} 
                        height={80}
                     />
                   </a>
                  </ScrollReveal>
                 ))}
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default Sponsors;