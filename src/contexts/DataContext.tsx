import React, { createContext, useContext, useState, useEffect } from 'react';
import { DataContextType, ViewType, FilterOptions, KeyFigures, PopularCrop } from '@/types';
import { getMockData } from '@/lib/mockData';

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<ViewType>('global');
  const [filters, setFilters] = useState<FilterOptions>({
    year: null,
    cropCategory: null,
    region: null,
    crop: null,
  });
  const [loading, setLoading] = useState(false);

  const mockData = getMockData(currentView);

  const keyFigures: KeyFigures = mockData.keyFigures;
  const popularCrops: PopularCrop[] = mockData.popularCrops;

  // Simulate data loading when filters or view changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [currentView, filters]);

  return (
    <DataContext.Provider value={{
      currentView,
      setCurrentView,
      filters,
      setFilters,
      keyFigures,
      popularCrops,
      loading,
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};