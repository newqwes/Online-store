import { getOr } from 'lodash/fp';

const getUserId = req => getOr(null, ['user', 'id'], req);

export default getUserId;
