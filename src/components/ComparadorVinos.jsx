
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TrendingUp, Wine, Award } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { wineData } from '@/data/wineData';

function ComparadorVinos() {
  const [wine1, setWine1] = useState('');
  const [wine2, setWine2] = useState('');
  const [comparison, setComparison] = useState(null);
  const { toast } = useToast();

  const handleCompare = () => {
    if (!wine1 || !wine2) {
      toast({
        title: "Selección incompleta",
        description: "Por favor selecciona dos vinos para comparar.",
        variant: "destructive",
      });
      return;
    }

    if (wine1 === wine2) {
      toast({
        title: "Vinos idénticos",
        description: "Por favor selecciona dos vinos diferentes.",
        variant: "destructive",
      });
      return;
    }

    const wineObj1 = wineData.find(w => w.id === wine1);
    const wineObj2 = wineData.find(w => w.id === wine2);

    const winner = wineObj1.structure > wineObj2.structure ? wineObj1 : 
                   wineObj2.structure > wineObj1.structure ? wineObj2 : null;

    setComparison({
      wine1: wineObj1,
      wine2: wineObj2,
      winner: winner
    });
  };

  const resetComparison = () => {
    setWine1('');
    setWine2('');
    setComparison(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6 md:p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-6 h-6" style={{ color: '#d4b37c' }} />
        <h2 className="text-2xl font-bold text-white">Comparador de Vinos</h2>
      </div>

      <p className="text-gray-400 mb-8">
        Compara dos vinos y descubre cuál tiene mayor estructura
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Wine 1 Selection */}
        <div>
          <label className="block text-sm font-medium mb-3" style={{ color: '#d4b37c' }}>
            Primer Vino
          </label>
          <div className="space-y-2">
            {wineData.map((wine) => (
              <motion.button
                key={`wine1-${wine.id}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setWine1(wine.id)}
                disabled={wine2 === wine.id}
                className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                  wine1 === wine.id
                    ? 'border-[#d4b37c] bg-[#2a2a2a] text-white'
                    : wine2 === wine.id
                    ? 'border-[#2a2a2a] bg-[#0b0b0b] text-gray-600 cursor-not-allowed opacity-50'
                    : 'border-[#2a2a2a] bg-[#0b0b0b] text-gray-400 hover:border-[#bfa77a]'
                }`}
              >
                <span className="font-medium block">{wine.name}</span>
                <span className="text-xs text-gray-500 mt-1 block">{wine.type}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Wine 2 Selection */}
        <div>
          <label className="block text-sm font-medium mb-3" style={{ color: '#d4b37c' }}>
            Segundo Vino
          </label>
          <div className="space-y-2">
            {wineData.map((wine) => (
              <motion.button
                key={`wine2-${wine.id}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setWine2(wine.id)}
                disabled={wine1 === wine.id}
                className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                  wine2 === wine.id
                    ? 'border-[#d4b37c] bg-[#2a2a2a] text-white'
                    : wine1 === wine.id
                    ? 'border-[#2a2a2a] bg-[#0b0b0b] text-gray-600 cursor-not-allowed opacity-50'
                    : 'border-[#2a2a2a] bg-[#0b0b0b] text-gray-400 hover:border-[#bfa77a]'
                }`}
              >
                <span className="font-medium block">{wine.name}</span>
                <span className="text-xs text-gray-500 mt-1 block">{wine.type}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Compare Button */}
      {wine1 && wine2 && !comparison && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            onClick={handleCompare}
            className="w-full bg-[#d4b37c] hover:bg-[#bfa77a] text-[#0b0b0b] font-semibold py-6 text-lg rounded-xl transition-all duration-300"
          >
            Comparar Vinos
            <TrendingUp className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      )}

      {/* Comparison Result */}
      <AnimatePresence>
        {comparison && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="mt-6 space-y-4"
          >
            {/* Winner Banner */}
            {comparison.winner && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-[#d4b37c] to-[#bfa77a] rounded-xl p-4 text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="w-6 h-6 text-[#0b0b0b]" />
                  <span className="text-lg font-bold text-[#0b0b0b]">Mayor Estructura</span>
                </div>
                <p className="text-2xl font-bold text-[#0b0b0b]">{comparison.winner.name}</p>
              </motion.div>
            )}

            {!comparison.winner && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-[#2a2a2a] to-[#1a1a1a] rounded-xl border-2 border-[#d4b37c] p-4 text-center"
              >
                <p className="text-lg font-bold text-white">¡Empate Perfecto!</p>
                <p className="text-sm text-gray-400 mt-1">Ambos vinos tienen la misma estructura</p>
              </motion.div>
            )}

            {/* Detailed Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Wine 1 Details */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className={`bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl p-6 border-2 ${
                  comparison.winner?.id === comparison.wine1.id 
                    ? 'border-[#d4b37c]' 
                    : 'border-[#2a2a2a]'
                }`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <Wine className="w-6 h-6 flex-shrink-0" style={{ color: '#d4b37c' }} />
                  <div>
                    <h3 className="text-lg font-bold text-white">{comparison.wine1.name}</h3>
                    <p className="text-sm text-gray-400">{comparison.wine1.type}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-[#0b0b0b] rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-500">Estructura</span>
                      <span className="text-sm font-bold text-white">{comparison.wine1.structure}/5</span>
                    </div>
                    <div className="w-full bg-[#1a1a1a] rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(comparison.wine1.structure / 5) * 100}%` }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="h-2 rounded-full"
                        style={{ backgroundColor: '#d4b37c' }}
                      />
                    </div>
                  </div>

                  <div className="bg-[#0b0b0b] rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-500">Intensidad</span>
                      <span className="text-sm font-bold text-white">{comparison.wine1.intensity}/5</span>
                    </div>
                    <div className="w-full bg-[#1a1a1a] rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(comparison.wine1.intensity / 5) * 100}%` }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="h-2 rounded-full"
                        style={{ backgroundColor: '#bfa77a' }}
                      />
                    </div>
                  </div>

                  <div className="bg-[#0b0b0b] rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-500">Dulzor</span>
                      <span className="text-sm font-bold text-white">{comparison.wine1.sweetness}/5</span>
                    </div>
                    <div className="w-full bg-[#1a1a1a] rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(comparison.wine1.sweetness / 5) * 100}%` }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="h-2 rounded-full bg-gray-600"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Wine 2 Details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className={`bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl p-6 border-2 ${
                  comparison.winner?.id === comparison.wine2.id 
                    ? 'border-[#d4b37c]' 
                    : 'border-[#2a2a2a]'
                }`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <Wine className="w-6 h-6 flex-shrink-0" style={{ color: '#d4b37c' }} />
                  <div>
                    <h3 className="text-lg font-bold text-white">{comparison.wine2.name}</h3>
                    <p className="text-sm text-gray-400">{comparison.wine2.type}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-[#0b0b0b] rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-500">Estructura</span>
                      <span className="text-sm font-bold text-white">{comparison.wine2.structure}/5</span>
                    </div>
                    <div className="w-full bg-[#1a1a1a] rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(comparison.wine2.structure / 5) * 100}%` }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="h-2 rounded-full"
                        style={{ backgroundColor: '#d4b37c' }}
                      />
                    </div>
                  </div>

                  <div className="bg-[#0b0b0b] rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-500">Intensidad</span>
                      <span className="text-sm font-bold text-white">{comparison.wine2.intensity}/5</span>
                    </div>
                    <div className="w-full bg-[#1a1a1a] rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(comparison.wine2.intensity / 5) * 100}%` }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="h-2 rounded-full"
                        style={{ backgroundColor: '#bfa77a' }}
                      />
                    </div>
                  </div>

                  <div className="bg-[#0b0b0b] rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-500">Dulzor</span>
                      <span className="text-sm font-bold text-white">{comparison.wine2.sweetness}/5</span>
                    </div>
                    <div className="w-full bg-[#1a1a1a] rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(comparison.wine2.sweetness / 5) * 100}%` }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="h-2 rounded-full bg-gray-600"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <Button
              onClick={resetComparison}
              variant="outline"
              className="w-full border-[#d4b37c] text-[#d4b37c] hover:bg-[#d4b37c] hover:text-[#0b0b0b] py-6 rounded-xl transition-all duration-300"
            >
              Hacer Nueva Comparación
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ComparadorVinos;
