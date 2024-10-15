import colors from "tailwindcss/colors"
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral
      }
    },
  },
  plugins: [],
} satisfies Config;