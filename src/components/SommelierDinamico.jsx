
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sparkles, Wine, RotateCcw, Info, ChevronDown, Plus, Check, Flame, ChefHat, Utensils } from 'lucide-react';
import { wineData } from '@/data/wineData';

function SommelierDinamico() {
  const [protein, setProtein] = useState(null); // { category: 'res', cut: 'Rib Eye' }
  const [cookingMethod, setCookingMethod] = useState('');
  const [sauce, setSauce] = useState(null); // { style: 'Mexicana', name: 'Mole poblano' }
  const [customIngredients, setCustomIngredients] = useState([]);
  const [isCustomSauce, setIsCustomSauce] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  // --- Data Definitions ---

  const proteins = {
    res: { 
      label: 'Res', 
      icon: '🥩', 
      cuts: [
        { name: 'Rib Eye', preparacion: ['Asado', 'Plancha', 'Horno', 'Ahumado', 'Sous vide'] },
        { name: 'New York', preparacion: ['Asado', 'Plancha', 'Horno', 'Sous vide'] },
        { name: 'Filete', preparacion: ['Plancha', 'Horno', 'Sous vide', 'Tartare', 'Asado'] },
        { name: 'Arrachera', preparacion: ['Asado', 'Plancha'] },
        { name: 'T-Bone', preparacion: ['Asado', 'Plancha'] },
        { name: 'Costilla', preparacion: ['Horno', 'Ahumado', 'Braseado'] },
        { name: 'Entraña', preparacion: ['Asado', 'Plancha'] },
        { name: 'Vacio', preparacion: ['Asado', 'Plancha', 'Horno'] },
        { name: 'Hamburguesa', preparacion: ['Asado', 'Plancha'] }
      ]
    },
    cerdo: { 
      label: 'Cerdo', 
      icon: '🥓', 
      cuts: [
        { name: 'Lomo', preparacion: ['Horno', 'Plancha', 'Relleno', 'Sous vide'] },
        { name: 'Costillas (Ribs)', preparacion: ['Ahumado', 'Horno', 'Asado'] },
        { name: 'Chuleta', preparacion: ['Asado', 'Plancha', 'Frito'] },
        { name: 'Pierna', preparacion: ['Horno', 'Ahumado'] },
        { name: 'Panceta', preparacion: ['Horno', 'Frito', 'Ahumado'] },
        { name: 'Lechón', preparacion: ['Horno', 'Asado'] },
        { name: 'Chamorro', preparacion: ['Braseado', 'Horno'] }
      ] 
    },
    aves: { 
      label: 'Aves', 
      icon: '🍗', 
      cuts: [
        { name: 'Pollo (Pechuga)', preparacion: ['Plancha', 'Hervido', 'Horno', 'Frito', 'Sous vide'] },
        { name: 'Pollo (Muslo)', preparacion: ['Horno', 'Asado', 'Guisado', 'Frito'] },
        { name: 'Pato', preparacion: ['Horno', 'Plancha', 'Sous vide', 'Confitado'] },
        { name: 'Pavo', preparacion: ['Horno', 'Ahumado'] },
        { name: 'Codorniz', preparacion: ['Asado', 'Horno', 'Frito'] }
      ] 
    },
    pescados: { 
      label: 'Pescados', 
      icon: '🐟', 
      cuts: [
        { name: 'Blanco (Robalo/Huachinango)', preparacion: ['Plancha', 'Al vapor', 'Horno', 'Frito', 'Ceviche', 'Crudo'] },
        { name: 'Graso (Salmón/Atún)', preparacion: ['Plancha', 'Horno', 'Ahumado', 'Tartare', 'Crudo', 'Sous vide'] },
        { name: 'Bacalao', preparacion: ['Guisado', 'Horno'] },
        { name: 'Trucha', preparacion: ['Plancha', 'Horno', 'Frito'] }
      ] 
    },
    mariscos: { 
      label: 'Mariscos', 
      icon: '🦐', 
      cuts: [
        { name: 'Camarón', preparacion: ['Hervido', 'Plancha', 'Frito', 'Crudo', 'Asado'] },
        { name: 'Pulpo', preparacion: ['Asado', 'Hervido', 'Plancha'] },
        { name: 'Langosta', preparacion: ['Hervido', 'Plancha', 'Horno'] },
        { name: 'Cangrejo', preparacion: ['Hervido', 'Al vapor'] },
        { name: 'Ostiones', preparacion: ['Crudo', 'Gratinado', 'Ahumado'] },
        { name: 'Callo de Hacha', preparacion: ['Crudo', 'Plancha'] }
      ] 
    }
  };

  const cookingMethods = [
    { id: 'Asado', icon: '🔥' }, { id: 'Frito', icon: '🍳' }, { id: 'Hervido', icon: '💧' }, 
    { id: 'Al vapor', icon: '☁️' }, { id: 'Ahumado', icon: '💨' }, { id: 'Braseado', icon: '🥘' },
    { id: 'Gratinado', icon: '🧀' }, { id: 'Plancha', icon: '🥪' }, { id: 'Horno', icon: '🥖' }, 
    { id: 'Microondas', icon: '⚡' }, { id: 'Sous vide', icon: '🌡️' }, { id: 'Tartare', icon: '🔪' }
  ];

  const sauceStyles = {
    Mexicana: ['Pesto', 'Adobo', 'Mole poblano', 'Pipián nogada', 'Salsa verde', 'Salsa roja', 'Aguachile', 'Ceviche'],
    Italiana: ['Bolognesa', 'Carbonara', 'Rabiatta', '4 quesos', 'Bechamel', 'Parmesana'],
    Asiática: ['Soya', 'Teriyaki', 'Curry', 'Al ajillo'],
    Frutal: ['Agridulce', 'Ciruela', 'Arándano', 'Mango Habanero', 'Frutos rojos', 'Naranja'],
    'BBQ/Ahumada': ['BBQ', 'Sarandeado', 'Carbón'],
    Especial: ['Mostaza', 'Cilantro', 'Cebolla caramelizada', 'Finas hierbas', 'Rucola', 'Chipotle', 'Recaudo negro', 'Nogada']
  };

  const customIngredientCategories = {
    Frutas: ['Mango', 'Piña', 'Cítricos', 'Frutos Rojos', 'Higo'],
    Verduras: ['Tomate', 'Cebolla', 'Pimiento', 'Champiñones', 'Calabaza'],
    Especias: ['Pimienta', 'Clavo', 'Comino', 'Canela', 'Orégano'],
    Condimentos: ['Vinagre', 'Soya', 'Miel', 'Mostaza'],
    Lácteos: ['Crema', 'Mantequilla', 'Queso', 'Yogurt'],
    Picante: ['Habanero', 'Jalapeño', 'Chipote', 'Serrano', 'Guajillo']
  };

  // --- Logic Helpers ---

  const handleProteinSelect = (category, cutName) => {
    setProtein({ category, cut: cutName });
    // Filtering logic removed: cookingMethod is preserved even if changed protein
    setRecommendation(null);
  };

  const toggleCustomIngredient = (ing) => {
    setCustomIngredients(prev => prev.includes(ing) ? prev.filter(i => i !== ing) : [...prev, ing]);
    setRecommendation(null);
  };

  const selectPredefinedSauce = (style, name) => {
    setIsCustomSauce(false);
    setSauce({ style, name });
    setRecommendation(null);
  };

  const enableCustomSauce = () => {
    setIsCustomSauce(true);
    setSauce({ style: 'Personalizada', name: 'A tu gusto' });
    setRecommendation(null);
  };

  const reset = () => {
    setProtein(null);
    setCookingMethod('');
    setSauce(null);
    setCustomIngredients([]);
    setIsCustomSauce(false);
    setRecommendation(null);
  };

  const calculateRecommendation = () => {
    let target = { cuerpo: 3, acidez: 3, dulzor: 1, barrica: 2, fruta: 3, intensidad: 3 };
    let reasonLog = [];

    // 1. Protein Logic
    if (protein) {
      const { category, cut } = protein;
      if (category === 'res') {
        target = { ...target, cuerpo: 5, barrica: 4, intensidad: 5 };
        if (['Rib Eye', 'New York', 'T-Bone'].includes(cut)) {
          target.barrica = 5; target.acidez = 3;
          reasonLog.push(`El corte graso de ${cut} exige taninos potentes.`);
        } else {
          reasonLog.push("La res pide estructura y carácter.");
        }
      } else if (category === 'cerdo') {
        target = { ...target, cuerpo: 3, acidez: 4, fruta: 4 };
        if (['Costillas (Ribs)', 'Panceta'].includes(cut)) {
           target.fruta = 5; target.dulzor = 2;
           reasonLog.push("La grasa del cerdo va bien con fruta y acidez.");
        }
      } else if (category === 'aves') {
        target = { ...target, cuerpo: 3, acidez: 3 };
        if (cut === 'Pato') {
          target.acidez = 5; target.fruta = 5; target.cuerpo = 3;
          reasonLog.push("El pato graso necesita alta acidez.");
        }
      } else if (category === 'pescados') {
         if (cut.includes('Graso')) {
            target = { ...target, cuerpo: 3, acidez: 4, barrica: 2 };
            reasonLog.push("Pescados grasos soportan blancos con cuerpo o tintos ligeros.");
         } else {
            target = { ...target, cuerpo: 2, acidez: 5, barrica: 1 };
            reasonLog.push("Pescados blancos piden frescura total.");
         }
      } else if (category === 'mariscos') {
        target = { ...target, cuerpo: 1, acidez: 5, fruta: 3 };
        reasonLog.push("Los mariscos brillan con vinos frescos y minerales.");
      }
    }

    // 2. Cooking Logic
    if (cookingMethod) {
      if (['Asado', 'Ahumado', 'Braseado', 'Carbón'].includes(cookingMethod)) {
        target.barrica += 1; target.intensidad += 1;
        reasonLog.push(`El método ${cookingMethod} aporta notas ahumadas que buscan barrica.`);
      } else if (['Frito', 'Gratinado'].includes(cookingMethod)) {
        target.acidez += 1;
        reasonLog.push(`Para equilibrar lo ${cookingMethod.toLowerCase()}, buscamos acidez.`);
      } else if (['Hervido', 'Al vapor', 'Sous vide'].includes(cookingMethod)) {
        target.cuerpo = Math.max(1, target.cuerpo - 1);
        target.barrica = Math.max(1, target.barrica - 1);
        reasonLog.push(`La cocción sutil (${cookingMethod}) requiere un vino delicado.`);
      } else if (cookingMethod === 'Tartare' || cookingMethod === 'Crudo') {
        target.acidez += 1; target.barrica = 1;
        reasonLog.push("Para crudos, frescura sin madera.");
      }
    }

    // 3. Sauce Logic
    if (isCustomSauce) {
      const flatIngredients = customIngredientCategories;
      // Heuristic for custom ingredients
      if (customIngredients.some(i => flatIngredients.Picante.includes(i))) {
        target.dulzor += 2; target.fruta += 1; target.barrica = Math.max(1, target.barrica - 2);
        reasonLog.push("El picante se equilibra con dulzor y fruta, evitando taninos.");
      }
      if (customIngredients.some(i => flatIngredients.Frutas.includes(i) || ['Miel', 'Cebolla caramelizada'].includes(i))) {
        target.fruta += 1; target.dulzor += 1;
      }
      if (customIngredients.some(i => flatIngredients.Lácteos.includes(i))) {
        target.cuerpo += 1; target.acidez += 1;
        reasonLog.push("Los lácteos piden cuerpo o acidez para cortar la grasa.");
      }
    } else if (sauce) {
      const s = sauce.name;
      if (['Mole poblano', 'Adobo', 'Recaudo negro', 'Pipián nogada'].includes(s)) {
        target.cuerpo += 1; target.barrica += 1; target.intensidad += 1; target.dulzor += 1;
        reasonLog.push(`La complejidad del ${s} exige un vino potente.`);
      } else if (['Ceviche', 'Aguachile', 'Salsa verde', 'Cilantro', 'Pesto'].includes(s)) {
        target.acidez += 2; target.barrica = 1;
        reasonLog.push("Salsas verdes y ácidas piden vinos blancos vibrantes.");
      } else if (['BBQ', 'Teriyaki', 'Mango Habanero', 'Agridulce', 'Ciruela'].includes(s)) {
        target.dulzor += 2; target.fruta += 2;
        reasonLog.push("Salsas dulces o BBQ van genial con vinos frutales (Zinfandel/Rosado).");
      } else if (['Bolognesa', 'Rabiatta', 'Salsa roja'].includes(s)) {
        target.acidez += 1; target.cuerpo += 1;
        reasonLog.push("El tomate va bien con tintos de acidez media-alta (Italian style).");
      } else if (['4 quesos', 'Bechamel', 'Carbonara'].includes(s)) {
        target.cuerpo += 1; target.acidez += 1;
        reasonLog.push("Salsas cremosas se limpian con buena acidez o blancos con barrica.");
      }
    }

    // Scoring
    const scoredWines = wineData.map(wine => {
      let score = 0;
      score += Math.abs((wine.perfil?.cuerpo || 3) - target.cuerpo) * 1.5;
      score += Math.abs((wine.perfil?.acidez || 3) - target.acidez) * 1.2;
      score += Math.abs((wine.perfil?.dulzor || 1) - target.dulzor) * 2.0;
      score += Math.abs((wine.perfil?.barrica || 1) - target.barrica);
      score += Math.abs((wine.perfil?.fruta || 3) - target.fruta);
      
      return { wine, score };
    });

    scoredWines.sort((a, b) => a.score - b.score);
    const winner = scoredWines[0];

    setRecommendation({
      wine: winner.wine,
      reason: reasonLog.slice(0, 3).join(" ") || "Un maridaje equilibrado por intensidad.",
      matchScore: Math.max(0, 100 - (winner.score * 5))
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] overflow-hidden flex flex-col min-h-[800px]"
    >
      {/* Header */}
      <div className="p-6 md:p-8 bg-gradient-to-b from-[#222] to-[#1a1a1a] border-b border-[#2a2a2a]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#d4b37c]/10 p-2.5 rounded-full">
               <Sparkles className="w-6 h-6 text-[#d4b37c]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Sommelier Dinámico</h2>
              <p className="text-sm text-gray-400">Diseña tu platillo paso a paso</p>
            </div>
          </div>
          {(protein || cookingMethod || sauce) && (
            <Button variant="outline" size="sm" onClick={reset} className="border-[#2a2a2a] text-gray-400 hover:text-white hover:bg-[#2a2a2a]">
              <RotateCcw className="w-4 h-4 mr-2" /> Reiniciar
            </Button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-6 md:p-8 space-y-10">
          
          {/* 1. PROTEINS SECTION */}
          <section>
            <div className="flex items-center gap-2 mb-4 text-[#d4b37c]">
              <ChefHat className="w-5 h-5" />
              <h3 className="font-bold uppercase tracking-wider text-sm">1. Proteína Principal</h3>
            </div>
            
            <div className="bg-[#0b0b0b] rounded-xl p-2 border border-[#2a2a2a]">
              {/* Category Tabs */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
                {Object.entries(proteins).map(([key, data]) => {
                  const isActive = protein?.category === key;
                  return (
                    <DropdownMenu key={key}>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className={`flex flex-col h-auto py-3 gap-1 rounded-lg transition-all ${
                            isActive 
                              ? 'bg-[#2a2a2a] text-[#d4b37c] ring-1 ring-[#d4b37c]/50' 
                              : 'text-gray-400 hover:bg-[#1a1a1a] hover:text-gray-200'
                          }`}
                        >
                          <span className="text-2xl">{data.icon}</span>
                          <span className="font-bold text-sm">{data.label}</span>
                          {isActive && <span className="text-xs text-[#d4b37c] truncate w-full px-2">{protein.cut}</span>}
                          {!isActive && <ChevronDown className="w-3 h-3 opacity-50 mt-1" />}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-[#1a1a1a] border-[#2a2a2a] text-gray-200 min-w-[200px]">
                        {data.cuts.map(cutObj => (
                          <DropdownMenuItem 
                            key={cutObj.name} 
                            onClick={() => handleProteinSelect(key, cutObj.name)}
                            className="focus:bg-[#2a2a2a] focus:text-[#d4b37c] cursor-pointer justify-between"
                          >
                            {cutObj.name}
                            {protein?.cut === cutObj.name && protein?.category === key && <Check className="w-4 h-4 text-[#d4b37c]" />}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 2. COOKING METHOD SECTION */}
          <section>
            <div className="flex items-center gap-2 mb-4 text-[#d4b37c]">
              <Flame className="w-5 h-5" />
              <h3 className="font-bold uppercase tracking-wider text-sm">2. Método de Cocción</h3>
            </div>
            
            <ScrollArea className="w-full whitespace-nowrap bg-[#0b0b0b] border border-[#2a2a2a] rounded-xl p-4">
              <div className="flex gap-3">
                {cookingMethods.map((method) => {
                  const isActive = cookingMethod === method.id;
                  return (
                    <button
                      key={method.id}
                      onClick={() => { setCookingMethod(method.id); setRecommendation(null); }}
                      className={`flex items-center gap-2 px-4 py-3 rounded-full border transition-all duration-300 ${
                        isActive
                          ? 'bg-[#d4b37c] text-black border-[#d4b37c] font-bold shadow-[0_0_15px_rgba(212,179,124,0.3)]'
                          : 'bg-[#1a1a1a] text-gray-400 border-[#2a2a2a] hover:border-gray-500 hover:text-gray-200'
                      }`}
                    >
                      <span>{method.icon}</span>
                      <span>{method.id}</span>
                    </button>
                  );
                })}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </section>

          {/* 3. SAUCES SECTION */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-[#d4b37c]">
                <Utensils className="w-5 h-5" />
                <h3 className="font-bold uppercase tracking-wider text-sm">3. Salsa o Acompañamiento</h3>
              </div>
              
              {!isCustomSauce ? (
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={enableCustomSauce}
                  className="text-xs border-dashed border-[#d4b37c]/50 text-[#d4b37c] hover:bg-[#d4b37c]/10"
                >
                  <Plus className="w-3 h-3 mr-1" /> Crear personalizada
                </Button>
              ) : (
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => setIsCustomSauce(false)}
                  className="text-xs text-gray-400 hover:text-white"
                >
                  Volver a lista
                </Button>
              )}
            </div>

            <div className="bg-[#0b0b0b] rounded-xl border border-[#2a2a2a] p-4 min-h-[300px]">
              {isCustomSauce ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p className="text-gray-400 text-sm mb-4">Selecciona los ingredientes dominantes en tu salsa:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(customIngredientCategories).map(([cat, ingredients]) => (
                      <div key={cat}>
                        <h4 className="text-[#d4b37c] text-xs font-bold uppercase mb-2 border-b border-[#2a2a2a] pb-1">{cat}</h4>
                        <div className="flex flex-wrap gap-2">
                          {ingredients.map(ing => (
                            <Badge
                              key={ing}
                              variant={customIngredients.includes(ing) ? 'default' : 'outline'}
                              className={`cursor-pointer transition-all ${
                                customIngredients.includes(ing)
                                  ? 'bg-[#d4b37c] text-black hover:bg-[#c2a370] border-transparent'
                                  : 'text-gray-400 border-[#2a2a2a] hover:border-gray-500'
                              }`}
                              onClick={() => toggleCustomIngredient(ing)}
                            >
                              {ing}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <Tabs defaultValue="Mexicana" className="w-full">
                  <ScrollArea className="w-full whitespace-nowrap mb-4 border-b border-[#2a2a2a]">
                    <TabsList className="bg-transparent h-auto p-0 justify-start w-full">
                      {Object.keys(sauceStyles).map((style) => (
                        <TabsTrigger
                          key={style}
                          value={style}
                          className="data-[state=active]:bg-transparent data-[state=active]:text-[#d4b37c] data-[state=active]:border-b-2 data-[state=active]:border-[#d4b37c] rounded-none px-4 py-2 text-gray-400 font-medium transition-colors"
                        >
                          {style}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                  
                  {Object.entries(sauceStyles).map(([style, sauces]) => (
                    <TabsContent key={style} value={style} className="mt-0">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {sauces.map(s => (
                          <button
                            key={s}
                            onClick={() => selectPredefinedSauce(style, s)}
                            className={`p-3 rounded-lg text-sm text-left transition-all border ${
                              sauce?.name === s
                                ? 'bg-[#2a2a2a] text-[#d4b37c] border-[#d4b37c]'
                                : 'bg-[#151515] text-gray-400 border-[#2a2a2a] hover:border-gray-500'
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              )}
            </div>
          </section>

          {/* ACTION AREA */}
          <div className="flex justify-center pt-4">
             <Button 
               onClick={calculateRecommendation}
               disabled={!protein && !cookingMethod && !sauce}
               className="bg-[#d4b37c] hover:bg-[#bfa77a] text-[#0b0b0b] font-bold px-12 py-6 text-lg rounded-xl shadow-[0_0_20px_rgba(212,179,124,0.2)] hover:shadow-[0_0_30px_rgba(212,179,124,0.4)] transition-all transform hover:-translate-y-1"
             >
               Descubrir Vino Perfecto <Wine className="ml-3 w-6 h-6" />
             </Button>
          </div>
        </div>
      </div>

      {/* RESULT MODAL OVERLAY */}
      <AnimatePresence>
        {recommendation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end md:items-center justify-center p-4"
            onClick={() => setRecommendation(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1a1a1a] border border-[#d4b37c] rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative"
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
                onClick={() => setRecommendation(null)}
              >
                <Plus className="w-6 h-6 rotate-45" />
              </Button>

              <div className="grid md:grid-cols-2">
                {/* Left: Wine Info */}
                <div className="p-8 flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#2a2a2a] to-[#151515]">
                  <Badge variant="outline" className="mb-6 border-[#d4b37c] text-[#d4b37c] tracking-widest uppercase px-3 py-1">
                    Coincidencia: {Math.round(recommendation.matchScore)}%
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 tracking-tight">
                    {recommendation.wine.etiqueta}
                  </h2>
                  <p className="text-lg text-[#bfa77a] font-medium mb-6">{recommendation.wine.type}</p>
                  
                  <div className="space-y-1 w-full max-w-xs">
                    <div className="flex justify-between text-xs uppercase tracking-wider text-gray-500">
                      <span>Intensidad</span>
                      <span>{recommendation.wine.intensity}/5</span>
                    </div>
                    <div className="h-1.5 bg-[#0b0b0b] rounded-full overflow-hidden">
                      <div className="h-full bg-[#d4b37c]" style={{ width: `${(recommendation.wine.intensity / 5) * 100}%` }} />
                    </div>
                  </div>
                </div>

                {/* Right: Reasoning */}
                <div className="p-8 bg-[#111]">
                  <h3 className="text-[#d4b37c] font-bold uppercase tracking-wider text-sm mb-4 flex items-center gap-2">
                    <Info className="w-4 h-4" /> Por qué funciona
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333]">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {recommendation.reason}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-500 text-xs font-bold uppercase mb-2">Notas de Cata</h4>
                      <p className="text-gray-400 text-sm italic">
                        "{recommendation.wine.notaCata}"
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#333]">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Colección</span>
                        <span className="text-white font-medium">{recommendation.wine.collection}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default SommelierDinamico;
