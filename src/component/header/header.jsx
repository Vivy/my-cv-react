import * as S from './header.style';

const Header = ({ color, sectionTitle, children }) => {
  return (
    <S.HeaderWrapper color={color}>
      <S.Header color={color}>{children}{sectionTitle}</S.Header>
    </S.HeaderWrapper>
  );
};

export default Header;
