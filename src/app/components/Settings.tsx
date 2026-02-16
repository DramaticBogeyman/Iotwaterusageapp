import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Bell, 
  Moon, 
  Globe, 
  Shield, 
  Smartphone, 
  HelpCircle,
  ChevronLeft
} from 'lucide-react';
import { clsx } from 'clsx';

export function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('fa');

  const SettingSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden mb-6">
      <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </div>
      <div className="divide-y divide-slate-100">
        {children}
      </div>
    </div>
  );

  const SettingItem = ({ 
    icon: Icon, 
    label, 
    description, 
    action 
  }: { 
    icon: any, 
    label: string, 
    description?: string, 
    action: React.ReactNode 
  }) => (
    <div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
          <Icon size={20} />
        </div>
        <div>
          <div className="font-medium text-slate-900">{label}</div>
          {description && <div className="text-xs text-slate-500 mt-0.5">{description}</div>}
        </div>
      </div>
      <div>{action}</div>
    </div>
  );

  const Toggle = ({ checked, onChange }: { checked: boolean, onChange: (v: boolean) => void }) => (
    <button 
      onClick={() => onChange(!checked)}
      className={clsx(
        "w-11 h-6 rounded-full transition-colors relative",
        checked ? "bg-blue-600" : "bg-slate-200"
      )}
    >
      <span className={clsx(
        "absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200",
        checked ? "left-1 translate-x-0" : "right-1 translate-x-0" // RTL logic: left is active
      )} 
      style={{ left: checked ? '4px' : 'auto', right: checked ? 'auto' : '4px' }}
      />
    </button>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-slate-900 mb-6">تنظیمات</h2>

      <SettingSection title="عمومی">
        <SettingItem 
          icon={Globe} 
          label="زبان" 
          description="زبان رابط کاربری را انتخاب کنید"
          action={
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-blue-500"
            >
              <option value="fa">فارسی</option>
              <option value="en">English</option>
            </select>
          } 
        />
        <SettingItem 
          icon={Moon} 
          label="حالت تاریک" 
          description="تغییر ظاهر برنامه به تم تیره"
          action={<Toggle checked={darkMode} onChange={setDarkMode} />} 
        />
      </SettingSection>

      <SettingSection title="اعلان‌ها">
        <SettingItem 
          icon={Bell} 
          label="اعلان‌های فشاری (Push)" 
          description="دریافت هشدارها روی دستگاه"
          action={<Toggle checked={notificationsEnabled} onChange={setNotificationsEnabled} />} 
        />
        <SettingItem 
          icon={Smartphone} 
          label="پیامک" 
          description="دریافت هشدارهای اضطراری از طریق پیامک"
          action={<Toggle checked={false} onChange={() => {}} />} 
        />
      </SettingSection>

      <SettingSection title="امنیت و پشتیبانی">
        <SettingItem 
          icon={Shield} 
          label="تغییر رمز عبور" 
          description="آخرین تغییر: ۳ ماه پیش"
          action={<ChevronLeft className="text-slate-400" size={20} />} 
        />
        <SettingItem 
          icon={HelpCircle} 
          label="راهنما و پشتیبانی" 
          description="سوالات متداول و تماس با پشتیبانی"
          action={<ChevronLeft className="text-slate-400" size={20} />} 
        />
      </SettingSection>

      <div className="text-center text-xs text-slate-400 mt-8">
        نسخه ۲.۴.۰
        <br />
        ساخته شده با ❤️ در ایران
      </div>
    </motion.div>
  );
}
