export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-2 text-[#1d1e44]">How It Works</h2>
          <p className="text-sm text-green-500 font-medium">• Get started with Anima Unity in just three simple steps</p>
        </div>

        <div className="relative mt-16">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-5 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center mb-6">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1d1e44]">Create Your Profile</h3>
              <p className="text-gray-600 text-center">
                Sign up as a pet owner, veterinarian, or shelter. Set up your profile in minutes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center mb-6">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1d1e44]">Add Your Pets</h3>
              <p className="text-gray-600 text-center">
                Create profiles for your pets with photos, medical history, and care preferences.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-green-400 text-white rounded-full flex items-center justify-center mb-6">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1d1e44]">Connect & Explore</h3>
              <p className="text-gray-600 text-center">
                Start using our features - book vet visits, track health, or browse adoptable pets.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a href="#cta" className="bg-blue-700 hover:bg-blue-800 transition text-white px-8 py-3 rounded-full text-sm font-medium">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}