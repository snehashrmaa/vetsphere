import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PlayCircle, Sparkles, Stethoscope, BookOpen, PawPrint, ClipboardList, FlaskConical, Bird, Briefcase, Github, Linkedin, Twitter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import FeatureCard from '@/components/FeatureCard';
import GlassCard from '@/components/GlassCard';
import Input from '@/components/Input';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function LandingPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Mesh Gradient */}
        <div className="absolute inset-0 z-0 bg-background">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-secondary/50 rounded-[100%] blur-[100px] rotate-45" />

          {/* subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <motion.div
            className="flex-1 text-center lg:text-left pt-10 lg:pt-0"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-accent mb-6 backdrop-blur-md">
              <Sparkles size={16} />
              <span>VetSphere v2.0 is now live</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading tracking-tight leading-[1.1] mb-6 text-foreground">
              The Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-accent">Veterinary Education</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Master clinical cases, access premium research, and prepare for your exams with our AI-powered platform built exclusively for veterinary professionals.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/dashboard" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto text-lg px-8">
                  Start Learning Free
                </Button>
              </Link>
              <Button variant="outline" size="lg" icon={<PlayCircle size={20} />} className="w-full sm:w-auto text-lg px-8">
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Visuals */}
          <motion.div
            className="flex-1 w-full max-w-lg lg:max-w-none relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Central element */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-0 right-10"
              >
                <GlassCard className="p-4 border-l-4 border-l-primary max-w-xs shadow-2xl bg-card/90">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Stethoscope size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Clinical Case Solved</h4>
                      <p className="text-xs text-muted-foreground">Canine Cardiology</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 right-0"
              >
                <GlassCard className="p-4 border-l-4 border-l-accent max-w-xs shadow-2xl bg-card/90">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Pharmacology Module</h4>
                      <p className="text-xs text-muted-foreground">In Progress</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full p-1"
              >
                <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <PawPrint size={32} className="text-primary mx-auto" />
                    <div className="text-[10px] text-muted-foreground mt-1">VetSphere</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">Everything you need to excel</h2>
            <p className="text-muted-foreground text-lg">A comprehensive suite of tools designed to take you from first-year student to confident practitioner.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Sparkles size={28} />}
              title="AI-Powered Learning"
              description="Our specialized veterinary AI helps explain complex topics, quizzes you on course material, and acts as your 24/7 study partner."
            />
            <FeatureCard
              icon={<Stethoscope size={28} />}
              title="Clinical Case Studies"
              description="Practice your diagnostic skills with our massive database of real-world clinical cases across all specialties and species."
            />
            <FeatureCard
              icon={<ClipboardList size={28} />}
              title="Practice Exams"
              description="Simulate real exam conditions with timed practice tests based on NAVLE standards and board certification requirements."
            />
            <FeatureCard
              icon={<FlaskConical size={28} />}
              title="Research Database"
              description="Stay current with direct access to peer-reviewed veterinary literature, summarized for quick clinical application."
            />
            <FeatureCard
              icon={<Bird size={28} />}
              title="Wildlife & Exotics"
              description="Specialized modules for non-traditional species, including avian, reptile, marine, and zoological medicine."
            />
            <FeatureCard
              icon={<Briefcase size={28} />}
              title="Career Connect"
              description="Network with clinics, find externships, and discover job opportunities matched to your specific interests and location."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <GlassCard className="max-w-4xl mx-auto p-10 md:p-16 text-center bg-gradient-to-br from-card to-primary/5 border-primary/20">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground">Ready to transform your veterinary career?</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join veterinary professionals and students mastering their craft with VetSphere.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="h-14 text-lg bg-background/50 border-white/20"
              />
              <Button variant="primary" size="lg" className="h-14 px-8 w-full sm:w-auto shrink-0 text-lg">
                Get Started
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Free 14-day trial. No credit card required.</p>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-background pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                  <PawPrint size={18} />
                </div>
                <span className="font-heading font-bold text-xl tracking-tight">VetSphere</span>
              </Link>
              <p className="text-sm text-muted-foreground mb-6">
                Premium veterinary education platform for the next generation of animal care professionals.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Clinical Cases</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Practice Exams</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">AI Assistant</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Research Database</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Community Forum</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Career Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} VetSphere Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
