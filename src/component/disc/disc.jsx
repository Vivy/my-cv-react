import * as S from './disc.style';

const Disc = ({ children }) => {
  return (
    <S.Disc>
      <S.DiscContent>{children}</S.DiscContent>
    </S.Disc>
  );
};

export default Disc;
