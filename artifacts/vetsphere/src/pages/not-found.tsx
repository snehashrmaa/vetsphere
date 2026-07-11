import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function NotFoundPage() {
  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] mix-blend-screen opacity-30" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <Card className="bg-card/40 backdrop-blur-xl border-white/10 shadow-2xl">
          <CardContent className="pt-10 pb-10 flex flex-col items-center text-center">
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mb-6"
            >
              <AlertCircle className="h-10 w-10 text-destructive" />
            </motion.div>
            
            <h1 className="text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4">
              404
            </h1>
            
            <h2 className="text-2xl font-semibold mb-2 text-foreground">Page Not Found</h2>
            
            <p className="text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>

            <Link to="/dashboard">
              <Button variant="primary" icon={<ArrowLeft size={18} />}>
                Back to Dashboard
              </Button>
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
