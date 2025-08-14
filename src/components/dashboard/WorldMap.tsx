import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface WorldMapProps {
  title: string;
  isIndiaView?: boolean;
}

const WorldMap: React.FC<WorldMapProps> = ({ title, isIndiaView = false }) => {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Color Scale */}
          <div className="absolute left-4 bottom-4 z-10">
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg">
              <div className="text-xs font-medium mb-2 text-foreground">Production Level</div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-3 bg-emerald-700 rounded-sm"></div>
                  <span className="text-xs text-muted-foreground">High</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-3 bg-emerald-500 rounded-sm"></div>
                  <span className="text-xs text-muted-foreground">Medium</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-3 bg-emerald-200 rounded-sm"></div>
                  <span className="text-xs text-muted-foreground">Low</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-80 bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-950/20 dark:to-green-950/20 rounded-lg flex items-center justify-center border border-emerald-200 dark:border-emerald-800">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-200 dark:bg-emerald-800 rounded-full flex items-center justify-center">
                <span className="text-2xl">🗺️</span>
              </div>
              <p className="text-muted-foreground font-medium">
                {isIndiaView ? 'India' : 'World'} Agricultural Production Map
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Interactive map visualization will be displayed here
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorldMap;