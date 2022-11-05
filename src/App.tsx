import React from 'react'
import { UserProvider } from './componets/context/user';
import ScreensRoot from './routes/routes';

function App() {
  return (
    <UserProvider>
      <div>
        <ScreensRoot />
      </div>
    </UserProvider>
  );
}

export default App;
