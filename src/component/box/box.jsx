import { Text, Flex, Pill } from '..';

const Box = ({ aboutTitle, legend, descriptionList, shadow, padding, gap }) => {
  return (
      <Flex vertical padding={padding}>
        <Text type='h3'>{aboutTitle}</Text>
        <Flex  gap={gap} vertical shadow={shadow}>
          {descriptionList && descriptionList.map((element, key) => {
            return <Text key={key}>{element}</Text>})}
                {legend && legend.map(({color, label}, key) => {
                  return (
                    <Flex gap={8} padding={8} key={key}>
                      <Pill color={color}>{key+1}</Pill>
                      <Text>{label}</Text>
                    </Flex>
                  )
                })}
        </Flex>
      </Flex>
  );
};

export default Box;
