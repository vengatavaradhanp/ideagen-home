import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "linear-gradient(180deg, hsl(210deg 27% 26%) 0%, hsl(205deg 29% 30%) 10%, hsl(201deg 30% 34%) 20%, hsl(198deg 30% 38%) 30%, hsl(194deg 30% 42%) 40%, hsl(190deg 29% 46%) 50%, hsl(189deg 34% 44%) 60%, hsl(188deg 39% 42%) 70%, hsl(187deg 46% 40%) 80%, hsl(185deg 54% 37%) 90%, hsl(184deg 68% 33%) 100%)",
        height: "100vh",
      }}
    >
      <div
        style={{
          color: "#fff",
          fontSize: "300px",
          fontWeight: 600,
          lineHeight: 0.9,
          fontFamily: "monospace",
          opacity: 0.8,
        }}
      >
        404
      </div>
      <div
        style={{
          color: "#fff",
          fontSize: "30px",
          fontWeight: 500,
          lineHeight: 0.9,
          fontFamily: "monospace",
          opacity: 0.8,
        }}
      >
        Page Not Found
      </div>
      <div style={{ margin: "25px" }}>
        <Button
          variant="outlined"
          style={{ color: "#fff", border: "1px solid #fff" }}
          onClick={() => {
            navigate("/");
            window.location.reload();
          }}
        >
          Go Back
        </Button>
      </div>
    </div>
  );
}
