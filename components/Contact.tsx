import React from 'react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-brand-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-brand-100">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Get in Touch</h3>
            <p className="text-gray-500">Ready to transform your user experience?</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg bg-orange-50 border-transparent focus:border-brand-500 focus:bg-white focus:ring-0 text-gray-700 placeholder-gray-400 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-orange-50 border-transparent focus:border-brand-500 focus:bg-white focus:ring-0 text-gray-700 placeholder-gray-400 transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Message"
                className="w-full px-4 py-3 rounded-lg bg-orange-50 border-transparent focus:border-brand-500 focus:bg-white focus:ring-0 text-gray-700 placeholder-gray-400 transition-colors resize-none"
              ></textarea>
            </div>
            
            <button
              type="button"
              className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold py-4 rounded-full shadow-lg shadow-brand-500/30 transition-all transform hover:-translate-y-1"
            >
              Connect with our Engineers
            </button>
          </form>

          <div className="mt-12 flex justify-center space-x-6">
            <a href="#" className="p-3 bg-orange-50 rounded-xl text-brand-500 hover:bg-brand-500 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 bg-orange-50 rounded-xl text-brand-500 hover:bg-brand-500 hover:text-white transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="p-3 bg-orange-50 rounded-xl text-brand-500 hover:bg-brand-500 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;