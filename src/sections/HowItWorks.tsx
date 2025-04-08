

export default function HowItWorks() {

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get started with Anima Unity in just three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-orange-400">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Create Your Profile</h3>
            <p className="text-gray-600">
              Sign up as a pet owner, veterinarian, or shelter. Set up your
              profile in minutes.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-blue-400">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Add Your Pets</h3>
            <p className="text-gray-600">
              Create profiles for your pets with photos, medical history, and
              care preferences.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-green-400">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Connect & Explore</h3>
            <p className="text-gray-600">
              Start using our features - book vet visits, track health, or
              browse adoptable pets.
            </p>
          </div>
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <a
            href="#cta"
            className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-3 rounded-full text-sm font-medium"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}