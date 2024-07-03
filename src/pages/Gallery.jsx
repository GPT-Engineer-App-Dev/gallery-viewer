import React from "react";

const Gallery = () => {
  const images = [
    { id: 1, title: "Image 1", description: "Description 1" },
    { id: 2, title: "Image 2", description: "Description 2" },
    { id: 3, title: "Image 3", description: "Description 3" },
    // Add more images as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image) => (
        <div key={image.id} className="border p-4 rounded-lg">
          <img
            src="/placeholder.svg"
            alt={image.title}
            className="mx-auto rounded-xl object-cover w-[300px] h-[200px]"
          />
          <h2 className="text-xl mt-2">{image.title}</h2>
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;