'use client';
import React, { useState } from 'react';
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import DiscordIcon from '@/components/icons/Discord';
import Link from 'next/link';

const Input = ({ id, label, type = 'text', value, onChange, placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      required
      placeholder={placeholder}
      className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DC143C] transition duration-300"
    />
  </div>
);

const ContactUs = () => {
  const t  = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactDetails = [
    {
      icon: Mail,
      label: t('email'),
      value: 'work@nplcoder.org',
      linkto: 'mailto:work@nplcoder.org'
    },
    {
      icon: Phone,
      label: t('phoneUsa'),
      value: t('usanumber'),
      linkto: 'tel:+16154841629'
    },
    {
      icon: Phone,
      label: t('phoneNepal'),
      value: t('nepalnumber'),
      linkto: 'tel:+9779862021531'
    },
    {
      icon: MapPin,
      label: t('location'),
      value: t('kathmandu'),
    },
  ];

  const socialLinks = [
    { icon: DiscordIcon, href: 'https://discord.gg/kJrvdhmzVd' },
    { icon: Instagram, href: 'https://www.instagram.com/nplcoder/' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/nplcoder/' },
    {icon: Facebook, href:'https://www.facebook.com/people/NPLCoder/61576287650990/'}
    
  ];

  return (
    <main className="relative">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white tracking-tight mb-4">
              {t('title')} <span className="bg-gradient-to-r from-[#DC143C] to-[#003893] text-transparent bg-clip-text">{' '}</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          <div className="flex flex-col xl:flex-row gap-12">
            {/* Left section: Contact Info + Socials */}
            <div className="w-full xl:w-1/2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">{t('contactInfoTitle')}</h2>
                <div className="space-y-6">
                  {contactDetails.map(({ icon: Icon, label, value, linkto }) => (
                    <div key={label}>
                      {linkto ? (
                        <Link href={linkto}>
                          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition duration-300">
                            <div className="w-12 h-12 bg-[#003893] rounded-lg flex items-center justify-center">
                              <Icon className="text-white w-5 h-5" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-800 dark:text-white">{label}</h3>
                              <p className="text-gray-600 dark:text-gray-300 break-all">{value}</p>
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition duration-300">
                          <div className="w-12 h-12 bg-[#003893] rounded-lg flex items-center justify-center">
                            <Icon className="text-white w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800 dark:text-white">{label}</h3>
                            <p className="text-gray-600 dark:text-gray-300 break-all">{value}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 p-2">{t('followUs')}</h3>
                <div className="flex gap-4">
                  {socialLinks.map(({ icon: Icon, href }, idx) => (
                    <a key={idx} href={href} target="_blank" rel="noreferrer"
                      className="w-12 h-12 bg-[#003893] rounded-lg flex items-center justify-center p-2 hover:scale-110 transition duration-300">
                      <Icon className="text-white w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right section: Contact Form */}
            <div className="w-full xl:w-1/2">
              <form
                onSubmit={handleSubmit}
                className="relative rounded-2xl backdrop-blur-lg p-6 lg:p-8 shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">{t('formTitle')}</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      id="name"
                      label={t('fullName')}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                    <Input
                      id="email"
                      type="email"
                      label={t('emailAddress')}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                    />
                  </div>

                  <Input
                    id="subject"
                    label={t('subject')}
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t('subject')}
                  />

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('subject')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DC143C] transition duration-300 resize-none"
                      placeholder={t('messagePlaceholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#003893] text-white py-4 px-6 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition duration-300"
                  >
                    {t('sendButton')}
                  </button>
                </div>
              </form>
            </div>
          </div>
    </main>
  );
};

export default ContactUs;
