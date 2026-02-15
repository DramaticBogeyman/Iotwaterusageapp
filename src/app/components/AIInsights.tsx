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
      message: 'Unusual flow detected at 3:00 AM (2.5 L/min). Possible leak.',
      timestamp: 'Today, 3:00 AM',
    },
    {
      id: '2',
      type: 'success',
      message: 'Weekly water usage is 12% lower than your neighborhood average.',
      timestamp: 'Yesterday',
    },
    {
      id: '3',
      type: 'info',
      message: 'Projected monthly bill: $45.20 based on current usage patterns.',
      timestamp: 'Just now',
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
            AI Analytics
          </h3>
          <p className="text-sm text-slate-500">Smart insights & alerts</p>
        </div>
        <div className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold">
          LIVE
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
          View all 12 insights
        </button>
      </div>
    </motion.div>
  );
}
