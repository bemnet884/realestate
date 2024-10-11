// src/components/AboutUs.jsx
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <Image
            src="/images/about.jpg"
            alt="About Us"
            width={500}
            height={400}
            className="rounded"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">
            At RealEstate, our mission is to help you find the perfect property that suits your needs and budget. With years of experience in the real estate industry, we pride ourselves on providing exceptional service and expertise.
          </p>
          <div className="flex space-x-4">
            {/* Team Profiles could be added here */}
            {/* For simplicity, we'll add testimonials */}
            <div>
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">CEO</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Head of Sales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
