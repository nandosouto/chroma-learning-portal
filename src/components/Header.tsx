
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, User } from 'lucide-react';

const Header = () => {
  const { logout, userEmail } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="glass-effect border-b border-blue-500/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center animate-pulse-slow">
            <span className="text-lg font-bold text-white">CP</span>
          </div>
          <div>
            <h1 className="text-xl font-bold gradient-text">
              Membros Checkout Próprio
            </h1>
            <p className="text-sm text-gray-400">Área de Membros Exclusiva</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-sm text-gray-300">
            <User className="w-4 h-4" />
            <span>{userEmail}</span>
          </div>
          
          <Button
            onClick={handleLogout}
            variant="outline"
            size="sm"
            className="glass-effect border-red-500/50 text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all duration-300"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
