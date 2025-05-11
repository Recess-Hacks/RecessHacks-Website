import { Lightbulb, Code, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import img1 from '../../../public/img1.png';
import img2 from '../../../public/img2.png';
import img3 from '../../../public/img3.png';
import img4 from '../../../public/img4.png';
import img5 from '../../../public/img5.png';
import img6 from '../../../public/img6.png';
import img7 from '../../../public/img7.png';
import img8 from '../../../public/img8.png';
import img9 from '../../../public/img9.png';
import img10 from '../../../public/img10.png';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import Orange from '@/components/home/OrangeCard'
import Yellow from '@/components/home/YellowCard'

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const [features] = useState([
    {
      icon: <Rocket size={24} />,
      title: "Foster Innovation",
      description: "Cultivate a collaborative environment that encourages creativity, critical thinking, and problem-solving, helping students to develop solutions that can make a real impact.",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Inspire the Next Generation",
      description: "Ignite a passion for technology and programming in students, inspiring them to pursue further education and careers in STEM fields.",
    },
    {
      icon: <Code size={24} />,
      title: "Develope Skills for the Future",
      description: "Help high school students of all skill levels to improve their programming, engineering and critical thinking skills through hands-on experience, workshops, and mentorship from industry experts.",
    },
  ])

  const startAutoScroll = () => {
    if (intervalRef.current !== null) return;
    
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    // Start auto-scrolling when component mounts
    if (!isPaused) {
      startAutoScroll();
    }
    
    // Clean up the interval when component unmounts
    return () => {
      stopAutoScroll();
    };
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    
    // Reset the timer when user manually changes slides
    stopAutoScroll();
    startAutoScroll();
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    
    // Reset the timer when user manually changes slides
    stopAutoScroll();
    startAutoScroll();
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
    stopAutoScroll();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    startAutoScroll();
  };

  return (
    <section id="about" className="py-12 md:py-20 relative">
      <div className="container px-4">
        <div className="flex md:flex-row flex-col">
          <ScrollReveal delay={50}>
            <div className="max-w-2xl mb-16 text-left left-[3rem] bg-white p-12 rounded-xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">About Recess Hacks</h2>
              <p className="text-lg text-foreground/80">
              Recess Hacks 5.0 is our first-ever in-person hackathon, running from August 24 - 25 in Toronto! Open to all high school students, participants can join solo or in teams of up to 4 to build innovative projects, attend workshops, win prizes, and most importantly—have fun! While we’re proudly based in Canada, this year we’re also welcoming international participants. Founded in 2021, Recess Hacks is now celebrating its 5th edition with more excitement than ever!
              </p>
              <a 
                className='text-blue-600 flex items-center mt-4 -mb-4 group transition-all duration-300 hover:text-blue-800 w-fit'
                href='/coming-soon'
              >
                Apply Now!
                <ChevronRight
                  className='ml-4 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300' 
                />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative w-[18rem] md:w-[40rem] h-[20rem] md:h-[26rem] aspect-video rounded-xl overflow-hidden shadow-lg md:ml-28" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      // Reset timer when user selects a specific slide
                      stopAutoScroll();
                      startAutoScroll();
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-white w-4'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-40 mb-40">
          <ScrollReveal delay={350}>
            <Orange
              icon={features[0].icon}
              title={features[0].title}
              description={features[0].description}
              className="animate-fade-in"
            />
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <Yellow
                icon={features[1].icon}
                title={features[1].title}
                description={features[1].description}
                className="animate-fade-in"
              />
          </ScrollReveal>

          <ScrollReveal delay={650}>
            <Orange
                icon={features[2].icon}
                title={features[2].title}
                description={features[2].description}
                className="animate-fade-in"
              />
          </ScrollReveal>
        </div>

        {/* <ScrollReveal delay={800}>
          <div className="mt-20 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Over 300+ Students</h3>
                <p className="text-lg text-foreground/80 mb-6">
                  Last year, our hackathon saw over 300 enthusiastic participants from Canada, and this year, we are excited to welcome even more talented students worldwide to join us for Recess Hacks 4.0!
                </p>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-hackathon-purple to-hackathon-blue flex items-center justify-center text-white text-lg font-medium">
                  Recess Hacks Highlight Video
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal> */}
      </div>
    </section>
  );
};

export default About;
