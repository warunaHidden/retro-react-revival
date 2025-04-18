
import { useState } from 'react';

const Index = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-playfair text-xl">MAPLE WRAPS</div>
          <div className="hidden md:flex space-x-8">
            <a href="#what" className="font-cormorant">What?</a>
            <a href="#how" className="font-cormorant">How it Works</a>
            <a href="#quote" className="font-cormorant">Get Quote</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen bg-[url('/lovable-uploads/45bef9f1-9db5-4d66-8a9f-74f3bf49035d.png')] bg-cover bg-center">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="font-playfair text-maple-red text-6xl md:text-8xl mb-4">MAPLE WRAPS</h1>
          <p className="font-cormorant italic text-2xl md:text-3xl">DANCE FLOORS MADE EASY</p>
          <div className="mt-8 font-greatvibes text-maple-gold text-4xl">Elegance</div>
        </div>
      </section>

      {/* What Section */}
      <section id="what" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-maple-red text-5xl mb-16">MAPLE WRAPS what?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="font-cormorant text-xl">At Maple Wraps, we specialize in offering stunning floor wraps at prices that fit any budget. Our pre-designed options bring elegance and luxury to your space without the premium price tag.</p>
            </div>
            <div className="aspect-video bg-black/50"></div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="font-cormorant italic text-2xl mb-8">"Choose from our pre-designed templates, (you can also further customize) and enjoy great discounts*"</p>
          <p className="font-greatvibes text-3xl text-maple-gold">ALWAYS & FOREVER</p>
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
          <h2 className="font-cormorant italic text-3xl mb-16 text-center">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="aspect-square bg-gray-100 rounded-lg"></div>
            ))}
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
    </div>
  );
};

export default Index;
