import { useRef } from 'react';
import { CameraHelper } from 'three'
import { PerspectiveCamera, useHelper, Html } from '@react-three/drei'
import { degToRad } from '../core/utils';
import consts from '../core/consts';

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

            <Html center position={[camera.x, camera.y+consts.CAMERA_LABEL_OFFSET, camera.z]}>
                <p style={{ color: consts.CAMERA_LABEL_COLOUR, minWidth: '100px', textAlign: 'center' }}>{camera.name}</p>
            </Html>

        </>
    );
};

export default CameraVisualiser;