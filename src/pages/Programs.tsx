import { motion } from 'motion/react';
import { Book, HeartPulse, Soup, Users2, GraduationCap, HandHelping, ArrowRight, CheckCircle2, Trophy, Trees } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: 'Education for All',
    icon: GraduationCap,
    desc: 'অসহায় ও মেধাবী শিক্ষার্থীদের স্কুল ফি, বই এবং শিক্ষা উপকরণ প্রদান। আমরা বিশ্বাস করি শিক্ষাই জাতির মেরুদণ্ড এবং প্রতিটি শিশুর শিক্ষার অধিকার রয়েছে।',
    color: 'bg-blue-50 text-blue-600',
    features: ['Scholarships', 'School Supplies', 'Literacy Programs']
  },
  {
    title: 'Healthcare Support and Blood Donation',
    icon: HeartPulse,
    desc: 'বিনামূল্যে স্বাস্থ্য পরীক্ষা, চক্ষু শিবির এবং জরুরি ঔষধ বিতরণ কার্যক্রম। প্রান্তিক মানুষের কাছে আধুনিক স্বাস্থ্যসেবা পৌঁছে দেওয়াই আমাদের লক্ষ্য।',
    color: 'bg-rose-50 text-rose-600',
    features: ['Free Medical Camps', 'Medicine Support', 'Health Awareness']
  },
  {
    title: 'Food Security',
    icon: Soup,
    desc: 'দুস্থ ও অসহায় পরিবারের মাঝে নিয়মিত খাদ্য সামগ্রী বিতরণ এবং পুষ্টি সচেতনতা বৃদ্ধি। ক্ষুধার্ত মানুষের মুখে হাসি ফোটানোই আমাদের সার্থকতা।',
    color: 'bg-orange-50 text-orange-600',
    features: ['Food Packages', 'Nutrition Education', 'Emergency Relief']
  },
  {
    title: 'Youth Empowerment',
    icon: Users2,
    desc: 'তরুণদের কারিগরি ও দক্ষতা উন্নয়নমূলক প্রশিক্ষণ প্রদান। আমরা চাই তরুণরা স্বাবলম্বী হয়ে দেশের উন্নয়নে অবদান রাখুক।',
    color: 'bg-emerald-50 text-emerald-600',
    features: ['Skill Training', 'Leadership Workshops', 'Job Placement']
  },
  {
    title: 'Disaster Relief',
    icon: HandHelping,
    desc: 'বন্যা, ঘূর্ণিঝড় বা যেকোনো প্রাকৃতিক দুর্যোগে ক্ষতিগ্রস্তদের পাশে দাঁড়ানো। জরুরি ত্রাণ ও পুনর্বাসন কার্যক্রম আমাদের অগ্রাধিকার।',
    color: 'bg-purple-50 text-purple-600',
    features: ['Emergency Rescue', 'Relief Distribution', 'Rehabilitation']
  },
  {
    title: 'Social Awareness',
    icon: Book,
    desc: 'বাল্যবিবাহ রোধ, মাদক বিরোধী প্রচারণা এবং সামাজিক সচেতনতা বৃদ্ধিতে নিয়মিত ক্যাম্পেইন ও সেমিনার আয়োজন।',
    color: 'bg-amber-50 text-amber-600',
    features: ['Anti-Drug Campaign', 'Child Marriage Prevention', 'Rights Awareness']
  },
  {
    title: 'Sports Events',
    icon: Trophy,
    desc: 'তরুণদের শারীরিক ও মানসিক বিকাশে নিয়মিত ক্রীড়া প্রতিযোগিতার আয়োজন। খেলাধুলার মাধ্যমে আমরা যুবসমাজকে মাদক ও অপসংস্কৃতি থেকে দূরে রাখতে চাই।',
    color: 'bg-cyan-50 text-cyan-600',
    features: ['Annual Sports Day', 'Cricket Tournaments', 'Football Matches']
  },
  {
    title: 'Plantation Program',
    icon: Trees,
    desc: 'পরিবেশ রক্ষায় ও জলবায়ু পরিবর্তনের ঝুঁকি কমাতে আমরা নিয়মিত বৃক্ষরোপণ কর্মসূচি পালন করি। সবুজ পৃথিবী গড়তে আমাদের এই ক্ষুদ্র প্রয়াস।',
    color: 'bg-green-50 text-green-600',
    features: ['Tree Distribution', 'Reforestation', 'Environmental Awareness']
  }
];

export default function Programs() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Page Header */}
      <section className="relative pt-48 pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/gallery-4.jpg" 
            alt="Programs Header" 
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
              আমাদের <span className="text-primary">কার্যক্রম</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
              আলো ফাউন্ডেশন বহুমুখী সামাজিক উন্নয়নমূলক কাজ করে থাকে। আমাদের প্রতিটি কার্যক্রম পরিচালিত হয় স্বচ্ছতা ও নিষ্ঠার সাথে।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {programs.map((program, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-md border border-slate-100 shadow-xl hover:shadow-2xl transition-all group flex flex-col h-full"
              >
                <div className={`w-12 h-12 ${program.color} rounded-md flex items-center justify-center mb-3 group-hover:scale-110 transition-transform sm:w-14 sm:h-14 sm:mb-4`}>
                  <program.icon size={20} className="sm:size-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-primary transition-colors">{program.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-4 grow">
                  {program.desc}
                </p>

                <div className="space-y-2 mb-4 sm:mb-6">
                  {program.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="inline-flex items-center gap-1 sm:gap-2 text-primary font-bold text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest border-b-2 border-transparent hover:border-primary transition-all w-fit mt-auto">
                  Get Involved <ArrowRight size={10} className="sm:size-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Students Helped', value: '50+' },
              { label: 'Medical Camps', value: '2+' },
              { label: 'Food Packages', value: '1,000+' },
              { label: 'Villages Covered', value: '5+' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">আমাদের কার্যক্রমে <br /> অংশ নিন</h2>
          <p className="text-2xl text-slate-400 mb-14 leading-relaxed font-medium">
            আপনার একটি ছোট অবদান আমাদের কার্যক্রমকে আরও গতিশীল করতে পারে। আজই আমাদের সাথে যুক্ত হোন।
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link to="/donate" className="bg-primary hover:bg-primary-dark text-white px-12 py-5 rounded-md font-bold text-xl shadow-2xl shadow-primary/40 transition-all">
              Donate Now
            </Link>
            <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-md font-bold text-xl hover:bg-white/20 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
