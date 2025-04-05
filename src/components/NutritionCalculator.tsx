import React, { useState, useEffect } from 'react';
import { MenuItem, NutritionInfo } from '../types/menu';
import { menuItems } from '../data/menuItems';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  DownloadIcon, 
  Coffee, 
  UtensilsCrossed, 
  Milk, 
  Info, 
  Flame, 
  HeartPulse, 
  Droplets, 
  Candy,
  WheatOff,
  Cherry,
  LucideProps
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface NutritionCalculatorProps {
  initialItemId?: string;
}

interface NutritionIconProps extends LucideProps {
  label: string;
  value: string | number;
  tooltip: string;
}

const NutritionIcon: React.FC<NutritionIconProps> = ({ 
  label, 
  value, 
  tooltip, 
  icon: Icon, 
  ...props 
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="bg-gray-50 p-4 rounded-lg text-center flex flex-col items-center justify-center hover:bg-gray-100 transition-colors cursor-help">
            <Icon className="text-starbucks-green mb-2" size={24} {...props} />
            <div className="text-2xl font-bold text-starbucks-green">
              {value}
            </div>
            <div className="text-xs uppercase text-gray-500 font-medium mt-1">{label}</div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs">{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const NutritionCalculator: React.FC<NutritionCalculatorProps> = ({ initialItemId }) => {
  const [selectedItemId, setSelectedItemId] = useState<string>(initialItemId || '');
  const [selectedSize, setSelectedSize] = useState<string>('grande');
  const [customizations, setCustomizations] = useState<Record<string, string>>({});
  const [calculatedNutrition, setCalculatedNutrition] = useState<NutritionInfo | null>(null);
  
  const selectedItem = menuItems.find(item => item.id === selectedItemId);

  // Daily recommended values (simplified)
  const dailyValues = {
    calories: 2000,
    totalFat: 65,
    saturatedFat: 20,
    cholesterol: 300,
    sodium: 2300,
    totalCarbs: 300,
    dietaryFiber: 25,
    sugars: 50,
    protein: 50,
    caffeine: 400
  };
  
  // Reset customizations when item changes
  useEffect(() => {
    if (selectedItem) {
      const initialCustomizations: Record<string, string> = {};
      
      if (selectedItem.customizations) {
        Object.keys(selectedItem.customizations).forEach(key => {
          const options = selectedItem.customizations?.[key].options;
          if (options && options.length > 0) {
            initialCustomizations[key] = options[0].name;
          }
        });
      }
      
      setCustomizations(initialCustomizations);
      
      // Set default size
      if (selectedItem.sizes) {
        setSelectedSize('grande');
      }
      
      calculateNutrition();
    } else {
      setCalculatedNutrition(null);
    }
  }, [selectedItemId]);
  
  // Recalculate nutrition when customizations or size changes
  useEffect(() => {
    if (selectedItem) {
      calculateNutrition();
    }
  }, [selectedSize, customizations]);

  const calculateNutrition = () => {
    if (!selectedItem) return;
    
    let baseNutrition = { ...selectedItem.nutrition };
    
    // Apply size multiplier
    if (selectedItem.sizes && selectedItem.sizes[selectedSize]) {
      const multiplier = selectedItem.sizes[selectedSize].multiplier;
      
      Object.keys(baseNutrition).forEach(key => {
        const nutritionKey = key as keyof NutritionInfo;
        if (typeof baseNutrition[nutritionKey] === 'number') {
          baseNutrition[nutritionKey] = Math.round(
            (baseNutrition[nutritionKey] as number) * multiplier
          );
        }
      });
    }
    
    // Apply customization modifiers
    if (selectedItem.customizations) {
      Object.keys(customizations).forEach(custKey => {
        const selectedOption = selectedItem.customizations?.[custKey].options.find(
          opt => opt.name === customizations[custKey]
        );
        
        if (selectedOption && selectedOption.nutritionModifier) {
          Object.keys(selectedOption.nutritionModifier).forEach(key => {
            const nutritionKey = key as keyof NutritionInfo;
            const modValue = selectedOption.nutritionModifier[nutritionKey] as number;
            
            if (typeof modValue === 'number' && typeof baseNutrition[nutritionKey] === 'number') {
              baseNutrition[nutritionKey] = (baseNutrition[nutritionKey] as number) + modValue;
            }
          });
        }
      });
    }
    
    setCalculatedNutrition(baseNutrition);
  };

  const handleExportData = () => {
    if (!selectedItem || !calculatedNutrition) return;
    
    let exportText = `Starbucks Nutrition Information\n`;
    exportText += `----------------------------\n\n`;
    exportText += `Item: ${selectedItem.name}\n`;
    
    if (selectedItem.sizes) {
      exportText += `Size: ${selectedSize}\n`;
    }
    
    // Add customizations
    if (Object.keys(customizations).length > 0) {
      exportText += `\nCustomizations:\n`;
      Object.entries(customizations).forEach(([key, value]) => {
        exportText += `- ${key}: ${value}\n`;
      });
    }
    
    // Add nutrition info
    exportText += `\nNutrition Facts:\n`;
    exportText += `- Calories: ${calculatedNutrition.calories}\n`;
    exportText += `- Total Fat: ${calculatedNutrition.totalFat}g\n`;
    exportText += `- Saturated Fat: ${calculatedNutrition.saturatedFat}g\n`;
    exportText += `- Trans Fat: ${calculatedNutrition.transFat}g\n`;
    exportText += `- Cholesterol: ${calculatedNutrition.cholesterol}mg\n`;
    exportText += `- Sodium: ${calculatedNutrition.sodium}mg\n`;
    exportText += `- Total Carbohydrates: ${calculatedNutrition.totalCarbs}g\n`;
    exportText += `- Dietary Fiber: ${calculatedNutrition.dietaryFiber}g\n`;
    exportText += `- Sugars: ${calculatedNutrition.sugars}g\n`;
    exportText += `- Protein: ${calculatedNutrition.protein}g\n`;
    exportText += `- Caffeine: ${calculatedNutrition.caffeine}mg\n`;
    
    // Create a downloadable file
    const blob = new Blob([exportText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedItem.name.replace(/\s+/g, '-').toLowerCase()}-nutrition.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Function to get category icon
  const getCategoryIcon = () => {
    if (!selectedItem) return <Coffee />;
    
    const category = selectedItem.category.toLowerCase();
    if (category.includes('coffee') || category.includes('espresso')) {
      return <Coffee className="mr-2" />;
    } else if (category.includes('food') || category.includes('bakery')) {
      return <UtensilsCrossed className="mr-2" />;
    } else if (category.includes('tea')) {
      return <Droplets className="mr-2" />;
    } else {
      return <Cherry className="mr-2" />;
    }
  };

  // Calculate percentage of daily value
  const getPercentageOfDaily = (value: number, nutrient: keyof typeof dailyValues) => {
    return Math.round((value / dailyValues[nutrient]) * 100);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <Coffee size={18} className="mr-2 text-starbucks-green" />
                Select Item
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                    <Cherry size={16} className="mr-1 text-starbucks-green opacity-80" />
                    Menu Item
                  </label>
                  <Select
                    value={selectedItemId}
                    onValueChange={value => setSelectedItemId(value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select an item" />
                    </SelectTrigger>
                    <SelectContent>
                      {menuItems.map(item => (
                        <SelectItem key={item.id} value={item.id}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {selectedItem && selectedItem.sizes && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <Droplets size={16} className="mr-1 text-starbucks-green opacity-80" />
                      Size
                    </label>
                    <Select
                      value={selectedSize}
                      onValueChange={value => setSelectedSize(value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a size" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(selectedItem.sizes).map(size => (
                          <SelectItem key={size} value={size}>
                            {size.charAt(0).toUpperCase() + size.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
                
                {selectedItem && selectedItem.customizations && (
                  <>
                    <div className="pt-2">
                      <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                        <Milk size={16} className="mr-1 text-starbucks-green opacity-80" />
                        Customizations
                      </h4>
                      
                      {Object.entries(selectedItem.customizations).map(([key, customization]) => (
                        <div key={key} className="mb-3">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </label>
                          <Select
                            value={customizations[key] || ''}
                            onValueChange={value => {
                              setCustomizations(prev => ({
                                ...prev,
                                [key]: value
                              }));
                            }}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder={`Select ${key}`} />
                            </SelectTrigger>
                            <SelectContent>
                              {customization.options.map(option => (
                                <SelectItem key={option.name} value={option.name}>
                                  {option.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
          
          {selectedItem && calculatedNutrition && (
            <div className="mt-4">
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-300 bg-gray-50">
                <CardContent className="p-4">
                  <h4 className="text-sm font-medium flex items-center mb-2">
                    <Info size={16} className="mr-1 text-starbucks-green" />
                    Nutritional Highlights
                  </h4>
                  
                  <div className="space-y-3 mt-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium">Calories</span>
                        <span>{calculatedNutrition.calories} / {dailyValues.calories}</span>
                      </div>
                      <Progress value={getPercentageOfDaily(calculatedNutrition.calories, 'calories')} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium">Sugars</span>
                        <span>{calculatedNutrition.sugars}g / {dailyValues.sugars}g</span>
                      </div>
                      <Progress value={getPercentageOfDaily(calculatedNutrition.sugars, 'sugars')} 
                                className={`h-2 ${getPercentageOfDaily(calculatedNutrition.sugars, 'sugars') > 50 ? 'bg-orange-500' : ''}`} />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium">Caffeine</span>
                        <span>{calculatedNutrition.caffeine}mg / {dailyValues.caffeine}mg</span>
                      </div>
                      <Progress value={getPercentageOfDaily(calculatedNutrition.caffeine, 'caffeine')} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
        
        <div className="md:col-span-2">
          {selectedItem && calculatedNutrition ? (
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    {getCategoryIcon()}
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">{selectedItem.name}</h2>
                      {selectedItem.sizes && (
                        <p className="text-gray-600">
                          Size: {selectedSize.charAt(0).toUpperCase() + selectedSize.slice(1)}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {calculatedNutrition.caffeine > 0 && (
                      <Badge variant="outline" className="gap-1 flex items-center">
                        <Coffee size={12} />
                        Caffeine: {calculatedNutrition.caffeine}mg
                      </Badge>
                    )}
                    <button
                      onClick={handleExportData}
                      className="flex items-center gap-1 text-starbucks-green hover:text-starbucks-light-green bg-gray-50 px-2 py-1 rounded-md"
                      title="Export nutrition data"
                    >
                      <DownloadIcon size={18} />
                      <span className="text-sm">Export</span>
                    </button>
                  </div>
                </div>
                
                <Tabs defaultValue="summary" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="summary">Summary</TabsTrigger>
                    <TabsTrigger value="detailed">Detailed</TabsTrigger>
                    <TabsTrigger value="visual">Visual</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="summary">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <NutritionIcon 
                        icon={Flame} 
                        label="Calories" 
                        value={calculatedNutrition.calories}
                        tooltip={`${getPercentageOfDaily(calculatedNutrition.calories, 'calories')}% of daily recommended intake (2000 calories)`}
                      />
                      
                      <NutritionIcon 
                        icon={HeartPulse} 
                        label="Total Fat" 
                        value={`${calculatedNutrition.totalFat}g`}
                        tooltip={`${getPercentageOfDaily(calculatedNutrition.totalFat, 'totalFat')}% of daily recommended intake (65g)`}
                      />
                      
                      <NutritionIcon 
                        icon={WheatOff} 
                        label="Total Carbs" 
                        value={`${calculatedNutrition.totalCarbs}g`}
                        tooltip={`${getPercentageOfDaily(calculatedNutrition.totalCarbs, 'totalCarbs')}% of daily recommended intake (300g)`}
                      />
                      
                      <NutritionIcon 
                        icon={Candy} 
                        label="Sugars" 
                        value={`${calculatedNutrition.sugars}g`}
                        tooltip={`${getPercentageOfDaily(calculatedNutrition.sugars, 'sugars')}% of daily recommended intake (50g)`}
                      />
                      
                      <NutritionIcon 
                        icon={Droplets} 
                        label="Protein" 
                        value={`${calculatedNutrition.protein}g`}
                        tooltip={`${getPercentageOfDaily(calculatedNutrition.protein, 'protein')}% of daily recommended intake (50g)`}
                      />
                      
                      <NutritionIcon 
                        icon={Coffee} 
                        label="Caffeine" 
                        value={`${calculatedNutrition.caffeine}mg`}
                        tooltip={`${getPercentageOfDaily(calculatedNutrition.caffeine, 'caffeine')}% of daily recommended intake (400mg)`}
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="detailed">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="font-medium text-gray-900 mb-3 flex items-center">
                            <HeartPulse size={16} className="mr-1 text-starbucks-green" />
                            Main Nutrients
                          </h3>
                          <table className="w-full text-sm">
                            <tbody>
                              <tr className="border-b">
                                <td className="py-2 text-gray-600">Calories</td>
                                <td className="py-2 text-right font-medium">{calculatedNutrition.calories}</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 text-gray-600">Total Fat</td>
                                <td className="py-2 text-right font-medium">{calculatedNutrition.totalFat}g</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 pl-4 text-gray-600">- Saturated Fat</td>
                                <td className="py-2 text-right font-medium">{calculatedNutrition.saturatedFat}g</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 pl-4 text-gray-600">- Trans Fat</td>
                                <td className="py-2 text-right font-medium">{calculatedNutrition.transFat}g</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 text-gray-600">Cholesterol</td>
                                <td className="py-2 text-right font-medium">{calculatedNutrition.cholesterol}mg</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 text-gray-600">Sodium</td>
                                <td className="py-2 text-right font-medium">{calculatedNutrition.sodium}mg</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        
                        <div>
                          <h3 className="font-medium text-gray-900 mb-3 flex items-center">
                            <WheatOff size={16} className="mr-1 text-starbucks-green" />
                            Carbohydrates & Protein
                          </h3>
                          <table className="w-full text-sm">
                            <tbody>
                              <tr className="border-b">
                                <td className="py-2 text-gray-600">Total Carbohydrates</td>
                                <td className="py-2 text-right font-medium">{calculatedNutrition.totalCarbs}g</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 pl-4 text-gray-600">- Dietary Fiber</td>
                                <td className="py-2 text-right font-medium">{calculatedNutrition.dietaryFiber}g</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 pl-4 text-gray-600">- Sugars</td>
                                <td className="py-2 text-right font-medium">{calculatedNutrition.sugars}g</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 text-gray-600">Protein</td>
                                <td className="py-2 text-right font-medium">{calculatedNutrition.protein}g</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 text-gray-600">Caffeine</td>
                                <td className="py-2 text-right font-medium">{calculatedNutrition.caffeine}mg</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Note:</span> The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes 
                          to a daily diet. 2,000 calories a day is used for general nutrition advice.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="visual" className="animate-fade-in">
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium text-gray-900 mb-3 flex items-center">
                          <Info size={16} className="mr-1 text-starbucks-green" />
                          Daily Value Percentages
                        </h3>
                        
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium flex items-center">
                                <Flame size={14} className="mr-1" /> 
                                Calories
                              </span>
                              <span>{getPercentageOfDaily(calculatedNutrition.calories, 'calories')}%</span>
                            </div>
                            <Progress value={getPercentageOfDaily(calculatedNutrition.calories, 'calories')} className="h-3" />
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium flex items-center">
                                <HeartPulse size={14} className="mr-1" /> 
                                Total Fat
                              </span>
                              <span>{getPercentageOfDaily(calculatedNutrition.totalFat, 'totalFat')}%</span>
                            </div>
                            <Progress value={getPercentageOfDaily(calculatedNutrition.totalFat, 'totalFat')} className="h-3" />
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium flex items-center">
                                <Droplets size={14} className="mr-1" /> 
                                Sodium
                              </span>
                              <span>{getPercentageOfDaily(calculatedNutrition.sodium, 'sodium')}%</span>
                            </div>
                            <Progress value={getPercentageOfDaily(calculatedNutrition.sodium, 'sodium')} className="h-3" />
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium flex items-center">
                                <WheatOff size={14} className="mr-1" /> 
                                Total Carbs
                              </span>
                              <span>{getPercentageOfDaily(calculatedNutrition.totalCarbs, 'totalCarbs')}%</span>
                            </div>
                            <Progress value={getPercentageOfDaily(calculatedNutrition.totalCarbs, 'totalCarbs')} className="h-3" />
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium flex items-center">
                                <Candy size={14} className="mr-1" /> 
                                Sugars
                              </span>
                              <span>{getPercentageOfDaily(calculatedNutrition.sugars, 'sugars')}%</span>
                            </div>
                            <Progress 
                              value={getPercentageOfDaily(calculatedNutrition.sugars, 'sugars')} 
                              className={`h-3 ${getPercentageOfDaily(calculatedNutrition.sugars, 'sugars') > 50 ? 'bg-orange-500' : ''}`} 
                            />
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium flex items-center">
                                <Droplets size={14} className="mr-1" /> 
                                Protein
                              </span>
                              <span>{getPercentageOfDaily(calculatedNutrition.protein, 'protein')}%</span>
                            </div>
                            <Progress value={getPercentageOfDaily(calculatedNutrition.protein, 'protein')} className="h-3" />
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium flex items-center">
                                <Coffee size={14} className="mr-1" /> 
                                Caffeine
                              </span>
                              <span>{getPercentageOfDaily(calculatedNutrition.caffeine, 'caffeine')}%</span>
                            </div>
                            <Progress 
                              value={getPercentageOfDaily(calculatedNutrition.caffeine, 'caffeine')} 
                              className={`h-3 ${getPercentageOfDaily(calculatedNutrition.caffeine, 'caffeine') > 75 ? 'bg-orange-500' : ''}`} 
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                          <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                            <Flame size={14} className="mr-1 text-starbucks-green" />
                            Calorie Breakdown
                          </h4>
                          <div className="flex items-center justify-between text-xs">
                            <span>Fat: {Math.round((calculatedNutrition.totalFat * 9 / calculatedNutrition.calories) * 100)}%</span>
                            <span>Carbs: {Math.round((calculatedNutrition.totalCarbs * 4 / calculatedNutrition.calories) * 100)}%</span>
                            <span>Protein: {Math.round((calculatedNutrition.protein * 4 / calculatedNutrition.calories) * 100)}%</span>
                          </div>
                          <div className="flex h-3 mt-1 rounded-full overflow-hidden">
                            <div 
                              className="bg-yellow-400" 
                              style={{ width: `${Math.round((calculatedNutrition.totalFat * 9 / calculatedNutrition.calories) * 100)}%` }} 
                            />
                            <div 
                              className="bg-blue-400" 
                              style={{ width: `${Math.round((calculatedNutrition.totalCarbs * 4 / calculatedNutrition.calories) * 100)}%` }} 
                            />
                            <div 
                              className="bg-red-400" 
                              style={{ width: `${Math.round((calculatedNutrition.protein * 4 / calculatedNutrition.calories) * 100)}%` }} 
                            />
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                          <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                            <HeartPulse size={14} className="mr-1 text-starbucks-green" />
                            Fat Composition
                          </h4>
                          <div className="text-xs space-y-1">
                            <div className="flex justify-between">
                              <span>Saturated</span>
                              <span>{Math.round((calculatedNutrition.saturatedFat / calculatedNutrition.totalFat) * 100)}%</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Trans</span>
                              <span>{Math.round((calculatedNutrition.transFat / calculatedNutrition.totalFat) * 100)}%</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Other</span>
                              <span>
                                {Math.round(((calculatedNutrition.totalFat - calculatedNutrition.saturatedFat - calculatedNutrition.transFat) / calculatedNutrition.totalFat) * 100)}%
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                          <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                            <WheatOff size={14} className="mr-1 text-starbucks-green" />
                            Carbs Composition
                          </h4>
                          <div className="text-xs space-y-1">
                            <div className="flex justify-between">
                              <span>Sugars</span>
                              <span>{Math.round((calculatedNutrition.sugars / calculatedNutrition.totalCarbs) * 100)}%</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Fiber</span>
                              <span>{Math.round((calculatedNutrition.dietaryFiber / calculatedNutrition.totalCarbs) * 100)}%</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Other</span>
                              <span>
                                {Math.round(((calculatedNutrition.totalCarbs - calculatedNutrition.sugars - calculatedNutrition.dietaryFiber) / calculatedNutrition.totalCarbs) * 100)}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center h-full flex items-center justify-center shadow-sm border border-gray-100">
              <div>
                <Coffee size={48} className="mx-auto text-starbucks-green opacity-40 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select an item to get started</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Choose a Starbucks menu item to view and calculate its nutritional information.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NutritionCalculator;
