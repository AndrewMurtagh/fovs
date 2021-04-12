import { styled, global } from '@stitches/react';

const StyledToolbar = styled('div', {
  gridArea: 'toolbar',
  backgroundColor: 'red'
});

const Toolbar = () => {

  return (
    <>
        <StyledToolbar>toolbar</StyledToolbar>
    </>
  )

}

export default Toolbar;