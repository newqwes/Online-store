import React from 'react';
import PropTypes from 'prop-types';
import ICON_SIZE from '../../../constants/iconSize';

const Phone = ({ size, marginTop, marginRight, marginBottom, marginLeft }) => (
  <svg
    id='Phone_1'
    enableBackground='new 0 0 512 512'
    height={size}
    viewBox='0 0 512 512'
    width={size}
    xmlns='http://www.w3.org/2000/svg'
    style={{ margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px` }}
  >
    <g>
      <path
        d='m418.694 243.685c-1.433-1.517 3.308 3.25-79.232-79.291-4.289-4.291-10.743-5.572-16.347-3.252-5.605 2.322-9.26 7.792-9.26 13.858v322c0 8.284 6.716 15 15 15h80c7.153 0 13.312-5.051 14.71-12.066l27.95-140.15c8.475-42.197-3.81-85.615-32.821-116.099z'
        fill='#f5dccc'
      />
      <g>
        <g>
          <path
            d='m364.618 288.977-46.37-46.37c-5.858-5.858-5.858-15.355 0-21.213 5.857-5.858 15.355-5.858 21.213 0l46.37 46.37c5.858 5.858 5.858 15.355 0 21.213-5.856 5.857-15.355 5.858-21.213 0z'
            fill='#f0cabb'
          />
        </g>
      </g>
      <path
        d='m343.855 45v422c0 24.81-20.19 45-45 45h-196c-24.81 0-45-20.19-45-45v-422c0-24.81 20.19-45 45-45h196c24.81 0 45 20.19 45 45z'
        fill='#bceaf9'
      />
      <path
        d='m343.855 45v422c0 24.81-20.19 45-45 45h-98v-512h98c24.81 0 45 20.19 45 45z'
        fill='#78b7ea'
      />
      <path
        d='m298.855 0h-196c-24.81 0-45 20.19-45 45v422c0 24.81 20.19 45 45 45h196c24.81 0 45-20.19 45-45v-422c0-24.81-20.19-45-45-45zm15 417h-226v-372c0-8.27 6.73-15 15-15h196c8.27 0 15 6.73 15 15z'
        fill='#425796'
      />
      <path
        d='m343.855 45v422c0 24.81-20.19 45-45 45h-98v-95h113v-372c0-8.27-6.73-15-15-15h-98v-30h98c24.81 0 45 20.19 45 45z'
        fill='#283758'
      />
      <path
        d='m314.288 237.914c-8.555-8.682-20.364-13.969-33.434-13.969-25.951 0-47 20.99-47 46.995 0 12.499 4.842 24.25 13.639 33.111l57.462 59.983c-6.516 4.964-14.073 11.874-21.457 21.231-22.324 28.292-33.643 65.885-33.643 111.735v15h110v-226.779z'
        fill='#f5dccc'
      />
    </g>
  </svg>
);

Phone.propTypes = {
  size: PropTypes.number,
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
};

Phone.defaultProps = {
  size: ICON_SIZE.medium,
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
};

export default Phone;
