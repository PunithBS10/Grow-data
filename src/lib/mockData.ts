import { KeyFigures, PopularCrop, ViewType } from '@/types';

export const getMockData = (view: ViewType) => {
  if (view === 'global') {
    return {
      keyFigures: {
        totalCropsGrown: 847,
        globalGrowthRate: 12.5,
        mostGrownCrop: 'Soybean',
        topProducingRegion: 'China',
      } as KeyFigures,
      popularCrops: [
        {
          name: 'Sugarcane',
          topProducers: ['Brazil', 'India', 'Thailand'],
        },
        {
          name: 'Maize (Corn)',
          topProducers: ['USA', 'China', 'Brazil'],
        },
        {
          name: 'Rice',
          topProducers: ['China', 'India', 'Indonesia'],
        },
        {
          name: 'Wheat',
          topProducers: ['China', 'India', 'Russia'],
        },
        {
          name: 'Potato',
          topProducers: ['China', 'India', 'Russia'],
        },
      ] as PopularCrop[],
    };
  } else {
    return {
      keyFigures: {
        totalCropsGrown: 234,
        globalGrowthRate: 8.7,
        mostGrownCrop: 'Rice',
        topProducingRegion: 'Uttar Pradesh',
      } as KeyFigures,
      popularCrops: [
        {
          name: 'Rice',
          topProducers: ['West Bengal', 'Uttar Pradesh', 'Punjab'],
        },
        {
          name: 'Wheat',
          topProducers: ['Uttar Pradesh', 'Punjab', 'Haryana'],
        },
        {
          name: 'Sugarcane',
          topProducers: ['Uttar Pradesh', 'Maharashtra', 'Karnataka'],
        },
        {
          name: 'Cotton',
          topProducers: ['Gujarat', 'Maharashtra', 'Andhra Pradesh'],
        },
        {
          name: 'Pulses',
          topProducers: ['Madhya Pradesh', 'Maharashtra', 'Rajasthan'],
        },
      ] as PopularCrop[],
    };
  }
};

export const filterOptions = {
  years: [2024, 2023, 2022, 2021, 2020],
  cropCategories: ['Cereals', 'Pulses', 'Oilseeds', 'Cash Crops', 'Spices', 'Fruits', 'Vegetables'],
  globalRegions: ['North America', 'South America', 'Europe', 'Asia', 'Africa', 'Oceania'],
  indiaStates: [
    'Uttar Pradesh', 'Punjab', 'Haryana', 'Madhya Pradesh', 'Maharashtra', 
    'West Bengal', 'Bihar', 'Gujarat', 'Karnataka', 'Andhra Pradesh', 
    'Tamil Nadu', 'Rajasthan', 'Odisha', 'Jharkhand', 'Chhattisgarh'
  ],
  crops: [
    'Rice', 'Wheat', 'Maize', 'Sugarcane', 'Cotton', 'Soybean', 
    'Groundnut', 'Rapeseed & Mustard', 'Pulses', 'Potato', 'Onion', 'Tea', 'Coffee'
  ],
};