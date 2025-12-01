import React, { useState } from 'react';
import { Phone, Lock, ArrowRight, UserPlus } from 'lucide-react';

interface LoginFormProps {
  onLogin: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  return (
    <div className="flex items-center justify-center min-h-[500px]">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        <div className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800">
              {activeTab === 'login' ? 'Đăng nhập' : 'Đăng ký tài khoản'}
            </h3>
            <p className="text-slate-500 mt-2 text-sm">
              Hệ thống khai báo y tế quốc gia
            </p>
          </div>

          <div className="flex bg-slate-100 rounded-lg p-1 mb-8">
            <button 
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${activeTab === 'login' ? 'bg-white text-primary shadow-sm' : 'text-slate-500'}`}
            >
              Đăng nhập
            </button>
            <button 
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${activeTab === 'register' ? 'bg-white text-primary shadow-sm' : 'text-slate-500'}`}
            >
              Đăng ký
            </button>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Số điện thoại / CCCD</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="text" 
                  className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" 
                  placeholder="Nhập số điện thoại"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Mật khẩu</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="password" 
                  className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" 
                  placeholder="••••••••"
                />
              </div>
            </div>

            {activeTab === 'register' && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Xác nhận mật khẩu</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input 
                    type="password" 
                    className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" 
                    placeholder="••••••••"
                  />
                </div>
              </div>
            )}

            <button 
              onClick={onLogin}
              className="w-full bg-gradient-to-r from-primary to-blue-600 text-white py-3.5 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-200 transition-all transform active:scale-95 flex items-center justify-center gap-2 mt-4"
            >
              {activeTab === 'login' ? (
                <>Đăng nhập <ArrowRight className="w-5 h-5" /></>
              ) : (
                <>Tạo tài khoản <UserPlus className="w-5 h-5" /></>
              )}
            </button>
          </div>

          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-slate-500 hover:text-primary underline">Quên mật khẩu?</a>
          </div>
        </div>
      </div>
    </div>
  );
};