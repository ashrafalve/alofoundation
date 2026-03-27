import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Image as ImageIcon } from 'lucide-react';

const images = [
  { url: '/images/gallery-1.jpg', title: 'Community Support' },
  { url: '/images/gallery-2.jpg', title: 'Relief Distribution' },
  { url: '/images/gallery-3.jpg', title: 'Youth Seminar' },
  { url: '/images/gallery-4.jpg', title: 'Education Support' },
  { url: '/images/gallery-5.jpg', title: 'Health Camp' },
  { url: '/images/gallery-6.jpg', title: 'Volunteer Meeting' },
  { url: '/images/gallery-7.jpg', title: 'Medical Checkup' },
  { url: '/images/gallery-8.jpg', title: 'Classroom Session' },
  { url: '/images/gallery-9.jpg', title: 'Food Distribution' },
  { url: '/images/gallery-10.jpg', title: 'Youth Leadership' },
  { url: '/images/gallery-11.jpg', title: 'School Supplies' },
  { url: '/images/gallery-12.jpg', title: 'Community Gathering' },
  { url: '/images/gallery-13.jpg', title: 'Eye Care Camp' },
  { url: '/images/gallery-14.jpg', title: 'Emergency Relief' },
  { url: '/images/gallery-15.jpg', title: 'Skills Training' },
  { url: '/images/gallery-16.jpg', title: 'Literacy Program' },
  { url: '/images/gallery-17.jpg', title: 'Local Outreach' },
  { url: '/images/gallery-18.jpg', title: 'Vaccination Drive' },
  { url: '/images/gallery-19.jpg', title: 'Winter Clothing' },
  { url: '/images/gallery-20.jpg', title: 'Career Guidance' },
  { url: '/images/gallery-21.jpg', title: 'Scholarship Award' },
  { url: '/images/gallery-22.jpg', title: 'Neighborhood Cleanup' },
  { url: '/images/gallery-23.jpg', title: 'Blood Donation' },
  { url: '/images/gallery-24.jpg', title: 'Disaster Response' },
];

export default function Gallery() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Page Header */}
      <section className="relative pt-48 pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/gallery-3.jpg" 
            alt="Gallery Header" 
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
              আমাদের <span className="text-primary">গ্যালারি</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
              আমাদের কার্যক্রমের কিছু স্থিরচিত্র। প্রতিটি ছবি একটি পরিবর্তনের গল্প বলে এবং আমাদের নিবেদিত প্রচেষ্টার সাক্ষী।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16 gap-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary"></div>
              <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Our Moments</h2>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-widest">
              <ImageIcon size={18} />
              <span>{images.length} Photos</span>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square overflow-hidden rounded-md bg-slate-100 shadow-lg hover:shadow-2xl transition-all"
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <h3 className="text-white font-bold text-xl mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Foundation Activity</h3>
                  <div className="w-8 h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">আমাদের সাথে <br /> যুক্ত হোন</h2>
          <p className="text-2xl text-slate-400 mb-14 leading-relaxed font-medium">
            আপনার তোলা ছবি বা আমাদের কার্যক্রমের কোনো মুহূর্ত শেয়ার করতে চাইলে আমাদের সাথে যোগাযোগ করুন।
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white px-12 py-5 rounded-md font-bold text-xl shadow-2xl shadow-primary/40 transition-all">
              Contact Us
            </Link>
            <Link to="/donate" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-md font-bold text-xl hover:bg-white/20 transition-all">
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
