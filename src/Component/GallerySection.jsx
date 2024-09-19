import React from "react";

const GallerySection = () => {
  const singleImage = "https://hamzamothercare.pk/cdn/shop/files/WhatsApp_Image_2024-05-16_at_4.45.51_AM.jpg?v=1715839850&width=900"; // Replace with your image URL
  const gridImages = [
    "https://hamzamothercare.pk/cdn/shop/files/Untitled_design_60.png?v=1715840465&width=400", 
    "https://hamzamothercare.pk/cdn/shop/files/Untitled_design_61.png?v=1715843817&width=400",
    "https://hamzamothercare.pk/cdn/shop/files/Untitled_design_62.png?v=1715844020&width=400",
    "https://hamzamothercare.pk/cdn/shop/files/Untitled_design_63.png?v=1715844207&width=400",
  ];

  return (
    <section className="py-12 bg-gray-100">
      {/* Gallery Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Single Image Column */}
        <div className="relative">
          <img
            src={singleImage}
            alt="Single Gallery"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        
        {/* Grid of Images Column */}
        <div className="grid grid-cols-2 gap-4">
          {gridImages.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Image {index + 1}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;
