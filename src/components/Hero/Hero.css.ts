import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.ts";

// TODO: Adjust colors and images, hot pink is not chill guy enough for final version ;)
export const root = style({
  backgroundColor: "#11284b",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #C71585 70%), 
    url(https://www.infobae.com/resizer/v2/4XO2QTLEIFHV3HY342YHSQBZHA.jpg?auth=43f7b916789782348571554f6f4c60bbac73a820df9c1cd6c82a923aca9fda68&smart=true&width=992&height=558&quality=85)`,
  paddingTop: `calc(${vars.spacing.xl} * 3)`,
  paddingBottom: `calc(${vars.spacing.xl} * 3)`,
});

export const inner = style({
  display: "flex",
  justifyContent: "space-between",

  "@media": {
    [`(max-width: ${vars.breakpoints.md})`]: {
      flexDirection: "column",
    },
  },
});

export const content = style({
  paddingTop: `calc(${vars.spacing.xl} * 2)`,
  paddingBottom: `calc(${vars.spacing.xl} * 2)`,
  marginRight: `calc(${vars.spacing.xl} * 3)`,

  "@media": {
    [`(max-width: ${vars.breakpoints.md})`]: {
      marginRight: 0,
    },
  },
});

export const title = style({
  color: vars.colors.white,
  fontFamily: `Greycliff CF, ${vars.fontFamily}`,
  fontWeight: 900,
  lineHeight: 1.05,
  maxWidth: "500px",
  fontSize: "48px",

  "@media": {
    [vars.smallerThan(vars.breakpoints.md)]: {
      maxWidth: "100%",
      fontSize: "34px",
      lineHeight: 1.15,
    },
  },
});

export const description = style({
  color: vars.colors.white,
  opacity: 0.75,
  maxWidth: "500px",

  "@media": {
    [vars.smallerThan(vars.breakpoints.md)]: {
      maxWidth: "100%",
    },
  },
});

export const control = style({
  paddingLeft: "50px",
  paddingRight: "50px",
  fontFamily: `Greycliff CF, ${vars.fontFamily}`,
  fontSize: "22px",

  "@media": {
    [vars.smallerThan(vars.breakpoints.md)]: {
      width: "100%",
    },
  },
});
