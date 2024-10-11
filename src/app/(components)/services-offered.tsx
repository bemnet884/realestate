// src/components/ServicesOffered.jsx
import { FaHome, FaHandsHelping, FaChartLine, FaCogs } from 'react-icons/fa';

const services = [
  {
    icon: <FaHome size={40} />,
    title: 'Buying',
    description: 'Find and purchase your dream home with our expert guidance.',
  },
  {
    icon: <FaHandsHelping size={40} />,
    title: 'Selling',
    description: 'Sell your property quickly and at the best price.',
  },
  {
    icon: <FaChartLine size={40} />,
    title: 'Investing',
    description: 'Get investment consulting to maximize your returns.',
  },
  {
    icon: <FaCogs size={40} />,
    title: 'Property Management',
    description: 'Comprehensive management services for your properties.',
  },
];

const ServicesOffered = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-4 bg-white rounded shadow">
              <div className="mb-4 text-blue-500">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOffered;
