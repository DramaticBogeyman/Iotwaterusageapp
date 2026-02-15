import React from 'react';
import { Bell, Search, User, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-4 md:px-6 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 -mr-2 text-slate-500 hover:bg-slate-100 rounded-lg"
        >
          <Menu size={24} />
        </button>
        <h2 className="text-xl font-semibold text-slate-800">داشبورد</h2>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center bg-slate-100 rounded-lg px-3 py-2 w-64">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="جستجو در تحلیل‌ها..."
            className="bg-transparent border-none outline-none text-sm mr-2 w-full text-slate-600 placeholder:text-slate-400"
          />
        </div>

        <button className="relative text-slate-500 hover:text-slate-700 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white -translate-x-1/4 -translate-y-1/4"></span>
        </button>

        <div className="flex items-center gap-3 pr-6 border-r border-slate-100">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-slate-900">علی محمدی</p>
            <p className="text-xs text-slate-500">صاحب خانه</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
