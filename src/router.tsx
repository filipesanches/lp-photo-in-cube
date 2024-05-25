import { createHashRouter } from 'react-router-dom';
import SectionContato from './components/SectionContato';
import SectionHome from './components/SectionHome';
import SectionProdutos from './components/SectionProdutos';
import SectionQuemSomos from './components/SectionQuemSomos';
import LayoutRoutes from './LayoutRoute';

const router = createHashRouter([
  {
    element: <LayoutRoutes />,
    children: [
      {
        path: '/',
        element: <SectionHome />,
      },
      {
        path: '/quem-somos',
        element: <SectionQuemSomos />,
      },
      {
        path: '/produtos',
        element: <SectionProdutos />,
      },
      {
        path: '/contato',
        element: <SectionContato />,
      },
    ],
  },
]);

export default router;
