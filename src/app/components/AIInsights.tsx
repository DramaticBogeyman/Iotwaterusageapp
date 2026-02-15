import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, AlertTriangle, CheckCircle2, Droplets } from 'lucide-react';

interface Insight {
  id: string;
  type: 'alert' | 'success' | 'info';
  message: string;
  timestamp: string;
}

export function AIInsights() {
  const [insights, setInsights] = useState<Insight[]>([
    {
      id: '1',
      type: 'alert',
      message: 'جریان غیرعادی در ساعت ۳:۰۰ بامداد شناسایی شد (۲.۵ لیتر/دقیقه). احتمال نشتی.',
      timestamp: 'امروز، ۳:۰۰ بامداد',
    },
    {
      id: '2',
      type: 'success',
      message: 'مصرف آب هفتگی ۱۲٪ کمتر از میانگین محله شماست.',
      timestamp: 'دیروز',
    },
    {
      id: '3',
      type: 'info',
      message: 'پیش‌بینی قبض ماهانه: ۴۵.۲۰ دلار بر اساس الگوی مصرف فعلی.',
      timestamp: 'همین الان',
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden h-full"
    >
      <div className="p-6 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-500" />
            تحلیل هوشمند
          </h3>
          <p className="text-sm text-slate-500">بینش و هشدارهای هوشمند</p>
        </div>
        <div className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold">
          زنده
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className="flex gap-4 items-start p-4 rounded-lg bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors"
          >
            <div className="mt-1">
              {insight.type === 'alert' && <AlertTriangle className="w-5 h-5 text-amber-500" />}
              {insight.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
              {insight.type === 'info' && <Droplets className="w-5 h-5 text-blue-500" />}
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-800 font-medium leading-relaxed">
                {insight.message}
              </p>
              <p className="text-xs text-slate-400 mt-2">{insight.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
        <button className="text-sm text-indigo-600 font-medium hover:text-indigo-700">
          مشاهده همه ۱۲ بینش
        </button>
      </div>
    </motion.div>
  );
}
