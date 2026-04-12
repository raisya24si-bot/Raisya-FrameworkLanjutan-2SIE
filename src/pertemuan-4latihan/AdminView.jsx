export default function AdminView({ data }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Admin View</h2>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-3">No</th>
              <th className="px-4 py-3">Nama</th>
              <th className="px-4 py-3">Kategori</th>
              <th className="px-4 py-3">Kota</th>
              <th className="px-4 py-3">Rating</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Owner</th>
              <th className="px-4 py-3">Instagram</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.category}</td>
                <td className="px-4 py-3">{item.city}</td>
                <td className="px-4 py-3">{item.rating}</td>
                <td className="px-4 py-3">{item.status}</td>
                <td className="px-4 py-3">{item.details.owner}</td>
                <td className="px-4 py-3">{item.details.instagram}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}