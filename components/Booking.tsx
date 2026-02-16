import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';

const BookingSection: React.FC = () => {
  const [step, setStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    firm: '',
    decisionMaker: 'yes',
    revenue: '',
    problem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = async () => {
    // Basic validation
    if (step === 1) {
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.firm || !formData.problem) {
            alert("Please fill in the required fields.");
            return;
        }

        setIsSubmitting(true);
        
        // Transform data for Webhook: Ensure decisionMaker is strictly "Yes" or "No"
        const payload = {
            ...formData,
            decisionMaker: formData.decisionMaker === 'no' ? 'No' : 'Yes' // Maps 'yes' and 'partner' to 'Yes'
        };

        try {
            await fetch('https://hook.us2.make.com/x8lexiu5f4n6q174dbo6zrwwtrwcdwsn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
        } catch (error) {
            console.error("Error submitting form data:", error);
            // We proceed even if the webhook fails, or you could alert the user.
        } finally {
            setIsSubmitting(false);
        }
    }
    setStep(step + 1);
  };

  useEffect(() => {
    if (step === 2) {
      // Initialize Cal.com embed
      (function (C: any, A, L) { let p = function (a: any, ar: any) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      
      const cal = (window as any).Cal;
      cal("init", "30min", {origin:"https://app.cal.com"});

      // Delay execution slightly to ensure DOM element is rendered by React/Framer Motion
      const timer = setTimeout(() => {
          cal.ns["30min"]("inline", {
            elementOrSelector:"#my-cal-inline-30min",
            config: {"layout":"week_view","useSlotsViewOnSmallScreen":"true"},
            calLink: "hunter-appleton-a9ea1d/30min",
          });

          cal.ns["30min"]("ui", {
            "styles": {
                "branding": {
                    "brandColor": "#0A1628"
                }
            },
            "cssVarsPerTheme":{
                "light":{"cal-brand":"#0A1628"},
                "dark":{"cal-brand":"#c4a154"}
            },
            "hideEventTypeDetails":false,
            "layout":"week_view"
          });
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <section className="py-24 bg-white relative" id="booking-form">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
           <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
              Application
            </span>
          <h2 className="font-unbounded text-4xl md:text-5xl font-bold text-navy-custom mb-6">
            Secure Your Strategy Session
          </h2>
          <p className="text-navy-custom/60 max-w-2xl mx-auto">
            Fill out the details below to schedule your consultation. We only work with firms we are 100% confident we can help.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-navy-custom/5 overflow-hidden flex flex-col md:flex-row min-h-[650px]">
          
          {/* Sidebar / Progress */}
          <div className="bg-navy-custom p-10 md:w-1/3 text-white flex flex-col justify-between relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             
             <div className="relative z-10">
                <div className="font-unbounded text-2xl font-bold mb-10">Loquitir</div>
                
                <div className="space-y-8">
                    <div className={`flex items-center gap-4 transition-opacity duration-300 ${step === 1 ? 'opacity-100' : 'opacity-40'}`}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border ${step === 1 ? 'bg-primary border-primary text-white' : 'border-white/20 text-white/50'}`}>1</div>
                        <div>
                            <p className="font-bold text-sm">Firm Details</p>
                            <p className="text-xs opacity-60">Qualification</p>
                        </div>
                    </div>
                    <div className={`flex items-center gap-4 transition-opacity duration-300 ${step === 2 ? 'opacity-100' : 'opacity-40'}`}>
                         <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border ${step === 2 ? 'bg-primary border-primary text-white' : 'border-white/20 text-white/50'}`}>2</div>
                        <div>
                            <p className="font-bold text-sm">Select Time</p>
                            <p className="text-xs opacity-60">Calendar Sync</p>
                        </div>
                    </div>
                </div>
             </div>

             <div className="relative z-10 mt-auto">
                 <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-primary mb-2">lock</span>
                    <p className="text-xs opacity-60 leading-relaxed">
                        Your information is secure. This session is a 1-on-1 strategy audit, not a sales pitch.
                    </p>
                 </div>
             </div>
          </div>

          {/* Form Area */}
          <div className="p-8 md:p-12 md:w-2/3 bg-background-light relative">
            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="h-full flex flex-col"
                    >
                        <h3 className="font-unbounded text-2xl font-bold text-navy-custom mb-8">See if your firm qualifies</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-navy-custom/50">First Name</label>
                                <input 
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent border-b border-navy-custom/20 py-3 text-navy-custom focus:border-primary focus:outline-none transition-colors font-medium placeholder:text-navy-custom/20"
                                    placeholder="John"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-navy-custom/50">Last Name</label>
                                <input 
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent border-b border-navy-custom/20 py-3 text-navy-custom focus:border-primary focus:outline-none transition-colors font-medium placeholder:text-navy-custom/20"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-navy-custom/50">Email Address</label>
                                <input 
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent border-b border-navy-custom/20 py-3 text-navy-custom focus:border-primary focus:outline-none transition-colors font-medium placeholder:text-navy-custom/20"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-navy-custom/50">Phone Number</label>
                                <input 
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent border-b border-navy-custom/20 py-3 text-navy-custom focus:border-primary focus:outline-none transition-colors font-medium placeholder:text-navy-custom/20"
                                    placeholder="(555) 123-4567"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-navy-custom/50">Firm Name</label>
                                <input 
                                    name="firm"
                                    value={formData.firm}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent border-b border-navy-custom/20 py-3 text-navy-custom focus:border-primary focus:outline-none transition-colors font-medium placeholder:text-navy-custom/20"
                                    placeholder="Doe & Associates"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-navy-custom/50">Monthly Revenue</label>
                                <input 
                                    name="revenue"
                                    value={formData.revenue}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent border-b border-navy-custom/20 py-3 text-navy-custom focus:border-primary focus:outline-none transition-colors font-medium placeholder:text-navy-custom/20"
                                    placeholder="$50k - $100k"
                                />
                            </div>
                        </div>

                         <div className="mb-6 space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-navy-custom/50">Are you a decision maker?</label>
                            <select 
                                name="decisionMaker"
                                value={formData.decisionMaker}
                                onChange={handleInputChange}
                                className="w-full bg-transparent border-b border-navy-custom/20 py-3 text-navy-custom focus:border-primary focus:outline-none transition-colors font-medium"
                            >
                                <option value="yes">Yes, I am</option>
                                <option value="no">No, I'm researching</option>
                                <option value="partner">I'm a partner</option>
                            </select>
                        </div>

                        <div className="space-y-2 mb-8">
                             <label className="text-xs font-bold uppercase tracking-widest text-navy-custom/50">Biggest Problem Managing Leads?</label>
                             <textarea 
                                name="problem"
                                value={formData.problem}
                                onChange={handleInputChange}
                                rows={3}
                                className="w-full bg-white/50 border border-navy-custom/10 rounded-xl p-4 text-navy-custom focus:border-primary focus:outline-none transition-colors font-medium placeholder:text-navy-custom/20 resize-none"
                                placeholder="E.g. We miss calls when in court..."
                            />
                        </div>

                        <div className="mt-auto flex justify-end">
                            <Button onClick={nextStep} variant="primary" icon="arrow_forward" disabled={isSubmitting}>
                                {isSubmitting ? 'Processing...' : 'Select Time'}
                            </Button>
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                     <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="h-full flex flex-col"
                    >
                         <h3 className="font-unbounded text-2xl font-bold text-navy-custom mb-2">Select a Time</h3>
                         <p className="text-xs font-bold text-navy-custom/40 uppercase tracking-widest mb-4">Book your strategy session below</p>

                         {/* Cal.com Embed Container */}
                         <div className="flex-grow w-full h-full min-h-[500px] overflow-hidden rounded-xl bg-white relative">
                             <div style={{width:"100%", height:"100%", overflow:"scroll"}} id="my-cal-inline-30min"></div>
                         </div>

                         <div className="mt-4 flex justify-start">
                            <button onClick={() => setStep(1)} className="text-navy-custom/40 hover:text-navy-custom text-sm font-bold uppercase tracking-widest transition-colors">
                                Back to Details
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingSection;