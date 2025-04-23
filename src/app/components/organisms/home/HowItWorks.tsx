export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">How It Works?</h2>
          <p className="text-sm text-gray-600">A simple three-step process to start tracking your pet.</p>
        </div>

        <div className="relative mt-16">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-5 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center mb-6">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Activate Tracker</h3>
              <p className="text-gray-600 text-center text-sm">
                Attach the lightweight GPS device to your pet's collar
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center mb-6">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Connect App</h3>
              <p className="text-gray-600 text-center text-sm">
                Download our app and pair it with your pet's tracker
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center mb-6">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Track Anywhere</h3>
              <p className="text-gray-600 text-center text-sm">
                Monitor your pet's location in real-time
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a href="#cta" className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-lg text-sm font-medium">
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
}