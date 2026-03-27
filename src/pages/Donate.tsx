import { motion } from 'motion/react';
import { Heart, CreditCard, Landmark, Wallet, CheckCircle2, ShieldCheck, Zap, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const methods = [
  { name: 'bKash', icon: Wallet, desc: 'Mobile Banking (Personal: 01874144222)', color: 'bg-pink-50 text-pink-600' },
];

const impacts = [
  { title: 'Education', desc: 'একজন শিক্ষার্থীর শিক্ষা উপকরণ নিশ্চিত করুন।', icon: Zap },
  { title: 'Healthcare', desc: 'একটি পরিবারের প্রাথমিক স্বাস্থ্যসেবা নিশ্চিত করুন।', icon: Heart },
  { title: 'Food Security', desc: 'একটি দুস্থ পরিবারের খাবার নিশ্চিত করুন।', icon: Globe },
];

export default function Donate() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Page Header */}
      <section className="relative pt-48 pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" 
            alt="Donate Header" 
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
              আপনার <span className="text-primary">অনুদান</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
              আপনার সামান্য অনুদান বদলে দিতে পারে একটি জীবন। আলো ফাউন্ডেশন আপনার প্রতিটি টাকার সঠিক ব্যবহার নিশ্চিত করে।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left Column: Info & Methods */}
            <div className="space-y-16">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-8 relative inline-block">
                  কেন অনুদান দেবেন?
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></div>
                </h2>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                  আলো ফাউন্ডেশন একটি অরাজনৈতিক ও সেচ্ছাসেবী প্রতিষ্ঠান। আমরা কিশোরগঞ্জের পিছিয়ে পড়া মানুষের কল্যাণে কাজ করছি। আপনার প্রতিটি অনুদান সরাসরি মানুষের উপকারে আসে।
                </p>
                
                <div className="grid sm:grid-cols-1 gap-6">
                  {impacts.map((impact, i) => (
                    <div key={i} className="flex gap-6 p-8 bg-slate-50 rounded-md border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                      <div className="w-14 h-14 bg-primary/10 rounded-md flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                        <impact.icon size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{impact.title}</h3>
                        <p className="text-slate-600 font-medium leading-relaxed">{impact.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">পেমেন্ট মেথডসমূহ</h3>
                <div className="space-y-6">
                  {methods.map((method, idx) => (
                    <div key={idx} className="flex items-center gap-6 p-8 border border-slate-100 rounded-md hover:border-primary hover:shadow-lg transition-all bg-white group">
                      <div className={`w-14 h-14 ${method.color} rounded-md flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        <method.icon size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg">{method.name}</h4>
                        <p className="text-slate-500 font-medium">{method.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Contact for Donation */}
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900 p-10 md:p-16 rounded-md shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-12">
                    <div className="w-14 h-14 bg-primary rounded-md flex items-center justify-center text-white shadow-lg shadow-primary/20">
                      <Heart size={28} fill="currentColor" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">অনুদান দিতে যোগাযোগ করুন</h2>
                      <p className="text-slate-400 font-medium">Contact for Donation</p>
                    </div>
                  </div>

                  <div className="space-y-10">
                    <p className="text-xl text-slate-300 leading-relaxed font-medium">
                      অনুদান সংক্রান্ত যেকোনো তথ্যের জন্য বা অনুদান দিতে সরাসরি আমাদের সাথে যোগাযোগ করুন। আমরা আপনার সহায়তায় কৃতজ্ঞ।
                    </p>

                    <div className="space-y-6">
                      <div className="p-8 bg-white/5 border border-white/10 rounded-md">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Mobile Banking</p>
                        <p className="text-2xl font-bold text-white tracking-wider">01874144222</p>
                        <p className="text-sm text-slate-400 mt-1">(bKash Personal)</p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link 
                        to="/contact" 
                        className="w-full bg-primary hover:bg-primary-dark text-white py-6 rounded-md font-bold text-xl shadow-2xl shadow-primary/40 transition-all flex items-center justify-center gap-3 group"
                      >
                        Contact Us Now <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
                      <ShieldCheck size={16} className="text-primary" />
                      <span>Transparent & Accountable</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
