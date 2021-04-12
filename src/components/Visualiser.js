import { styled } from '@stitches/react';
// import { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei'
import GridPlane from './GridPlane';

const StyledVisualiser = styled('div', {
    gridArea: 'visualiser'
});


const Visualiser = () => {


    return (
        <>
            <StyledVisualiser>
                <Canvas>
                    <OrbitControls />
                    <ambientLight intensity={0.5} />
                    <GridPlane />
                    <Box />

                </Canvas>

            </StyledVisualiser>
        </>
    )

}

export default Visualiser;