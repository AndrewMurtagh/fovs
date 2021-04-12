import { styled, global } from '@stitches/react';

const StyledSidebar = styled('div', {
  gridArea: 'sidebar',
  backgroundColor: 'green'
});

const Sidebar = () => {

  return (
    <>
        <StyledSidebar>sidebar</StyledSidebar>
    </>
  )

}

export default Sidebar;