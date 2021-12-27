import React from 'react';
import { Layout } from './Components/Layout';
import { LayoutGrid } from './Components/LayoutGrid';



function App() {
  return (
    <div>
      <Layout props>
        <LayoutGrid />
      </Layout>
    </div>
  );
}

export default App;
