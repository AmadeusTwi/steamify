import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-motiva)", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-store-background": "var(--gpGradient-StoreBackground)",
        "gradient-library-background": "var(--gpGradient-LibraryBackground)",
      },
      colors: {
        // System greys
        "system-lightest-grey": "var(--gpSystemLightestGrey)",
        "system-lighter-grey": "var(--gpSystemLighterGrey)",
        "system-light-grey": "var(--gpSystemLightGrey)",
        "system-grey": "var(--gpSystemGrey)",
        "system-dark-grey": "var(--gpSystemDarkGrey)",
        "system-darker-grey": "var(--gpSystemDarkerGrey)",
        "system-darkest-grey": "var(--gpSystemDarkestGrey)",

        // Store blue greys
        "store-lightest-grey": "var(--gpStoreLightestGrey)",
        "store-lighter-grey": "var(--gpStoreLighterGrey)",
        "store-light-grey": "var(--gpStoreLightGrey)",
        "store-grey": "var(--gpStoreGrey)",
        "store-dark-grey": "var(--gpStoreDarkGrey)",
        "store-darker-grey": "var(--gpStoreDarkerGrey)",
        "store-darkest-grey": "var(--gpStoreDarkestGrey)",

        // Individual colors
        blue: "var(--gpColor-Blue)",
        "blue-hi": "var(--gpColor-BlueHi)",
        green: "var(--gpColor-Green)",
        "green-hi": "var(--gpColor-GreenHi)",
        orange: "var(--gpColor-Orange)",
        red: "var(--gpColor-Red)",
        "red-hi": "var(--gpColor-RedHi)",
        "dusty-blue": "var(--gpColor-DustyBlue)",
        "light-blue": "var(--gpColor-LightBlue)",
        yellow: "var(--gpColor-Yellow)",
        "chalky-blue": "var(--gpColor-ChalkyBlue)",

        // Backgrounds
        "background-light-softer": "var(--gpBackground-LightSofter)",
        "background-light-soft": "var(--gpBackground-LightSoft)",
        "background-light-medium": "var(--gpBackground-LightMedium)",
        "background-light-hard": "var(--gpBackground-LightHard)",
        "background-light-harder": "var(--gpBackground-LightHarder)",
        "background-dark-softer": "var(--gpBackground-DarkSofter)",
        "background-dark-soft": "var(--gpBackground-DarkSoft)",
        "background-dark-medium": "var(--gpBackground-DarkMedium)",
        "background-dark-hard": "var(--gpBackground-DarkHard)",
        "background-neutral-light-softer":
          "var(--gpBackground-Neutral-LightSofter)",
        "background-neutral-light-soft":
          "var(--gpBackground-Neutral-LightSoft)",
        "background-neutral-light-medium":
          "var(--gpBackground-Neutral-LightMedium)",
        "background-neutral-light-hard":
          "var(--gpBackground-Neutral-LightHard)",
        "background-neutral-light-harder":
          "var(--gpBackground-Neutral-LightHarder)",
      },
    },
  },
  plugins: [],
} satisfies Config;
