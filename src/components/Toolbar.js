import { styled } from '@stitches/react';

const StyledToolbar = styled('div', {
  gridArea: 'toolbar',
  borderBottom: '1px solid gainsboro'
});

const Toolbar = () => {

  return (
    <>
        <StyledToolbar>toolbar</StyledToolbar>
    </>
  )

}

export default Toolbar;