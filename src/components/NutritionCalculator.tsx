
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
import { DownloadIcon } from 'lucide-react';

interface NutritionCalculatorProps {
  initialItemId?: string;
}

const NutritionCalculator: React.FC<NutritionCalculatorProps> = ({ initialItemId }) => {
  const [selectedItemId, setSelectedItemId] = useState<string>(initialItemId || '');
  const [selectedSize, setSelectedSize] = useState<string>('grande');
  const [customizations, setCustomizations] = useState<Record<string, string>>({});
  const [calculatedNutrition, setCalculatedNutrition] = useState<NutritionInfo | null>(null);
  
  const selectedItem = menuItems.find(item => item.id === selectedItemId);
  
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

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Select Item</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
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
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Customizations</h4>
                      
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
        </div>
        
        <div className="md:col-span-2">
          {selectedItem && calculatedNutrition ? (
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{selectedItem.name}</h2>
                    {selectedItem.sizes && (
                      <p className="text-gray-600">
                        Size: {selectedSize.charAt(0).toUpperCase() + selectedSize.slice(1)}
                      </p>
                    )}
                  </div>
                  
                  <button
                    onClick={handleExportData}
                    className="flex items-center gap-1 text-starbucks-green hover:text-starbucks-light-green"
                    title="Export nutrition data"
                  >
                    <DownloadIcon size={18} />
                    <span className="text-sm">Export</span>
                  </button>
                </div>
                
                <Tabs defaultValue="summary" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="summary">Summary</TabsTrigger>
                    <TabsTrigger value="detailed">Detailed</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="summary">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-starbucks-green">
                          {calculatedNutrition.calories}
                        </div>
                        <div className="text-xs uppercase text-gray-500 font-medium mt-1">Calories</div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-starbucks-light-green">
                          {calculatedNutrition.totalFat}g
                        </div>
                        <div className="text-xs uppercase text-gray-500 font-medium mt-1">Total Fat</div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-starbucks-light-green">
                          {calculatedNutrition.totalCarbs}g
                        </div>
                        <div className="text-xs uppercase text-gray-500 font-medium mt-1">Total Carbs</div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-starbucks-light-green">
                          {calculatedNutrition.sugars}g
                        </div>
                        <div className="text-xs uppercase text-gray-500 font-medium mt-1">Sugars</div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-starbucks-light-green">
                          {calculatedNutrition.protein}g
                        </div>
                        <div className="text-xs uppercase text-gray-500 font-medium mt-1">Protein</div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-starbucks-light-green">
                          {calculatedNutrition.caffeine}mg
                        </div>
                        <div className="text-xs uppercase text-gray-500 font-medium mt-1">Caffeine</div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="detailed">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="font-medium text-gray-900 mb-3">Main Nutrients</h3>
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
                          <h3 className="font-medium text-gray-900 mb-3">Carbohydrates & Protein</h3>
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
                      
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">
                          The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes 
                          to a daily diet. 2,000 calories a day is used for general nutrition advice.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center h-full flex items-center justify-center">
              <div>
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
