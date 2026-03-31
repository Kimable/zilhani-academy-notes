import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Home() {
  return (
    <Layout
      title="Zilhani Academy"
      description="Simple. Clear. Effective Learning."
    >
      <main>
        {/* HERO SECTION */}
        <section style={styles.hero}>
          <img
            src="/img/logo.png"
            alt="Zilhani Academy"
            style={{ maxWidth: "300px" }}
          />
          <h1 style={styles.title}>ZILHANI ACADEMY</h1>
          <p style={styles.tagline}>Simple. Clear. Effective Learning.</p>

          <h2 style={styles.subtitle}>IGCSE & A-Level Notes</h2>

          <p style={styles.description}>
            Designed to help students understand faster, revise smarter, and
            achieve top grades.
          </p>

          <div style={styles.buttons}>
            <Link to="/subjects" style={styles.primaryBtn}>
              📚 Explore Subjects
            </Link>
            <Link to="/docs/intro" style={styles.secondaryBtn}>
              🚀 Start Learning
            </Link>
          </div>
        </section>

        {/* FEATURES */}
        <section style={styles.features}>
          <div style={styles.card}>📊 Exam-Focused Notes</div>
          <div style={styles.card}>🧠 Easy-to-Understand Concepts</div>
          <div style={styles.card}>✍️ Practice Questions Included</div>
          <div style={styles.card}>🚀 Structured for Success</div>
        </section>
      </main>
    </Layout>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "80px 20px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
  },
  tagline: {
    fontSize: "1.2rem",
    color: "#666",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "2rem",
    marginTop: "20px",
  },
  description: {
    maxWidth: "600px",
    margin: "20px auto",
    fontSize: "1.1rem",
  },
  buttons: {
    marginTop: "30px",
  },
  primaryBtn: {
    margin: "10px",
    padding: "12px 20px",
    backgroundColor: "#2563eb",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
  },
  secondaryBtn: {
    margin: "10px",
    padding: "12px 20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textDecoration: "none",
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    padding: "40px",
  },
  card: {
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    textAlign: "center",
    fontWeight: "500",
  },
};
