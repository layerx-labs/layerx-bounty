import React, { HTMLAttributes, useCallback, useState } from 'react';
import CloseButton from '../CloseButton';
import Backdrop from '../Backdrop';

import { Container } from './styles';

interface WindowContainerProps extends HTMLAttributes<HTMLDivElement> {
  containerStyle?: object;
  onHandleCloseWindow: Function;
  // children: ;
}

const WindowContainer: React.FC<WindowContainerProps> = props => {
  const { containerStyle = {}, onHandleCloseWindow, children } = props;
  const [backdrop, setBackdrop] = useState(true);

  const closeAll = useCallback(() => {
    setBackdrop(false);
    onHandleCloseWindow();
  }, [onHandleCloseWindow]);

  return (
    <>
      {backdrop && <Backdrop onClick={closeAll} />}
      <Container style={containerStyle}>
        <button type="button" onClick={() => closeAll()}>
          <CloseButton />
        </button>
        {children}
      </Container>
    </>
  );
};

export default WindowContainer;
