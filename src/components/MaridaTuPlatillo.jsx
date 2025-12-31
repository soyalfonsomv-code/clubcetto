
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Wine, ChevronRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { wineData, cuisineData } from '@/data/wineData';

function MaridaTuPlatillo() {
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDish, setSelectedDish] = useState('');
  const [recommendation, setRecommendation] = useState(null);
  const { toast } = useToast();

  const categories = selectedCuisine ? cuisineData[selectedCuisine]?.categories || [] : [];
  const dishes = selectedCategory ? cuisineData[selectedCuisine]?.dishes[selectedCategory] || [] : [];

  const handleGetRecommendation = () => {
    if (!selectedDish) {
      toast({
        title: "Selección incompleta",
        description: "Por favor selecciona un platillo para obtener recomendación.",
        variant: "destructive",
      });
      return;
    }

    const dishData = cuisineData[selectedCuisine]?.dishes[selectedCategory]?.find(
      d => d.name === selectedDish
    );

    if (dishData && dishData.recommendedWine) {
      const wine = wineData.find(w => w.id === dishData.recommendedWine);
      setRecommendation({ wine, dish: dishData });
    }
  };

  const resetSelection = () => {
    setSelectedCuisine('');
    setSelectedCategory('');
    setSelectedDish('');
    setRecommendation(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6 md:p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <Wine className="w-6 h-6" style={{ color: '#d4b37c' }} />
        <h2 className="text-2xl font-bold text-white">Marida tu Platillo</h2>
      </div>

      <p className="text-gray-400 mb-8">
        Selecciona tu cocina, categoría y platillo para descubrir el vino perfecto
      </p>

      <div className="space-y-6">
        {/* Cuisine Selection */}
        <div>
          <label className="block text-sm font-medium mb-3" style={{ color: '#d4b37c' }}>
            Tipo de Cocina
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Object.keys(cuisineData).map((cuisine) => (
              <motion.button
                key={cuisine}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedCuisine(cuisine);
                  setSelectedCategory('');
                  setSelectedDish('');
                  setRecommendation(null);
                }}
                className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  selectedCuisine === cuisine
                    ? 'border-[#d4b37c] bg-[#2a2a2a] text-white'
                    : 'border-[#2a2a2a] bg-[#0b0b0b] text-gray-400 hover:border-[#bfa77a]'
                }`}
              >
                <span className="font-medium">{cuisineData[cuisine].label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Category Selection */}
        <AnimatePresence>
          {selectedCuisine && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <label className="block text-sm font-medium mb-3" style={{ color: '#d4b37c' }}>
                Categoría
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedCategory(category);
                      setSelectedDish('');
                      setRecommendation(null);
                    }}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      selectedCategory === category
                        ? 'border-[#d4b37c] bg-[#2a2a2a] text-white'
                        : 'border-[#2a2a2a] bg-[#0b0b0b] text-gray-400 hover:border-[#bfa77a]'
                    }`}
                  >
                    <span className="font-medium">{category}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dish Selection */}
        <AnimatePresence>
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <label className="block text-sm font-medium mb-3" style={{ color: '#d4b37c' }}>
                Platillo
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {dishes.map((dish) => (
                  <motion.button
                    key={dish.name}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedDish(dish.name);
                      setRecommendation(null);
                    }}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                      selectedDish === dish.name
                        ? 'border-[#d4b37c] bg-[#2a2a2a] text-white'
                        : 'border-[#2a2a2a] bg-[#0b0b0b] text-gray-400 hover:border-[#bfa77a]'
                    }`}
                  >
                    <span className="font-medium block">{dish.name}</span>
                    {dish.description && (
                      <span className="text-xs text-gray-500 mt-1 block">{dish.description}</span>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Get Recommendation Button */}
        {selectedDish && !recommendation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              onClick={handleGetRecommendation}
              className="w-full bg-[#d4b37c] hover:bg-[#bfa77a] text-[#0b0b0b] font-semibold py-6 text-lg rounded-xl transition-all duration-300"
            >
              Obtener Recomendación
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        )}

        {/* Recommendation Result */}
        <AnimatePresence>
          {recommendation && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl border-2 border-[#d4b37c] p-6 mt-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <Wine className="w-8 h-8 flex-shrink-0" style={{ color: '#d4b37c' }} />
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {recommendation.wine.name}
                  </h3>
                  <p className="text-sm" style={{ color: '#bfa77a' }}>
                    {recommendation.wine.type}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                {recommendation.wine.description}
              </p>

              <div className="bg-[#0b0b0b] rounded-lg p-4 mb-4">
                <p className="text-sm font-medium mb-2" style={{ color: '#d4b37c' }}>
                  ¿Por qué este maridaje?
                </p>
                <p className="text-sm text-gray-400">
                  {recommendation.dish.reason || `El ${recommendation.wine.name} complementa perfectamente los sabores de ${recommendation.dish.name}, creando una experiencia gastronómica equilibrada.`}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-[#0b0b0b] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">Intensidad</p>
                  <p className="text-white font-medium">{recommendation.wine.intensity}/5</p>
                </div>
                <div className="bg-[#0b0b0b] rounded-lg p-3">
                  <p className="text-gray-500 mb-1">Estructura</p>
                  <p className="text-white font-medium">{recommendation.wine.structure}/5</p>
                </div>
              </div>

              <Button
                onClick={resetSelection}
                variant="outline"
                className="w-full mt-4 border-[#d4b37c] text-[#d4b37c] hover:bg-[#d4b37c] hover:text-[#0b0b0b] transition-all duration-300"
              >
                Hacer otra búsqueda
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default MaridaTuPlatillo;
