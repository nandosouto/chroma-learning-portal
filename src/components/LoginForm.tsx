
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email || !password) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    const success = login(email, password);
    
    if (success) {
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo à área de membros.",
      });
    } else {
      toast({
        title: "Erro no login",
        description: "Senha incorreta. Tente novamente.",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-black" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-blue-500/20 rounded-full animate-float blur-xl" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-cyan-500/20 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-purple-500/20 rounded-full animate-float blur-xl" style={{ animationDelay: '4s' }} />

      <Card className="w-full max-w-md glass-effect animate-glow border-blue-500/30 relative z-10">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center animate-pulse-slow">
            <span className="text-2xl font-bold text-white">CP</span>
          </div>
          <CardTitle className="text-2xl font-bold gradient-text">
            Membros Checkout Próprio
          </CardTitle>
          <CardDescription className="text-gray-300">
            Faça login para acessar sua área de membros exclusiva
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-200">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="glass-effect border-blue-500/50 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-200">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="glass-effect border-blue-500/50 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400"
              />
            </div>
            
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 neon-glow"
            >
              {isLoading ? 'Entrando...' : 'Entrar na Área de Membros'}
            </Button>
          </form>
          
          <div className="text-center text-sm text-gray-400 bg-black/20 p-3 rounded-lg border border-gray-700">
            <p className="font-medium text-yellow-400 mb-1">Acesso de Demonstração:</p>
            <p>Senha: <span className="font-mono text-cyan-300">acesso123</span></p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
