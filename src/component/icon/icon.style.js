import styled from 'styled-components';

const iconList = {
  menu: '\\e902',
  home: '\\e90b',
  download: '\\e901',
  save: '\\e901',
  store: '\\e901',
  arrow: '\\e901',
  'chevron-down': '\\e900',
  tiktok: '\\e909',
  instagram: '\\e903',
  linkedin: '\\e904',
  codewars: '\\e905',
  github: '\\e906',
  whatsapp: '\\e907',
  facebook: '\\e908',
  youtube: '\\e90a',
}

// @font-face {
//   font-family: '#{$icomoon-font-family}';
//   src:
//     url('fonts/my-cv.ttf?njln63') format('truetype'),
//     url('fonts/my-cv.woff?njln63') format('woff'),
//     url('fonts/my-cv.svg?njln63#{$icomoon-font-family}') format('svg');
//   font-weight: normal;
//   font-style: normal;
//   font-display: block;
// }

const sizeMap = {
  large: 48,
  normal: 40,
  small: 16,
};

export const Icon = styled.div`
  font-size: ${({size}) => sizeMap[size] /16}rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: my-cv;

  &::before {
    content: '${({icon}) => iconList[icon]}';
  }
`;
const style = {
  Icon,
}

export default style;
