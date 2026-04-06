export default function AlertMessage({ children, type = "success" }) {
  const variants = {
    success: "border border-green-300 bg-green-100 text-green-700",
    error: "border border-red-300 bg-red-100 text-red-700",
    info: "border border-blue-300 bg-blue-100 text-blue-700",
  };

  return (
    <div className={`mt-6 rounded-lg p-4 text-sm shadow-sm ${variants[type]}`}>      {children}
    </div>
  );
}