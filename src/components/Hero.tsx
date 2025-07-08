
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Beautiful landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Ek Pravas
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-light text-blue-200 mt-2">
            The Journey Travels
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Discover the world's most breathtaking destinations with our expertly crafted travel experiences. 
          Your adventure begins here.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Explore Destinations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Video
          </Button>
        </div>

        {/* Floating Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm text-blue-200">Destinations</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
            <div className="text-2xl font-bold">10K+</div>
            <div className="text-sm text-blue-200">Happy Travelers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
            <div className="text-2xl font-bold">15+</div>
            <div className="text-sm text-blue-200">Years Experience</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm text-blue-200">Support</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
