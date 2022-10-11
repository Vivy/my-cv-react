import { Box, Text, Button, Header, Welcome, Flex, Reset } from '..';

const MyCV = () => {
  return (
    <div>
      <Reset />
      <Header>Welcome to my CV</Header>
      <Flex vertical align='center' justify='center'>
        <Button
          href='https://www.youtube.com/watch?v=kj1hyIxTpLM'
          title='Let`s relax with music'
          color='transparent'
        >
          😃
        </Button>
        <Welcome />
        <Button
          href='C:\Users\LENOVO\Desktop\CV`s\'
          title='Let`s meet ME'
          color='funGreen'
        >
          Download
        </Button>
      </Flex>
      <Header />
    </div>
  );
};

export default MyCV;
