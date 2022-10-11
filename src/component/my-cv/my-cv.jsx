import { Box, Text, Button, Header, Welcome, Flex, Reset, Divider } from '..';

const MyCV = () => {
  return (
    <div>
      <Reset />
      <Header>Welcome to my CV</Header>
      <Welcome />
      {/* <Divider height={16}/> */}
    </div>
  );
};

export default MyCV;
