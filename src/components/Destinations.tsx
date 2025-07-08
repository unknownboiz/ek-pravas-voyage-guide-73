import { Star, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Destinations = () => {
  const destinations = [
    {
      name: "Goa",
      country: "India",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.8,
      price: "₹15,000",
      duration: "5 Days",
      description: "Beautiful beaches, vibrant nightlife, and Portuguese heritage"
    },
    {
      name: "Kerala",
      country: "India",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.9,
      price: "₹20,000",
      duration: "7 Days",
      description: "God's Own Country with backwaters, hills, and spices"
    },
    {
      name: "Rajasthan",
      country: "India",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.7,
      price: "₹25,000",
      duration: "8 Days",
      description: "Royal palaces, desert landscapes, and rich cultural heritage"
    },
    {
      name: "Himachal Pradesh",
      country: "India",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.8,
      price: "₹18,000",
      duration: "6 Days",
      description: "Snow-capped mountains, adventure sports, and hill stations"
    },
    {
      name: "Ladakh",
      country: "India",
      image: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.9,
      price: "₹30,000",
      duration: "10 Days",
      description: "High-altitude desert, Buddhist monasteries, and pristine lakes"
    },
    {
      name: "Andaman Islands",
      country: "India",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.8,
      price: "₹35,000",
      duration: "7 Days",
      description: "Pristine beaches, coral reefs, and water sports paradise"
    }
  ];

  return (
    <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore India's most captivating destinations with our carefully curated travel packages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{destination.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-1 mb-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm font-medium">{destination.country}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{destination.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{destination.duration}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Starting from</div>
                    <div className="text-lg font-bold text-blue-600">{destination.price}</div>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
