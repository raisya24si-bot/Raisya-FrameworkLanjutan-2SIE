import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-10 text-center md:text-left">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Framework Explorer
        </h1>
        <p className="text-gray-500 mt-2">Daftar teknologi modern untuk pengembangan web.</p>
      </div>

      {/* Grid Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {frameworkData.map((item) => (
          <div
            key={item.id}
            // --- EFEK GERAK 1: Transformasi & Transisi pada Kartu ---
            // hover:-translate-y-2: Kartu naik sedikit saat di-hover
            // hover:scale-[1.02]: Kartu membesar sedikit
            // hover:shadow-2xl: Bayangan menjadi lebih tebal, memberi efek kedalaman
            className="group bg-white border border-gray-100 p-7 rounded-3xl shadow-lg
                       transition-all duration-300 ease-out
                       hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:border-blue-100
                       flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center">
                {/* Badge Developer */}
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                  {item.details.developer}
                </span>
                
                {/* --- EFEK GERAK 2: Ping Animation (Status Indikator) --- */}
                {/* Memberikan kesan elemen yang "hidup" */}
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>

              <h2 className="text-2xl font-extrabold text-gray-800 mt-4 group-hover:text-blue-600 transition-colors">
                {item.name}
              </h2>
              
              <p className="text-gray-600 mt-3 text-sm leading-relaxed line-clamp-3">
                {item.description}
              </p>

              {/* Tags Section */}
              <div className="flex flex-wrap gap-2.5 mt-5">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    // --- EFEK GERAK 3: Halus pada Tag saat Hover ---
                    className="bg-gray-100 text-gray-700 text-[11px] font-semibold px-3 py-1 rounded-full border border-gray-200
                               transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-100 hover:rotate-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Card: Link */}
            <div className="mt-8 pt-5 border-t border-gray-100">
              <a
                href={item.details.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                // --- EFEK GERAK 4: Ikon Panah Bergerak ---
                className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors"
              >
                Kunjungi Website
                {/* h-4 w-4 ml-1 transition-transform group-hover:translate-x-1: Panah geser ke kanan saat kartu di-hover */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}