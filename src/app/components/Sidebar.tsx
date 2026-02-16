import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Droplets, 
  BarChart3, 
  Settings, 
  Bell, 
  LogOut, 
  X,
  User
} from 'lucide-react';
import { clsx } from 'clsx';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activePage: string;
  onNavigate: (page: string) => void;
}

export function Sidebar({ isOpen, onClose, activePage, onNavigate }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'داشبورد' },
    { id: 'live-flow', icon: Droplets, label: 'جریان زنده' },
    { id: 'analytics', icon: BarChart3, label: 'تحلیل‌ها' },
    { id: 'notifications', icon: Bell, label: 'اعلان‌ها' },
    { id: 'account', icon: User, label: 'حساب کاربری' },
    { id: 'settings', icon: Settings, label: 'تنظیمات' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Content */}
      <motion.aside
        className={clsx(
          "fixed top-0 right-0 z-50 h-screen w-64 bg-slate-900 text-white transition-transform duration-300 md:translate-x-0",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center">
              <Droplets className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                نوا فلو
              </h1>
              <p className="text-xs text-slate-400">پایش هوشمند آب</p>
            </div>
          </div>
          <button onClick={onClose} className="md:hidden text-slate-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 py-6 px-3 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                if (window.innerWidth < 768) onClose();
              }}
              className={clsx(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium",
                activePage === item.id
                  ? "bg-blue-600/20 text-blue-400"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-slate-800 transition-colors text-slate-400 hover:text-white text-sm font-medium">
            <LogOut className="w-5 h-5" />
            خروج
          </button>
        </div>
      </motion.aside>
    </>
  );
}
