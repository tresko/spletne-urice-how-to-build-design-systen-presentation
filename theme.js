const yellow = "#fd0";

export const theme = {
  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
  googleFont:
    "https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Roboto+Mono",
  fonts: {
    body: '"Roboto Condensed", system-ui, sans-serif',
    monospace: '"Roboto Mono", monospace'
  },
  colors: {
    text: "#000",
    background: yellow,
    primary: "#333"
  },
  text: {
    heading: {
      textTransform: "uppercase",
      textAlign: "center",
      padding: "0 5%"
    }
  },
  styles: {
    pre: {
      textAlign: "left",
      color: "background",
      bg: "text"
    },
    code: {
      color: "background",
      bg: "text"
    }
  }
};
