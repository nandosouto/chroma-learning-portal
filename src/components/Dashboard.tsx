
import React, { useState } from 'react';
import Header from './Header';
import LessonCard from './LessonCard';
import VideoPlayer from './VideoPlayer';

interface Lesson {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  duration: string;
  isCompleted: boolean;
}

const Dashboard = () => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [lessons] = useState<Lesson[]>([
    {
      id: 1,
      title: "Aula 1: Introdução ao Checkout Próprio",
      description: "Aprenda os fundamentos para criar seu próprio sistema de checkout e comece sua jornada rumo à independência financeira digital.",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
      thumbnail: "https://i.ibb.co/NdgqJzmw/area-de-membros.png",
      duration: "45 min",
      isCompleted: false
    },
    {
      id: 2,
      title: "Aula 2: Arquivos das Aulas",
      description: "Acesse todos os materiais complementares, templates e recursos necessários para implementar seu checkout próprio com sucesso.",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
      thumbnail: "https://i.ibb.co/NdgqJzmw/area-de-membros.png",
      duration: "30 min",
      isCompleted: false
    },
    {
      id: 3,
      title: "Aula 3: Subindo seu Checkout",
      description: "Passo a passo completo para colocar seu checkout no ar e começar a receber pagamentos de forma independente e profissional.",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
      thumbnail: "https://i.ibb.co/NdgqJzmw/area-de-membros.png",
      duration: "60 min",
      isCompleted: false
    },
    {
      id: 4,
      title: "Aula 4: Adicionando Produto, Editando Checkout e OrderBumps",
      description: "Domine as técnicas avançadas de otimização, personalização e maximização de conversões com order bumps estratégicos.",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
      thumbnail: "https://i.ibb.co/NdgqJzmw/area-de-membros.png",
      duration: "75 min",
      isCompleted: false
    }
  ]);

  const handleLessonClick = (lesson: Lesson) => {
    setSelectedLesson(lesson);
  };

  const handleNextLesson = () => {
    if (selectedLesson) {
      const currentIndex = lessons.findIndex(l => l.id === selectedLesson.id);
      if (currentIndex < lessons.length - 1) {
        setSelectedLesson(lessons[currentIndex + 1]);
      }
    }
  };

  const handlePreviousLesson = () => {
    if (selectedLesson) {
      const currentIndex = lessons.findIndex(l => l.id === selectedLesson.id);
      if (currentIndex > 0) {
        setSelectedLesson(lessons[currentIndex - 1]);
      }
    }
  };

  const hasNext = selectedLesson ? 
    lessons.findIndex(l => l.id === selectedLesson.id) < lessons.length - 1 : false;
  
  const hasPrevious = selectedLesson ? 
    lessons.findIndex(l => l.id === selectedLesson.id) > 0 : false;

  if (selectedLesson) {
    return (
      <VideoPlayer
        videoUrl={selectedLesson.videoUrl}
        title={selectedLesson.title}
        description={selectedLesson.description}
        onNext={handleNextLesson}
        onPrevious={handlePreviousLesson}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
        onBack={() => setSelectedLesson(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 animate-float">
              Bem-vindo à sua Área de Membros
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Domine a arte de criar seu próprio checkout e conquiste sua independência financeira digital
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="glass-effect rounded-xl p-6 animate-glow">
                <div className="text-3xl font-bold text-blue-400 mb-2">{lessons.length}</div>
                <div className="text-gray-300">Aulas Disponíveis</div>
              </div>
              <div className="glass-effect rounded-xl p-6 animate-glow" style={{ animationDelay: '0.5s' }}>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {lessons.reduce((acc, lesson) => acc + parseInt(lesson.duration), 0)} min
                </div>
                <div className="text-gray-300">Conteúdo Total</div>
              </div>
              <div className="glass-effect rounded-xl p-6 animate-glow" style={{ animationDelay: '1s' }}>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {lessons.filter(l => l.isCompleted).length}/{lessons.length}
                </div>
                <div className="text-gray-300">Progresso</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Suas <span className="gradient-text">Aulas</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {lessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <LessonCard
                title={lesson.title}
                description={lesson.description}
                thumbnail={lesson.thumbnail}
                duration={lesson.duration}
                isCompleted={lesson.isCompleted}
                onClick={() => handleLessonClick(lesson)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
