import { Phone, Mail, MapPin, Instagram, Twitter } from 'lucide-react';

function Footer() {
  return (
    <div className="p-4 bg-[#5c3b23] flex justify-between gap-4">
      <div className="p-4 flex flex-col gap-4">
        <h1 className="text-[#ffd500] text-xl font-bold">Contact Us</h1>
        <p className="text-white flex items-center gap-2"><Phone />+91 123 456 7890</p>
        <p className="text-white flex items-center gap-2"><Mail />info@saffronspice.com</p>
        <p className="text-white flex items-center gap-2"><MapPin />123 Spice Street, Mumbai, Maharashtra 400001</p>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <h1 className="text-[#ffd500] text-xl font-bold">Follow Us</h1>
        <div className='flex gap-4'>
          <Instagram className='text-white' />
          <Twitter className='text-white' />
        </div>
      </div>
      <div className="w-[25vw] p-4 flex flex-col gap-4">
        <h1 className="text-[#ffd500] text-xl font-bold">Ready to Order?</h1>
        <p className="text-white">Call us directly or visit our restaurant for the authentic Saffron Spice experience.</p>
        <button className="w-[10vw] p-3 bg-amber-300 text-[#30211d] text-xl rounded-lg hover:bg-amber-400" >Contact</button>
      </div>
    </div>
  )
}

export default Footer
