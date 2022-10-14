import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Flex, Button, SkillContainer, Divider} from '..';

const Skills = () => {
  const [ability, upgrade] = useState({});

  useEffect(() => {
    const mum = async () => {
      const { data } = await axios.get(`http://localhost:3002/skills`);
      upgrade(data);
    };

    mum();
  }, []);
  return (
    <Flex vertical align='center' justify='center'>
      <Button
        href='https://www.youtube.com/watch?v=i7pa_NMrWg8&list=RDMMi7pa_NMrWg8&start_radio=1'
        title='What does this sound like'
        color='transparent'
      >
        🏆
      </Button>
        <Box padding={8}
          aboutTitle={ability.sectionTitle}
          descriptionList={ability.description}
        ></Box>
      <Divider gap={16}/>
        <SkillContainer s={ability.skillTypeList}/>
        <Box aboutTitle={ability?.legend?.title} legend={ability.legend?.itemList} shadow padding={8}></Box>
    </Flex>
  );
};

export default Skills;
