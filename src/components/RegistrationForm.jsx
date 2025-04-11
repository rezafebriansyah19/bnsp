import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";

function RegistrationForm() {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    nm_pendaftar: "",
    alamat: "",
    jenis_kelamin: "",
    no_hp: "",
    asal_sekolah: "",
    jurusan: "",
    tgl_lahir: "",
    nisn: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:3000/api/v1/pendaftar/create", formData);
      alert("Pendaftaran berhasil!");
      setFormData({
        nm_pendaftar: "",
        alamat: "",
        jenis_kelamin: "",
        no_hp: "",
        asal_sekolah: "",
        jurusan: "",
        tgl_lahir: "",
        nisn: "",
      });
      navigate("/data-pendaftar"); 
    } catch (err) {
      alert("Gagal mendaftar: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-4">
      <input type="text" name="nm_pendaftar" placeholder="Nama Lengkap" onChange={handleChange} value={formData.nm_pendaftar} className="w-full border px-3 py-2 rounded" required />
      <input type="text" name="alamat" placeholder="Alamat" onChange={handleChange} value={formData.alamat} className="w-full border px-3 py-2 rounded" required />
      <select name="jenis_kelamin" onChange={handleChange} value={formData.jenis_kelamin} className="w-full border px-3 py-2 rounded" required>
        <option value="">Pilih Jenis Kelamin</option>
        <option value="L">Laki-laki</option>
        <option value="P">Perempuan</option>
      </select>
      <input type="text" name="no_hp" placeholder="Nomor HP" onChange={handleChange} value={formData.no_hp} className="w-full border px-3 py-2 rounded" required />
      <input type="text" name="asal_sekolah" placeholder="Asal Sekolah" onChange={handleChange} value={formData.asal_sekolah} className="w-full border px-3 py-2 rounded" required />
      <input type="text" name="jurusan" placeholder="Jurusan Pilihan" onChange={handleChange} value={formData.jurusan} className="w-full border px-3 py-2 rounded" required />
      <input type="date" name="tgl_lahir" onChange={handleChange} value={formData.tgl_lahir} className="w-full border px-3 py-2 rounded" required />
      <input type="text" name="nisn" placeholder="NISN" onChange={handleChange} value={formData.nisn} className="w-full border px-3 py-2 rounded" required />
      
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Daftar
      </button>
    </form>
  );
}

export default RegistrationForm;
