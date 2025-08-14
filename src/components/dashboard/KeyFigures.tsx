import React from 'react';
import { TrendingUp, BarChart3, Sprout, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useData } from '@/contexts/DataContext';

const KeyFigures: React.FC = () => {
  const { keyFigures, loading, currentView } = useData();

  const figures = [
    {
      label: 'Crops grown',
      value: keyFigures.totalCropsGrown,
      description: `Total number of crops grown ${currentView === 'global' ? 'globally' : 'in India'}`,
      icon: Sprout,
      color: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      label: 'Growing Rate',
      value: `${keyFigures.globalGrowthRate}%`,
      description: `% change in ${currentView === 'global' ? 'global' : "India's"} crop production YoY`,
      icon: TrendingUp,
      color: 'text-green-600 dark:text-green-400',
    },
    {
      label: 'Most grown',
      value: keyFigures.mostGrownCrop,
      description: 'Most grown crop (by production volume)',
      icon: BarChart3,
      color: 'text-lime-600 dark:text-lime-400',
    },
    {
      label: currentView === 'global' ? 'Top country' : 'Top State',
      value: keyFigures.topProducingRegion,
      description: `Top producing ${currentView === 'global' ? 'country' : 'state'}`,
      icon: Trophy,
      color: 'text-yellow-600 dark:text-yellow-400',
    },
  ];

  if (loading) {
    return (
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-foreground">Key figures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {figures.map((_, index) => (
            <Card key={index} className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-3">
                  <Skeleton className="w-8 h-8 rounded" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-8 w-16 mb-2" />
                <Skeleton className="h-3 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-foreground">Key figures</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {figures.map((figure, index) => {
          const Icon = figure.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className={`w-8 h-8 ${figure.color}`} />
                  <span className="text-sm font-medium text-muted-foreground">
                    {figure.label}
                  </span>
                </div>
                <div className="text-2xl font-bold text-foreground mb-2">
                  {typeof figure.value === 'number' ? figure.value.toLocaleString() : figure.value}
                </div>
                <p className="text-xs text-muted-foreground">
                  {figure.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default KeyFigures;