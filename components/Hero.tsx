import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const Hero: React.FC = () => {
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
  const [consentChecked, setConsentChecked] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.website || !formData.afterHours || !formData.schedulingPlatform) {
      alert('Please fill in all fields.');
      return;
    }

    if (!/^\d[\d\s()\-+]*$/.test(formData.phone)) {
      alert('Please enter a valid phone number (numbers only).');
      return;
    }

    if (!consentChecked) {
      alert('Please agree to the marketing communications disclaimer before submitting.');
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

  const inputClasses = "w-full bg-background-light border border-navy-custom/10 rounded-xl px-4 py-3 text-sm text-navy-custom focus:border-primary focus:outline-none transition-colors font-medium placeholder:text-navy-custom/25";
  const labelClasses = "text-[10px] font-bold uppercase tracking-widest text-navy-custom/50";

  return (
    <section className="relative min-h-screen flex items-start pt-24 pb-10 overflow-hidden bg-navy-custom" id="booking-form">
      {/* Background Animated SVG Waves */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-30">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 0.4,
              d: [
                "M-100,400 C150,250 350,550 550,400 C750,250 950,550 1150,400 C1350,250 1550,550 1800,400",
                "M-100,400 C150,150 350,650 550,400 C750,150 950,650 1150,400 C1350,150 1550,650 1800,400"
              ]
            }}
            transition={{
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 2, ease: "easeInOut" },
              d: { duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
            }}
            fill="none"
            stroke="#c4a154"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 0.2,
              d: [
                "M-100,420 C200,300 400,600 600,420 C800,240 1000,600 1200,420 C1400,240 1600,600 1900,420",
                "M-100,420 C200,180 400,720 600,420 C800,120 1000,720 1200,420 C1400,120 1600,720 1900,420"
              ]
            }}
            transition={{
              pathLength: { duration: 2, delay: 0.5, ease: "easeInOut" },
              opacity: { duration: 2, delay: 0.5, ease: "easeInOut" },
              d: { duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
            }}
            fill="none"
            stroke="#c4a154"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 0.15,
              d: [
                "M-100,380 C100,200 300,500 500,380 C700,260 900,500 1100,380 C1300,260 1500,500 1700,380",
                "M-100,380 C100,100 300,600 500,380 C700,160 900,600 1100,380 C1300,160 1500,600 1700,380"
              ]
            }}
            transition={{
              pathLength: { duration: 2, delay: 1, ease: "easeInOut" },
              opacity: { duration: 2, delay: 1, ease: "easeInOut" },
              d: { duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
            }}
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeLinecap="round"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Copy */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="pt-2 lg:pt-6"
          >
            {/* Gold Banner */}
            <div className="inline-block py-2 px-5 sm:px-6 rounded-full bg-primary text-white mb-5 shadow-lg">
              <span className="font-unbounded text-[8px] sm:text-[9px] md:text-[10px] font-medium uppercase tracking-[0.15em]">
                Free 2-Week Find Missed Money Challenge
              </span>
            </div>

            <h1 className="font-unbounded text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.15] mb-4 tracking-tight text-white text-balance">
              Stop missing new clients.
              <br />
              <span className="text-primary italic">Boost Profitability. On Autopilot.</span>
              <br />
              Free Until You See Results.
            </h1>

            <p className="text-sm sm:text-base text-white/50 mb-4 max-w-xl font-light leading-relaxed">
              We want to earn your business through cold, hard results. We'll build a custom AI receptionist for your firm that shows you exactly how many clients you've been missing every week.
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] sm:text-xs text-white/60 font-medium mb-5">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Set up in under 3 days
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Managed for 2 weeks
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Completely free
              </span>
            </div>

            {/* Call to Test It Button */}
            <motion.a
              href="tel:5045477749"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 border-2 border-primary/60 text-primary rounded-2xl px-6 py-3 font-bold text-sm hover:bg-primary/10 transition-colors mb-5"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              504-547-7749 — Call to Test It
            </motion.a>

            <p className="text-[10px] sm:text-xs text-white/30 font-bold uppercase tracking-[0.15em]">
              Only accepting 5 firms due to operational capacity
            </p>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="bg-white rounded-3xl shadow-xl border border-navy-custom/5 p-8 sm:p-10"
              >
                <div className="text-center mb-6">
                  <span className="material-symbols-outlined text-primary text-5xl mb-3">celebration</span>
                  <h3 className="font-unbounded text-xl sm:text-2xl font-bold text-navy-custom mb-2">
                    Congratulations on Getting Started
                  </h3>
                  <p className="text-navy-custom/50 text-sm font-light">
                    Here's what to expect next:
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: 'engineering', text: "We'll build your custom demo agent from information on your Website / Google My Business within 3 days" },
                    { icon: 'bug_report', text: "We'll stress-test it with 200 mock personal injury callers to catch edge cases and finalize the setup" },
                    { icon: 'call', text: 'A member of our team will reach out when it\'s ready' },
                    { icon: 'verified', text: 'You can call it, test it, and request any changes' },
                    { icon: 'calendar_month', text: "Once you approve it, we'll hook it up to your calendar for you" },
                    { icon: 'rocket_launch', text: "We'll launch it, and start booking missed clients as consults instead" },
                  ].map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="bg-primary/10 w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-primary text-base">{step.icon}</span>
                      </div>
                      <p className="text-navy-custom/70 text-sm font-light leading-relaxed pt-1.5">
                        {step.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl shadow-xl border border-navy-custom/5 p-5 sm:p-7"
              >
                <h3 className="font-unbounded text-lg sm:text-xl font-bold text-navy-custom mb-1 text-center">
                  Apply for the 2 Week Challenge
                </h3>
                <p className="text-navy-custom/50 text-xs mb-5 text-center">
                  Tell us about your firm to get started.
                </p>

                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div className="space-y-1">
                    <label className={labelClasses}>First and Last Name</label>
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className={labelClasses}>Email Address</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div className="space-y-1">
                    <label className={labelClasses}>Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className={labelClasses}>Website</label>
                    <input
                      name="website"
                      type="text"
                      value={formData.website}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder="yourfirm.com"
                      required
                    />
                  </div>
                </div>

                {/* Row 3: After hours question */}
                <div className="space-y-1 mb-3">
                  <label className={labelClasses}>How do you currently answer after hours calls?</label>
                  <input
                    name="afterHours"
                    value={formData.afterHours}
                    onChange={handleInputChange}
                    className={inputClasses}
                    placeholder="e.g. Answering service, voicemail, no solution yet..."
                    required
                  />
                </div>

                {/* Row 4: Scheduling platform */}
                <div className="space-y-1 mb-4">
                  <label className={labelClasses}>What platform do you currently schedule on?</label>
                  <input
                    name="schedulingPlatform"
                    value={formData.schedulingPlatform}
                    onChange={handleInputChange}
                    className={inputClasses}
                    placeholder="e.g. Calendly, Clio, MyCase, pen and paper..."
                    required
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2.5 mb-5">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consentChecked}
                    onChange={(e) => setConsentChecked(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-navy-custom/20 text-primary focus:ring-primary cursor-pointer shrink-0"
                  />
                  <label htmlFor="consent" className="text-[10px] text-navy-custom/40 leading-relaxed cursor-pointer">
                    By submitting this form, you consent to being contacted by members of our team via phone, email, or text message for marketing, promotional, and informational purposes. You may opt out at any time. Your information will not be shared with third parties.
                  </label>
                </div>

                {/* Submit */}
                <div className="flex flex-col items-center gap-3">
                  <Button
                    variant="primary"
                    icon="arrow_forward"
                    className="w-full text-sm sm:text-base px-8 py-4 rounded-2xl"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? 'Submitting...' : 'Apply for the Challenge'}
                  </Button>
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] text-navy-custom/30">
                    No Commitment Required. No Risk Ever.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
