import { useState } from "react";
import InputField from "./components/InputField";
import SelectField from "./components/SelectField";
import AlertMessage from "./components/AlertMessage";

export default function App() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    whatsapp: "",
    kelas: "",
    jadwal: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const validateForm = (data) => {
    const newErrors = {};

    if (!data.nama.trim()) {
      newErrors.nama = "Nama lengkap wajib diisi.";
    } else if (/\d/.test(data.nama)) {
      newErrors.nama = "Nama tidak boleh mengandung angka.";
    } else if (data.nama.trim().length < 3) {
      newErrors.nama = "Nama minimal 3 karakter.";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email wajib diisi.";
    } else if (data.email.includes(" ")) {
      newErrors.email = "Email tidak boleh mengandung spasi.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Format email tidak valid.";
    }

    if (!data.whatsapp.trim()) {
      newErrors.whatsapp = "Nomor WhatsApp wajib diisi.";
    } else if (!/^\d+$/.test(data.whatsapp)) {
      newErrors.whatsapp = "Nomor WhatsApp hanya boleh angka.";
    } else if (data.whatsapp.length < 10 || data.whatsapp.length > 13) {
      newErrors.whatsapp = "Nomor WhatsApp harus 10-13 digit.";
    }

    if (!data.kelas) {
      newErrors.kelas = "Kelas wajib dipilih.";
    }

    if (!data.jadwal) {
      newErrors.jadwal = "Jadwal wajib dipilih.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedForm = {
      ...form,
      [name]: value,
    };

    setForm(updatedForm);
    setErrors(validateForm(updatedForm));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(form);
    } else {
      setSubmittedData(null);
    }
  };

  const isFormValid = Object.keys(validateForm(form)).length === 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-indigo-200 px-4 py-10">
     <div className="mx-auto max-w-lg rounded-2xl bg-white/80 backdrop-blur-md p-8 shadow-xl border border-white/40 transition hover:shadow-2xl">        
      <h1 className="mb-2 text-center text-2xl font-bold text-gray-800">
       🎓 Form Pendaftaran Kursus
      </h1>

        <p className="mb-6 text-center text-sm text-gray-600">
      Isi data dengan benar untuk bergabung ke kelas impianmu ✨
       </p>

        <form onSubmit={handleSubmit}>
          <InputField
            label="Nama Lengkap"
            type="text"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            placeholder="Masukkan nama lengkap"
            error={errors.nama}
          />

          <InputField
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Masukkan email"
            error={errors.email}
          />

          <InputField
            label="No WhatsApp"
            type="text"
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            placeholder="Masukkan nomor WhatsApp"
            error={errors.whatsapp}
          />

          <SelectField
            label="Pilih Kelas"
            name="kelas"
            value={form.kelas}
            onChange={handleChange}
            options={["Web Development", "UI/UX Design", "Digital Marketing"]}
            error={errors.kelas}
          />

          <SelectField
            label="Pilih Jadwal"
            name="jadwal"
            value={form.jadwal}
            onChange={handleChange}
            options={["Pagi", "Siang", "Malam"]}
            error={errors.jadwal}
          />

          {isFormValid && (
            <button
              type="submit"
              className="mt-4 w-full rounded bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700"
            >
              Submit
            </button>
          )}
        </form>

        {submittedData && (
          <AlertMessage type="success">
            <h2 className="mb-2 font-bold">Pendaftaran Berhasil</h2>
            <p>Nama: {submittedData.nama}</p>
            <p>Email: {submittedData.email}</p>
            <p>No WhatsApp: {submittedData.whatsapp}</p>
            <p>Kelas: {submittedData.kelas}</p>
            <p>Jadwal: {submittedData.jadwal}</p>
          </AlertMessage>
        )}
      </div>
    </div>
  );
}