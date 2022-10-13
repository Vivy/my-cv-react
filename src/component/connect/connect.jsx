import axios from 'axios';
import { useEffect, useState } from 'react'
import { Flex, Text, Button, Box, SocialList } from '..';

const Connect= () => {
  const [associate, update] = useState ({});

  useEffect (() => {
    const cuc = async () => {
      const { data } = await axios.get(`http://localhost:3002/connect`);
      update(data);
    };

    cuc();
  }, []);
  return (
    <Flex vertical align='center' justify='center'>
      <Button href='https://www.youtube.com/watch?v=als7xoyNyoE' title='Best chill song' color='transparent'>
      😃
      </Button>
      <Box aboutTitle={associate?.boxContent?.boxTitle} descriptionList={associate.boxContent.content}/>
      <Flex>
        <SocialList>sdfvbvadfbadfgadfg</SocialList>
      </Flex>
      </Flex>
    )
};

export default Connect
