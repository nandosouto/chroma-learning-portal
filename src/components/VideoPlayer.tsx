
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  description: string;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
  onBack: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  title,
  description,
  onNext,
  onPrevious,
  hasNext = false,
  hasPrevious = false,
  onBack
}) => {
  // Extract video ID from YouTube URL
  const getYouTubeVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeVideoId(videoUrl);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : videoUrl;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <Button
          onClick={onBack}
          variant="outline"
          className="mb-6 glass-effect border-blue-500/50 text-blue-300 hover:bg-blue-500/20"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar às Aulas
        </Button>

        {/* Video Container */}
        <div className="glass-effect rounded-xl overflow-hidden mb-6 animate-glow">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={embedUrl}
              title={title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Video Info */}
        <div className="glass-effect rounded-xl p-6 mb-6">
          <h1 className="text-3xl font-bold gradient-text mb-4">{title}</h1>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            onClick={onPrevious}
            disabled={!hasPrevious}
            variant="outline"
            className="glass-effect border-blue-500/50 text-blue-300 hover:bg-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Aula Anterior
          </Button>

          <div className="text-center text-gray-400">
            <p>Continue seu aprendizado</p>
          </div>

          <Button
            onClick={onNext}
            disabled={!hasNext}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white disabled:opacity-50 disabled:cursor-not-allowed neon-glow"
          >
            Próxima Aula
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
