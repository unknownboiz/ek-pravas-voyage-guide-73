
import { Plane, Camera, MapPin, Shield, Clock, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Flight Booking",
      description: "Best deals on domestic and international flights with 24/7 support",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Custom Tours",
      description: "Personalized travel packages tailored to your preferences and budget",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Capture stunning moments with our expert photography guides",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive coverage for worry-free adventures worldwide",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your travel needs",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Users,
      title: "Group Tours",
      description: "Join like-minded travelers on exciting group adventures",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From flight bookings to custom tours, we provide comprehensive travel solutions 
            to make your journey unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${service.color} text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
