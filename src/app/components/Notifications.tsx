import React from 'react';
import { motion } from 'motion/react';
import { Bell, CheckCircle2, AlertTriangle, Droplets, Clock } from 'lucide-react';

interface Notification {
  id: string;
  type: 'alert' | 'success' | 'info';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export function Notifications() {
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'alert',
      title: 'هشدار نشتی',
      message: 'جریان غیرعادی آب در ساعت ۳:۰۰ بامداد شناسایی شد. لطفاً لوله‌ها را بررسی کنید.',
      time: '۲ ساعت پیش',
      read: false,
    },
    {
      id: '2',
      type: 'success',
      title: 'صرفه‌جویی عالی',
      message: 'مصرف این هفته شما ۱۰٪ کمتر از هفته قبل بود. آفرین!',
      time: 'دیروز',
      read: true,
    },
    {
      id: '3',
      type: 'info',
      title: 'قبض صادر شد',
      message: 'قبض آب دوره مهرماه صادر شد. مبلغ: ۴۵۰,۰۰۰ تومان.',
      time: '۲ روز پیش',
      read: true,
    },
    {
      id: '4',
      type: 'info',
      title: 'بروزرسانی سیستم',
      message: 'دستگاه پایشگر شما به آخرین نسخه نرم‌افزاری بروزرسانی شد.',
      time: 'هفته گذشته',
      read: true,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">اعلان‌ها</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          علامت‌گذاری همه به عنوان خوانده شده
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-xl border transition-all ${
              notification.read
                ? 'bg-white border-slate-100'
                : 'bg-blue-50 border-blue-100 shadow-sm'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`p-2 rounded-lg ${
                notification.type === 'alert' ? 'bg-red-100 text-red-600' :
                notification.type === 'success' ? 'bg-emerald-100 text-emerald-600' :
                'bg-blue-100 text-blue-600'
              }`}>
                {notification.type === 'alert' && <AlertTriangle size={20} />}
                {notification.type === 'success' && <CheckCircle2 size={20} />}
                {notification.type === 'info' && <Bell size={20} />}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className={`font-bold ${notification.read ? 'text-slate-700' : 'text-slate-900'}`}>
                    {notification.title}
                  </h3>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock size={12} />
                    {notification.time}
                  </span>
                </div>
                <p className={`mt-1 text-sm ${notification.read ? 'text-slate-500' : 'text-slate-700'}`}>
                  {notification.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
