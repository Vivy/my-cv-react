import * as S from './disc.style';

const Disc = ({ children, click }) => {
  return (
    <S.Disc onClick={click}>
      <S.DiscContent>{children}</S.DiscContent>
    </S.Disc>
  );
};

export default Disc;
