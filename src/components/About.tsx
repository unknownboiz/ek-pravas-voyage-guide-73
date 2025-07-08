
import { Users, Award, Globe, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced travel professionals dedicated to your perfect journey"
    },
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Over a decade of creating memorable travel experiences"
    },
    {
      icon: Globe,
      title: "500+ Destinations",
      description: "Covering the most beautiful places across India and beyond"
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our priority, always"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Ek Pravas
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Ek Pravas - The Journey Travels, we believe that travel is not just about reaching a destination, 
              but about the incredible journey that transforms you along the way. Founded with a passion for 
              exploration and a commitment to excellence, we have been creating unforgettable travel experiences 
              for over 15 years.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of travel experts understands that every traveler is unique, and we pride ourselves 
              on crafting personalized itineraries that match your dreams, preferences, and budget. From 
              serene beaches to majestic mountains, from cultural heritage sites to modern metropolises, 
              we help you discover the world's most beautiful destinations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-lg flex-shrink-0">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Travel experience"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Adventure travel"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-6 border">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10K+</div>
                  <div className="text-sm text-gray-600">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">500+</div>
                  <div className="text-sm text-gray-600">Destinations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
