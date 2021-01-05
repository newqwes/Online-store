import COLORS from '../../constants/colors';

const dark = {
  label: {
    color: {
      default: COLORS.darkDesaturatedOrange,
      inverted: COLORS.softYellow,
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
      default: COLORS.softYellow,
      disabled: COLORS.pinkishGrey,
      info: COLORS.darkishPurple,
      inverted: COLORS.softYellow,
      warning: COLORS.squash,
    },
    color: {
      default: COLORS.darkDesaturatedOrange,
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
      default: COLORS.darkModerateRed,
      inverted: COLORS.softYellow,
    },
  },
};

export default dark;
