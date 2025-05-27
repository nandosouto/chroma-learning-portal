
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Clock } from 'lucide-react';

interface LessonCardProps {
  title: string;
  description: string;
  thumbnail: string;
  duration?: string;
  isCompleted?: boolean;
  onClick: () => void;
}

const LessonCard: React.FC<LessonCardProps> = ({
  title,
  description,
  thumbnail,
  duration = "45 min",
  isCompleted = false,
  onClick
}) => {
  return (
    <Card 
      className="glass-effect border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer group overflow-hidden"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-blue-600/90 flex items-center justify-center animate-pulse">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>

        {/* Status Badge */}
        {isCompleted && (
          <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Concluída
          </div>
        )}

        {/* Duration Badge */}
        <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded flex items-center space-x-1 text-xs">
          <Clock className="w-3 h-3" />
          <span>{duration}</span>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Progress Bar */}
        <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${
              isCompleted ? 'w-full bg-green-500' : 'w-0 bg-blue-500'
            }`}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default LessonCard;
