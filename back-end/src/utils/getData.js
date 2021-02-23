import { isArray } from 'lodash';

const getData = value => {
  if (isArray(value)) {
    const [, dataValues] = value;

    return dataValues.toJSON();
  }

  return value.toJSON();
};

export default getData;
