
import { useState, lazy, Suspense } from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Index = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryDate, setInquiryDate] = useState('');
  const [inquiryVenue, setInquiryVenue] = useState('');
  const [inquiryDimensions, setInquiryDimensions] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white p-4 fixed w-full z-10 top-0 shadow-sm animate-fade-in">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-playfair text-xl text-maple-red animate-fade-in">MAPLE WRAPS</div>
          <div className="hidden md:flex space-x-8">
            <a href="#what" className="font-cormorant hover:text-maple-red transition-colors duration-300">What?</a>
            <a href="#how" className="font-cormorant hover:text-maple-red transition-colors duration-300">How it Works</a>
            <Link to="/pricing" className="font-cormorant hover:text-maple-red transition-colors duration-300">Pricing</Link>
            <a href="#quote" className="font-cormorant hover:text-maple-red transition-colors duration-300">Get Quote</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/12f67c27-c676-4364-a87d-cdc6d0fb1eed.png"
            alt="Maple Wraps Hero"
            className="w-full h-full object-cover animate-fade-in"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="font-playfair text-white text-6xl md:text-8xl mb-4 z-10 animate-fade-in transition-transform hover:scale-105 duration-500">
            MAPLE WRAPS
          </h1>
          <p className="font-cormorant italic text-white text-2xl md:text-3xl mt-4 z-10 animate-fade-in transition-transform hover:scale-105 duration-500">
            DANCEFLOORS MADE EASY
          </p>
        </div>
      </section>

      {/* What Section with Additional Image */}
      <section id="what" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-8 mb-16">
            <img 
              src="/lovable-uploads/bc4b8409-3ce5-4c01-8410-9856d890313c.png"
              alt="Maple Wraps Decorative"
              className="w-32 h-32 object-cover rounded-full animate-fade-in hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
            <h2 className="font-playfair text-maple-red text-5xl animate-fade-in hover:text-maple-gold transition-colors duration-300 italic">
              MAPLE WRAPS what?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/bc4b8409-3ce5-4c01-8410-9856d890313c.png" 
                alt="Dance Floor Example" 
                className="w-full rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6">
              <p className="font-cormorant text-maple-red text-xl italic">
                At Maple Wraps, we specialize in offering stunning floor wraps at prices that fit any budget. Our pre-designed options bring elegance and luxury to your space without the premium price tag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section with Background */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/606717fb-ebd3-4464-919f-d7f2ba1c05f1.png"
            alt="Templates Background"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <p className="font-cormorant italic text-white text-3xl mb-4 animate-fade-in hover:scale-105 transition-transform duration-300">
              "Choose from our pre-designed templates, (you can also further customize) and enjoy great discounts"
            </p>
            <p className="font-cormorant italic text-white text-xl animate-fade-in hover:scale-105 transition-transform duration-300">
              Ready to Transform Your Space? Contact Us Today for a Free Quote!
            </p>
          </div>
        </div>
      </section>

      {/* How it Works with Cards */}
      <section id="how" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-maple-red text-5xl mb-16 italic animate-fade-in">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="bg-gray-800 hover:scale-105 transition-transform duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <img 
                    src="/lovable-uploads/154aa1bd-7018-4e75-a222-54468e67b685.png"
                    alt={`Step ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    loading="lazy"
                  />
                  <p className="font-cormorant text-maple-red text-xl text-center">Step {index + 1}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Quote Form */}
      <footer id="quote" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in">
            <h3 className="font-playfair text-maple-red text-5xl">FREE QUOTE</h3>
            <div className="font-cormorant text-xl text-maple-gold">
              <img src="/lovable-uploads/00f2433a-585c-4737-9085-de38e85e3e01.png" alt="Maple Wraps Logo" className="w-32 mb-4" />
            </div>
            <div className="space-y-4 text-gray-800">
              <div className="space-y-2">
                <p className="text-maple-red font-cormorant">EMAIL</p>
                <a href="mailto:SALES@MAPLEWRAPS.COM" className="flex items-center gap-2 hover:text-maple-gold transition-colors">
                  <Mail className="h-5 w-5" /> SALES@MAPLEWRAPS.COM
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-maple-red font-cormorant">PHONE</p>
                <a href="tel:437-772-7636" className="flex items-center gap-2 hover:text-maple-gold transition-colors">
                  <Phone className="h-5 w-5" /> 437-772-7636
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-maple-red font-cormorant">INSTAGRAM</p>
                <a href="https://instagram.com/MAPLEWRAPS" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-maple-gold transition-colors">
                  <Instagram className="h-5 w-5" /> @MAPLEWRAPS
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <h3 className="font-playfair text-maple-red text-3xl mb-6">INQUIRY FORM</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="NAME"
                value={inquiryName}
                onChange={(e) => setInquiryName(e.target.value)}
                className="w-full p-3 bg-white border border-gray-300 focus:border-maple-gold focus:ring-1 focus:ring-maple-gold"
              />
              <input
                type="text"
                placeholder="DATE OF YOUR EVENT"
                value={inquiryDate}
                onChange={(e) => setInquiryDate(e.target.value)}
                className="w-full p-3 bg-white border border-gray-300 focus:border-maple-gold focus:ring-1 focus:ring-maple-gold"
              />
              <input
                type="text"
                placeholder="VENUE"
                value={inquiryVenue}
                onChange={(e) => setInquiryVenue(e.target.value)}
                className="w-full p-3 bg-white border border-gray-300 focus:border-maple-gold focus:ring-1 focus:ring-maple-gold"
              />
              <input
                type="text"
                placeholder="DIMENSIONS (OPTIONAL)"
                value={inquiryDimensions}
                onChange={(e) => setInquiryDimensions(e.target.value)}
                className="w-full p-3 bg-white border border-gray-300 focus:border-maple-gold focus:ring-1 focus:ring-maple-gold"
              />
              <textarea
                placeholder="MESSAGE"
                value={inquiryMessage}
                onChange={(e) => setInquiryMessage(e.target.value)}
                className="w-full p-3 h-32 bg-white border border-gray-300 focus:border-maple-gold focus:ring-1 focus:ring-maple-gold"
              />
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
