import React from 'react';

import Icon from './Icon';
import {IIcon} from './icons.types';

const SoldCircleIcon = (props: IIcon) => {
  return (
    <Icon viewBox="0 0 512 512" {...props}>
      <path
        fill="inherit"
        d="m512 256c0 63.7-23.27 121.97-61.78 166.77-6.48 7.54-73.19 58.99-79.85 62.32-34.42 17.22-73.26 26.91-114.37 26.91-77.88 0-147.64-34.78-194.6-89.66-4.83-5.65-51.86-96.02-54.44-106.85-4.55-19.09-6.96-39.01-6.96-59.49 0-141.38 114.62-256 256-256s256 114.62 256 256z"
        // fill="#dd636e"
      />
      <path
        d="m357.375 195.119h-164.94c-2.45 0-4.723-1.282-5.99-3.379s-1.347-4.705-.208-6.874l82.47-157.127c1.209-2.304 3.597-3.747 6.198-3.747s4.989 1.443 6.198 3.747l82.471 157.127c1.139 2.17 1.06 4.777-.208 6.875s-3.541 3.378-5.991 3.378zm-153.36-14h141.78l-70.891-135.065z"
        fill="#2f373b" />
      <g>
        <path
          d="m484.72 225.31c-4.26 67.3-15.76 133.12-34.5 197.46-22.1 25.72-49.22 47-79.85 62.32-104.12-15.39-207.11-36.31-308.97-62.75-25.93-30.31-44.9-66.75-54.44-106.85 8.44-60.89 23-120.54 43.67-178.94 4.19-11.83 16.1-19.1 28.54-17.42 130.48 17.69 259.19 44 386.14 78.95 12.1 3.34 20.21 14.7 19.41 27.23z"
          fill="#5e54ac" />
        <path
          d="m461.72 211.1c-62.89-17.32-127.1-32.71-190.86-45.74-63.76-13.04-128.86-24.09-193.5-32.85-6.07-.82-11.96 2.77-14.01 8.55-23.59 66.68-39.24 135.83-46.64 206.07 3.18 8.36 6.79 16.52 10.8 24.43 6.1-77.15 22.26-153.17 48.1-226.17 64.35 8.73 129.17 19.73 192.64 32.71 63.48 12.97 127.41 28.29 190.03 45.53-5.11 80.68-21.21 160.24-47.85 236.55 6.63-5.01 13-10.34 19.09-15.98 22.98-71.2 36.99-145.01 41.73-219.75.39-6.11-3.62-11.73-9.53-13.35zm-424.85 177.31c3.38 5.6 6.98 11.05 10.78 16.36 54.99 14.62 110.8 27.75 166.27 39.09 57.99 11.85 117.08 22.06 175.93 30.4 5.56-3.42 10.97-7.04 16.24-10.86-63.34-8.65-127.1-19.51-189.57-32.28-59.98-12.26-120.36-26.62-179.65-42.71z"
          fill="#f6f9f9" />
        <g>
          <g>
            <path
              d="m279.2 369.671c-10.021-2.049-10.597-2.273-11.271-2.536-4.539-1.768-7.143-6.549-6.168-11.321l18.56-90.779c1.106-5.411 6.39-8.9 11.8-7.794 5.411 1.106 8.901 6.389 7.794 11.8l-16.573 81.058c6.092 1.242 14.322 2.893 21.978 4.414 5.395 1.082 8.935 6.34 7.86 11.757-1.077 5.417-6.339 8.936-11.757 7.86-10.33-2.052-17.38-3.469-22.223-4.459z"
              fill="#f6f9f9" />
          </g>
          <g>
            <path
              d="m332.942 380.654c-2.585-.529-4.857-2.058-6.321-4.255-1.47-2.208-2.003-4.909-1.481-7.51.064-.32 6.447-32.117 8.926-44.24 2.055-10.053 8.926-43.981 8.927-43.982.527-2.602 2.068-4.888 4.281-6.354 2.214-1.466 4.921-1.99 7.523-1.458l24.971 5.105c27.156 5.552 40.974 30.936 34.385 63.164-6.268 30.657-29.6 49.409-55.477 44.587-7.131-1.329-24.942-4.899-25.697-5.05-.012-.002-.024-.004-.037-.007zm27.664-86.198c-2.196 10.839-5.6 27.623-6.944 34.199-1.6 7.827-4.838 23.905-6.939 34.352 5.538 1.098 12.044 2.377 15.617 3.043 17.409 3.244 28.905-12.724 32.219-28.932 3.389-16.575.23-35.673-18.797-39.563z"
              fill="#f6f9f9" />
          </g>
          <g>
            <path
              d="m100.516 333.133c-14.902-3.047-28.176-12.259-35.51-24.644-2.813-4.752-1.242-10.885 3.51-13.7 4.754-2.813 10.886-1.243 13.701 3.51 4.504 7.607 12.843 13.304 22.306 15.239 9.597 1.962 17.594-2.556 19.781-8.057 3.031-7.625-6-14.251-10.023-16.746-12.984-8.051-24.316-16.148-24.791-16.489-.429-.307-.833-.647-1.208-1.018-7.857-7.764-10.408-19.087-6.657-29.551 4.012-11.19 14.389-18.86 27.079-20.017 25.51-2.322 41.968 18.056 42.657 18.925 3.43 4.329 2.702 10.618-1.626 14.048-4.315 3.418-10.576 2.706-14.013-1.582-.266-.322-10.722-12.796-25.201-11.473-7.103.647-9.407 5.006-10.068 6.85-1.036 2.888-.496 5.866 1.436 8.093 2.719 1.921 12.384 8.677 22.933 15.218 20.358 12.624 22.682 29.525 18.068 41.132-6.163 15.5-23.984 24.022-42.374 20.262z"
              fill="#f6f9f9" />
          </g>
          <path
            d="m191.901 351.817c-30.451-6.226-50.16-36.065-43.935-66.516s36.066-50.159 66.517-43.933 50.16 36.065 43.934 66.516c-6.226 30.45-36.065 50.159-66.516 43.933zm18.576-90.855c-19.647-4.017-38.899 8.699-42.916 28.345-4.017 19.647 8.699 38.899 28.346 42.916 19.646 4.017 38.898-8.699 42.915-28.346 4.017-19.646-8.699-38.898-28.345-42.915z"
            fill="#f6f9f9" />
        </g>
      </g>
      <circle cx="274.904" cy="46.054" fill="#5e54ac" r="28.148" />
    </Icon>
  )
};

export default SoldCircleIcon;