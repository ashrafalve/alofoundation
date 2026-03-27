import { Link } from 'react-router-dom';
import { Sun, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center text-white">
                <Sun size={22} fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none">আলো ফাউণ্ডেশন</span>
                <span className="text-[10px] uppercase tracking-widest text-primary font-semibold">Alo Foundation</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              আলো ফাউন্ডেশন একটি সেচ্ছাসেবী জনকল্যাণমুলক ও অরাজনৈতিক প্রতিষ্ঠান। আমরা সমাজের পিছিয়ে পড়া মানুষের কল্যাণে কাজ করি।
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/groups/1878971189641261" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                title="Facebook Group"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors">Our Programs</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/volunteer" className="hover:text-primary transition-colors">Become a Volunteer</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold mb-6">Our Programs</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/programs" className="hover:text-primary transition-colors">Education for All</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors">Healthcare Support</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors">Food Distribution</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors">Disaster Relief</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors">Youth Development</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/cYKNmkxtCMzTKV537" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  যশোদল, কিশোরগঞ্জ সদর, কিশোরগঞ্জ
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+88 01874144222</span>
              </li>

            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2025 Alo Foundation. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
