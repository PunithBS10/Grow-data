export interface CropData {
  id: string;
  name: string;
  category: string;
  country: string;
  state?: string;
  year: number;
  production: number;
  growthRate: number;
  unit: string;
}

export interface KeyFigures {
  totalCropsGrown: number;
  globalGrowthRate: number;
  mostGrownCrop: string;
  topProducingRegion: string;
}

export interface FilterOptions {
  year: number | null;
  cropCategory: string | null;
  region: string | null;
  crop: string | null;
}

export interface PopularCrop {
  name: string;
  topProducers: string[];
}

export type ViewType = 'global' | 'india';

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface DataContextType {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  filters: FilterOptions;
  setFilters: (filters: FilterOptions) => void;
  keyFigures: KeyFigures;
  popularCrops: PopularCrop[];
  loading: boolean;
}