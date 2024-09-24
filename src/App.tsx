import { FC } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Navigation from 'navigation';

import '../global.css';
import { GluestackUIProvider } from './view/@gluestack/ui/gluestack-ui-provider';

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider mode="light">
        <Navigation />
      </GluestackUIProvider>
    </QueryClientProvider>
  );
};

export default App;
