import React from 'react';
import { motion } from 'motion/react';
import { User, CreditCard, Shield, Zap, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export function Account() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-bold text-slate-900">حساب کاربری</h2>

      {/* Personal Info Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
            <User className="w-5 h-5 text-slate-400" />
            اطلاعات شخصی
          </h3>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            ویرایش
          </button>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-sm text-slate-500">نام و نام خانوادگی</label>
            <div className="font-medium text-slate-900">علی محمدی</div>
          </div>
          <div className="space-y-1">
            <label className="text-sm text-slate-500">شماره موبایل</label>
            <div className="font-medium text-slate-900 flex items-center gap-2">
              <Phone size={14} className="text-slate-400" />
              ۰۹۱۲۳۴۵۶۷۸۹
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-sm text-slate-500">آدرس ایمیل</label>
            <div className="font-medium text-slate-900 flex items-center gap-2">
              <Mail size={14} className="text-slate-400" />
              ali.mohammadi@example.com
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-sm text-slate-500">آدرس</label>
            <div className="font-medium text-slate-900 flex items-center gap-2">
              <MapPin size={14} className="text-slate-400" />
              تهران، سعادت‌آباد، خیابان سرو غربی
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-slate-400" />
            اشتراک و پرداخت
          </h3>
        </div>
        <div className="p-6">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-6 text-white mb-6">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <span className="font-semibold text-lg">طرح حرفه‌ای (Pro)</span>
                </div>
                <p className="text-slate-300 text-sm mb-4">دسترسی کامل به تحلیل‌های هوشمند و تاریخچه نامحدود.</p>
                <div className="text-xs bg-slate-700/50 inline-block px-3 py-1 rounded-full border border-slate-600">
                  تمدید بعدی: ۱۵ آبان ۱۴۰۳
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">۹۹,۰۰۰ <span className="text-sm font-normal text-slate-400">تومان/ماه</span></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 opacity-70">
              <h4 className="font-semibold text-slate-900 mb-2">رایگان</h4>
              <ul className="text-sm text-slate-500 space-y-2 mb-4">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> پایش زنده</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> ۳ دستگاه</li>
              </ul>
            </div>
            
            <div className="border-2 border-blue-500 rounded-lg p-4 bg-blue-50 relative">
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-bl-lg">فعلی</div>
              <h4 className="font-semibold text-blue-900 mb-2">حرفه‌ای</h4>
              <ul className="text-sm text-blue-700 space-y-2 mb-4">
                <li className="flex items-center gap-2"><Zap size={14} /> تحلیل هوش مصنوعی</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> دستگاه نامحدود</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> تاریخچه ۱ ساله</li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-lg p-4 hover:border-slate-300 transition-colors cursor-pointer">
              <h4 className="font-semibold text-slate-900 mb-2">سازمانی</h4>
              <ul className="text-sm text-slate-500 space-y-2 mb-4">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> API اختصاصی</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} /> پشتیبانی ۲۴/۷</li>
              </ul>
              <button className="w-full py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
                تماس با ما
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
