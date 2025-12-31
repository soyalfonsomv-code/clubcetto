
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Wine, Sparkles, TrendingUp } from 'lucide-react';
import MaridaTuPlatillo from '@/components/MaridaTuPlatillo';
import SommelierDinamico from '@/components/SommelierDinamico';
import ComparadorVinos from '@/components/ComparadorVinos';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [activeTab, setActiveTab] = useState('marida');

  return (
    <>
      <Helmet>
        <title>Club Cetto - Sommelier Digital | Maridaje de Vinos Premium</title>
        <meta name="description" content="Descubre el maridaje perfecto con nuestro sommelier digital. Selecciona tu platillo, estado de ánimo o compara vinos de Club Cetto para una experiencia única." />
      </Helmet>
      
      <div 
        className="min-h-screen flex flex-col items-center p-4 md:p-8"
        style={{
          background: 'radial-gradient(ellipse at top, #1a1a1a 0%, #0b0b0b 100%)'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl"
        >
          {/* Header */}
          <header className="text-center mb-8 md:mb-12">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <Wine className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4" style={{ color: '#d4b37c' }} />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: '#d4b37c' }}>
              Club Cetto
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-2">
              Sommelier Digital
            </p>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              Descubre el maridaje perfecto para cada ocasión
            </p>
          </header>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-1">
              <TabsTrigger 
                value="marida" 
                className="data-[state=active]:bg-[#d4b37c] data-[state=active]:text-[#0b0b0b] text-gray-400 transition-all duration-300 rounded-lg font-medium flex items-center gap-2 justify-center py-3"
              >
                <Wine className="w-4 h-4" />
                <span className="hidden sm:inline">Marida tu Platillo</span>
                <span className="sm:hidden">Marida</span>
              </TabsTrigger>
              <TabsTrigger 
                value="sommelier"
                className="data-[state=active]:bg-[#d4b37c] data-[state=active]:text-[#0b0b0b] text-gray-400 transition-all duration-300 rounded-lg font-medium flex items-center gap-2 justify-center py-3"
              >
                <Sparkles className="w-4 h-4" />
                <span className="hidden sm:inline">Sommelier Dinámico</span>
                <span className="sm:hidden">Sommelier</span>
              </TabsTrigger>
              <TabsTrigger 
                value="comparador"
                className="data-[state=active]:bg-[#d4b37c] data-[state=active]:text-[#0b0b0b] text-gray-400 transition-all duration-300 rounded-lg font-medium flex items-center gap-2 justify-center py-3"
              >
                <TrendingUp className="w-4 h-4" />
                <span className="hidden sm:inline">Comparador</span>
                <span className="sm:hidden">Compara</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="marida">
              <MaridaTuPlatillo />
            </TabsContent>

            <TabsContent value="sommelier">
              <SommelierDinamico />
            </TabsContent>

            <TabsContent value="comparador">
              <ComparadorVinos />
            </TabsContent>
          </Tabs>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-12 pt-8 border-t border-[#2a2a2a]"
          >
            <p className="text-gray-400 mb-3">
              Descubre más en nuestro sitio oficial
            </p>
            <a 
              href="https://lacetto.mx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2a2a2a] hover:bg-[#d4b37c] text-gray-300 hover:text-[#0b0b0b] rounded-lg transition-all duration-300 font-medium"
            >
              <Wine className="w-5 h-5" />
              Visitar lacetto.mx
            </a>
            <p className="text-sm text-gray-500 mt-6">
              © 2025 Club Cetto. Disfruta con responsabilidad.
            </p>
          </motion.footer>
        </motion.div>
        
        <Toaster />
      </div>
    </>
  );
}

export default App;
