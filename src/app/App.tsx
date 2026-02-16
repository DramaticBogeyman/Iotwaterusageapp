import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MetricCard } from './components/MetricCard';
import { WaterChart } from './components/WaterChart';
import { AIInsights } from './components/AIInsights';
import { Notifications } from './components/Notifications';
import { Account } from './components/Account';
import { Droplets, Activity, CalendarClock, Waves, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAddDeviceModalOpen, setIsAddDeviceModalOpen] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  const renderContent = () => {
    switch (activePage) {
      case 'notifications':
        return <Notifications />;
      case 'account':
        return <Account />;
      case 'settings':
        return <Account />; // Using Account component for Settings for now as per request
      case 'dashboard':
      default:
        return (
          <>
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard
                title="جریان فعلی"
                value="۱.۲"
                unit="لیتر/دقیقه"
                icon={Waves}
                color="cyan"
                delay={0}
              />
              <MetricCard
                title="مصرف روزانه"
                value="۱۴۵"
                unit="لیتر"
                trend={-5}
                icon={Droplets}
                color="blue"
                delay={0.1}
              />
              <MetricCard
                title="پیش‌بینی ماهانه"
                value="۴,۲۵۰"
                unit="لیتر"
                trend={2.4}
                icon={CalendarClock}
                color="indigo"
                delay={0.2}
              />
              <MetricCard
                title="وضعیت سیستم"
                value="خوب"
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
                <h3 className="text-lg font-semibold text-slate-900">دستگاه‌های متصل</h3>
                <button 
                  onClick={() => setIsAddDeviceModalOpen(true)}
                  className="text-sm text-blue-600 font-medium hover:text-blue-700 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors"
                >
                  + افزودن دستگاه
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-right text-sm text-slate-500">
                  <thead className="bg-slate-50 text-xs uppercase font-semibold text-slate-500">
                    <tr>
                      <th className="px-6 py-4">نام دستگاه</th>
                      <th className="px-6 py-4">مکان</th>
                      <th className="px-6 py-4">وضعیت</th>
                      <th className="px-6 py-4">آخرین همگام‌سازی</th>
                      <th className="px-6 py-4">باتری</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { name: 'کنتور اصلی', location: 'زیرزمین', status: 'Active', sync: '۲ دقیقه پیش', battery: '۱۰۰٪' },
                      { name: 'سنسور باغچه', location: 'حیاط خلوت', status: 'Active', sync: '۵ دقیقه پیش', battery: '۸۴٪' },
                      { name: 'مانیتور آشپزخانه', location: 'آشپزخانه', status: 'Idle', sync: '۱ ساعت پیش', battery: '۹۲٪' },
                    ].map((device, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-900">{device.name}</td>
                        <td className="px-6 py-4">{device.location}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            device.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-800'
                          }`}>
                            {device.status === 'Active' ? 'فعال' : 'بیکار'}
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
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-['Vazirmatn']" dir="rtl">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        activePage={activePage}
        onNavigate={setActivePage}
      />
      
      <main className="md:mr-64 min-h-screen flex flex-col">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        
        <div className="p-6 md:p-8 max-w-7xl mx-auto w-full space-y-8">
          {renderContent()}
        </div>
      </main>

      {/* Add Device Modal */}
      <AnimatePresence>
        {isAddDeviceModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddDeviceModalOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden"
              >
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                  <h3 className="font-semibold text-slate-900">افزودن دستگاه جدید</h3>
                  <button 
                    onClick={() => setIsAddDeviceModalOpen(false)}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">نام دستگاه</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="مثلاً: سنسور حمام"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">مکان</label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                      <option>انتخاب مکان...</option>
                      <option>زیرزمین</option>
                      <option>آشپزخانه</option>
                      <option>حمام</option>
                      <option>باغچه</option>
                      <option>پارکینگ</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">شناسه دستگاه / شماره سریال</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-mono text-sm"
                      placeholder="XXXX-XXXX-XXXX"
                    />
                  </div>
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
                  <button 
                    onClick={() => setIsAddDeviceModalOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900"
                  >
                    انصراف
                  </button>
                  <button 
                    onClick={() => setIsAddDeviceModalOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm shadow-blue-600/20"
                  >
                    اتصال دستگاه
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
