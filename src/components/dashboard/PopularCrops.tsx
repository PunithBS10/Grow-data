import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useData } from '@/contexts/DataContext';

interface PopularCropsProps {
  title: string;
}

const PopularCrops: React.FC<PopularCropsProps> = ({ title }) => {
  const { popularCrops, loading } = useData();

  if (loading) {
    return (
      <Card className="min-w-80">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="space-y-3">
              <Skeleton className="h-5 w-20" />
              <div className="flex flex-wrap gap-2">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-6 w-28" />
                <Skeleton className="h-6 w-20" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="min-w-80">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {popularCrops.map((crop, index) => (
          <div key={index} className="space-y-3">
            <h3 className="font-semibold text-foreground text-base">
              {crop.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {crop.topProducers.map((producer, idx) => (
                <Badge 
                  key={idx} 
                  variant="secondary" 
                  className="text-sm px-3 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-900/40 transition-colors cursor-default font-medium"
                >
                  {producer}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PopularCrops;