import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    website: '',
    afterHours: '',
    schedulingPlatform: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill in the required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch('https://hook.us2.make.com/x8lexiu5f4n6q174dbo6zrwwtrwcdwsn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form data:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-background-light relative" id="booking-form">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="font-unbounded text-3xl sm:text-4xl md:text-5xl font-bold text-navy-custom mb-4">
            Get Your Custom Voice Agent Built
          </h2>
          <p className="text-navy-custom/60 text-sm sm:text-base max-w-xl mx-auto">
            Tell us about your firm to start your free development.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-xl border border-navy-custom/5 p-10 sm:p-14 text-center"
          >
            <span className="material-symbols-outlined text-green-500 text-5xl mb-4">check_circle</span>
            <h3 className="font-unbounded text-2xl font-bold text-navy-custom mb-3">
              You're In!
            </h3>
            <p className="text-navy-custom/60 text-base">
              We'll be in touch within 24 hours to start building your custom voice agent.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-xl border border-navy-custom/5 p-6 sm:p-10 md:p-12"
          >
            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-5 sm:mb-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-navy-custom/50">
                  First and Last Name
                </label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-background-light border border-navy-custom/10 rounded-xl px-4 py-3.5 text-navy-custom focus:border-primary focus:outline-none transition-colors font-medium placeholder:text-navy-custom/25"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-navy-custom/50">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-background-light border border-navy-custom/10 rounded-xl px-4 py-3.5 text-navy-custom focus:border-primary focus:outline-none transition-colors font-medium placeholder:text-navy-custom/25"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            {/* Row 2: Phone + Website */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-5 sm:mb-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-navy-custom/50">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-background-light border border-navy-custom/10 rounded-xl px-4 py-3.5 text-navy-custom focus:border-primary focus:outline-none transition-colors font-medium placeholder:text-navy-custom/25"
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-navy-custom/50">
                  Website URL
                </label>
                <input
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full bg-background-light border border-navy-custom/10 rounded-xl px-4 py-3.5 text-navy-custom focus:border-primary focus:outline-none transition-colors font-medium placeholder:text-navy-custom/25"
                  placeholder="https://yourfirm.com"
                />
              </div>
            </div>

            {/* Row 3: After hours question */}
            <div className="space-y-2 mb-5 sm:mb-6">
              <label className="text-xs font-bold uppercase tracking-widest text-navy-custom/50">
                How do you currently answer after hours calls?
              </label>
              <input
                name="afterHours"
                value={formData.afterHours}
                onChange={handleInputChange}
                className="w-full bg-background-light border border-navy-custom/10 rounded-xl px-4 py-3.5 text-navy-custom focus:border-primary focus:outline-none transition-colors font-medium placeholder:text-navy-custom/25"
                placeholder="e.g. Answering service, voicemail, no solution yet..."
              />
            </div>

            {/* Row 4: Scheduling platform question */}
            <div className="space-y-2 mb-8 sm:mb-10">
              <label className="text-xs font-bold uppercase tracking-widest text-navy-custom/50">
                What platform do you currently schedule on?
              </label>
              <input
                name="schedulingPlatform"
                value={formData.schedulingPlatform}
                onChange={handleInputChange}
                className="w-full bg-background-light border border-navy-custom/10 rounded-xl px-4 py-3.5 text-navy-custom focus:border-primary focus:outline-none transition-colors font-medium placeholder:text-navy-custom/25"
                placeholder="e.g. Calendly, Clio, MyCase, pen and paper..."
              />
            </div>

            {/* Submit */}
            <div className="flex flex-col items-center gap-4">
              <Button
                variant="primary"
                className="w-full sm:w-auto text-base sm:text-lg px-12 py-5 rounded-2xl"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? 'Submitting...' : 'Build My Custom Agent'}
              </Button>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-navy-custom/30">
                No Commitment Required. No Risk Ever.
              </p>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default BookingSection;
