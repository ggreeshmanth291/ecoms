

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2024 Your Company. All rights reserved.
        </p>
      </div>
      <div className="container mx-auto text-center mt-2">
        <p className="text-sm">Follow us on:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-white hover:text-gray-300">
            <span className="sr-only">Facebook</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.795c0-2.506 1.492-3.89 4.006-3.89 1.167 0 2.235.402 3.127 1.095l-.863 1.85c-.63-.35-1.3-.535-2.067-.535-1.688 0-3.049.987-3.049 2.21v1h6l-.863 1z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <span className="sr-only">Twitter</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.01-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.093 3.749A11.65 11.65 0 011.64 4.997a4.106 4.106 0 001.27 5.477A4.072 4.072 0 011.8 10.4v.052a4.107 4.107 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
