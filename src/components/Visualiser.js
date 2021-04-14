import { styled } from '@stitches/react';
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, PerspectiveCamera } from '@react-three/drei'
import Axes from './Axes';
import CameraVisualiser from './CameraVisualiser';
import consts from '../core/consts';

const StyledVisualiser = styled('div', {
    gridArea: 'visualiser'
});

const Visualiser = () => {
    const viewer_camera = useRef();

    return (
        <>
            <StyledVisualiser>
                <Canvas>
                    <PerspectiveCamera makeDefault ref={viewer_camera} position={[5, 5, 5]} />
                    <OrbitControls camera={viewer_camera.current} />
                    <ambientLight intensity={0.5} />
                    <gridHelper args={[consts.GRID_SIZE, consts.GRID_DIVISIONS]} />
                    <Axes />
                    <Box />

                    <CameraVisualiser />
                </Canvas>

            </StyledVisualiser>
        </>
    )

}

export default Visualiser;