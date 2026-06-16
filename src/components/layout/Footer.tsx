import React from "react"
import { Link } from "../ui/Link"
import { CONFIG } from "../../config"

export const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10 text-gray-400 text-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6 select-none">
              <span className="text-xl font-black tracking-tighter text-white uppercase">
                KEEP <span className="text-primary font-black">AUSTIN</span> MOWED
              </span>
            </Link>
            <p className="mb-4">Premium lawn care and detailed yard maintenance services.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href={`tel:${CONFIG.phone}`} className="hover:text-primary transition-colors">{CONFIG.phoneFormatted}</a></li>
              <li><a href={`mailto:${CONFIG.email}`} className="hover:text-primary transition-colors">{CONFIG.email}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              <li><Link href="/leander-lawn-mowing" className="hover:text-white transition-colors">Leander</Link></li>
              <li><Link href="/cedar-park-lawn-mowing" className="hover:text-white transition-colors">Cedar Park</Link></li>
              <li><Link href="/georgetown-lawn-mowing" className="hover:text-white transition-colors">Georgetown</Link></li>
              <li><Link href="/round-rock-lawn-mowing" className="hover:text-white transition-colors">Round Rock</Link></li>
              <li><Link href="/liberty-hill-lawn-mowing" className="hover:text-white transition-colors">Liberty Hill</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">My Story</Link></li>
              <li><Link href="/locations" className="hover:text-white transition-colors">Locations</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
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
