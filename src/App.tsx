/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Chrome, 
  Linkedin,
  ArrowRight, 
  Mail, 
  Lock, 
  User, 
  ChevronRight,
  Eye,
  EyeOff,
  Hexagon
} from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate a request
    setTimeout(() => setIsLoading(false), 2000);
  };

  const toggleMode = () => {
    setMode(prev => prev === 'login' ? 'register' : 'login');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#050505] overflow-hidden selection:bg-brand-primary/30">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-brand-primary/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-blue-600/10 blur-[140px] rounded-full"
        />
      </div>

      {/* Left Panel: Brand & Visuals */}
      <div className="relative z-10 w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-between overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(242,125,38,0.4)]">
            <Hexagon className="text-black w-6 h-6" />
          </div>
          <span className="font-sans font-bold text-xl tracking-tight">Lumina</span>
        </motion.div>

        <div className="mt-20 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-sans font-bold leading-[0.9] tracking-tighter mb-6">
              REDEFINE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-300">MODERN FLOW.</span>
            </h1>
            <p className="max-w-md text-white/50 text-lg leading-relaxed font-sans font-normal">
              Experience the next generation of digital infrastructure. Secure, lightning fast, and built for the bold.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex items-center gap-6"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] bg-neutral-800 flex items-center justify-center overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="User" />
                </div>
              ))}
            </div>
            <div className="text-sm font-mono text-white/40 uppercase tracking-widest">
              Trusted by 10k+ <br /> developers
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="hidden md:flex items-center gap-8 text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] mt-auto"
        >
          <span>© 2026 Lumina Industries</span>
          <span>Privacy</span>
          <span>Security</span>
          <span>Open Source</span>
        </motion.div>
      </div>

      {/* Right Panel: Auth Form */}
      <div className="relative z-10 w-full md:w-1/2 p-8 md:p-16 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="mb-10">
            <h2 className="text-3xl font-sans font-bold tracking-tight mb-2">
              {mode === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-white/50">
              {mode === 'login' 
                ? 'Enter your credentials to access your portal.' 
                : 'Join the vanguard of digital architecture.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <AnimatePresence mode="wait">
              {mode === 'register' && (
                <motion.div
                  key="name-field"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="space-y-2 overflow-hidden"
                >
                  <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-brand-primary transition-colors" />
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 outline-hidden focus:border-brand-primary/50 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-brand-primary transition-colors" />
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 outline-hidden focus:border-brand-primary/50 focus:bg-white/[0.06] transition-all text-white placeholder:text-white/20"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-mono uppercase tracking-widest text-white/40">Password</label>
                {mode === 'login' && (
                  <button type="button" className="text-[10px] font-mono uppercase tracking-widest text-brand-primary hover:text-orange-400 transition-colors">
                    Forgot?
                  </button>
                )}
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-brand-primary transition-colors" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3.5 pl-12 pr-12 outline-hidden focus:border-brand-primary/50 focus:bg-white/[0.06] transition-all text-white placeholder:text-white/20"
                  required
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/50 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-brand-primary hover:bg-orange-600 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group mt-8 relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div 
                    key="loader"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"
                  />
                ) : (
                  <motion.div 
                    key="text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    {mode === 'login' ? 'Enter Portal' : 'Initialize Account'}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </form>

          <div className="mt-8">
            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-white/5"></div>
              <span className="flex-shrink mx-4 text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">or continue with</span>
              <div className="flex-grow border-t border-white/5"></div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6">
              <button className="flex items-center justify-center gap-3 py-3 px-2 bg-white/[0.03] border border-white/5 rounded-xl hover:bg-white/[0.08] transition-all active:scale-[0.98]">
                <Github size={18} />
                <span className="text-sm font-medium">GitHub</span>
              </button>
              <button className="flex items-center justify-center gap-3 py-3 px-2 bg-white/[0.03] border border-white/5 rounded-xl hover:bg-white/[0.08] transition-all active:scale-[0.98]">
                <Chrome size={18} />
                <span className="text-sm font-medium">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 py-3 px-2 bg-white/[0.03] border border-white/5 rounded-xl hover:bg-white/[0.08] transition-all active:scale-[0.98]">
                <Linkedin size={18} />
                <span className="text-sm font-medium">LinkedIn</span>
              </button>
            </div>
          </div>

          <div className="mt-12 text-center text-sm">
            <p className="text-white/40">
              {mode === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
              <button 
                onClick={toggleMode}
                className="text-brand-primary font-bold hover:underline underline-offset-4"
              >
                {mode === 'login' ? 'Sign up free' : 'Log in here'}
              </button>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical lines */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5 z-0" />
      <div className="hidden lg:block absolute left-[25%] top-0 bottom-0 w-px bg-white/5 z-0" />
      <div className="hidden lg:block absolute left-[75%] top-0 bottom-0 w-px bg-white/5 z-0" />
    </div>
  );
}

