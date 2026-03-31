import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

const subjects = [
  // {
  //   name: "Mathematics",
  //   icon: "📘",
  //   link: "/docs/mathematics",
  // },
  {
    name: "Physics",
    icon: "⚡",
    link: "/docs/igcse/physics/intro",
  },
  // {
  //   name: "Chemistry",
  //   icon: "🧪",
  //   link: "/docs/igcse/chemistry",
  // },
  // {
  //   name: "Biology",
  //   icon: "🌱",
  //   link: "/docs/biology",
  // },
  {
    name: "Computer Science",
    icon: "💻",
    link: "/docs/igcse/computer-science/intro",
  },
  // {
  //   name: "Business Studies",
  //   icon: "📈",
  //   link: "/docs/business",
  // },
  {
    name: "Geography",
    icon: "📈",
    link: "/docs/igcse/geography/intro",
  },
];

export default function Subjects() {
  return (
    <Layout title="Subjects" description="Explore all subjects">
      <main style={styles.container}>
        <h1 style={styles.title}>📚 Subjects</h1>
        <p style={styles.subtitle}>Choose a subject to start learning</p>

        <div style={styles.grid}>
          {subjects.map((subject, index) => (
            <Link to={subject.link} key={index} style={styles.card}>
              <div style={styles.icon}>{subject.icon}</div>
              <h3>{subject.name}</h3>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
  },
  subtitle: {
    color: "#666",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  card: {
    padding: "25px",
    backgroundColor: "#f9fafb",
    borderRadius: "12px",
    textDecoration: "none",
    color: "black",
    transition: "0.2s",
  },
  icon: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
};
