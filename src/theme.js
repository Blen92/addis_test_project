export const theme = {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    primary: "#07c",
    lightgray: "#f6f6ff",
    // text: "white",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)",
  },
  text: {},
  buttons: {
    primary: {
      color: "white",
      bg: "primary",
    },
  },
  variants: {
    card: {
      p: 2,
      bg: "background",
      boxShadow: "card",
      borderRadius: 2,
    },
    badge: {
      display: "inline-block",
      p: 1,
      color: "white",
      bg: "primary",
      borderRadius: 2,
    },
  },
  form: {
    input: {
      color: "red",
    },
    select: {
      borderRadius: 9999,
    },
    textarea: {},
    label: { color: "red" },
    radio: {},
    checkbox: {},
  },
};
