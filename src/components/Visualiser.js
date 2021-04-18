import { styled } from '@stitches/react';
import { useRef, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, PerspectiveCamera } from '@react-three/drei';
import { useDispatch, useSelector } from 'react-redux';
import Axes from './Axes';
import CameraVisualiser from './CameraVisualiser';
import consts, { PresetViews } from '../core/consts';
import indexSlice from '../app/slices';

const StyledVisualiser = styled('div', {
    gridArea: 'visualiser'
});

const Visualiser = () => {

    const dispatch = useDispatch();
    const viewer_camera = useRef();

    const preset_view_key = useSelector(state => state.preset_view_key);

    // the viewer's camera position
    let viewer_pos;
    if (preset_view_key !== PresetViews.None.key)
        viewer_pos = PresetViews[preset_view_key].pos

        
    // add an event listener to the orbit control to unset (i.e. set to None)
    // when a user starts to control the camera and potentially move away from
    // preset views
    const orbit_controls_ref = useCallback((orbit_controls) => {
        orbit_controls.addEventListener("start", () => {
            dispatch(indexSlice.actions.setView(PresetViews.None.key))
        });
    }, [dispatch]);



    return (
        <>
            <StyledVisualiser>
                <Canvas>
                    <PerspectiveCamera makeDefault ref={viewer_camera} position={viewer_pos} />
                    <OrbitControls ref={orbit_controls_ref} camera={viewer_camera.current} />
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