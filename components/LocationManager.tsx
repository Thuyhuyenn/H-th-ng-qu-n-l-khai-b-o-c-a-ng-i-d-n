import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2, MapPin } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  type: string; // Tỉnh/Thành, Quận/Huyện, Phường/Xã
  status: 'Active' | 'Locked';
  cases: number;
}

const initialData: Location[] = [
  { id: 'HN01', name: 'Thành phố Hà Nội', type: 'Tỉnh/Thành phố', status: 'Active', cases: 120 },
  { id: 'HCM01', name: 'Thành phố Hồ Chí Minh', type: 'Tỉnh/Thành phố', status: 'Active', cases: 340 },
  { id: 'DN01', name: 'Thành phố Đà Nẵng', type: 'Tỉnh/Thành phố', status: 'Active', cases: 45 },
  { id: 'HN02', name: 'Quận Ba Đình', type: 'Quận/Huyện', status: 'Active', cases: 12 },
  { id: 'HN03', name: 'Quận Cầu Giấy', type: 'Quận/Huyện', status: 'Locked', cases: 5 },
];

export const LocationManager: React.FC = () => {
  const [locations, setLocations] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLocations = locations.filter(loc => 
    loc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    loc.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Quản lý danh mục địa phương</h2>
          <p className="text-slate-500 text-sm">Cập nhật thông tin đơn vị hành chính và vùng dịch</p>
        </div>
        <button className="bg-primary hover:bg-secondary text-white px-4 py-2.5 rounded-lg flex items-center gap-2 font-medium shadow-md shadow-blue-200 transition-all">
          <Plus className="w-4 h-4" /> Thêm mới
        </button>
      </div>

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Tìm kiếm theo tên hoặc mã..." 
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select className="p-2 border border-slate-200 rounded-lg text-slate-600 outline-none focus:ring-2 focus:ring-primary">
            <option>Tất cả cấp hành chính</option>
            <option>Tỉnh/Thành phố</option>
            <option>Quận/Huyện</option>
            <option>Phường/Xã</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Mã ĐV</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Tên địa phương</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Cấp</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Trạng thái</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLocations.map((loc) => (
                <tr key={loc.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 text-sm font-medium text-slate-600">{loc.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-50 rounded-lg mr-3">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-slate-800">{loc.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{loc.type}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${loc.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {loc.status === 'Active' ? 'Hoạt động' : 'Tạm khóa'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-primary hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredLocations.length === 0 && (
            <div className="p-8 text-center text-slate-500">
                Không tìm thấy dữ liệu phù hợp
            </div>
        )}
      </div>
    </div>
  );
};