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
        
        // Main brand color - teal/green used for buttons & accents
        primary: {
          light: "#2dd4bf", // Lighter teal for hover states
          DEFAULT: "#10b981", // Main green/teal color from buttons
          dark: "#0d9488", // Darker teal for pressed states
        },
        secondary: {
          light: "#f1f5f9",
          DEFAULT: "#64748b",
          dark: "#334155",
          foreground: "hsl(var(--secondary-foreground))",
        },
        
        // Feature card colors from Image 2
        feature: {
          healthcare: "#fff7ed", // Light orange bg 
          shelter: "#eff6ff", // Light blue bg
          tracking: "#ecfdf5", // Light green bg
          telemedicine: "#f3e8ff", // Light purple bg
          digital: "#f0f9ff", // Light cyan bg
        },
        
        // Icon colors from feature sections
        icon: {
          healthcare: "#fb923c", // Orange
          shelter: "#3b82f6", // Blue
          tracking: "#10b981", // Green
          telemedicine: "#a855f7", // Purple
          digital: "#0ea5e9", // Cyan
        },
        
        // Accent colors from the design
        accent: {
          blue: "#3b82f6",
          teal: "#14b8a6",
          green: "#10b981",
          orange: "#f97316",
          yellow: "#fbbf24", // Stars in reviews
        },
        
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: "#10b981",
        warning: "#f59e0b",
        info: "#3b82f6",
        stat: {
          shelters: "#fef3c7", // Light yellow bg
          vets: "#dbeafe", // Light blue bg
          pets: "#d1fae5", // Light green bg
          satisfaction: "#f3e8ff", // Light purple bg
        }
      },
      
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },
      
      borderRadius: {
        lg: "var(--radius, 0.75rem)",
        md: "calc(var(--radius, 0.75rem) - 2px)",
        sm: "calc(var(--radius, 0.75rem) - 4px)",
        "2xl": "1rem", // Rounded corners for cards
        "3xl": "1.5rem", // Very rounded elements like in hero section
        "4xl": "2rem", // Extra rounded corners for featured mobile app cards
      },
      
      boxShadow: {
        card: "0 4px 24px rgba(0, 0, 0, 0.04)", // Light shadow for cards
        "card-hover": "0 8px 32px rgba(0, 0, 0, 0.08)",
        button: "0 2px 8px rgba(16, 185, 129, 0.25)", // Green glow for buttons
        "button-hover": "0 4px 12px rgba(16, 185, 129, 0.4)",
        app: "0 25px 50px -12px rgba(0, 0, 0, 0.15)", // Shadow for app mockups
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "radial-gradient(circle at 10% 90%, rgba(236, 253, 245, 0.7), transparent 30%), radial-gradient(circle at 90% 10%, rgba(224, 242, 254, 0.7), transparent 30%)",
        "card-gradient": "linear-gradient(to bottom right, #f0fdfa, #ecfdf5)", // Subtle card gradient
        "cta-gradient": "linear-gradient(to right, #10b981, #0ea5e9)", // Green to blue gradient
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
        "pulse-gentle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
      
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "pulse-gentle": "pulse-gentle 3s infinite ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;