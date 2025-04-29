import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import Image from "next/image";

const teamMembers = [
  { name: "Joanna Lau", image: `Joanna.jpg`, description: "President" },
  { name: "Daniel Zhu", image: `DanielZ.jpg`, description: "Co President" },
  { name: "Alan Liu", image: `Alan.jpg`, description: "Exec" },
  { name: "Jeremy Dong", image: `Jeremy.jpg`, description: "Exec" },
  { name: "Henry Yang", image: `Henry.jpg`, description: "Exec" },
  { name: "Angelina Jiang", image: `Angelina.jpg`, description: "Exec" },
  { name: "Sowmya Ramanan", image: `Sowmya.jpg`, description: "Exec" },
  { name: "Daniel Xu", image: `Daniel.jpg`, description: "Web Dev" },
  { name: "Richard Tuo", image: `Richard.jpg`, description: "Exec" },
];

function App() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [displayText, setDisplayText] = useState("the RecessHACKS Team");
  const [isTyping, setIsTyping] = useState(false);
  const [targetText, setTargetText] = useState("the RecessHACKS Team");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let isCancelled = false;
    
    const updateText = async () => {
      setIsTyping(true);
      
      // Delete the current text
      for (let i = displayText.length; i >= 0; i--) {
        if (isCancelled) return;
        await new Promise(resolve => {
          timeout = setTimeout(() => {
            setDisplayText(displayText.substring(0, i));
            resolve(null);
          }, 50);
        });
      }
      
      // Type the new text
      for (let i = 1; i <= targetText.length; i++) {
        if (isCancelled) return;
        await new Promise(resolve => {
          timeout = setTimeout(() => {
            setDisplayText(targetText.substring(0, i));
            resolve(null);
          }, 50);
        });
      }
      
      setIsTyping(false);
    };

    updateText();

    return () => {
      isCancelled = true;
      clearTimeout(timeout);
    };
  }, [targetText]);

  useEffect(() => {
    setTargetText(hoveredMember || "the RecessHACKS Team");
  }, [hoveredMember]);

  const hoveredMemberData = hoveredMember 
    ? teamMembers.find(member => member.name === hoveredMember) 
    : null;

  return (
    <div className="relative bg-transparent p-8 mb-12 z-20">
      <section id='teams'>
        <div className="container mx-auto">
          <div className="min-h-[8rem]">
            <h1 className="text-4xl font-bold text-black text-center mb-4">
              Made with care by {' '}
              <span className="inline-block">
                {displayText}<span className="animate-flicker"> |</span>
              </span>
            </h1>
            
            {hoveredMemberData && (
              <p className="text-xl text-center text-black font-bold mt-8">
                {`${hoveredMemberData.name}, ${hoveredMemberData.description}`}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-4 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center"
                onMouseEnter={() => setHoveredMember(member.name)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className={`aspect-square w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 transition-all duration-300 ${hoveredMember === member.name ? 'border-orange-500 scale-105' : 'border-black'}`}>
                  <Image
                    src={`/team/${member.image}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    width={80} 
                    height={80}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;