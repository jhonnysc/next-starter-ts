import { GetStaticProps } from 'next';
import Head from 'next/head';

import { User } from '@/@types/user';
import api from '@/services/api';
import { Container, Title } from '@/styles/pages/Home';

interface Props {
  users: User[];
}

const Home: React.FC<Props> = ({ users }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        {users.map((u) => (
          <div key={u.id}>
            <h1>{u.name}</h1>
            <p>{u.website}</p>
          </div>
        ))}
      </Container>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{ users: User[] }> = async () => {
  const { data } = await api.get<User[]>('/users');

  return {
    props: { users: data },
    revalidate: 10,
  };
};

export default Home;
