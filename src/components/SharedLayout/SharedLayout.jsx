import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import { FormContext } from 'services/Context';
import Modal from 'components/Modal/Modal';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  const [formType, setFormType] = useState(null);

  return (
    <div>
      <FormContext.Provider value={{ formType, setFormType }}>
        <Header />
        <main>
          <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
          </Suspense>
        </main>
        <Modal />
      </FormContext.Provider>
    </div>
  );
};

export default SharedLayout;
