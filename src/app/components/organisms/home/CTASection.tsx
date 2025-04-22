// src/sections/CTASection.tsx
export default function CTASection() {
  return (
    <section
      id="cta"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-aos="fade-up">
              Ready to Transform Pet Care?
            </h2>
            <p
              className="text-xl text-white mb-8 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Join thousands of pet lovers, veterinarians, and shelters in our growing community.
            </p>

            <div className="max-w-md mx-auto relative" data-aos="fade-up" data-aos-delay="200">
              {/* Decorative elements */}
              <div className="absolute -top-16 -left-16 w-24 h-24 bg-orange-300 rounded-full opacity-30"></div>
              <div className="absolute -bottom-12 -right-12 w-20 h-20 bg-pink-300 rounded-full opacity-30"></div>
              
              <form className="flex flex-col sm:flex-row gap-4 relative z-10">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200"
                />
                <button
                  type="submit"
                  className="bg-white text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm"
                >
                  Sign Up Free
                </button>
              </form>
              <p className="text-white text-sm mt-4 opacity-90">
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}