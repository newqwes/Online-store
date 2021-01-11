import COLORS from '../../constants/colors';

const light = {
  label: {
    color: {
      default: COLORS.darkDesaturatedOrange,
      inverted: COLORS.verySoftYellow,
    },
  },
  cardItem: {
    background: {
      default: COLORS.mostlyWhiteYellow,
      inverted: COLORS.softYellow,
    },
    color: {
      default: COLORS.darkDesaturatedOrange,
      inverted: COLORS.softYellow,
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
      default: COLORS.mostlyWhiteYellow,
      inverted: COLORS.softYellow,
    },
    color: {
      default: COLORS.darkDesaturatedOrange,
      inverted: COLORS.softYellow,
    },
    hoverBackground: {
      default: COLORS.softYellow,
    },
  },
  link: {
    color: {
      default: COLORS.darkDesaturatedOrange,
      inverted: COLORS.softYellow,
    },
    hover: {
      default: COLORS.brownTone,
      inverted: COLORS.softYellow,
    },
    focus: {
      default: COLORS.brownTone,
      inverted: COLORS.softYellow,
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
      default: COLORS.darkDesaturatedOrange,
      inverted: COLORS.softYellow,
    },
  },
};

export default light;
