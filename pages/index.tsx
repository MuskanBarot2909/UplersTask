// pages/index.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/page');
  }, []);

  return null;
};

export default IndexPage;
