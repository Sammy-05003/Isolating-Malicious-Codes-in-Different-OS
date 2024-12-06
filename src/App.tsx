import React from 'react';
import { IsolationTechniqueCard } from './components/IsolationTechniqueCard';
import { SystemMonitor } from './components/SystemMonitor';
import { isolationTechniques } from './utils/isolationTechniques';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Malware Isolation Techniques Simulator
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="mb-8">
          <SystemMonitor />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isolationTechniques.map(technique => (
            <IsolationTechniqueCard 
              key={technique.id} 
              technique={technique} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;