// src/pages/NotFound.jsx
export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <p>Sorry, siden findes ikke!</p>
      <button onClick={() => (window.location.href = "/")}>
        Tilbage til forsiden
      </button>
    </div>
  );
}
