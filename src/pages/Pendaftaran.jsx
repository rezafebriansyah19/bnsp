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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:3000/api/v1/pendaftar/create", formData);
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
          { label: "Jenis Kelamin", name: "jenis_kelamin" },
          { label: "No HP", name: "no_hp" },
          { label: "Asal Sekolah", name: "asal_sekolah" },
          { label: "Jurusan yang Dipilih", name: "jurusan" },
          { label: "Tanggal Lahir", name: "tgl_lahir", type: "date" },
          { label: "NISN", name: "nisn" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name} style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>
              {label}
            </label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                outline: "none"
              }}
            />
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
