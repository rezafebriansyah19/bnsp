import { useState } from "react";
import axios from "axios";

const Pendaftaran = () => {
  const [formData, setFormData] = useState({
    nm_pendaftar: "",
    alamat: "",
    jenis_kelamin: "",
    no_hp: "",
    asal_sekolah: "",
    jurusan: "",
    tgl_lahir: "",
    nisn: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!/^[A-Za-z\s]+$/.test(formData.nm_pendaftar)) {
      newErrors.nm_pendaftar = "Nama hanya boleh huruf dan spasi.";
    }

    if (formData.alamat.length < 20) {
      newErrors.alamat = "Alamat harus minimal 20 karakter.";
    }

    if (!["L", "P"].includes(formData.jenis_kelamin)) {
      newErrors.jenis_kelamin = "Pilih jenis kelamin yang valid.";
    }

    if (!/^\d{10,15}$/.test(formData.no_hp)) {
      newErrors.no_hp = "Nomor HP harus 10-15 digit angka.";
    }

    if (!formData.asal_sekolah.trim()) {
      newErrors.asal_sekolah = "Asal sekolah tidak boleh kosong.";
    }

    if (!formData.jurusan.trim()) {
      newErrors.jurusan = "Jurusan harus diisi.";
    }

    if (!formData.tgl_lahir) {
      newErrors.tgl_lahir = "Tanggal lahir harus dipilih.";
    }

    if (!/^\d{10}$/.test(formData.nisn)) {
      newErrors.nisn = "NISN harus 10 digit angka.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await axios.post("https://reza.rikpetik.site/api/v1/pendaftar/create", formData);
      alert("Pendaftaran berhasil!");
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan.");
    }
  };

  return (
    <div style={{ padding: "40px", backgroundColor: "#f4f7fb", minHeight: "80vh" }}>
      <h1 style={{ color: "#2e86de", fontSize: "2rem", textAlign: "center" }}>
        Formulir Pendaftaran Kuliah
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "700px",
          margin: "30px auto",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}
      >
        {[
  { label: "Nama Lengkap", name: "nm_pendaftar" },
  { label: "Alamat", name: "alamat" },
  {
    label: "Jenis Kelamin",
    name: "jenis_kelamin",
    type: "select",
    options: [
      { value: "", label: "Pilih Jenis Kelamin" },
      { value: "L", label: "Laki-laki" },
      { value: "P", label: "Perempuan" }
    ]
  },
  { label: "No HP", name: "no_hp" },
  { label: "Asal Sekolah", name: "asal_sekolah" },
  {
    label: "Jurusan yang Dipilih",
    name: "jurusan",
    type: "select",
    options: [
      { value: "", label: "Pilih Jurusan" },
      { value: "PPW", label: "PPW" },
      { value: "PPM", label: "PPM" },
      { value: "PSJ", label: "PSJ" },
      { value: "DIGITAL MARKETING", label: "Digital Marketing" },
      { value: "UI/UX DESIGNER", label: "UI/UX Designer" }
    ]
  },
  { label: "Tanggal Lahir", name: "tgl_lahir", type: "date" },
  { label: "NISN", name: "nisn" }
].map(({ label, name, type = "text", options }) => (
  <div key={name} style={{ marginBottom: "20px" }}>
    <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>
      {label}
    </label>
    {type === "select" ? (
      <select
        name={name}
        value={formData[name]}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          outline: "none"
        }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          outline: "none"
        }}
      />
    )}
    {errors[name] && (
      <small style={{ color: "red", marginTop: "5px", display: "block" }}>
        {errors[name]}
      </small>
    )}
  </div>
))}


        <button
          type="submit"
          style={{
            backgroundColor: "#2e86de",
            color: "#fff",
            border: "none",
            padding: "12px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Daftar Sekarang
        </button>
      </form>
    </div>
  );
};

export default Pendaftaran;
