import {style} from "@vanilla-extract/css";
import {vars} from "../../theme";

export const header = style({
  height: '56px',
  marginBottom: '120px',
  backgroundColor: vars.colors.body,
  borderBottom: `1px solid ${vars.colors.gray[3]}`,

  selectors: {
    [vars.darkSelector]: {
      borderBottom: `1px solid ${vars.colors.dark[4]}`,
    },
  },
});

export const inner = style({
  height: '56px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const link = style({
  display: "block",
  lineHeight: 1,
  padding: `8px 12px`,
  borderRadius: vars.radius.sm,
  textDecoration: "none",
  color: vars.colors.gray[7],
  fontSize: vars.fontSizes.sm,
  fontWeight: 500,
  
  selectors: {
    "&:hover": {
      backgroundColor: vars.colors.gray[0],
    },
    
    [vars.darkSelector]: {
      color: vars.colors.dark[0],
    },
    [vars.darkSelector + "&:hover"]: {
      backgroundColor: vars.colors.dark[6],
    },
    "&[data-mantine-color-scheme][data-active]": {
      backgroundColor: vars.colors.blue[6],
      color: vars.colors.white,
    }
  }
})