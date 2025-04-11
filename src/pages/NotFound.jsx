const NotFound = () => {
    return (
      <div style={{
        textAlign: "center",
        padding: "100px 20px",
        minHeight: "80vh",
        backgroundColor: "#f8f9fa"
      }}>
        <h1 style={{ fontSize: "4rem", color: "#2e86de", marginBottom: "10px" }}>404</h1>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Halaman Tidak Ditemukan</h2>
        <p style={{ fontSize: "1rem", color: "#555" }}>
          Maaf, halaman yang kamu cari tidak tersedia atau telah dipindahkan.
        </p>
        <a href="/" style={{
          marginTop: "30px",
          display: "inline-block",
          backgroundColor: "#2e86de",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "bold"
        }}>
          Kembali ke Beranda
        </a>
      </div>
    );
  };
  
  export default NotFound;
  