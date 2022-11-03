import TabBar from 'components/TabBar';
import AppRouter from 'routes';
import { Theme, GlobalStyles } from 'themes';

export default function App() {
  return (
    <>
      <Theme>
        <GlobalStyles />
        <TabBar />
        <AppRouter />
      </Theme>
    </>
  );
}
