import { Link } from "react-router-dom";
import { FaUniversity, FaBookOpen, FaUsers } from "react-icons/fa";

const Home = () => {
  const features = [
    {
      title: "Kenapa Kampus Ini?",
      desc: "Fasilitas lengkap, pengajar berpengalaman, dan lingkungan nyaman.",
      icon: <FaUniversity size={40} color="#2e86de" />
    },
    {
      title: "Jurusan Tersedia",
      desc: "PPW, PPM, PSJ, Digital Marketing, dan lainnya.",
      icon: <FaBookOpen size={40} color="#2e86de" />
    },
    {
      title: "Kehidupan Kampus",
      desc: "Organisasi, UKM, dan kegiatan seru yang membentuk karakter.",
      icon: <FaUsers size={40} color="#2e86de" />
    }
  ];

  return (
    <div>
      <div style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "8px 20px",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "14px"
      }}>
        <span>Email: info@kampusteknologi.ac.id</span>
        <span>Telp: +62 812 3456 7890</span>
      </div>

      <div style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        textAlign: "center",
        padding: "100px 20px"
      }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Selamat Datang di Kampus Teknologi</h1>
        <p style={{ fontSize: "1.3rem", marginTop: "10px" }}>
          Tempat terbaik untuk mulai membangun masa depanmu
        </p>
        <Link to="/pendaftaran">
          <button style={{
            marginTop: "20px",
            padding: "12px 24px",
            backgroundColor: "#fbc531",
            border: "none",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s"
          }}>
            Daftar Sekarang
          </button>
        </Link>
      </div>

      <div style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
        padding: "60px 20px",
        backgroundColor: "#f4f7fb"
      }}>
        {features.map((item, idx) => (
          <div key={idx} style={{
            backgroundColor: "#fff",
            padding: "25px 20px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "center",
            flex: "1 1 250px",
            maxWidth: "300px",
            transition: "0.3s",
            cursor: "pointer"
          }}>
            <div style={{ marginBottom: "15px" }}>{item.icon}</div>
            <h3 style={{ fontSize: "1.2rem", marginTop: "10px" }}>{item.title}</h3>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
