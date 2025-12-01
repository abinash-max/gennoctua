import React from 'react';
import { ScanFace, Smartphone, Clapperboard, ShieldCheck } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="group relative p-8 bg-white rounded-2xl border border-brand-100 hover:border-brand-400 shadow-sm hover:shadow-xl hover:shadow-brand-100 transition-all duration-300 h-full flex flex-col">
    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-50 to-transparent rounded-tr-2xl -z-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

    <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 transition-transform duration-300 z-10">
      {icon}
    </div>

    <h3 className="text-xl font-bold text-gray-900 mb-4 z-10">{title}</h3>

    <p className="text-gray-600 leading-relaxed flex-grow z-10 text-sm">
      {description}
    </p>

    <div className="mt-6 pt-6 border-t border-dashed border-gray-200 flex items-center text-brand-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
      Learn more →
    </div>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <ScanFace size={32} />,
      title: "Zero-Touch Virtual Try-on",
      description: "No selfies, no scanning, no manual upload required for seamless integration."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Omni-channel SDK",
      description: "One SDK for web, iOS, Android, and TV apps. Delivering the exact same high-fidelity personalized experience everywhere your users are."
    },
    {
      icon: <Clapperboard size={32} />,
      title: "Dynamic Video Personalization",
      description: "Go beyond static ads. Automate personalized experiences for TV, streaming, and web video to increase engagement drastically."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Secure by Design",
      description: "Enterprise-grade security and data protection with all images staying on the device. We ensure zero PII leaves the user's environment."
    }
  ];

  return (
    <div className="py-16 bg-brand-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;