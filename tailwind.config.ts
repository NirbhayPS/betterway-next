import { palette } from "./src/assets/theme/palette";
import { Config } from "tailwindcss"
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "gilroy-bold": ['var(--gilroy-bold)'],
        "gilroy-medium": ['var(--gilroy-medium)'],
        "gilroy-regular": ['var(--gilroy-regular)'],
        "gilroy-light": ['var(--gilroy-light)'],
        "gilroy-black": ['var(--gilroy-black)'],
        "gilroy-semi-bold": ['var(--gilroy-semi-bold)'],
      },
      spacing: {
        none: "0px",
        1: "8px",
        2: '12px',
        3: '16px',
        4: '24px',
        5: '32px',
        6: "48px",
        ss: '4px',
        s: '8px',
        ms: '16px',
        mm: '18px',
        m: '20px',
        l: '24px',
        ll: '32px',
        xl: '56px',
        xxl: '84px',
        floatingCTA: '120px',
        xxxl: '300px',
        sss: '2px',
        sx: '6px',
        mxs: '12px',
      },
      colors: {
        // ========================================
        // pallet 1
        bw_background: palette.white,
        text_on_bw_background: palette.bw_black_900,
        highlight_on_bw_background: palette.bw_blue_900,

        // ========================================
        // pallet 2
        bw_surface: palette.bw_gray_900,
        bw_surface_light: palette.bw_gray_700,
        text_on_bw_surface: palette.bw_black_900,
        highlight_on_bw_surface: palette.bw_blue_900,
        border_on_bw_surface: palette.bw_black_500,


        // ========================================
        // pallet 3
        bw_primary: palette.bw_blue_900,
        bw_primary_light: palette.bw_blue_700,
        bw_primary_lighter: palette.bw_blue_500,
        text_on_bw_primary: palette.white,

        // ========================================
        // pallet 4
        bw_secondary: palette.bw_yellow_900,
        bw_secondary_light: palette.bw_yellow_700,
        bw_secondary_lighter: palette.bw_yellow_600,
        text_on_bw_secondary: palette.black,

        // ========================================
        // pallet 5
        bw_success: palette.bw_green_900,
        bw_success_light: palette.bw_green_700,
        bw_success_lighter: palette.bw_green_500,
        text_on_bw_success: palette.bw_black_900,

        // =======================================
        // avatart
        avatar_1: palette.bw_avatar_1,
        avatar_2: palette.bw_avatar_2,
        avatar_3: palette.bw_avatar_3,

        background: palette.white,
        surface: palette.spring_wood,
        primary: palette.bw_green,
        secondary: palette.bw_yellow,
        secondary_light: palette.bw_yellow_light,
        secondary_dark: palette.bw_yellow_dark,

        surface_light: palette.light_gray,
        surface_dark: palette.black,
        surface_dark_shade_1: palette.black_shade_1,

        text_on_background: palette.black,
        text_on_chip_bg_color: palette.black,
        text_on_background_light: palette.black_shade_2,
        text_on_secondary: palette.original_black,
        text_on_primary: palette.white,
        text_on_surface: palette.black,
        text_on_surface_light: palette.black,
        text_on_surface_dark: palette.white,
        text_on_surface_highlight: palette.blue,
        text_on_surface_light_highlight: palette.blue,
        textinput_placeholder: palette.light_gray,
        textinput: palette.black,
        text_on_red: palette.white,
        text_on_blueText: palette.white,
        bw_warning: palette.bw_red,
        bw_orange: palette.bw_orange,


        // ayush colors
        text_grey: palette.bw_grey_text,
        bw_background_grey: palette.bw_background_grey,
        bw_background_blue: palette.bw_background_blue,
        bw_grey_dark_blue: palette.bw_grey_dark_blue,
        bw_doctor_background: palette.doctorBackground,
        ailment_background: palette.ailment_background,
        header_shadow: palette.header_shadow,
        contact_us_heading: palette.bw_contact_us_heading,
        blueText: palette.text_blue,
        patientName: palette.patient_name,
        text_with_opacity: palette.text_with_opacity,
        chip_bg_color: palette.chipBgColor,
        red: palette.red,
        // ayush colors END

        // sid color
        dateBarBorderColor: palette.darkBlue,
        dateBarBackground: palette.linkBlue,
        ratingCircleBgColor: palette.skyBlue,
        DrSlotBg: palette.lightBlue,
        greyBorder: palette.lightGrey,
        focusedBlue: palette.focusedBlue,
        unFocusedBlue: palette.unFocusedBlue,
        vatta: palette.vata,
        pitta: palette.pitta,
        kapha: palette.kapha,
        bluebackground: palette.bluebackground,
        symptomBackgroundBlue: palette.symptomBackgroundBlue,
        ailmentPageBg: palette.ailmentPageBg,
        darktextGrey: palette.darkTextGrey,
        bg_opacity: palette.blackOpacity,
        chipSelected: palette.chipSelected,
        followUpText: palette.followUpTexts,
        textInputBg: palette.lightGrey,
        blueSelected: palette.blueSelected,
        headingColor: palette.headingColor,
        errorRed: palette.red,
        highlight: palette.blue,

        text_on_background_highlight: palette.blue,
        text_on_highlight: palette.white,
        lightRed: palette.lightRed,
        lightGreen: palette.lightGreen,
        lightBlue: palette.lightBlue,
        chip_bg: palette.chip_bg,
        green_with_opacity: palette.green_with_opacity,
      },
      borderRadius: {
        negatives: '-20px',
        none: '0px',
        ss: '4px',
        s: '10px',
        ms: '18px',
        m: '20px',
        l: '40px',
        xl: '80px',
        xxl: '150px',
        full: "100%"
      },
      fontSize: {
        22: "22px",
      }
    },
  },
  plugins: [],
} satisfies Config


// fontFamily: {
//   "gilroy-bold": ['--gilroy-bold'],
//   "gilroy-medium": ['var(--gilroy-medium)'],
//   "gilroy-regular": ['var(--gilroy-regular)'],
//   "gilroy-light": ['var(--gilroy-light)'],
//   "gilroy-semi-bold": ['var(--gilroy-semi-bold)'],
// },
// spacing: {
//   none: "0px",
//   1: "8px",
//   2: '12px',
//   3: '16px',
//   4: '24px',
//   5: '32px',
//   6: "48px",
//   ss: '4px',
//   s: '8px',
//   ms: '16px',
//   mm: '18px',
//   m: '20px',
//   l: '24px',
//   ll: '32px',
//   xl: '56px',
//   xxl: '84px',
//   floatingCTA: '120px',
//   xxxl: '300px',
//   sss: '2px',
//   sx: '6px',
//   mxs: '12px',
// },
// colors: {
//   primary: palette.bw_green_900,
//   secondary:palette.bw_yellow_900
// },
// borderRadius: {
//   negatives: '-20px',
//   none: '0px',
//   ss: '4px',
//   s: '10px',
//   ms: '18px',
//   m: '20px',
//   l: '40px',
//   xl: '80px',
//   xxl: '150px',
//   full: "100%"
// },
// fontSize: {
//   22: "22px",
//   45:"45px"
// }