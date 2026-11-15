module.exports = {
  darkMode: "media",
  content: ["./app/**/*.{ts,tsx}"],
  theme: { extend: { colors: {
    paper: "var(--paper)", card: "var(--card)", ink: "var(--ink)", mute: "var(--mute)",
    line: "var(--line)", accent: "var(--accent)", good: "var(--good)", bad: "var(--bad)", alt: "var(--alt)",
  }, fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"] } } },
};
