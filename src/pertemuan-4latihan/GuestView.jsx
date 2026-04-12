export default function GuestView({ data }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Guest View</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            
            <div className="p-4">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{item.category}</p>
              <p className="text-gray-700">{item.city}</p>
              <p className="text-gray-700">Rating: {item.rating}</p>
              <p className="text-gray-700">{item.priceRange}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {item.facilities.map((facility, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                  >
                    {facility}
                  </span>
                ))}
              </div>

              <div className="mt-4 text-sm text-gray-600">
                <p>Owner: {item.details.owner}</p>
                <p>Berdiri: {item.details.established}</p>
                <p>IG: {item.details.instagram}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}