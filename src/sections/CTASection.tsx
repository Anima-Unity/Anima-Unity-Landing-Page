

export default function CTASection() {
  return (
    <section
      id="cta"
      className="py-20 bg-gradient-to-r from-orange-400 to-pink-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

        <div className="max-w-md mx-auto" data-aos="fade-up" data-aos-delay="200">
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-full focus:outline-none"
            />
            <button
              type="submit"
              className="btn-secondary bg-white text-orange-500 px-6 py-3 rounded-full font-medium"
            >
              Sign Up Free
            </button>
          </form>
          <p className="text-white text-sm mt-3">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
}