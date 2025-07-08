
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32101"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@ekpravas.com", "bookings@ekpravas.com"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Travel Street", "Mumbai, Maharashtra 400001"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to start your journey? Contact us today and let's plan your perfect adventure together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white`}>
                        <info.icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <Input type="tel" placeholder="Enter your phone number" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Destination of Interest
                  </label>
                  <Input placeholder="Where would you like to go?" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your travel plans, preferences, and any special requirements..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
