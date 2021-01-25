import COLORS from '../../constants/colors';
import pizzaImage from '../../assets/images/pizza-image.png';
import pizzaBg from '../../assets/images/pizza-bg.jpg';

const light = {
  label: {
    color: {
      default: COLORS.darkDesaturatedOrange,
      inverted: COLORS.verySoftYellow,
      warning: COLORS.darkPink,
    },
  },
  login: {
    background: {
      default: COLORS.mostlyWhiteYellow,
      inverted: COLORS.softYellow,
    },
    label: {
      color: {
        default: COLORS.darkDesaturatedOrange,
        inverted: COLORS.verySoftYellow,
      },
    },
    link: {
      color: {
        default: COLORS.darkDesaturatedOrange,
        inverted: COLORS.verySoftYellow,
      },
    },
    input: {
      border: {
        default: COLORS.darkDesaturatedOrange,
        inverted: COLORS.verySoftYellow,
      },
    },
    button: {
      color: {
        default: COLORS.darkDesaturatedOrange,
        inverted: COLORS.verySoftYellow,
      },
      border: {
        default: COLORS.darkDesaturatedOrange,
        inverted: COLORS.verySoftYellow,
      },
      background: {
        default: COLORS.darkDesaturatedOrange,
        inverted: COLORS.verySoftYellow,
      },
      shadow: {
        default: COLORS.veryDarkGray,
        inverted: COLORS.veryDarkGray,
      },
    },
    shadow: {
      main: {
        default: COLORS.veryDarkGray,
        inverted: COLORS.veryDarkGray,
      },
      error: {
        default: COLORS.softRedShadow,
        inverted: COLORS.softRedShadow,
      },
      success: {
        default: COLORS.softLimeGreenShadow,
        inverted: COLORS.softLimeGreenShadow,
      },
    },
  },

  card: {
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
      default: COLORS.softYellow,
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
    imageItem: {
      default: pizzaImage,
    },
    imageBackground: {
      default: pizzaBg,
    },
  },
};

export default light;
