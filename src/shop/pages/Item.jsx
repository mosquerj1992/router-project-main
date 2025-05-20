import React, { useState } from "react";

export const Item = ({ src, alt, price, category, gender }) => {
  const sizes = ["XS", "S", "M"];

  const [size, setSize] = useState("");

  const onChangeSize = (e) => {
    setSize(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 gap-12 lg:flex-row">
      <div className="w-full max-w-md">
        <img
          src={src ? src : "https://placehold.co/400x500"}
          alt={alt}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="w-full max-w-lg flex flex-col gap-4">
        <span className="text-sm text-gray-500">Categoria: {category}</span>
        <h1 className="text-3xl font-bold">Descripcion: {alt}</h1>
        <p className="text-2xl font-semibold text-green-600">${price}</p>
        <p className="text-gray-700">Genero: {gender}</p>

        <p className="text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis,
          minima iure suscipit distinctio facilis tenetur, consectetur
          laboriosam animi doloremque quaerat nesciunt. Odit accusantium quae
          quam ipsum dolorem tempore voluptate voluptatem!
        </p>

        <div className="flex items-center gap-4 mt-4">
          <label htmlFor="">talla</label>
          <select
            id="size"
            value={size}
            className="border border-gray-400 rounded p-2"
            onChange={onChangeSize}
          >
            <option value="">Seleccione</option>
            {sizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <button
          disabled
          className={`mt-6 px-6 py-3 rounded-md font-semibold border transition-all
                ${
                  size
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
                }
              `}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
