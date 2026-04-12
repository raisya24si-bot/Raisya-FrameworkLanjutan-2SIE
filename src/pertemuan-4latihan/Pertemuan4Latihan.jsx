import { useState } from "react";
import coffeeData from "./coffeeshop.json";
import GuestView from "./GuestView";
import AdminView from "./AdminView";

export default function Pertemuan4Latihan() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedCategory: "",
    selectedCity: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const allCategories = [...new Set(coffeeData.map((item) => item.category))];
  const allCities = [...new Set(coffeeData.map((item) => item.city))];

  const filteredData = coffeeData.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(dataForm.searchTerm.toLowerCase());

    const matchesCategory = dataForm.selectedCategory
      ? item.category === dataForm.selectedCategory
      : true;

    const matchesCity = dataForm.selectedCity
      ? item.city === dataForm.selectedCity
      : true;

    return matchesSearch && matchesCategory && matchesCity;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Coffee Shop Website</h1>
        

        <div className="bg-white p-4 rounded-2xl shadow-md mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="searchTerm"
            value={dataForm.searchTerm}
            onChange={handleChange}
            placeholder="Cari nama coffee shop..."
            className="border border-gray-300 rounded-lg px-4 py-2"
          />

          <select
            name="selectedCategory"
            value={dataForm.selectedCategory}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
          >
            <option value="">Semua Kategori</option>
            {allCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            name="selectedCity"
            value={dataForm.selectedCity}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
          >
            <option value="">Semua Kota</option>
            {allCities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-10">
          <GuestView data={filteredData} />
        </div>

        <div>
          <AdminView data={filteredData} />
        </div>
      </div>
    </div>
  );
}