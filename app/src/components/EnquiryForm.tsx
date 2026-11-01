import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';

interface EnquiryFormProps {
  defaultCategory?: string;
  defaultRequirement?: string;
  source?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  defaultCategory = 'Cleaning Supplies',
  defaultRequirement = '',
  source = 'Website Form',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: defaultCategory,
    message: defaultRequirement,
    honeypot: '', // anti-spam
  });

  const formLoadTimeRef = React.useRef<number>(0);
  React.useEffect(() => {
    formLoadTimeRef.current = Date.now();
  }, []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Anti-spam check (honeypot)
    if (formData.honeypot) {
      console.warn('Spam detected via honeypot');
      return;
    }

    // 2. Anti-bot timing check (submitting in under 1.5 seconds is usually automated)
    const elapsedSeconds = formLoadTimeRef.current ? (Date.now() - formLoadTimeRef.current) / 1000 : 2;
    if (elapsedSeconds < 1.5) {
      setStatus({
        type: 'error',
        message: 'Submission failed security check. Please try again.',
      });
      return;
    }

    // 3. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please provide a valid corporate email address.',
      });
      return;
    }

    // 4. Phone validation (at least 8 digits)
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 8) {
      setStatus({
        type: 'error',
        message: 'Please provide a valid contact phone number.',
      });
      return;
    }

    setIsSubmitting(true);

    // Prepare structured mailto payload for reliable B2B enquiry dispatch
    const subject = `[B2B Enquiry] ${formData.category} - ${formData.company || formData.name}`;
    const emailBody = [
      `Official Business Enquiry via ${source}`,
      `----------------------------------------`,
      `Client Name: ${formData.name}`,
      `Company Name: ${formData.company}`,
      `Business Email: ${formData.email}`,
      `Phone Number: ${formData.phone}`,
      `Requirement Category: ${formData.category}`,
      `----------------------------------------`,
      `Enquiry Details:`,
      formData.message || 'No additional notes provided.',
      `----------------------------------------`,
      `Annapoorna Enterprises Procurement Portal`,
    ].join('\n');

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        message: 'Thank you! Your quotation request has been prepared. Your email application is launching to transmit the enquiry directly to our sales desk.',
      });

      // Launch email client with structured payload
      const mailtoUrl = `mailto:${COMPANY_INFO.contact.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <div className="bg-white rounded-xl border border-[#ECECEC] p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-[#252525]">
          Request a Business Consultation & Quote
        </h3>
        <p className="text-sm text-[#707070] mt-1">
          Share your enterprise requirement and our Bengaluru procurement desk will provide a prompt itemised quotation.
        </p>
      </div>

      {status.type === 'success' && (
        <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3">
          <svg className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <p className="font-semibold">{status.message}</p>
            <p className="text-xs text-emerald-700 mt-1">
              If your email client did not open automatically, please send your requirements directly to{' '}
              <a href={`mailto:${COMPANY_INFO.contact.email}`} className="underline font-bold">
                {COMPANY_INFO.contact.email}
              </a>
            </p>
          </div>
        </div>
      )}

      {status.type === 'error' && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm flex items-center gap-2">
          <svg className="w-5 h-5 text-red-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{status.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot field for spam prevention */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website-hp">Leave this field blank</label>
          <input
            type="text"
            id="website-hp"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#252525] mb-1.5">
              Contact Name <span className="text-[#C8102E]">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ramesh Kumar"
              className="w-full px-4 py-2.5 rounded-lg border border-[#ECECEC] text-sm text-[#252525] bg-white focus:border-[#C8102E] focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#252525] mb-1.5">
              Company / Organisation <span className="text-[#C8102E]">*</span>
            </label>
            <input
              type="text"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Infosys Ltd."
              className="w-full px-4 py-2.5 rounded-lg border border-[#ECECEC] text-sm text-[#252525] bg-white focus:border-[#C8102E] focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#252525] mb-1.5">
              Business Email <span className="text-[#C8102E]">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="procurement@company.com"
              className="w-full px-4 py-2.5 rounded-lg border border-[#ECECEC] text-sm text-[#252525] bg-white focus:border-[#C8102E] focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#252525] mb-1.5">
              Phone Number <span className="text-[#C8102E]">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-2.5 rounded-lg border border-[#ECECEC] text-sm text-[#252525] bg-white focus:border-[#C8102E] focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#252525] mb-1.5">
            Requirement Category <span className="text-[#C8102E]">*</span>
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-[#ECECEC] text-sm text-[#252525] bg-white focus:border-[#C8102E] focus:outline-none transition-colors"
          >
            <optgroup label="Products Catalog">
              <option value="Cleaning Supplies">Cleaning Supplies</option>
              <option value="Hygiene Products">Hygiene Products</option>
              <option value="Pantry Supplies">Pantry Supplies</option>
              <option value="Packaging Materials">Packaging Materials</option>
              <option value="Dairy Products">Dairy Products</option>
              <option value="Rubber Mats">Rubber Mats</option>
              <option value="Institutional Products">Institutional Products</option>
            </optgroup>
            <optgroup label="Integrated Facility Services">
              <option value="Housekeeping Services">Housekeeping Services</option>
              <option value="Pest Control Solutions">Pest Control Solutions</option>
              <option value="Electrical Maintenance">Electrical Maintenance</option>
              <option value="Plumbing Services">Plumbing Services</option>
              <option value="Painting & Maintenance">Painting & Maintenance</option>
              <option value="Specialist Deep Cleaning">Specialist Deep Cleaning</option>
              <option value="Plants & Landscaping">Plants & Landscaping</option>
            </optgroup>
            <optgroup label="Enterprise Procurement">
              <option value="Government or Corporate Tender">Government or Corporate Tender</option>
              <option value="Consolidated Facility Contract">Consolidated Facility Contract</option>
            </optgroup>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#252525] mb-1.5">
            Scope & Volume Details
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please mention specific items, approximate quantities, frequency (one-time or recurring contract), site locations, and delivery timelines..."
            className="w-full px-4 py-2.5 rounded-lg border border-[#ECECEC] text-sm text-[#252525] bg-white focus:border-[#C8102E] focus:outline-none transition-colors resize-y"
          ></textarea>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#C8102E] hover:bg-[#A30D25] text-white text-sm font-bold shadow-sm transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                Processing Enquiry...
              </>
            ) : (
              'Request a Business Consultation'
            )}
          </button>
          <p className="text-[11px] text-[#707070] mt-3">
            Protected by automated spam filtering. By submitting, your inquiry is routed directly to Annapoorna Enterprises procurement officers in Bengaluru.
          </p>
        </div>
      </form>
    </div>
  );
};
