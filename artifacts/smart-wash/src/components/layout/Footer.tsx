import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-6">
            <img 
              src="https://bosmartwash.in/assets/images/png_logo-removebg-preview.png" 
              alt="Smart Wash" 
              className="h-12 brightness-0 invert"
            />
            <p className="text-slate-400 leading-relaxed text-sm">
              Smart Wash is a student-run laundry service offering efficient, affordable, and eco-friendly solutions. We focus on delivering high-quality laundry care.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide font-heading">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a></li>
              <li><a href="https://bosmartwash.in/see.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Order Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide font-heading">Services</h4>
            <ul className="space-y-3 text-slate-400">
              <li>Premium Laundry</li>
              <li>Steam Press</li>
              <li>Dry Cleaning</li>
              <li>Wash & Fold</li>
              <li>Shoe Laundry</li>
              <li>Saree Rolling</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide font-heading">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <a href="tel:+917997034445" className="hover:text-primary transition-colors">
                  +91 7997034445
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <a href="mailto:contact@bosmartwash.in" className="hover:text-primary transition-colors">
                  contact@bosmartwash.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  Serving urban professionals & students with reliable delivery.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Smart Wash. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-slate-600">Fresh. Clean. Delivered.</p>
        </div>
      </div>
    </footer>
  );
}