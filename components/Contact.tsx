import React from 'react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = React.useState<{ type: 'success' | 'error' | ''; message: string }>({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to connect to the server.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-brand-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-brand-100">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Get in Touch</h3>
            <p className="text-gray-500">Ready to transform your user experience?</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-orange-50 border-transparent focus:border-brand-500 focus:bg-white focus:ring-0 text-gray-700 placeholder-gray-400 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-orange-50 border-transparent focus:border-brand-500 focus:bg-white focus:ring-0 text-gray-700 placeholder-gray-400 transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="w-full px-4 py-3 rounded-lg bg-orange-50 border-transparent focus:border-brand-500 focus:bg-white focus:ring-0 text-gray-700 placeholder-gray-400 transition-colors resize-none"
              ></textarea>
            </div>

            {status.message && (
              <div className={`text-center p-3 rounded-lg ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold py-4 rounded-full shadow-lg shadow-brand-500/30 transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Connect with our Engineers'}
            </button>
          </form>

          <div className="mt-12 flex justify-center space-x-6">
            <a href="https://www.linkedin.com/company/gennoctua" target="_blank" rel="noopener noreferrer" className="p-3 bg-orange-50 rounded-xl text-brand-500 hover:bg-brand-500 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://www.facebook.com/p/Gennoctua-Gen-61566411242331/" target="_blank" rel="noopener noreferrer" className="p-3 bg-orange-50 rounded-xl text-brand-500 hover:bg-brand-500 hover:text-white transition-colors">
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/gennoctua/" target="_blank" rel="noopener noreferrer" className="p-3 bg-orange-50 rounded-xl text-brand-500 hover:bg-brand-500 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;