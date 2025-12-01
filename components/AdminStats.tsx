import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, Filter, Calendar } from 'lucide-react';

const data = [
  { name: 'T2', declarations: 4000 },
  { name: 'T3', declarations: 3000 },
  { name: 'T4', declarations: 2000 },
  { name: 'T5', declarations: 2780 },
  { name: 'T6', declarations: 1890 },
  { name: 'T7', declarations: 2390 },
  { name: 'CN', declarations: 3490 },
];

const riskData = [
  { name: 'Bình thường', value: 85, color: '#10b981' }, // Green
  { name: 'Nguy cơ thấp', value: 10, color: '#f59e0b' }, // Amber
  { name: 'Nguy cơ cao', value: 5, color: '#ef4444' }, // Red
];

export const AdminStats: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Thống kê khai báo</h2>
          <p className="text-slate-500 text-sm">Cập nhật lần cuối: 10 phút trước</p>
        </div>
        <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
                <Calendar className="w-4 h-4" /> Hôm nay
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary shadow-md shadow-blue-200">
                <Download className="w-4 h-4" /> Xuất báo cáo
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="text-sm text-slate-500 mb-1">Tổng số khai báo</div>
            <div className="text-3xl font-bold text-slate-800">124,592</div>
            <div className="text-green-500 text-xs font-medium mt-2 flex items-center">↑ 12% so với tuần trước</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="text-sm text-slate-500 mb-1">Ca nghi nhiễm</div>
            <div className="text-3xl font-bold text-red-500">42</div>
            <div className="text-red-500 text-xs font-medium mt-2 flex items-center">↑ 2 ca mới hôm nay</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="text-sm text-slate-500 mb-1">Tỷ lệ xử lý</div>
            <div className="text-3xl font-bold text-blue-600">98.5%</div>
            <div className="text-slate-400 text-xs font-medium mt-2">Thời gian TB: 2 giờ</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="font-bold text-lg text-slate-800 mb-6">Lượng khai báo trong tuần</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    cursor={{fill: '#f1f5f9'}}
                />
                <Bar dataKey="declarations" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="font-bold text-lg text-slate-800 mb-6">Phân loại nguy cơ</h3>
          <div className="h-64 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {riskData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4">
              {riskData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{backgroundColor: item.color}}></div>
                      <span className="text-xs text-slate-600">{item.name}</span>
                  </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};