import * as S from './flex.style'

const Flex= ({gap,width, padding, children, align, shadow, vertical, justify, wrap}) => {
  return (<S.Flex gap={gap} width={width} padding={padding} align={align} wrap={wrap} shadow={shadow} justify={justify} vertical={vertical}>
        {children}
    </S.Flex>);
};

export default Flex
