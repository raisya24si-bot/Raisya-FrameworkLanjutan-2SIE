export default function InputField({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div className="mb-4">
      <label className="mb-1 block font-medium text-gray-700">{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 outline-none"
      />

      {error && (
        <p className="mt-2 rounded bg-red-100 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}