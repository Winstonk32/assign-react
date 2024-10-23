import React from 'react';
import Car1 from './Images/models.jpeg';
import Car2 from './Images/bmw-m3.avif';
import Car3 from './Images/audiiiii.avif';



const Car = () => {
  const carList = [
    {
      name: 'Tesla Model S',
      color: 'blue',
      year: 2021,
      model: 'S',
      image: Car1,
    },
    {
      name: 'BMW M3',
      color: 'gray',
      year: 2019,
      model: 'M3',
      image: Car2,
    },
    {
      name: 'Audi A4',
      color: 'Blue',
      year: 2020,
      model: 'A4',
      image: Car3,
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Car Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {carList.map((car, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{car.name}</h2>
              <p className="text-gray-600">
                <strong>Model:</strong> {car.model}
              </p>
              <p className="text-gray-600">
                <strong>Year:</strong> {car.year}
              </p>
              <p className="text-gray-600">
                <strong>Color:</strong> {car.color}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Car;
