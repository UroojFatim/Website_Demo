import React from "react";

const CategorySection = () => {
  const categories = [
    { id: 1, name: "Category 1", imgSrc: "https://hamzamothercare.pk/cdn/shop/files/images_7.jpg?v=1715641353&width=200" },
    { id: 2, name: "Category 2", imgSrc: "https://hamzamothercare.pk/cdn/shop/files/271538873_1278013402609672_517291879681353776_n.jpg?v=1715640449&width=400" },
    { id: 3, name: "Category 3", imgSrc: "https://hamzamothercare.pk/cdn/shop/files/images_3.jpg?v=1715640727&width=400" },
    { id: 4, name: "Category 4", imgSrc: "https://hamzamothercare.pk/cdn/shop/files/images_4.jpg?v=1715640932&width=200" },
    { id: 5, name: "Category 5", imgSrc: "https://hamzamothercare.pk/cdn/shop/files/Baby-bed-safety-fence-01.jpg?v=1715641140&width=200" },
    { id: 6, name: "Category 6", imgSrc: "https://hamzamothercare.pk/cdn/shop/files/images_6.jpg?v=1715641242&width=200" },
  ];

  return (
    <section className="py-12 bg-gray-100">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold text-gray-800">Our Categories</h2>
        <div className="w-16 h-1 bg-pink-500 mx-auto mt-2"></div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6  max-w-6xl mx-auto">
        {categories.map((category) => (
          <div key={category.id} className="text-center">
            {/* Image */}
            <div className="w-44 h-44 mx-auto rounded-full bg-gray-300 overflow-hidden transition-transform transform hover:scale-105">
              <img
                src={category.imgSrc}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <p className="mt-4 text-lg font-medium text-gray-700">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
