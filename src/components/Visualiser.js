import { styled } from '@stitches/react';
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box, PerspectiveCamera } from '@react-three/drei'
import Axes from './Axes';

const StyledVisualiser = styled('div', {
    gridArea: 'visualiser'
});

const GRID_SIZE = 10;
const GRID_DIVISIONS = 10;

const Visualiser = () => {
    const myCamera = useRef()


    return (
        <>
            <StyledVisualiser>
                <Canvas>
                    <PerspectiveCamera makeDefault ref={myCamera} position={[5, 5, 5]} />
                    <OrbitControls camera={myCamera.current} />
                    <ambientLight intensity={0.5} />
                    <gridHelper args={[GRID_SIZE, GRID_DIVISIONS]} />
                    <Axes />
                    <Box />

                </Canvas>

            </StyledVisualiser>
        </>
    )

}

export default Visualiser;