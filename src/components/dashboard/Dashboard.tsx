import React from 'react';
import Filters from './Filters';
import KeyFigures from './KeyFigures';
import WorldMap from './WorldMap';
import PopularCrops from './PopularCrops';
import TopProducers from './TopProducers';
import { useData } from '@/contexts/DataContext';

const Dashboard: React.FC = () => {
  const { currentView } = useData();
  const isIndiaView = currentView === 'india';

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20 min-h-screen">
      <Filters />
      
      <KeyFigures />
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          {isIndiaView ? 'India trends' : 'Global trends'}
        </h2>
        
        <div className="flex flex-col xl:flex-row gap-6">
          <WorldMap 
            title={isIndiaView ? 'India view' : 'World view'} 
            isIndiaView={isIndiaView}
          />
          
          <div className="flex flex-col sm:flex-row xl:flex-col gap-6">
            <PopularCrops title="Popular crops" />
            <TopProducers title={isIndiaView ? 'Top Producers' : 'Top Producers'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;