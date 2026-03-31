import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Page Header */}
      <section className="relative pt-48 pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop" 
            alt="Contact Header" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-950"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              আমাদের সাথে <span className="text-primary">যোগাযোগ</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
              আপনার যেকোনো প্রশ্ন, পরামর্শ বা সহযোগিতার জন্য আমাদের সাথে যোগাযোগ করুন। আমাদের ফেসবুক গ্রুপে যুক্ত হয়ে আমাদের সাথে থাকুন।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-8 relative inline-block">
                  যোগাযোগের তথ্য
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></div>
                </h3>
                
                <div className="space-y-10">
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-md flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Address</p>
                      <a 
                        href="https://maps.app.goo.gl/cYKNmkxtCMzTKV537" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-900 font-bold text-lg leading-snug hover:text-primary transition-colors"
                      >
                        যশোদল, কিশোরগঞ্জ সদর, কিশোরগঞ্জ
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-md flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                      <p className="text-slate-900 font-bold text-lg">01874144222</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-md flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                      <a
                        href="mailto:alofoundationjoshodol@gmail.com"
                        className="text-slate-900 font-bold text-lg leading-snug hover:text-primary transition-colors"
                      >
                        alofoundationjoshodol@gmail.com
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Follow Us</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.facebook.com/groups/1878971189641261" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-md flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
                    title="Facebook Group"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Facebook Group CTA */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 p-10 md:p-16 rounded-md border border-slate-200 text-center space-y-8 shadow-sm">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                  <Facebook size={48} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-slate-900">আমাদের ফেসবুক গ্রুপে যোগ দিন</h3>
                  <p className="text-slate-600 text-lg max-w-xl mx-auto">
                    আলো ফাউন্ডেশনের সকল আপডেট পেতে এবং আমাদের কমিউনিটির অংশ হতে আমাদের অফিসিয়াল ফেসবুক গ্রুপে যুক্ত হন।
                  </p>
                </div>
                <a 
                  href="https://www.facebook.com/groups/1878971189641261" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-md font-bold text-xl shadow-xl shadow-primary/20 transition-all group"
                >
                  ফেসবুক গ্রুপে যোগ দিন <Facebook size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center mx-auto mb-6 text-primary">
              <MapPin size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">আমাদের অবস্থান</h3>
            <p className="text-slate-500 font-medium">যশোদল, কিশোরগঞ্জ সদর, কিশোরগঞ্জ</p>
            <div className="mt-8">
              <a 
                href="https://maps.app.goo.gl/cYKNmkxtCMzTKV537" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-md font-bold text-sm hover:bg-slate-800 transition-all"
              >
                View on Google Maps <Globe size={16} />
              </a>
            </div>
          </div>
        </div>
        {/* Decorative elements to simulate map */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-1 h-full bg-slate-400 rotate-12"></div>
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-400 -rotate-6"></div>
          <div className="absolute top-0 left-2/3 w-1 h-full bg-slate-400 -rotate-12"></div>
        </div>
      </section>
    </div>
  );
}
