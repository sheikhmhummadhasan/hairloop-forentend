import React from 'react';
import { 
  Search, 
  TrendingUp, 
  Building2, 
  Bookmark, 
  Sparkles, 
  FileText, 
  Hexagon, 
  LineChart 
} from 'lucide-react';

const features = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Find your ideal job with advanced filters."
  },
  {
    icon: TrendingUp,
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently."
  },
  {
    icon: Building2,
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring."
  },
  {
    icon: Bookmark,
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard."
  },
  {
    icon: Sparkles,
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process."
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description: "Create professional resumes with modern templates."
  },
  {
    icon: Hexagon,
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience."
  },
  {
    icon: LineChart,
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips."
  }
];

const FeaturesSection = () => {
  return (
    <section className="bg-[#0b0c10] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wide text-purple-400 uppercase bg-purple-950/40 rounded-full border border-purple-800/50 mb-4">
          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
          Features Job
          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-slate-100">
          Everything you need <br /> to succeed
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-[#12141c]/60 border border-slate-800/80 hover:border-slate-700 transition duration-300 flex items-start space-x-4"
              >
                <div className="p-2.5 rounded-xl bg-[#1a1d28] border border-slate-800 text-purple-400 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-200 mb-1">{feature.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default FeaturesSection;