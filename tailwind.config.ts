import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main colours
        "schiphol-blue": "var(--schiphol-blue)",
        "afternoon-blue": "var(--afternoon-blue)",
        "seebuyfly-yellow": "var(--seebuyfly-yellow)",

        // Secondary colours
        "morning-pink": "var(--morning-pink)",
        "lightmorning-pink": "var(--lightmorning-pink)",
        "lightmorning-blue": "var(--lightmorning-blue)",
        "dusk-green": "var(--dusk-green)",
        "dusk-blue": "var(--dusk-blue)",
        "evening-pink": "var(--evening-pink)",
        "evening-lilac": "var(--evening-lilac)",

        // Greys
        black: "var(--black)",
        "grey-storm": "var(--grey-storm)",
        "grey-overcast": "var(--grey-overcast)",
        "grey-broken": "var(--grey-broken)",
        "grey-scattered": "var(--grey-scattered)",
        "grey-few": "var(--grey-few)",
        white: "var(--white)",

        // Signal colours
        "dark-red": "var(--dark-red)",
        green: "var(--green)",
        "light-blue": "var(--light-blue)",
        "light-green": "var(--light-green)",
        "light-yellow": "var(--light-yellow)",
      },
      backgroundImage: {
        // Domain gradients
        "gradient-flights": "var(--gradient-flights)",
        "gradient-parking": "var(--gradient-parking)",
        "gradient-at-schiphol": "var(--gradient-at-schiphol)",
        "gradient-more": "var(--gradient-more)",
        "gradient-privium": "var(--gradient-privium)",
      },
    },
  },
  plugins: [],
} satisfies Config;
