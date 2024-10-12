'use client';

import { useState, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';

type SearchParams = {
  location: string;
  propertyType: string;
  priceRange: string;
  bedrooms: string;
};

const HeroSection = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    location: '',
    propertyType: '',
    priceRange: '',
    bedrooms: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSearch = () => {
    // Implement search functionality or navigation
    console.log(searchParams);
    // Example: navigate to /properties with query params
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/hero.jpg)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Dream Home</h1>
        <p className="mb-8">Explore the best properties in your desired location</p>

        <div className="bg-white text-black p-4 rounded shadow-lg w-full max-w-4xl">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={searchParams.location}
              onChange={handleInputChange}
              className="flex-1 p-2 border border-gray-300 rounded"
            />
            <select
              name="propertyType"
              value={searchParams.propertyType}
              onChange={handleInputChange}
              className="flex-1 p-2 border border-gray-300 rounded"
            >
              <option value="">Property Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
            </select>
            <input
              type="number"
              name="priceRange"
              placeholder="Price Range"
              value={searchParams.priceRange}
              onChange={handleInputChange}
              className="flex-1 p-2 border border-gray-300 rounded"
            />
            <input
              type="number"
              name="bedrooms"
              placeholder="Bedrooms"
              value={searchParams.bedrooms}
              onChange={handleInputChange}
              className="flex-1 p-2 border border-gray-300 rounded"
            />
            <Button onClick={handleSearch} className="w-full md:w-auto">
              Search Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
