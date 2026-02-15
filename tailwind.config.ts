import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                charcoal: "#121212",
                "electric-violet": "#8B5CF6",
                "soft-teal": "#2DD4BF",
                "glass-white": "rgba(255, 255, 255, 0.05)",
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
                mono: ["var(--font-geist-mono)", "monospace"],
            },
        },
    },
    plugins: [],
};
export default config;
