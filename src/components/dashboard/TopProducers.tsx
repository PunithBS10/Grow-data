import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useData } from '@/contexts/DataContext';

interface TopProducersProps {
  title: string;
}

interface Producer {
  name: string;
  crops: string[];
}

const TopProducers: React.FC<TopProducersProps> = ({ title }) => {
  const { loading, currentView } = useData();

  const producers: Producer[] = currentView === 'global' 
    ? [
        { name: 'China', crops: ['wheat', 'sugarcane', 'rice'] },
        { name: 'USA', crops: ['wheat', 'rice', 'xxx'] },
        { name: 'India', crops: ['xxx', 'xxx', 'xxx'] },
        { name: 'Brazil', crops: ['xxx', 'xxx', 'xxx'] },
        { name: 'Russia', crops: ['xxx', 'xxx', 'xxx'] },
      ]
    : [
        { name: 'Uttar Pradesh', crops: ['wheat', 'sugarcane', 'rice'] },
        { name: 'Punjab', crops: ['wheat', 'rice', 'xxx'] },
        { name: 'Madhya Pradesh', crops: ['xxx', 'xxx', 'xxx'] },
        { name: 'West Bengal', crops: ['xxx', 'xxx', 'xxx'] },
        { name: 'Andhra Pradesh', crops: ['xxx', 'xxx', 'xxx'] },
      ];

  if (loading) {
    return (
      <Card className="min-w-80">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg">
              <Skeleton className="h-4 w-24" />
              <div className="flex flex-col gap-1">
                <Skeleton className="h-3 w-12" />
                <Skeleton className="h-3 w-12" />
                <Skeleton className="h-3 w-8" />
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
      <CardContent className="space-y-4">
        {producers.map((producer, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
            <span className="font-medium text-foreground">{producer.name}</span>
            <div className="flex flex-col text-right gap-0.5">
              {producer.crops.map((crop, idx) => (
                <span 
                  key={idx} 
                  className="text-xs text-muted-foreground"
                >
                  {crop}
                </span>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TopProducers;