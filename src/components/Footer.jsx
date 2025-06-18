const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h2 className="text-xl font-bold mb-3">Odore.perta</h2>
          <p className="text-sm">
            Bringing you the best experience. Powered by love and code.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>   
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-pink-400">Home</a></li>
            <li><a href="#" className="hover:text-pink-400">About</a></li>
            <li><a href="#" className="hover:text-pink-400">Services</a></li>
            <li><a href="#" className="hover:text-pink-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="#"><i className="fab fa-facebook hover:text-blue-500"></i></a>
            <a href="#"><i className="fab fa-instagram hover:text-pink-500"></i></a>
            <a href="#"><i className="fab fa-twitter hover:text-blue-400"></i></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
