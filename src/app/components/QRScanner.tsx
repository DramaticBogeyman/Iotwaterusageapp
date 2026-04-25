import React, { useState } from 'react';
import { motion } from 'motion/react';
import { QrCode, X, CheckCircle, Camera } from 'lucide-react';

interface QRScannerProps {
  onClose: () => void;
  onDeviceScanned: (deviceId: string) => void;
}

export function QRScanner({ onClose, onDeviceScanned }: QRScannerProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState<string | null>(null);
  const [deviceName, setDeviceName] = useState('');
  const [deviceLocation, setDeviceLocation] = useState('');

  const handleStartScan = () => {
    setIsScanning(true);

    // Simulate QR code scanning
    setTimeout(() => {
      const mockDeviceId = `DEVICE-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
      setScannedData(mockDeviceId);
      setIsScanning(false);
    }, 2000);
  };

  const handleAddDevice = () => {
    if (scannedData && deviceName && deviceLocation) {
      onDeviceScanned(scannedData);
      onClose();
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
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
            <h3 className="font-semibold text-slate-900">اسکن QR Code دستگاه</h3>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {!scannedData ? (
              <div className="space-y-4">
                <div className="relative aspect-square bg-slate-100 rounded-xl flex items-center justify-center overflow-hidden">
                  {isScanning ? (
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-48 border-4 border-blue-500 rounded-2xl relative">
                          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-blue-500 rounded-tl-lg"></div>
                          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-blue-500 rounded-tr-lg"></div>
                          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-blue-500 rounded-bl-lg"></div>
                          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-blue-500 rounded-br-lg"></div>
                        </div>
                      </div>
                      <Camera className="absolute top-4 right-4 w-6 h-6 text-white drop-shadow-lg" />
                    </div>
                  ) : (
                    <div className="text-center space-y-3">
                      <QrCode className="w-16 h-16 text-slate-400 mx-auto" />
                      <p className="text-sm text-slate-500">QR Code دستگاه را مقابل دوربین قرار دهید</p>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleStartScan}
                  disabled={isScanning}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isScanning ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      در حال اسکن...
                    </>
                  ) : (
                    <>
                      <Camera className="w-5 h-5" />
                      شروع اسکن
                    </>
                  )}
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-emerald-900">دستگاه شناسایی شد!</p>
                    <p className="text-xs text-emerald-700 font-mono mt-1">{scannedData}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">نام دستگاه</label>
                    <input
                      type="text"
                      value={deviceName}
                      onChange={(e) => setDeviceName(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="مثلاً: سنسور حمام"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">مکان</label>
                    <select
                      value={deviceLocation}
                      onChange={(e) => setDeviceLocation(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                    >
                      <option value="">انتخاب مکان...</option>
                      <option value="basement">زیرزمین</option>
                      <option value="kitchen">آشپزخانه</option>
                      <option value="bathroom">حمام</option>
                      <option value="garden">باغچه</option>
                      <option value="parking">پارکینگ</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setScannedData(null)}
                    className="flex-1 px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    اسکن مجدد
                  </button>
                  <button
                    onClick={handleAddDevice}
                    disabled={!deviceName || !deviceLocation}
                    className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    اتصال دستگاه
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
