// pages/[...slug].tsx
import { useRouter } from 'next/router';
import Table from './table';
import CenterADiv from './center-a-div';
import JavaScriptPage from './javascript';
const DynamicRouteHandler = () => {
    const router = useRouter();
    const { slug } = router.query;
  
    if (slug && Array.isArray(slug)) {
      switch (slug[0]) {
        case 'table':
          return <Table />;
        case 'center-a-div':
          return <CenterADiv />;
        case 'javascript':
          return <JavaScriptPage />;
        default:
          return <p>This is home page</p>;
      }
    }
  
    return null;
  };
  
export default DynamicRouteHandler;
