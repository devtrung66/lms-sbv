import type { Config } from "tailwindcss";

// He thong design token cho giao dien co quan nha nuoc:
// mau chu dao xanh duong (brand), nen xam nhat, bo goc mem
const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff4ff",
          100: "#dbe6fe",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af",
        },
        ink: {
          DEFAULT: "#1e293b",
          muted: "#64748b",
        },
        surface: "#f8fafc",
      },
      borderRadius: {
        card: "16px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;