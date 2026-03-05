import { Lock, ShieldCheck } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col items-center justify-center font-sans antialiased">
      {/* Main Card Container */}
      <div className="bg-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] rounded-[12px] p-8 md:p-12 max-w-[480px] w-full mx-4 flex flex-col items-center">
        
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#111827] tracking-tight mb-3 text-center">
          djkpay.com
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-center text-base md:text-lg leading-relaxed mb-4">
          This premium digital asset is available for private acquisition.
        </p>

        {/* Status Badge */}
        <div className="mb-10">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-[#dcfce7] text-[#166534] uppercase tracking-wider">
            Accepting Inquiries
          </span>
        </div>

        {/* CTA Button */}
        <a 
          href="mailto:YOUR_EMAIL@DOMAIN.COM?subject=Corporate%20Inquiry:%20djkpay.com&body=I%20am%20inquiring%20about%20the%20acquisition%20of%20the%20domain%20name%20djkpay.com.%20Please%20provide%20pricing%20guidance%20and%20transfer%20details."
          className="w-full bg-[#111827] hover:bg-[#1f2937] text-white font-bold py-5 px-8 rounded-lg transition-all duration-200 text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Request Price & Details
        </a>

        {/* Trust Section */}
        <div className="w-full mt-8">
          <div className="h-px bg-gray-100 w-full mb-8"></div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-600">
              <Lock className="w-5 h-5 text-gray-400" />
              <span className="text-sm font-medium">Secure transactions via Escrow.com</span>
            </div>
            
            <div className="flex items-center gap-3 text-gray-600">
              <ShieldCheck className="w-5 h-5 text-gray-400" />
              <span className="text-sm font-medium">Corporate buyer protection</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Subtle Copyright */}
      <footer className="mt-8 text-gray-400 text-xs uppercase tracking-widest">
        &copy; {new Date().getFullYear()} djkpay.com &bull; All Rights Reserved
      </footer>
    </div>
  );
}
