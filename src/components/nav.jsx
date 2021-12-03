import React from 'react';
import { Nav } from '@fluentui/react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../states/actions';

const SideNavigation = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <>
      <Nav />
      <button onClick={() => dispatch(login())}>
        {isLogged ? 'Logout' : 'Login'}
      </button>
      {isLogged ? <h3>Critical info </h3> : <h3>Login</h3>}
    </>
  );
};

export default SideNavigation;
