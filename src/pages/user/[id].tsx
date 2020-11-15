import { GetStaticPaths, GetStaticProps } from 'next';

import { User } from '@/@types/user';
import api from '@/services/api';

interface Props {
  user?: User;
}

export const UserPage: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <h1>{user?.name}</h1>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get<User[]>('/users');

  const paths = data.map((u) => ({
    params: { id: u.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  ctx,
) => {
  const id = ctx.params?.id;

  try {
    const { data } = await api.get<User>(`/users/${id}`);

    return {
      props: { user: data },
      revalidate: 10,
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default UserPage;
