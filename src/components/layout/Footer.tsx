import React from "react"

export const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10 text-gray-400 text-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-white font-bold text-xs">
                K
              </div>
              <span className="text-lg font-bold text-white tracking-tight">KeepAustinMowed</span>
            </div>
            <p className="mb-4">Premium lawn care services across the greater Austin area.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="tel:512-888-3417" className="hover:text-primary transition-colors">512-888-3417</a></li>
              <li><a href="mailto:michael@kamtx.com" className="hover:text-primary transition-colors">michael@kamtx.com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              <li>Leander</li>
              <li>Cedar Park</li>
              <li>Georgetown</li>
              <li>Round Rock</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">How It Works</a></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} KeepAustinMowed. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
