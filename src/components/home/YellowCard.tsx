import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "group relative bg-[#f6f5ff] p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-[22rem] md:h-[17rem] overflow-hidden",
        className
      )}
    >
      <div className="bg-hackathon-yellow/30 text-yellow-600 p-3 rounded-full inline-flex mb-5 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 w-0 group-hover:w-full transition-all duration-300"></div>
    </div>
  );
};

export default FeatureCard;