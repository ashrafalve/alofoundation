import { motion } from 'motion/react';
import { Users, Target, Heart, ShieldCheck, Award, Globe, Zap, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Page Header */}
      <section className="relative pt-48 pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/gallery-5.jpg" 
            alt="About Header" 
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
              আমাদের <span className="text-primary">গল্প</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
              যশোদল থেকে শুরু হওয়া এক মানবিক অভিযাত্রা। আলো ফাউন্ডেশন সমাজের অন্ধকার দূর করে শিক্ষার আলো ও মানবিক সহায়তা পৌঁছে দিতে প্রতিশ্রুতিবদ্ধ।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-primary"></div>
                <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Our Journey</h2>
              </div>
              <h3 className="text-4xl font-bold text-slate-900 leading-tight">
                যশোদল থেকে শুরু হওয়া এক মানবিক অভিযাত্রা
              </h3>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  আলো ফাউন্ডেশন ২০২৫ সালে প্রতিষ্ঠিত একটি সেচ্ছাসেবী জনকল্যাণমুলক ও অরাজনৈতিক প্রতিষ্ঠান। আমাদের মূল ভিত্তি হলো নিঃস্বার্থ সেবা এবং সামাজিক উন্নয়ন। কিশোরগঞ্জ সদর উপজেলার যশোদল ইউনিয়ন থেকে আমাদের কার্যক্রম শুরু হলেও আমাদের স্বপ্ন সারা দেশে মানবতার আলো ছড়িয়ে দেওয়া।
                </p>
                <p>
                  আমরা বিশ্বাস করি, ছোট ছোট প্রচেষ্টাই বড় পরিবর্তন আনতে পারে। শিক্ষা, স্বাস্থ্য এবং দারিদ্র্য বিমোচনে আমরা নিরলসভাবে কাজ করে যাচ্ছি। অরাজনৈতিক হওয়ার কারণে আমরা সমাজের সকল স্তরের মানুষের সাথে মিলেমিশে কাজ করতে সক্ষম।
                </p>
                <p>
                  আমাদের প্রতিটি সদস্য নিবেদিতপ্রাণ এবং সমাজের প্রতি দায়বদ্ধ। আমরা মনে করি, মানুষের সেবা করাই পরম ধর্ম।
                </p>
              </div>
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center text-primary">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900">2025</p>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Established</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-md flex items-center justify-center text-blue-600">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900">30+</p>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Volunteers</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-md overflow-hidden shadow-2xl">
                <img 
                  src="/images/gallery-6.jpg" 
                  alt="Our Story" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-md shadow-2xl border border-slate-100 hidden md:block max-w-[280px]">
                <Quote className="text-primary w-12 h-12 mb-6 opacity-20" />
                <p className="text-slate-700 italic font-medium leading-relaxed">
                  "মানুষের সেবা করাই আমাদের মূল লক্ষ্য। আমরা চাই প্রতিটি ঘরে শিক্ষার আলো পৌঁছে দিতে।"
                </p>
                <p className="mt-4 font-bold text-slate-900">— প্রতিষ্ঠাতা, আলো ফাউন্ডেশন</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6">Our Core Values</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900">যে আদর্শে আমরা বিশ্বাসী</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                title: 'স্বচ্ছতা', 
                desc: 'আমাদের প্রতিটি কার্যক্রম এবং তহবিলের হিসাব সম্পূর্ণ স্বচ্ছ ও জবাবদিহিতামূলক।',
                icon: ShieldCheck,
                color: 'bg-emerald-50 text-emerald-600'
              },
              { 
                title: 'নিঃস্বার্থ সেবা', 
                desc: 'কোনো ব্যক্তিগত বা রাজনৈতিক স্বার্থ ছাড়াই আমরা আর্তমানবতার সেবায় নিয়োজিত।',
                icon: Heart,
                color: 'bg-rose-50 text-rose-600'
              },
              { 
                title: 'সামাজিক ঐক্য', 
                desc: 'সমাজের সকল স্তরের মানুষকে সাথে নিয়ে আমরা একটি সুন্দর ও স্বনির্ভর সমাজ গঠন করতে চাই।',
                icon: Globe,
                color: 'bg-blue-50 text-blue-600'
              }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-12 rounded-md shadow-xl border border-slate-100 group"
              >
                <div className={`w-16 h-16 ${value.color} rounded-md flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <value.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-6">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed font-medium">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - NEW */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary"></div>
                <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Our Team</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900">আমাদের নিবেদিতপ্রাণ টিম</h3>
            </div>
            <p className="text-lg text-slate-600 max-w-md font-medium">
              একদল উদ্যমী ও মানবিক মানুষের সমন্বয়ে গঠিত আমাদের এই টিম, যারা নিরলসভাবে কাজ করে যাচ্ছে।
            </p>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { img: '/images/team/member1.jpg' },
              { img: '/images/team/member2.jpg' },
              { img: '/images/team/member3.jpg' },
              { img: '/images/team/member4.jpg' },
              { img: '/images/team/member5.jpg' },
              { img: '/images/team/member6.jpg' },
              { img: '/images/team/member7.jpg' },
              { img: '/images/team/member8.jpg' },
              { img: '/images/team/member-1.jpg' },
              { img: '/images/team/member-2.jpg' },
              { img: '/images/team/member-3.jpg' },
              { img: '/images/team/member-4.jpg' },
              { img: '/images/team/member-5.jpg' },
              { img: '/images/team/member-6.jpg' },
              { img: '/images/team/member-7.jpg' },
              { img: '/images/team/member-8.jpg' },
              { img: '/images/team/member-9.jpg' },
              { img: '/images/team/member-10.jpg' },
              { img: '/images/team/member-11.jpg' },
              { img: '/images/team/member-12.jpg' },
              { img: '/images/team/member-13.jpg' },
              { img: '/images/team/member-14.jpg' },
              { img: '/images/team/member-15.jpg' },
              { img: '/images/team/member-16.jpg' },
              { img: '/images/team/member-17.jpg' },
            ].map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-md overflow-hidden relative">
                  <img 
                    src={member.img} 
                    alt={`Team Member ${idx + 1}`} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">আমাদের সাথে যুক্ত হতে চান?</h2>
          <p className="text-xl text-slate-400 mb-12 font-medium">
            স্বেচ্ছাসেবী হিসেবে বা অনুদান দিয়ে আপনিও আমাদের এই মানবিক অভিযাত্রার অংশ হতে পারেন।
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-md font-bold transition-all shadow-xl shadow-primary/20">
              Join as Volunteer
            </Link>
            <Link to="/donate" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-md font-bold hover:bg-white/20 transition-all">
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
