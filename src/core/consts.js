
const AXIS_LENGTH = 5;

const consts = {
    AXIS_LENGTH,
    AXIS_LINE_WIDTH: 2,
    AXES_LABEL_COLOUR: '#414141',
    AXES_LABEL_OFFSET: AXIS_LENGTH * 0.1,

    GRID_SIZE: 10,
    GRID_DIVISIONS: 10,
}

export default consts;


/**
 * Could also consider:
 * Luxonis DepthAI Cam
 * ArduCam
 * BlackBird 2 3D FPV
 * JeVois - A33 Smart Camera 
 * Terabee 3D Camera
 */

/**
 * 'hfov' and 'vfov' are specified in degrees.
 * 'near' and 'far' are -1 for cameras but specified for depth cameras.
 */
export const CAMERA_PRESETS = {
    custom: {
        key: 'custom',
        name: "Custom",
        near: 0.5,
        far: 5,
        hfov: 45,
        vfov: 45
    },

    // https://newsroom.intel.com/wp-content/uploads/sites/11/2018/01/realsense-d415-d435-fact-sheet.pdf
    d415: {
        key: 'd415',
        name: "Intel RealSense D415",
        near: 0.16,
        far: 10,
        hfov: 63.4,
        vfov: 40.4
    },
    d435: {
        key: 'd435',
        name: "Intel RealSense D435",
        near: 0.11,
        far: 10,
        hfov: 85.2,
        vfov: 58
    },
    // https://www.raspberrypi.org/documentation/hardware/camera/
    picam: {
        key: 'picam',
        name: "Raspberry PiCam v2",
        near: -1,
        far: -1,
        hfov: 62.2,
        vfov: 48.8
    },
    // https://forum.pixycam.com/t/pixy2-camera-lens-information/6004/4
    pixycam: {
        key: 'pixycam',
        name: "Pixy2",
        near: -1,
        far: -1,
        hfov: 60,
        vfov: 40
    }
}