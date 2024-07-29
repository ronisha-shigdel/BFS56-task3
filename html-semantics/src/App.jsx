import React from "react";

function App() {
  return (
    <div>
      <header
        style={{
          backgroundColor: "lightblue",
          padding: "10px",
          borderBottom: "2px solid black",
        }}
      >
        <h1 style={{ fontSize: "2em", margin: "0" }}>Header</h1>
        <p style={{ margin: "0" }}>This is the header section.</p>
      </header>

      <nav
        style={{ backgroundColor: "#343a40", color: "white", padding: "10px" }}
      >
        <ul
          style={{
            listStyleType: "none",
            padding: "0",
            margin: "0",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <body style={{ padding: "20px" }}>
        <section style={{ marginBottom: "20px" }}>
          <h2>Section 1</h2>
          <p>This is the first section.</p>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2>Section 2</h2>
          <p>This is the second section.</p>
        </section>

        <article
          style={{
            marginBottom: "20px",
            border: "1px solid black",
            padding: "10px",
          }}
        >
          <h3>Article</h3>
          <p>This is an article within the main content.</p>
        </article>
      </body>

      <footer
        style={{
          backgroundColor: "lightblue",
          padding: "10px",
          borderTop: "2px solid #ccc",
        }}
      >
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
