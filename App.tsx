import React, { useState } from 'react';
import { 
  Shield, 
  Activity, 
  BarChart3, 
  Users, 
  FileText, 
  MapPin, 
  Phone, 
  CheckCircle,
  Menu,
  X
} from 'lucide-react';
import { LoginForm } from './components/LoginForm';
import { DeclarationForm } from './components/DeclarationForm';
import { AdminStats } from './components/AdminStats';
import { LocationManager } from './components/LocationManager';

// Define the view states for the interactive demo section
enum DemoView {
  LOGIN = 'LOGIN',
  DECLARATION = 'DECLARATION',
  STATS = 'STATS',
  LOCATIONS = 'LOCATIONS',
}

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<DemoView>(DemoView.LOGIN);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <div className="bg-gradient-to-br from-primary to-blue-600 p-2 rounded-xl shadow-lg shadow-blue-200">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <span className="font-bold text-2xl text-slate-800 tracking-tight">Health<span className="text-primary">Guard</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollToSection('features')} className="text-slate-600 hover:text-primary font-medium transition-colors">Tính năng</button>
              <button onClick={() => scrollToSection('roles')} className="text-slate-600 hover:text-primary font-medium transition-colors">Đối tượng</button>
              <button onClick={() => scrollToSection('demo')} className="text-slate-600 hover:text-primary font-medium transition-colors">Trải nghiệm</button>
              <button className="bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-full font-semibold shadow-md shadow-blue-200 transition-all transform hover:-translate-y-0.5">
                Tải ứng dụng
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-slate-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 absolute w-full">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-slate-50">Tính năng</button>
              <button onClick={() => scrollToSection('roles')} className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-slate-50">Đối tượng</button>
              <button onClick={() => scrollToSection('demo')} className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-slate-50">Trải nghiệm</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-gradient-to-bl from-blue-50 to-transparent opacity-50 rounded-bl-[100px]"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-primary font-semibold text-sm">
              <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
              Hệ thống quản lý y tế thông minh 4.0
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Bảo vệ sức khỏe <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Cộng đồng</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Giải pháp toàn diện giúp quản lý, theo dõi và khai báo y tế nhanh chóng. Kết nối người dân với cơ quan y tế một cách liền mạch và an toàn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection('demo')} className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-orange-100 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                <Activity className="w-5 h-5" />
                Khai báo ngay
              </button>
              <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                <FileText className="w-5 h-5" />
                Tìm hiểu thêm
              </button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-500 rounded-full blur-3xl opacity-20"></div>
            <img 
              src="https://picsum.photos/800/800?random=1" 
              alt="Medical Dashboard" 
              className="relative rounded-3xl shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-all duration-500 object-cover w-full h-[600px]"
            />
            {/* Floating Card 1 */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs animate-bounce-slow">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Đã xác thực</h3>
                  <p className="text-sm text-slate-500">Khai báo thành công</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Roles Grid */}
      <section id="roles" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Giải pháp cho mọi đối tượng</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Hệ thống được thiết kế tối ưu hóa cho từng vai trò người dùng nhằm mang lại hiệu quả cao nhất.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Citizen */}
            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Người dân</h3>
              <ul className="space-y-3 text-slate-600 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Khai báo y tế online</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Xem lịch sử di chuyển</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Nhận cảnh báo tức thời</li>
              </ul>
            </div>

            {/* Medical Staff */}
            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                <Activity className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cán bộ Y tế</h3>
              <ul className="space-y-3 text-slate-600 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Tra cứu thông tin nhanh</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Sàng lọc ca nghi nhiễm</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Xuất báo cáo tổng hợp</li>
              </ul>
            </div>

            {/* Admin */}
            <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Quản trị viên</h3>
              <ul className="space-y-3 text-slate-600 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-amber-600" /> Quản lý người dùng</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-amber-600" /> Thống kê toàn hệ thống</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-amber-600" /> Cập nhật danh mục</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive System Demo Section */}
      <section id="demo" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Trải nghiệm hệ thống</h2>
            <p className="text-slate-400">Tương tác trực tiếp với các chức năng cốt lõi của HealthGuard</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setActiveView(DemoView.LOGIN)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${activeView === DemoView.LOGIN ? 'bg-primary text-white shadow-lg shadow-primary/50' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
            >
              1. Đăng nhập (Dân)
            </button>
            <button 
              onClick={() => setActiveView(DemoView.DECLARATION)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${activeView === DemoView.DECLARATION ? 'bg-primary text-white shadow-lg shadow-primary/50' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
            >
              2. Khai báo Y tế
            </button>
            <button 
              onClick={() => setActiveView(DemoView.STATS)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${activeView === DemoView.STATS ? 'bg-primary text-white shadow-lg shadow-primary/50' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
            >
              3. Thống kê (Admin)
            </button>
            <button 
              onClick={() => setActiveView(DemoView.LOCATIONS)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${activeView === DemoView.LOCATIONS ? 'bg-primary text-white shadow-lg shadow-primary/50' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
            >
              4. Quản lý Địa phương
            </button>
          </div>

          {/* Interactive Screen Container */}
          <div className="bg-slate-50 rounded-3xl shadow-2xl overflow-hidden min-h-[600px] border border-slate-700 text-slate-800">
            {/* Fake Browser Toolbar */}
            <div className="bg-slate-200 px-4 py-3 flex items-center gap-2 border-b border-slate-300">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 bg-white rounded-md mx-4 px-3 py-1 text-xs text-slate-400 flex items-center">
                <Shield className="w-3 h-3 mr-2" />
                https://healthguard.gov.vn/{activeView.toLowerCase().replace('_', '-')}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-4 md:p-8 h-full bg-slate-50 overflow-y-auto max-h-[700px]">
              {activeView === DemoView.LOGIN && <LoginForm onLogin={() => setActiveView(DemoView.DECLARATION)} />}
              {activeView === DemoView.DECLARATION && <DeclarationForm />}
              {activeView === DemoView.STATS && <AdminStats />}
              {activeView === DemoView.LOCATIONS && <LocationManager />}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-2xl text-slate-800">HealthGuard</span>
              </div>
              <p className="text-slate-500 mb-6 max-w-sm">
                Hệ thống quản lý dữ liệu y tế quốc gia, đảm bảo an toàn, bảo mật và chính xác cho mọi công dân.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 mb-4">Liên kết</h4>
              <ul className="space-y-3 text-slate-500">
                <li><a href="#" className="hover:text-primary">Trang chủ</a></li>
                <li><a href="#" className="hover:text-primary">Hướng dẫn</a></li>
                <li><a href="#" className="hover:text-primary">Tin tức y tế</a></li>
                <li><a href="#" className="hover:text-primary">Điều khoản</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 mb-4">Liên hệ</h4>
              <ul className="space-y-3 text-slate-500">
                <li className="flex items-center gap-2"><Phone className="w-4 h-4"/> 1900 1234</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4"/> Hà Nội, Việt Nam</li>
                <li className="flex items-center gap-2">support@healthguard.vn</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-slate-400 text-sm">
            © 2024 HealthGuard Project. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Sticky Hotline Button */}
      <a href="tel:19001234" className="fixed bottom-6 right-6 z-50 bg-red-500 text-white p-4 rounded-full shadow-lg shadow-red-500/30 hover:bg-red-600 transition-all hover:scale-110 animate-bounce-slow flex items-center gap-2">
        <Phone className="w-6 h-6" />
        <span className="font-bold hidden md:inline">Hotline 1900 1234</span>
      </a>
    </div>
  );
};

export default App;