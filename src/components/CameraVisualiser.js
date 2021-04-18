import { useRef } from 'react';
import { CameraHelper } from 'three'
import { PerspectiveCamera, useHelper } from '@react-three/drei'
import { degToRad } from '../core/utils';

const CameraVisualiser = ({ camera }) => {

    const camera_ref = useRef();

    useHelper(camera_ref, CameraHelper, 1, 'hotpink');

    return (
        <>
            <PerspectiveCamera
                makeDefault={false}
                ref={camera_ref}

                position={[camera.x, camera.y, camera.z]}
                fov={camera.vfov}
                aspect={(Math.tan(camera.hfov / 2)) / (Math.tan(camera.vfov / 2))}
                near={camera.near}
                far={camera.far}
                rotation={[degToRad(camera.rx), degToRad(camera.ry), degToRad(camera.rz)]}
            >
                <meshBasicMaterial attach="material" />
            </PerspectiveCamera>
        </>
    );
};

export default CameraVisualiser;