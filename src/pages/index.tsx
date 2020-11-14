import Head from 'next/head';

import { Container, Title } from '@/styles/pages/Home';

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container>
      <Title>Hello</Title>
    </Container>
  </div>
);

export default Home;
