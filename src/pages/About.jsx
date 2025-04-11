import { FaCheckCircle, FaUserGraduate, FaChalkboardTeacher, FaSchool } from "react-icons/fa";

const About = () => {
  return (
    <div style={{ padding: "40px 20px", backgroundColor: "#f4f7fb", minHeight: "100vh" }}>
      <div style={{
        maxWidth: "1000px",
        margin: "0 auto",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        overflow: "hidden"
      }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap"
        }}>
          <div style={{ flex: 1, minWidth: "300px" }}>
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1470&q=80"
              alt="Mahasiswa Teknologi"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div style={{ flex: 1, padding: "30px" }}>
            <h1 style={{
              color: "#2e86de",
              fontSize: "2.5rem",
              marginBottom: "20px",
              borderBottom: "2px solid #fbc531",
              paddingBottom: "10px"
            }}>
              Tentang Kampus Teknologi
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#444", lineHeight: "1.8" }}>
              Kampus Teknologi hadir untuk memberikan kemudahan bagi para calon mahasiswa dari SMA/SMK/MAN yang ingin melanjutkan ke perguruan tinggi. 
              Dengan sistem pendaftaran online dan informasi yang lengkap, kami membantu kamu selangkah lebih dekat ke masa depanmu!
            </p>

            <ul style={{ marginTop: "20px", paddingLeft: "0", lineHeight: "1.8", color: "#444", listStyle: "none" }}>
              <li><FaCheckCircle color="#2e86de" style={{ marginRight: "10px" }} /> Sistem pendaftaran online yang mudah digunakan</li>
              <li><FaChalkboardTeacher color="#2e86de" style={{ marginRight: "10px" }} /> Pengajar berpengalaman & profesional</li>
              <li><FaSchool color="#2e86de" style={{ marginRight: "10px" }} /> Fasilitas kampus modern & lengkap</li>
              <li><FaUserGraduate color="#2e86de" style={{ marginRight: "10px" }} /> Alumni berprestasi di berbagai bidang</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "900px", margin: "50px auto 0", textAlign: "center" }}>
        <h2 style={{ color: "#2e86de", fontSize: "2rem", marginBottom: "20px" }}>Video Profil Kampus</h2>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src="https://www.youtube.com/embed/R13BD8qKeTg"
            title="Profil Mahasiswa Teknologi"
            frameBorder="0"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "12px"
            }}
          ></iframe>
        </div>
      </div>

      <div style={{
        maxWidth: "900px",
        margin: "50px auto",
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.06)"
      }}>
        <h2 style={{ color: "#2e86de", fontSize: "2rem", textAlign: "center", marginBottom: "20px" }}>
          Testimoni Alumni
        </h2>
        <p style={{
          fontStyle: "italic",
          color: "#555",
          textAlign: "center",
          fontSize: "1.1rem"
        }}>
          "Saya sangat bersyukur pernah menimba ilmu di Kampus Teknologi. Pengajar yang profesional dan lingkungan belajar yang nyaman benar-benar membantu saya berkembang!" <br />
          <strong>- Rizki, Alumni Teknik Informatika</strong>
        </p>
      </div>
    </div>
  );
};

export default About;
