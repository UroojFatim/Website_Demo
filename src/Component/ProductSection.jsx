// src/components/ProductSection.jsx
const ProductSection = () => {
    // Sample products data
    const products = [
      {
        id: 1,
        image: "https://hamzamothercare.pk/cdn/shop/files/shopping_3.webp?v=1715702850&width=400",
        title: "Product 1",
        price: "$29.99",
      },
      {
        id: 2,
        image: "https://hamzamothercare.pk/cdn/shop/files/images_10.jpg?v=1715701552&width=400",
        title: "Product 2",
        price: "$39.99",
      },
      {
        id: 3,
        image: "https://hamzamothercare.pk/cdn/shop/files/WhatsAppImage2024-05-13at5.52.42PM.jpg?v=1715694783&width=400",
        title: "Product 3",
        price: "$49.99",
      },
      {
        id: 4,
        image: "https://hamzamothercare.pk/cdn/shop/files/WhatsAppImage2024-05-13at5.52.35PM.jpg?v=1715697102&width=400",
        title: "Product 4",
        price: "$59.99",
      },
      {
        id: 5,
        image: "https://hamzamothercare.pk/cdn/shop/files/MS-850GM_f63f389f-7c01-41f3-a37f-771ae9d6d647_1.webp?v=1715694898&width=400",
        title: "Product 5",
        price: "$69.99",
      },
      {
        id: 6,
        image: "https://hamzamothercare.pk/cdn/shop/files/ms-558b_tsukgo97todbn0jp_1.webp?v=1715693667&width=400",
        title: "Product 6",
        price: "$79.99",
      },
      {
        id: 7,
        image: "https://hamzamothercare.pk/cdn/shop/files/B09FKZCG2D_3.jpg?v=1715701960&width=400",
        title: "Product 6",
        price: "$79.99",
      },
      {
        id: 8,
        image: "https://hamzamothercare.pk/cdn/shop/files/WhatsAppImage2024-05-13at5.52.38PM_1.jpg?v=1715697541&width=400",
        title: "Product 6",
        price: "$79.99",
      },
      {
        id: 9,
        image: "https://hamzamothercare.pk/cdn/shop/files/WhatsAppImage2024-05-13at5.52.38PM_2.jpg?v=1715697229&width=400",
        title: "Product 6",
        price: "$79.99",
      },
      {
        id: 10,
        image: "https://hamzamothercare.pk/cdn/shop/files/images_10.jpg?v=1715701552&width=400",
        title: "Product 6",
        price: "$79.99",
      },
      {
        id: 11,
        image: "https://hamzamothercare.pk/cdn/shop/files/WhatsAppImage2024-05-13at5.52.42PM.jpg?v=1715694783&width=400",
        title: "Product 6",
        price: "$79.99",
      },
      {
        id: 12,
        image: "https://hamzamothercare.pk/cdn/shop/files/B09FKZCG2D_3.jpg?v=1715701960&width=400",
        title: "Product 6",
        price: "$79.99",
      },
      {
        id: 13,
        image: "https://hamzamothercare.pk/cdn/shop/files/B09FKZCG2D_3.jpg?v=1715701960&width=400",
        title: "Product 6",
        price: "$79.99",
      },
      {
        id: 14,
        image: "https://hamzamothercare.pk/cdn/shop/files/MS-850GM_f63f389f-7c01-41f3-a37f-771ae9d6d647_1.webp?v=1715694898&width=400",
        title: "Product 6",
        price: "$79.99",
      },
      {
        id: 15,
        image: "https://hamzamothercare.pk/cdn/shop/files/WhatsAppImage2024-05-13at5.52.38PM_2.jpg?v=1715697229&width=400",
        title: "Product 6",
        price: "$79.99",
      },
      {
        id: 16,
        image: "https://hamzamothercare.pk/cdn/shop/files/shopping_3.webp?v=1715702850&width=400",
        title: "Product 6",
        price: "$79.99",
      },
      // Add more products as needed
    ];
  
    return (
      <div className="py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
            >
              {/* Product Image */}
              <div className="overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
  
              {/* Product Title */}
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
  
              {/* Product Price */}
              <p className="text-gray-600 mb-4">{product.price}</p>
  
              {/* Button */}
              <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductSection;
  