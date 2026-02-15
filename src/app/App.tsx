import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MetricCard } from './components/MetricCard';
import { WaterChart } from './components/WaterChart';
import { AIInsights } from './components/AIInsights';
import { Droplets, Activity, CalendarClock, Waves } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Sidebar />
      
      <main className="md:ml-64 min-h-screen flex flex-col">
        <Header />
        
        <div className="p-6 md:p-8 max-w-7xl mx-auto w-full space-y-8">
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Current Flow"
              value="1.2"
              unit="L/min"
              icon={Waves}
              color="cyan"
              delay={0}
            />
            <MetricCard
              title="Daily Usage"
              value="145"
              unit="Liters"
              trend={-5}
              icon={Droplets}
              color="blue"
              delay={0.1}
            />
            <MetricCard
              title="Monthly Projection"
              value="4,250"
              unit="Liters"
              trend={2.4}
              icon={CalendarClock}
              color="indigo"
              delay={0.2}
            />
            <MetricCard
              title="System Status"
              value="Good"
              unit=""
              icon={Activity}
              color="emerald"
              delay={0.3}
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <WaterChart />
            </div>
            <div className="lg:col-span-1 h-full">
              <AIInsights />
            </div>
          </div>

          {/* Device List Section */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-slate-900">Connected Devices</h3>
              <button className="text-sm text-blue-600 font-medium hover:text-blue-700">
                + Add Device
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-500">
                <thead className="bg-slate-50 text-xs uppercase font-semibold text-slate-500">
                  <tr>
                    <th className="px-6 py-4">Device Name</th>
                    <th className="px-6 py-4">Location</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Last Sync</th>
                    <th className="px-6 py-4">Battery</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { name: 'Main Meter', location: 'Basement', status: 'Active', sync: '2 mins ago', battery: '100%' },
                    { name: 'Garden Sensor', location: 'Backyard', status: 'Active', sync: '5 mins ago', battery: '84%' },
                    { name: 'Kitchen Monitor', location: 'Kitchen', status: 'Idle', sync: '1 hour ago', battery: '92%' },
                  ].map((device, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">{device.name}</td>
                      <td className="px-6 py-4">{device.location}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                          {device.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">{device.sync}</td>
                      <td className="px-6 py-4">{device.battery}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
