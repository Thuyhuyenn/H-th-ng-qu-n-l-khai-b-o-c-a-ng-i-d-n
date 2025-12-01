import React, { useState } from 'react';
import { User, MapPin, AlertTriangle, Send, Check } from 'lucide-react';

export const DeclarationForm: React.FC = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4); // Success state
  };

  if (step === 4) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[500px] text-center p-8 animate-fade-in">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <Check className="w-12 h-12 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Khai báo thành công!</h3>
        <p className="text-slate-500 mb-8 max-w-md">Thông tin của bạn đã được ghi nhận vào hệ thống. Mã QR cá nhân của bạn đã được cập nhật.</p>
        <button onClick={() => setStep(1)} className="px-8 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-all">
          Khai báo mới
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-slate-50 px-8 py-4 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <div className={`flex flex-col items-center ${step >= 1 ? 'text-primary' : 'text-slate-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 text-sm font-bold border-2 ${step >= 1 ? 'border-primary bg-primary text-white' : 'border-slate-300'}`}>1</div>
            <span className="text-xs font-medium">Thông tin</span>
          </div>
          <div className={`flex-1 h-0.5 mx-4 ${step >= 2 ? 'bg-primary' : 'bg-slate-200'}`}></div>
          <div className={`flex flex-col items-center ${step >= 2 ? 'text-primary' : 'text-slate-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 text-sm font-bold border-2 ${step >= 2 ? 'border-primary bg-primary text-white' : 'border-slate-300'}`}>2</div>
            <span className="text-xs font-medium">Lịch trình</span>
          </div>
          <div className={`flex-1 h-0.5 mx-4 ${step >= 3 ? 'bg-primary' : 'bg-slate-200'}`}></div>
          <div className={`flex flex-col items-center ${step >= 3 ? 'text-primary' : 'text-slate-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 text-sm font-bold border-2 ${step >= 3 ? 'border-primary bg-primary text-white' : 'border-slate-300'}`}>3</div>
            <span className="text-xs font-medium">Triệu chứng</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8">
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-bold flex items-center gap-2 text-slate-800">
              <User className="text-primary" /> Thông tin cá nhân
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Họ và tên</label>
                <input type="text" className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Nguyễn Văn A" defaultValue="Nguyễn Văn A" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Năm sinh</label>
                <input type="number" className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="1990" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Địa chỉ hiện tại</label>
                <input type="text" className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Số nhà, đường, phường/xã..." />
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button type="button" onClick={() => setStep(2)} className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:bg-secondary transition-colors">Tiếp tục</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-bold flex items-center gap-2 text-slate-800">
              <MapPin className="text-primary" /> Lịch trình di chuyển (14 ngày qua)
            </h3>
            <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800 mb-4">
              Bạn có đi qua vùng dịch hoặc tiếp xúc với người nghi nhiễm không?
            </div>
            <div>
              <textarea 
                rows={4} 
                className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" 
                placeholder="Mô tả chi tiết lịch trình di chuyển: Đi đâu, gặp ai, thời gian nào..."
              ></textarea>
            </div>
            
            <div className="flex items-center gap-2 mt-4">
               <input type="checkbox" id="no-travel" className="w-5 h-5 text-primary border-slate-300 rounded focus:ring-primary" />
               <label htmlFor="no-travel" className="text-slate-700">Tôi không di chuyển khỏi nơi cư trú trong 14 ngày qua</label>
            </div>

            <div className="flex justify-between pt-4">
              <button type="button" onClick={() => setStep(1)} className="text-slate-500 font-medium px-4">Quay lại</button>
              <button type="button" onClick={() => setStep(3)} className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:bg-secondary transition-colors">Tiếp tục</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-bold flex items-center gap-2 text-slate-800">
              <AlertTriangle className="text-primary" /> Triệu chứng & Tiếp xúc
            </h3>
            <p className="text-sm text-slate-500">Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu nào sau đây không?</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {['Sốt', 'Ho', 'Khó thở', 'Đau họng', 'Mất vị giác/khứu giác', 'Mệt mỏi'].map((symptom) => (
                <label key={symptom} className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 text-primary border-slate-300 rounded focus:ring-primary" />
                  <span className="text-slate-700">{symptom}</span>
                </label>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100">
               <label className="flex items-start space-x-3">
                  <input type="checkbox" required className="mt-1 w-5 h-5 text-primary border-slate-300 rounded focus:ring-primary" />
                  <span className="text-sm text-slate-600">Tôi cam kết các thông tin khai báo là đúng sự thật và chịu trách nhiệm trước pháp luật về thông tin đã khai báo.</span>
               </label>
            </div>

            <div className="flex justify-between pt-4">
              <button type="button" onClick={() => setStep(2)} className="text-slate-500 font-medium px-4">Quay lại</button>
              <button type="submit" className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-orange-100 transition-all flex items-center gap-2">
                <Send className="w-4 h-4" /> Gửi tờ khai
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};