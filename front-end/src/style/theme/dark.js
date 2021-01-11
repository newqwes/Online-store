import COLORS from '../../constants/colors';

const dark = {
  label: {
    color: {
      inverted: COLORS.darkDesaturatedOrange,
      default: COLORS.verySoftYellow,
    },
  },
  cardItem: {
    background: {
      inverted: COLORS.mostlyWhiteYellow,
      default: COLORS.softYellow,
    },
    color: {
      inverted: COLORS.darkDesaturatedOrange,
      default: COLORS.softYellow,
    },
    shadow: {
      default: COLORS.softYellow,
    },
    hoverShadow: {
      default: COLORS.verySoftYellow,
    },
  },
  navbar: {
    background: {
      inverted: COLORS.mostlyWhiteYellow,
      default: COLORS.softYellow,
    },
    color: {
      inverted: COLORS.darkDesaturatedOrange,
      default: COLORS.softYellow,
    },
    hoverBackground: {
      default: COLORS.softYellow,
    },
  },
  link: {
    color: {
      inverted: COLORS.darkDesaturatedOrange,
      default: COLORS.softYellow,
    },
    hover: {
      inverted: COLORS.brownTone,
      default: COLORS.softYellow,
    },
    focus: {
      inverted: COLORS.brownTone,
      default: COLORS.softYellow,
    },
  },
  button: {
    background: {
      default: COLORS.darkGrayishOrange,
      disabled: COLORS.pinkishGrey,
      info: COLORS.darkishPurple,
      inverted: COLORS.softYellow,
      warning: COLORS.squash,
    },
    color: {
      default: COLORS.verySoftYellow,
      disabled: COLORS.pinkishGrey,
      info: COLORS.darkishPurple,
      inverted: COLORS.softYellow,
      warning: COLORS.squash,
    },
    border: {
      default: COLORS.darkDesaturatedOrange,
      disabled: COLORS.pinkishGrey,
      info: COLORS.darkishPurple,
      inverted: COLORS.softYellow,
      warning: COLORS.squash,
    },
  },
  background: {
    color: {
      inverted: COLORS.darkDesaturatedOrange,
      default: COLORS.softYellow,
    },
  },
};

export default dark;
