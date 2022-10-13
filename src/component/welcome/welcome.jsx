import * as S from './welcome.style';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Header, Divider, Flex, Box, Text } from '..';

const Welcome = () => {
  const [summary, update] = useState({});

  useEffect(() => {
    const bub = async () => {
      const { data } = await axios.get(`http://localhost:3002/welcome`);
      update(data);
    };

    bub();
  }, []);
  return (
    <Flex vertical align='center' justify='center'>
      <Button
        href='https://www.youtube.com/watch?v=kj1hyIxTpLM'
        title='Let`s relax with music'
        color='transparent'
      >
        😃
      </Button>
      <Text type='h1'>{summary.nameTitle}</Text>
      <Text type='h2'>{summary.jobTitle}</Text>
      <Button
        href='C:\Users\LENOVO\Desktop\CV`s\'
        title='Let`s meet ME'
        color='funGreen'
      >
        {summary.downloadButtonLabel}
      </Button>
      <Divider height={32} />
      <Header font={16} color='funOrange'>
        Continue reading so you can get to know how I can help you help me help
        you so everytone gets helped
      </Header>
      <Divider height={16} />
      <Box padding={8} gap={8} aboutTitle={summary.aboutTitle} descriptionList={summary.descriptionList}>
      </Box>
      <Button
        color='milanoRed'
        href='https://www.youtube.com/watch?v=P7pTqssHass'
        title='You need this in your life'
      >
        Subscribe
      </Button>
      <Divider height={16} />
    </Flex>
  );
};

export default Welcome;
