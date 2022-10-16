import * as S from './grid.style';

const Grid = ({ children, align, justify, padding, gap }) => {
  return <S.Grid align={align} justify={justify} gap={gap} padding={padding}>{children}</S.Grid>;
};

export default Grid;
