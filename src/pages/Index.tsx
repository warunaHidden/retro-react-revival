import { useState } from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

const Index = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white p-4 fixed w-full z-10 top-0 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-playfair text-xl animate-fade-in">MAPLE WRAPS</div>
          <div className="hidden md:flex space-x-8">
            <a href="#what" className="font-cormorant hover:text-maple-red transition-colors duration-300">What?</a>
            <a href="#how" className="font-cormorant hover:text-maple-red transition-colors duration-300">How it Works</a>
            <a href="#quote" className="font-cormorant hover:text-maple-red transition-colors duration-300">Get Quote</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen bg-[url('/lovable-uploads/45bef9f1-9db5-4d66-8a9f-74f3bf49035d.png')] bg-cover bg-center">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center animate-fade-in">
          <h1 className="font-playfair text-maple-red text-6xl md:text-8xl mb-4">MAPLE WRAPS</h1>
          <p className="font-cormorant italic text-2xl md:text-3xl">DANCE FLOORS MADE EASY</p>
          <div className="mt-8 font-greatvibes text-maple-gold text-4xl animate-scale-in">Elegance</div>
        </div>
      </section>

      {/* What Section */}
      <section id="what" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-maple-red text-5xl mb-16 animate-fade-in">MAPLE WRAPS what?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="font-cormorant text-xl animate-fade-in">At Maple Wraps, we specialize in offering stunning floor wraps at prices that fit any budget. Our pre-designed options bring elegance and luxury to your space without the premium price tag.</p>
            </div>
            <div className="aspect-video overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Dance Floor Example" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="font-cormorant italic text-2xl mb-8 animate-fade-in">"Choose from our pre-designed templates, (you can also further customize) and enjoy great discounts*"</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Template 1" 
              className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
            />
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Template 2" 
              className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
            />
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Template 3" 
              className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
          <p className="font-greatvibes text-3xl text-maple-gold mt-8 animate-scale-in">ALWAYS & FOREVER</p>
        </div>
      </section>

      {/* Vendor Login */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-md">
          <h2 className="font-cormorant text-maple-gold text-2xl mb-8 text-center">VENDOR LOGIN FOR exclusive PRICING !</h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="USERNAME"
              className="w-full p-3 bg-transparent border border-maple-gold text-maple-gold"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="PASSWORD"
              className="w-full p-3 bg-transparent border border-maple-gold text-maple-gold"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="OTP"
              className="w-full p-3 bg-transparent border border-maple-gold text-maple-gold"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </form>
        </div>
      </section>

      {/* How it Works */}
      <section id="how" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-cormorant italic text-3xl mb-16 text-center animate-fade-in">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                alt="Step 1" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809" 
                alt="Step 2" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47a04ca018e0" 
                alt="Step 3" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-playfair text-maple-red text-4xl mb-12 text-center">FREE QUOTE</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="NAME" className="p-3 border" />
            <input type="email" placeholder="EMAIL" className="p-3 border" />
            <input type="text" placeholder="PHONE" className="p-3 border" />
            <input type="text" placeholder="DATE OF YOUR EVENT" className="p-3 border" />
            <input type="text" placeholder="VENUE" className="p-3 border" />
            <input type="text" placeholder="APPROXIMATE DIMENSIONS" className="p-3 border" />
            <textarea placeholder="MESSAGE" className="p-3 border col-span-2 h-32"></textarea>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in">
            <h3 className="font-playfair text-3xl text-maple-gold">Free Quote</h3>
            <div className="font-cormorant text-xl">MAPLE WRAPS</div>
            <div className="space-y-4">
              <a href="mailto:info@maplewraps.com" className="flex items-center gap-2 hover:text-maple-gold transition-colors">
                <Mail className="h-5 w-5" /> info@maplewraps.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-maple-gold transition-colors">
                <Phone className="h-5 w-5" /> (123) 456-7890
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-maple-gold transition-colors">
                <Instagram className="h-5 w-5" /> @maplewraps
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <h3 className="font-playfair text-2xl mb-6 text-maple-gold">Send us a message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={inquiryName}
                onChange={(e) => setInquiryName(e.target.value)}
                className="w-full p-3 bg-transparent border border-maple-gold text-white rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={inquiryEmail}
                onChange={(e) => setInquiryEmail(e.target.value)}
                className="w-full p-3 bg-transparent border border-maple-gold text-white rounded"
              />
              <textarea
                placeholder="Your Message"
                value={inquiryMessage}
                onChange={(e) => setInquiryMessage(e.target.value)}
                className="w-full p-3 bg-transparent border border-maple-gold text-white rounded h-32"
              />
              <button className="bg-maple-gold text-white px-8 py-3 rounded hover:bg-maple-red transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
