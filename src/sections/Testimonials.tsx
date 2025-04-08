

export default function Testimonials() {

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from pet owners, veterinarians, and shelter operators who use
            Anima Unity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center mb-6">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=688&q=80"
                alt="Dr. Sarah Johnson"
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold">Dr. Sarah Johnson</h4>
                <p className="text-sm text-gray-500">Veterinarian</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "Anima Unity has transformed how I manage my practice. The telemedicine features allow me to consult with pet owners remotely, and the centralized health records save me so much time."
            </p>
            <div className="flex text-yellow-400">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center mb-6">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=1470&q=80"
                alt="Michael Rodriguez"
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold">Michael Rodriguez</h4>
                <p className="text-sm text-gray-500">Shelter Director</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "Since joining Anima Unity, our adoption rates have increased by 40%. The platform makes it so easy for potential adopters to find and connect with our animals."
            </p>
            <div className="flex text-yellow-400">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center mb-6">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=688&q=80"
                alt="Emma Chen"
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold">Emma Chen</h4>
                <p className="text-sm text-gray-500">Pet Owner</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "The AniTrack GPS gave me peace of mind when my cat got out. I located him within minutes! The vet appointment reminders are also a lifesaver for busy pet parents."
            </p>
            <div className="flex text-yellow-400">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}