import NavBar from './components/NavBar';
import SectionContato from './components/SectionContato';
import SectionFooter from './components/SectionFooter';
import SectionHome from './components/SectionHome';
import SectionProdutos from './components/SectionProdutos';
import SectionQuemSomos from './components/SectionQuemSomos';

const App = () => {
  return (
    <>
      <NavBar />
      <SectionHome />
      <SectionQuemSomos />
      <SectionProdutos />
      <SectionContato />
      <SectionFooter />
    </>
  );
};

export default App;
