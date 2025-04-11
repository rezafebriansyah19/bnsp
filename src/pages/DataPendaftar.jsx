import { useEffect, useState } from "react";

const DataPendaftar = () => {
  const [pendaftar, setPendaftar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    nm_pendaftar: "",
    alamat: "",
    jenis_kelamin: "",
    no_hp: "",
    asal_sekolah: "",
    jurusan: "",
    tgl_lahir: "",
    nisn: ""
  });
  const [editId, setEditId] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch("https://reza.rikpetik.site/api/v1/pendaftar")
      .then((res) => res.json())
      .then((data) => {
        setPendaftar(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal ambil data:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = (item) => {
    setForm({ ...item });
    setEditId(item.id_pendaftar);
    setShowEditForm(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://reza.rikpetik.site/api/v1/pendaftar/update/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      console.log("Respon update:", data);
      setForm({
        nm_pendaftar: "",
        alamat: "",
        jenis_kelamin: "",
        no_hp: "",
        asal_sekolah: "",
        jurusan: "",
        tgl_lahir: "",
        nisn: ""
      });
      setEditId(null);
      setShowEditForm(false);
      fetchData();
    } catch (err) {
      console.error("Gagal update data:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin hapus data ini?")) return;
    try {
      await fetch(`https://reza.rikpetik.site/api/v1/pendaftar/delete/${id}`, {
        method: "DELETE"
      });
      fetchData();
    } catch (err) {
      console.error("Gagal hapus:", err);
    }
  };

  if (loading) return <p style={{ textAlign: "center" }}>Memuat data...</p>;

  return (
    <div style={{ padding: "40px", backgroundColor: "#f4f7fb", minHeight: "80vh" }}>
      <h1 style={{ color: "#2e86de", fontSize: "2rem", textAlign: "center", marginBottom: "30px" }}>
        Data Pendaftar Kuliah
      </h1>

      {showEditForm && (
        <form onSubmit={handleUpdate} style={{ marginBottom: "30px", background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <h2>Edit Data</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "10px" }}>
            <input name="nm_pendaftar" placeholder="Nama" value={form.nm_pendaftar} onChange={handleChange} required />
            <input name="alamat" placeholder="Alamat" value={form.alamat} onChange={handleChange} required />
            <input name="jenis_kelamin" placeholder="Jenis Kelamin" value={form.jenis_kelamin} onChange={handleChange} required />
            <input name="no_hp" placeholder="No HP" value={form.no_hp} onChange={handleChange} required />
            <input name="asal_sekolah" placeholder="Asal Sekolah" value={form.asal_sekolah} onChange={handleChange} required />
            <input name="jurusan" placeholder="Jurusan" value={form.jurusan} onChange={handleChange} required />
            <input name="tgl_lahir" placeholder="Tgl Lahir" value={form.tgl_lahir} onChange={handleChange} required />
            <input name="nisn" placeholder="NISN" value={form.nisn} onChange={handleChange} required />
          </div>
          <button type="submit" style={{ marginTop: "15px", padding: "10px 20px", backgroundColor: "#2e86de", color: "#fff", border: "none", borderRadius: "5px" }}>
            Simpan Perubahan
          </button>
        </form>
      )}

      <div style={{
        overflowX: "auto",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.06)",
        padding: "20px"
      }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#2e86de", color: "#fff" }}>
              <th style={headStyle}>No</th>
              <th style={headStyle}>Nama</th>
              <th style={headStyle}>Alamat</th>
              <th style={headStyle}>Jenis Kelamin</th>
              <th style={headStyle}>No HP</th>
              <th style={headStyle}>Asal Sekolah</th>
              <th style={headStyle}>Jurusan</th>
              <th style={headStyle}>Tgl Lahir</th>
              <th style={headStyle}>NISN</th>
              <th style={headStyle}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(pendaftar) && pendaftar.map((item, index) => (
              <tr key={item.id_pendaftar} style={index % 2 === 0 ? rowEven : rowOdd}>
                <td style={cellStyle}>{index + 1}</td>
                <td style={cellStyle}>{item.nm_pendaftar}</td>
                <td style={cellStyle}>{item.alamat}</td>
                <td style={cellStyle}>{item.jenis_kelamin}</td>
                <td style={cellStyle}>{item.no_hp}</td>
                <td style={cellStyle}>{item.asal_sekolah}</td>
                <td style={cellStyle}>{item.jurusan}</td>
                <td style={cellStyle}>{item.tgl_lahir}</td>
                <td style={cellStyle}>{item.nisn}</td>
                <td style={cellStyle}>
                  <button onClick={() => handleEdit(item)} style={{ marginRight: "5px", background: "#f1c40f", border: "none", padding: "5px 10px", color: "#fff", borderRadius: "3px" }}>Edit</button>
                  <button onClick={() => handleDelete(item.id_pendaftar)} style={{ background: "#e74c3c", border: "none", padding: "5px 10px", color: "#fff", borderRadius: "3px" }}>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const headStyle = { padding: "12px", textAlign: "left" };
const cellStyle = { padding: "10px", borderBottom: "1px solid #eee" };
const rowEven = { backgroundColor: "#f9fbfd" };
const rowOdd = { backgroundColor: "#ffffff" };

export default DataPendaftar;
