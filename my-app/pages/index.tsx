import Link from "next/link";

export default function HomePage() {
  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Gestión de Productos</h1>
      <div style={buttonContainerStyle}>
        <Link href="/listado">
          <button style={buttonStyle}>Generar Listado</button>
        </Link>
        <Link href="/consulta">
          <button style={buttonStyle}>Consulta por Código</button>
        </Link>
        <Link href="/creacion">
          <button style={buttonStyle}>Crear Producto</button>
        </Link>
        <Link href="/actualizacion">
          <button style={buttonStyle}>Actualizar Producto</button>
        </Link>
      </div>
    </div>
  );
}

const containerStyle = {
  textAlign: "center",
  padding: "50px",
  backgroundColor: "#FFFF00", // Amarrillo
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const headerStyle = {
  color: "#00FF00", // Verde
  marginBottom: "30px",
  fontSize: "2.5rem", // Tamaño de fuente más grande
  fontWeight: "bold", // Negrita
};

const buttonContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px", // Espaciado entre botones
};

const buttonStyle = {
  backgroundColor: "#00FF00", // Verde
  color: "#ffffff",
  border: "none",
  borderRadius: "5px",
  padding: "15px 30px",
  cursor: "pointer",
  fontSize: "16px",
  transition: "background-color 0.3s, transform 0.2s", // Efecto de transición
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  width: "200px", // Ancho fijo para todos los botones
};

// mover los botones
buttonStyle[":hover"] = {
  backgroundColor: "#005fa3", // Color más oscuro en mover
  transform: "scale(1.05)", // Efecto de escala
};
