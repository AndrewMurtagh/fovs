import { useRef } from 'react';
import { CameraHelper } from 'three'
import { PerspectiveCamera, useHelper } from '@react-three/drei'
import { degToRad } from '../core/utils';

const CameraVisualiser = () => {

    const camera_ref = useRef();

    useHelper(camera_ref, CameraHelper, 1, 'hotpink');

    const VFOV = 45;
    const HFOV = 45;
    const ASPECT = (Math.tan(HFOV / 2)) / (Math.tan(VFOV / 2))
    const NEAR = 1;
    const FAR = 6;
    const POSITION = [3, 3, 3];
    const ROTATION_DEG = [45, 0, 0]
    const ROTATION = [degToRad(ROTATION_DEG[0]), degToRad(ROTATION_DEG[1]), degToRad(ROTATION_DEG[2])];

    return (
        <>
            <PerspectiveCamera
                makeDefault={false}
                ref={camera_ref}
                
                position={POSITION}
                fov={VFOV}
                aspect={ASPECT}
                near={NEAR}
                far={FAR}
                rotation={ROTATION}
            >
                <meshBasicMaterial attach="material" />
            </PerspectiveCamera>
        </>
    );
};

export default CameraVisualiser;