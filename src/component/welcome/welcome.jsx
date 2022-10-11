import * as S from './welcome.style';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Header, Divider, Flex, Box } from '..';

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
      <S.Welcome>{summary.nameTitle}</S.Welcome>
      <S.Welcome>{summary.jobTitle}</S.Welcome>
      <Button
        href='C:\Users\LENOVO\Desktop\CV`s\'
        title='Let`s meet ME'
        color='funGreen'
      >{summary.downloadButtonLabel}
      </Button>
      <Divider height={32} />
      <Header font={16} color='funOrange'>
        Continue reading so you can get to know how I can help you help me help
        you so everytone gets helped
      </Header>
      <Divider height={16} />
        <Box
          padding={8}
          gap={8}
          aboutTitle={summary.aboutTitle}
          descriptionList={summary.descriptionList}
        ></Box>
      <Header />
    </Flex>
  );
};

export default Welcome;
