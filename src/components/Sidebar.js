import { styled } from '@stitches/react';

const StyledSidebar = styled('div', {
  gridArea: 'sidebar',
  borderRight: '1px solid gainsboro'
});

const Sidebar = () => {

  return (
    <>
        <StyledSidebar>sidebar</StyledSidebar>
    </>
  )

}

export default Sidebar;