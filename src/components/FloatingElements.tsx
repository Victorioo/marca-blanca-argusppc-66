import { Chrome, Mail, Target, TrendingUp, Users, Zap } from "lucide-react";

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating platform icons */}
      <div className="absolute top-20 left-10 bg-white/10 backdrop-blur-sm rounded-lg p-3 animate-pulse">
        <div className="text-white text-xs font-medium">Google Analytics</div>
      </div>
      
      <div className="absolute top-32 right-20 bg-white/10 backdrop-blur-sm rounded-lg p-3 animate-pulse delay-1000">
        <div className="text-white text-xs font-medium">Meta Ads</div>
      </div>
      
      <div className="absolute bottom-40 left-16 bg-white/10 backdrop-blur-sm rounded-lg p-3 animate-pulse delay-2000">
        <div className="text-white text-xs font-medium">LinkedIn Ads</div>
      </div>
      
      <div className="absolute top-1/2 right-10 bg-white/10 backdrop-blur-sm rounded-lg p-3 animate-pulse delay-500">
        <div className="text-white text-xs font-medium">TikTok Ads</div>
      </div>
      
      <div className="absolute bottom-20 right-1/4 bg-white/10 backdrop-blur-sm rounded-lg p-3 animate-pulse delay-1500">
        <div className="text-white text-xs font-medium">Google Ads</div>
      </div>

      {/* Geometric decorations */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60"></div>
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-accent rounded-full animate-pulse delay-700 opacity-40"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-1200 opacity-50"></div>
    </div>
  );
};

export default FloatingElements;