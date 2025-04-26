import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        
        // Updated color schemes based on the images
        primary: {
          light: "#34d399", // Lighter green from Image 2
          DEFAULT: "#10b981", // Green from Image 2
          dark: "#059669", // Darker green for contrast
        },
        secondary: {
          light: "#e2e8f0",
          DEFAULT: "#64748b",
          dark: "#1e293b",
          foreground: "hsl(var(--secondary-foreground))",
        },
        
        // Gradient colors from both images
        gradient: {
          blue: {
            start: "#0ea5e9", // Blue from Image 2
            mid: "#2563eb",
            end: "#1d4ed8",
          },
          green: {
            start: "#10b981", // Green from Image 2
            mid: "#059669",
            end: "#047857",
          },
          teal: {
            start: "#14b8a6",
            mid: "#0d9488",
            end: "#0f766e",
          },
        },
        
        // Accent colors observed in both designs
        accent: {
          blue: "#3b82f6", // Lattice blue from Image 1
          teal: "#0d9488", // Teal accent
          green: "#10b981", // Green from Image 2
          orange: "#f97316",
          yellow: "#f59e0b", // Rating stars color in Image 1
        },
        
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: "#10b981",
        warning: "#f59e0b",
        chart: {
          "1": "#3b82f6",
          "2": "#10b981",
          "3": "#f59e0b",
          "4": "#ef4444",
          "5": "#8b5cf6",
        },
      },
      
      fontFamily: {
        sans: [
          "Inter", // Main font seen in Image 1
          "system-ui",
          "sans-serif",
        ],
        display: [
          "Plus Jakarta Sans", // For headings like in Image 2
          "Inter",
          "sans-serif",
        ],
      },
      
      borderRadius: {
        lg: "var(--radius, 0.75rem)",
        md: "calc(var(--radius, 0.75rem) - 2px)",
        sm: "calc(var(--radius, 0.75rem) - 4px)",
        "2xl": "1rem", // Rounded corners like in Image 2
        "3xl": "1.5rem", // Very rounded card in Image 1
      },
      
      boxShadow: {
        card: "0 4px 24px rgba(0, 0, 0, 0.06)", // Card shadow from Image 1
        "card-hover": "0 8px 32px rgba(0, 0, 0, 0.12)",
        button: "0 2px 8px rgba(0, 0, 0, 0.1)",
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(to right, #0ea5e9, #10b981)", // Blue to green gradient like Image 2
        "card-gradient": "linear-gradient(to bottom right, #f0fdfa, #ecfdf5)", // Subtle card gradient
      },
      
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },  
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;