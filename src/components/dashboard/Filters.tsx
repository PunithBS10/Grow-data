import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useData } from '@/contexts/DataContext';
import { filterOptions } from '@/lib/mockData';

const Filters: React.FC = () => {
  const { currentView, filters, setFilters } = useData();

  const handleFilterChange = (key: keyof typeof filters, value: string | null) => {
    setFilters({
      ...filters,
      [key]: value === 'all' ? null : value,
    });
  };

  const handleReset = () => {
    setFilters({
      year: null,
      cropCategory: null,
      region: null,
      crop: null,
    });
  };

  const handleApply = () => {
    // In a real app, this would trigger data refetch
    console.log('Applying filters:', filters);
  };

  const regions = currentView === 'global' ? filterOptions.globalRegions : filterOptions.indiaStates;
  const regionLabel = currentView === 'global' ? 'Country' : 'State';

  return (
    <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
      <h2 className="text-lg font-semibold mb-4 text-foreground">Filters</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-6">
        <Select
          value={filters.year?.toString() || 'all'}
          onValueChange={(value) => handleFilterChange('year', value === 'all' ? null : parseInt(value))}
        >
          <SelectTrigger className="bg-white dark:bg-gray-800">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            {filterOptions.years.map((year) => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.cropCategory || 'all'}
          onValueChange={(value) => handleFilterChange('cropCategory', value)}
        >
          <SelectTrigger className="bg-white dark:bg-gray-800">
            <SelectValue placeholder="Crop category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {filterOptions.cropCategories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.region || 'all'}
          onValueChange={(value) => handleFilterChange('region', value)}
        >
          <SelectTrigger className="bg-white dark:bg-gray-800">
            <SelectValue placeholder={regionLabel} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All {regionLabel}s</SelectItem>
            {regions.map((region) => (
              <SelectItem key={region} value={region}>
                {region}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.crop || 'all'}
          onValueChange={(value) => handleFilterChange('crop', value)}
        >
          <SelectTrigger className="bg-white dark:bg-gray-800">
            <SelectValue placeholder="Crop" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Crops</SelectItem>
            {filterOptions.crops.map((crop) => (
              <SelectItem key={crop} value={crop}>
                {crop}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          onClick={handleApply}
          className="bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          Apply
        </Button>

        <Button
          variant="outline"
          onClick={handleReset}
          className="border-gray-300 dark:border-gray-600"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Filters;