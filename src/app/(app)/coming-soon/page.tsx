"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from '@/components/home/Navbar'

const ComingSoon = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  // Set launch date to June 10, 2025
  const launchDate = new Date("July 15, 2025").getTime();
  
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;
      
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);
    
    return () => clearInterval(timer);
  }, [launchDate]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "error",
      });
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "error",
      });
      return;
    }
  
    else {
      await fetch('/api/save-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
    
      setEmail('');
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center px-4 pt-32 bg-gradient-to-b from-orange-200 to-yellow-100">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-black">Coming</span> <span className="text-black">Soon</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-black mb-10 max-w-2xl mx-auto">
            We're working hard to bring Recess Hacks 2025 to life. Stay tuned for the ultimate student hackathon experience!
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">{days}</div>
              <div className="text-gray-600">Days</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">{hours}</div>
              <div className="text-gray-600">Hours</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">{minutes}</div>
              <div className="text-gray-600">Minutes</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">{seconds}</div>
              <div className="text-gray-600">Seconds</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-gray-700 mb-12">
            <div className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-secondary" />
              <span>August 23-24, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-secondary" />
              <span>Toronto, Canada</span>
            </div>
          </div>
          
          <div className="max-w-md mx-auto mb-8">
            <h3 className="text-xl font-semibold mb-4">Get Notified When We Launch</h3>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit" className="bg-orange-500 text-white hover:bg-orange-700">Notify Me</Button>
            </form>
          </div>
          
          <div className="mt-8">
            <Button onClick={() => window.location.href = "/"} className="bg-orange-500 text-white hover:bg-orange-700">
              Back to Home
            </Button>
          </div>
        </div>
        <div className="container mx-auto px-4 text-center mt-16">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Recess Hacks. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;