export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
] as const;

export const site = {
  nameBn: 'আলো ফাউন্ডেশন',
  nameEn: 'Alo Foundation',
  tagline: 'A voluntary, non-political public welfare organisation',
  taglineBn: 'একটি সেচ্ছাসেবী জনকল্যাণমুলক ও অরাজনৈতিক প্রতিষ্ঠান',
  established: 2025,
  logo: '/logo/alofoundationlogo.png',
  address: {
    line1: 'যশোদল, কিশোরগঞ্জ সদর',
    line2: 'কিশোরগঞ্জ, বাংলাদেশ',
    mapsUrl: 'https://maps.app.goo.gl/cYKNmkxtCMzTKV537',
    embedUrl:
      'https://www.google.com/maps?q=Josdol%2C%20Kishoreganj%2C%20Bangladesh&z=14&hl=en&output=embed',
  },
  phone: {
    display: '01874144222',
    intl: '+8801874144222',
    href: 'tel:+8801874144222',
  },
  email: {
    display: 'alofoundationjoshodol@gmail.com',
    href: 'mailto:alofoundationjoshodol@gmail.com',
  },
  facebook: {
    display: 'ফেসবুক গ্রুপ',
    url: 'https://www.facebook.com/groups/1878971189641261',
  },
} as const;

export const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Our Programs', path: '/programs' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Become a Volunteer', path: '/contact' },
  { name: 'Donate', path: '/donate' },
  { name: 'Contact Us', path: '/contact' },
] as const;

export const impactStats = [
  { value: '30+', valueBn: '৩০+', label: 'Active volunteers', labelBn: 'সক্রিয় স্বেচ্ছাসেবক' },
  { value: '400+', valueBn: '৪০০+', label: 'Lives impacted', labelBn: 'জীবন প্রভাবিত' },
  { value: '5+', valueBn: '৫+', label: 'Projects completed', labelBn: 'প্রকল্প সম্পন্ন' },
  { value: '100%', valueBn: '১০০%', label: 'Transparency', labelBn: 'স্বচ্ছতা' },
] as const;
