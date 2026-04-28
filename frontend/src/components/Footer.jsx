import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        <div style={styles.left}>
          <h3 style={styles.logo}>MediCare</h3>
          <p style={styles.text}>
            Your trusted healthcare management system.
          </p>
        </div>

        <div style={styles.center}>
          <h4>Quick Links</h4>
          <a href="/" style={styles.link}>Home</a>
          <a href="/about" style={styles.link}>About</a>
          <a href="/services" style={styles.link}>Services</a>
          <a href="/contact" style={styles.link}>Contact</a>
        </div>

        <div style={styles.right}>
          <h4>Contact</h4>
          <p style={styles.text}>📍 Kathmandu, Nepal</p>
          <p style={styles.text}>📧 support@medicare.com</p>
          <p style={styles.text}>📞 +977-98XXXXXXXX</p>
        </div>

      </div>

      <div style={styles.bottom}>
        <p>© {new Date().getFullYear()} MediCare. All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#0f172a",
    color: "white",
    marginTop: "40px",
  width: "100%",
  
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "40px",
    flexWrap: "wrap",
  },
  left: {
    flex: "1",
    minWidth: "200px",
  },
  center: {
    flex: "1",
    minWidth: "200px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  right: {
    flex: "1",
    minWidth: "200px",
  },
  logo: {
    marginBottom: "10px",
    color: "#38bdf8",
  },
  text: {
    fontSize: "14px",
    color: "#cbd5e1",
  },
  link: {
    color: "#cbd5e1",
    textDecoration: "none",
    fontSize: "14px",
  },
  bottom: {
    textAlign: "center",
    padding: "15px",
    borderTop: "1px solid #334155",
    fontSize: "13px",
    color: "#94a3b8",
  },
};

export default Footer;