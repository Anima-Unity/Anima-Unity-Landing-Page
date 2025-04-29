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
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "#ff8a75", // Lighter coral for hover states
          dark: "#e85a43", // Darker coral for pressed states
          coral: "#ff6b52", // Main coral/salmon color
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          blue: "#3b82f6",
          coral: "#ff6b52",
          green: "#10b981",
          gray: "#6b7280",
          black: "#111827",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        
        // Feature card colors
        feature: {
          white: "#ffffff", // White cards
          lightGray: "#f8f8f8", // Light gray background
          lightPink: "#fff5f3", // Very light pink/coral background
        },
        
        // Order status colors
        order: {
          completed: "#10b981", // Green
          processing: "#3b82f6", // Blue
          canceled: "#ef4444", // Red
          pending: "#f59e0b", // Amber
        },
        
        // Additional utility colors
        success: "#10b981",
        warning: "#f59e0b",
        info: "#3b82f6",

        // Chart colors
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      
      fontFamily: {
        sans: [
          "Poppins",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "Poppins",
          "system-ui",
          "sans-serif",
        ],
      },
      
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "0.75rem", // Rounded corners for cards
        "3xl": "1rem", // Very rounded elements like buttons
        "4xl": "1.5rem", // Extra rounded corners for featured cards
        "full": "9999px", // For pill buttons
      },
      
      boxShadow: {
        card: "0 4px 16px rgba(0, 0, 0, 0.04)", // Light shadow for cards
        "card-hover": "0 8px 24px rgba(0, 0, 0, 0.06)",
        button: "0 2px 8px rgba(255, 107, 82, 0.25)", // Coral glow for buttons
        "button-hover": "0 4px 12px rgba(255, 107, 82, 0.4)",
        app: "0 20px 40px -12px rgba(0, 0, 0, 0.1)", // Shadow for app mockups
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "radial-gradient(circle at 10% 90%, rgba(255, 245, 243, 0.8), transparent 30%), radial-gradient(circle at 90% 10%, rgba(255, 245, 243, 0.8), transparent 30%)",
        "card-gradient": "linear-gradient(to bottom right, #ffffff, #fff5f3)", // Subtle card gradient
        "primary-gradient": "linear-gradient(135deg, #FF9A8B 0%, #FF6B95 100%)", // Untuk btn-primary
        "coral-gradient": "linear-gradient(to right, #ff6b52, #ff8a75)", // Coral gradient untuk CTA
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
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.text-gradient': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-primary-gradient': {
          'background': 'linear-gradient(to right, #ff6b52, #ff8a75)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
          '-webkit-text-fill-color': 'transparent',
        },
        '.btn-primary': {
          'background': 'linear-gradient(135deg, #FF9A8B 0%, #FF6B95 100%)',
          'transition': 'all 0.3s ease',
        },
        '.btn-primary:hover': {
          'transform': 'translateY(-2px)',
          'box-shadow': '0 10px 20px -5px rgba(255, 107, 149, 0.4)',
        },
        '.btn-secondary': {
          'transition': 'all 0.3s ease',
        },
        '.btn-secondary:hover': {
          'transform': 'translateY(-2px)',
          'box-shadow': '0 10px 20px -5px rgba(0, 0, 0, 0.1)',
        },
        '.feature-card:hover': {
          'transform': 'translateY(-10px)',
          'box-shadow': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        },
        '.testimonial-card:hover': {
          'transform': 'scale(1.02)',
        },
        '.nav-link:hover': {
          'color': '#FF6B95',
        },
        '.nav-link.active': {
          'color': '#FF6B95',
          'font-weight': '600',
        },
        '.pricing-card:hover': {
          'transform': 'scale(1.03)',
        },
        '.pricing-card.popular': {
          'border': '2px solid #FF6B95',
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          'display': 'none',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.paw-bg': {
          'background-image': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fecaca' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h6v-2H6zM6 4V0H4v4H0v2h4v4h2V6h6V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        },
        '.card-shadow': {
          'box-shadow': '0 4px 16px rgba(0, 0, 0, 0.04)',
        },
        '.button-shadow': {
          'box-shadow': '0 2px 8px rgba(255, 107, 82, 0.25)',
        },
        '.order-card': {
          'border-radius': '0.75rem',
          'box-shadow': '0 4px 16px rgba(0, 0, 0, 0.04)',
          'background-color': '#ffffff',
          'border': '1px solid #f1f1f1',
        },
        '.customizr-button': {
          'background-color': '#ff6b52',
          'color': '#ffffff',
          'border-radius': '0.5rem',
          'padding': '0.5rem 1rem',
          'box-shadow': '0 2px 8px rgba(255, 107, 82, 0.25)',
          'transition': 'all 0.2s ease-in-out',
        },
        '.customizr-button:hover': {
          'background-color': '#ff8a75',
          'box-shadow': '0 4px 12px rgba(255, 107, 82, 0.4)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};

export default config;