import * as S from './header.style';

const Header = ({ color,font, sectionTitle, children }) => {
  return (
    <S.HeaderWrapper color={color}>
      <S.Header color={color} font={font}>{children}{sectionTitle}</S.Header>
    </S.HeaderWrapper>
  );
};

Header.defaultProps = {
  font:20,
  color: 'milanoRed',
};

export default Header;
