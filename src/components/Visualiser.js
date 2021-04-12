import { styled, global } from '@stitches/react';

const StyledVisualiser = styled('div', {
  gridArea: 'visualiser',
  backgroundColor: 'blue'
});

const Visualiser = () => {

  return (
    <>
        <StyledVisualiser>visualiser</StyledVisualiser>
    </>
  )

}

export default Visualiser;