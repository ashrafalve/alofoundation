import { motion } from 'motion/react';
import { 
  ArrowRight, Heart, Users, BookOpen, ShieldCheck, 
  CheckCircle2, Quote, Facebook, HelpCircle, 
  Award, Globe, Zap, User
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isEnglish, setIsEnglish] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEnglish((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const faqs = [
    {
      q: "আলো ফাউন্ডেশন কীভাবে পরিচালিত হয়?",
      a: "আলো ফাউন্ডেশন একটি সম্পূর্ণ অরাজনৈতিক ও সেচ্ছাসেবী প্রতিষ্ঠান। এটি একটি কার্যনির্বাহী কমিটির মাধ্যমে পরিচালিত হয় এবং সকল সিদ্ধান্ত স্বচ্ছতার সাথে নেওয়া হয়।"
    },
    {
      q: "আমি কীভাবে অনুদান দিতে পারি?",
      a: "আপনি আমাদের 'Donate' পেজে গিয়ে বিকাশ, নগদ বা ব্যাংক ট্রান্সফারের মাধ্যমে সরাসরি অনুদান দিতে পারেন। আপনার প্রতিটি টাকা আর্তমানবতার সেবায় ব্যয় করা হয়।"
    },
    {
      q: "স্বেচ্ছাসেবী হিসেবে যুক্ত হওয়ার প্রক্রিয়া কী?",
      a: "আপনি আমাদের 'Contact' পেজের মাধ্যমে বা সরাসরি আমাদের অফিসে এসে সদস্য পদের জন্য আবেদন করতে পারেন। আমরা সবসময় উদ্যমী তরুণদের স্বাগত জানাই।"
    },
    {
      q: "আপনাদের প্রধান কার্যক্রমগুলো কী কী?",
      a: "আমাদের প্রধান কার্যক্রমের মধ্যে রয়েছে শিক্ষা সহায়তা, বিনামূল্যে চিকিৎসা সেবা, বৃক্ষরোপণ কর্মসূচি এবং দুর্যোগকালীন ত্রাণ সহায়তা।"
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-[95vh] flex items-center pt-32 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/gallery-1.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-[1.05] mb-8 tracking-tight">
              Spreading <span className="text-primary">Light</span> <br />
              Across Humanity
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl leading-relaxed font-medium">
              আলো ফাউন্ডেশন একটি সেচ্ছাসেবী জনকল্যাণমুলক ও অরাজনৈতিক প্রতিষ্ঠান। কিশোরগঞ্জের যশোদল থেকে আমাদের যাত্রা শুরু হয়েছে সমাজের অন্ধকার দূর করে শিক্ষার আলো ও মানবিক সহায়তা পৌঁছে দিতে।
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/donate" className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-md font-bold shadow-2xl shadow-primary/30 transition-all flex items-center gap-3 group text-lg">
                Donate Now <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="bg-white/5 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-md font-bold transition-all hover:bg-white/15 text-lg">
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section - Refined */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-100 relative z-20 mt-8 mx-4 md:mx-auto max-w-6xl rounded-md shadow-2xl">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { labelEn: 'Active Volunteers', labelBn: 'সক্রিয় স্বেচ্ছাসেবক', valueEn: '30+', valueBn: '৩০+', icon: Users, color: 'text-blue-600' },
              { labelEn: 'Lives Impacted', labelBn: 'জীবন প্রভাবিত', valueEn: '400+', valueBn: '৪০০+', icon: Heart, color: 'text-rose-600' },
              { labelEn: 'Projects Done', labelBn: 'প্রকল্প সম্পন্ন', valueEn: '5+', valueBn: '৫+', icon: BookOpen, color: 'text-emerald-600' },
              { labelEn: 'Trust Rating', labelBn: 'বিশ্বাস রেটিং', valueEn: '100%', valueBn: '১০০%', icon: ShieldCheck, color: 'text-amber-600' },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-row gap-5 group">
                <div className="w-14 h-14 bg-slate-50 rounded-md flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/5 transition-all duration-500">
                  <stat.icon size={28} />
                </div>
                <div className="min-w-[120px]">
                  <p className="text-3xl font-extrabold text-slate-900 leading-none mb-2 tracking-tight h-10 flex items-center justify-center lg:justify-start">{isEnglish ? stat.valueEn : stat.valueBn}</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest leading-tight h-4">{isEnglish ? stat.labelEn : stat.labelBn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - NEW */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-12 bg-primary"></div>
                  <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Our Purpose</h2>
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-6">আমাদের লক্ষ্য ও উদ্দেশ্য</h3>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  আলো ফাউন্ডেশন একটি উন্নত ও মানবিক সমাজ গঠনের স্বপ্ন দেখে। আমাদের প্রতিটি কার্যক্রম পরিচালিত হয় সমাজের পিছিয়ে পড়া মানুষের জীবনমান উন্নয়নের লক্ষ্যে।
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-8 bg-slate-50 rounded-md border-l-4 border-primary">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">আমাদের লক্ষ্য (Mission)</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    শিক্ষা, স্বাস্থ্য ও মানবিক সহায়তার মাধ্যমে সমাজের অন্ধকার দূর করে প্রতিটি মানুষের মাঝে আশার আলো জ্বালিয়ে দেওয়া।
                  </p>
                </div>
                <div className="p-8 bg-slate-50 rounded-md border-l-4 border-blue-600">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">আমাদের স্বপ্ন (Vision)</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    একটি বৈষম্যহীন ও স্বনির্ভর সমাজ যেখানে প্রতিটি মানুষ মৌলিক অধিকার ও সম্মানের সাথে বেঁচে থাকতে পারবে।
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-md overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop" 
                  alt="Mission" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-md shadow-2xl hidden md:block">
                <p className="text-4xl font-bold mb-1">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest">Transparency</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section - NEW */}
      <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6">Our Core Values</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white">যেসব আদর্শে আমরা বিশ্বাসী</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', desc: 'আমরা আমাদের প্রতিটি কাজে সততা ও নৈতিকতা বজায় রাখি।', icon: ShieldCheck },
              { title: 'Empathy', desc: 'মানুষের কষ্টের প্রতি সহানুভূতিশীল হওয়া আমাদের মূল শক্তি।', icon: Heart },
              { title: 'Innovation', desc: 'সমস্যা সমাধানে আমরা নতুন ও কার্যকর উপায় খুঁজি।', icon: Zap },
              { title: 'Unity', desc: 'একসাথে কাজ করার মাধ্যমেই বড় পরিবর্তন সম্ভব।', icon: Users },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 transition-all group"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-md flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <value.icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-4 text-white">{value.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed font-medium">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Refined */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary"></div>
              <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Who We Are</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-[1.2]">
              আলো ফাউন্ডেশন: একটি সেচ্ছাসেবী ও অরাজনৈতিক প্রতিষ্ঠান
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              যশোদল, কিশোরগঞ্জ সদর থেকে আমাদের যাত্রা শুরু হয়েছে সমাজের পিছিয়ে পড়া মানুষের কল্যাণে। আমরা বিশ্বাস করি, সম্মিলিত প্রচেষ্টায় একটি সুন্দর সমাজ গঠন সম্ভব। অরাজনৈতিক হওয়ার কারণে আমরা সমাজের সকল স্তরের মানুষের সাথে মিলেমিশে কাজ করতে সক্ষম।
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                'অরাজনৈতিক ও জনকল্যাণমুলক', 
                'স্বচ্ছ ও জবাবদিহিতামূলক', 
                'যশোদল ও কিশোরগঞ্জ কেন্দ্রিক', 
                'শিক্ষার আলো ছড়িয়ে দেওয়া',
                'জরুরি ত্রাণ সহায়তা',
                'স্বাস্থ্য সচেতনতা বৃদ্ধি'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-800 font-semibold text-sm">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} className="text-primary" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-md font-bold hover:bg-slate-800 transition-all group">
              Learn Our Full Story <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
                alt="Community Work" 
                className="rounded-md shadow-2xl w-full aspect-[4/3] object-cover border-8 border-white"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Decorative background circles */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-100 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Programs Section - Refined */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary"></div>
                <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Our Focus</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900">যেসব ক্ষেত্রে আমরা কাজ করি</h3>
            </div>
            <Link to="/programs" className="inline-flex items-center gap-2 text-primary font-bold hover:underline group text-lg">
              Explore All Programs <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Education Support',
                desc: 'অসহায় ও মেধাবী শিক্ষার্থীদের শিক্ষা উপকরণ ও বৃত্তি প্রদান। আমরা বিশ্বাস করি শিক্ষাই জাতির মেরুদণ্ড।',
                img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop',
                icon: BookOpen
              },
              {
                title: 'Healthcare Support and Blood Donation',
                desc: 'বিনামূল্যে চিকিৎসা ক্যাম্প এবং জরুরি ঔষধ সহায়তা। প্রান্তিক মানুষের কাছে স্বাস্থ্যসেবা পৌঁছে দেওয়াই আমাদের লক্ষ্য।',
                img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop',
                icon: Heart
              },
              {
                title: 'Social Welfare',
                desc: 'বৃক্ষরোপণ কর্মসূচি ও দুর্যোগকালীন ত্রাণ সহায়তা কার্যক্রম। বিপদে মানুষের পাশে দাঁড়ানোই আমাদের ধর্ম।',
                img: '/images/gallery-17.jpg',
                icon: Users
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -10 }}
                className="pro-card group overflow-hidden flex flex-col h-full"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-md flex items-center justify-center text-primary shadow-lg">
                    <item.icon size={24} />
                  </div>
                </div>
                <div className="p-10 flex-grow flex flex-col">
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-slate-600 text-base leading-relaxed mb-8 flex-grow font-medium">{item.desc}</p>
                  <Link to="/programs" className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest border-b-2 border-transparent hover:border-primary transition-all w-fit">
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories / Impact Section - NEW */}
      <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6">Success Stories</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">আমাদের কাজের প্রভাব</h3>
            <p className="text-xl text-slate-300 font-medium">
              প্রতিটি ছোট পদক্ষেপ একটি বড় পরিবর্তনের সূচনা করে। আমাদের কিছু সফল কার্যক্রমের গল্প।
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: "ঈদ উপহার প্রজেক্ট",
                desc: "অসহায় ও সুবিধাবঞ্চিত পরিবারের মাঝে ঈদ সামগ্রী ও উপহার বিতরণ করে তাদের মুখে হাসি ফোটানো।",
                img: "/images/gallery-12.jpg",
                tag: "Relief"
              },
              {
                title: "বিনামূল্যে চিকিৎসা ক্যাম্প",
                desc: "সাধারণ মানুষের জন্য বিনামূল্যে স্বাস্থ্যসেবা, বিশেষজ্ঞ পরামর্শ এবং জরুরি ঔষধ প্রদান কার্যক্রম।",
                img: "/images/gallery-24.jpg",
                tag: "Health"
              },
              {
                title: "রক্ত দান ক্যাম্প",
                desc: "মুমূর্ষু রোগীদের জীবন বাঁচাতে নিয়মিত রক্ত দান কর্মসূচি এবং জনসচেতনতা বৃদ্ধি।",
                img: "/images/gallery-15.jpg",
                tag: "Health"
              },
              {
                title: "বৃক্ষরোপণ কর্মসূচি",
                desc: "পরিবেশ রক্ষায় ও জলবায়ু পরিবর্তনের ঝুঁকি কমাতে আমরা নিয়মিত বৃক্ষরোপণ কর্মসূচি পালন করি।",
                img: "/images/gallery-18.jpg",
                tag: "Environment"
              }
            ].map((story, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col md:flex-row bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:bg-white/10 transition-all duration-500"
              >
                <div className="md:w-2/5 overflow-hidden">
                  <img src={story.img} alt={story.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="md:w-3/5 p-8 md:p-10">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-sm mb-4">{story.tag}</span>
                  <h4 className="text-2xl font-bold mb-4 text-white">{story.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">{story.desc}</p>
                  <Link to="/gallery" className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors">
                    View Gallery <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - NEW */}
      <section className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">মানুষ আমাদের সম্পর্কে যা বলে</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "আব্দুর রহিম",
                role: "স্থানীয় বাসিন্দা",
                text: "আলো ফাউন্ডেশনের কাজগুলো সত্যিই প্রশংসনীয়। তারা আমাদের এলাকার অসহায় মানুষের জন্য যে সহায়তা করছে তা অতুলনীয়।"
              },
              {
                name: "জেসমিন আক্তার",
                role: "শিক্ষিকা",
                text: "শিক্ষার্থীদের জন্য তাদের শিক্ষা উপকরণ বিতরণ কার্যক্রম অনেক দরিদ্র পরিবারের মুখে হাসি ফুটিয়েছে।"
              },
              {
                name: "কামাল হোসেন",
                role: "স্বেচ্ছাসেবী",
                text: "এই সংগঠনের সাথে যুক্ত হতে পেরে আমি গর্বিত। এখানে কাজ করার মাধ্যমে আমি প্রকৃত মানসিক শান্তি পাই।"
              }
            ].map((t, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-slate-50 p-10 rounded-md border border-slate-100 relative"
              >
                <Quote className="absolute top-8 right-8 text-primary/10 w-16 h-16" />
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
                    <User size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 italic leading-relaxed font-medium relative z-10">
                  "{t.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - NEW */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary"></div>
                <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Common Questions</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                আপনার মনে কি কোনো প্রশ্ন আছে?
              </h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                আলো ফাউন্ডেশন সম্পর্কে সাধারণ কিছু প্রশ্নের উত্তর এখানে দেওয়া হলো। আরও জানতে আমাদের সাথে সরাসরি যোগাযোগ করতে পারেন।
              </p>
              <a 
                href="https://www.facebook.com/groups/1878971189641261" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-md font-bold hover:bg-primary-dark transition-all shadow-xl shadow-primary/20"
              >
                Join our Community <Facebook size={20} />
              </a>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-lg font-bold text-slate-900 flex items-center gap-4">
                      <HelpCircle size={20} className="text-primary shrink-0" />
                      {faq.q}
                    </span>
                    <motion.span 
                      animate={{ rotate: activeFaq === idx ? 180 : 0 }}
                      className="text-slate-400"
                    >
                      <ArrowRight size={20} className="rotate-90" />
                    </motion.span>
                  </button>
                  <motion.div 
                    initial={false}
                    animate={{ height: activeFaq === idx ? 'auto' : 0, opacity: activeFaq === idx ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pt-2 text-slate-600 leading-relaxed font-medium border-t border-slate-100">
                      {faq.a}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Gallery Preview - Refined */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Visual Stories</h2>
              <h3 className="text-4xl font-bold text-slate-900">আমাদের কার্যক্রমের কিছু মুহূর্ত</h3>
            </div>
            <Link to="/gallery" className="inline-flex items-center gap-2 text-primary font-bold hover:underline group text-lg">
              View Full Gallery <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              '/images/gallery-3.jpg',
              '/images/gallery-7.jpg',
              '/images/gallery-11.jpg',
              '/images/gallery-19.jpg',
            ].map((url, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02 }}
                className="aspect-square rounded-md overflow-hidden shadow-lg border-4 border-white group relative"
              >
                <img src={url} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facebook Group CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white p-12 md:p-20 rounded-md shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">আমাদের ফেসবুক গ্রুপে যোগ দিন</h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                আলো ফাউন্ডেশনের সকল আপডেট পেতে, আমাদের কার্যক্রম সম্পর্কে জানতে এবং আমাদের মানবিক কমিউনিটির অংশ হতে আমাদের অফিসিয়াল ফেসবুক গ্রুপে যুক্ত হন।
              </p>
            </div>
            <a 
              href="https://www.facebook.com/groups/1878971189641261" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white px-12 py-5 rounded-md font-bold text-xl shadow-2xl shadow-primary/30 transition-all flex items-center gap-3 group"
            >
              ফেসবুক গ্রুপে যোগ দিন <Facebook size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section - Refined */}
      <section className="py-32 bg-slate-900 text-white text-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-tight text-white">আপনিও হতে পারেন <br /> এই আলোর সারথি</h2>
            <p className="text-2xl text-slate-400 mb-14 leading-relaxed font-medium">
              আপনার সামান্য অনুদান বা স্বেচ্ছাসেবা বদলে দিতে পারে একটি জীবন। আজই আমাদের সাথে যুক্ত হোন এবং সমাজের অন্ধকার দূর করতে সহায়তা করুন।
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <Link to="/donate" className="bg-primary hover:bg-primary-dark text-white px-12 py-5 rounded-md font-bold text-xl shadow-2xl shadow-primary/40 transition-all hover:-translate-y-1">
                Donate Now
              </Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-md font-bold text-xl hover:bg-white/20 transition-all">
                Join as Volunteer
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
