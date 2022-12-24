import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { allRoute } from './routes/Routers';
const App = () => {
  return (
    <div>
      <Routes>
        {allRoute.map(({ path, component: Component }, index) => (
          <Route
            key={index}
            path={path}
            element={
                <Component />
            }
          />
        ))}
      </Routes>

    </div>
  );
};

export default App;