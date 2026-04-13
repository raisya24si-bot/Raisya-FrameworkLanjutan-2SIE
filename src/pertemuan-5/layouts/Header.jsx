import { useState } from "react";
import { FaBell, FaSearch, FaTimes } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const menuData = [
    "Dashboard",
    "Orders",
    "Customers",
    "Report",
    "Revenue",
    "Total Delivered",
    "Total Orders",
    "Total Canceled",
  ];

  const filteredData = menuData.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div
        id="header-container"
        className="flex items-center justify-between p-4"
      >
        {/* Search Bar */}
        <div id="search-bar" className="relative w-full max-w-lg">
          <input
            id="search-input"
            type="text"
            placeholder="Search Here..."
            onClick={() => setShowModal(true)}
            className="w-full rounded-md border border-gray-100 bg-white p-2 pr-10 outline-none"
          />
          <FaSearch
            id="search-icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300"
          />
        </div>

        {/* Icon & Profile Section */}
        <div id="icons-container" className="flex items-center space-x-4">
          <div
            id="notification-icon"
            className="relative cursor-pointer rounded-2xl bg-blue-100 p-3 text-blue-500"
          >
            <FaBell />
            <span
              id="notification-badge"
              className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-200 px-2 py-1 text-xs"
            >
              50
            </span>
          </div>

          <div
            id="chart-icon"
            className="cursor-pointer rounded-2xl bg-blue-100 p-3"
          >
            <FcAreaChart />
          </div>

          <div
            id="settings-icon"
            className="cursor-pointer rounded-2xl bg-red-100 p-3 text-red-500"
          >
            <SlSettings />
          </div>

          <div
            id="profile-container"
            className="flex items-center space-x-4 border-l border-gray-300 p-1 pl-4"
          >
            <span id="profile-text">
              Hello, <b>Raisya Revalina</b>
            </span>

            <img
              id="profile-avatar"
              src="/img/husbu.jpg"
              alt="profile avatar"
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Search Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-[420px] rounded-xl bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">Search Menu</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-red-500"
              >
                <FaTimes />
              </button>
            </div>

            <input
              type="text"
              placeholder="Cari menu atau data..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-4 w-full rounded-lg border border-gray-300 p-2 outline-none"
            />

            <div className="max-h-[220px] space-y-2 overflow-y-auto">
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-gray-100 p-3 text-sm text-gray-700 hover:bg-green-100"
                  >
                    {item}
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">Data tidak ditemukan.</p>
              )}
            </div>

            <div className="mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="rounded-lg bg-green-500 px-4 py-2 text-white"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}