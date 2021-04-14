import { Line, Html } from '@react-three/drei';
import consts from '../core/consts';

const Axes = () => {

    return (
        <>
            <Line
                points={[[0, 0, 0], [consts.AXIS_LENGTH, 0, 0]]}
                color="red"
                lineWidth={consts.AXIS_LINE_WIDTH}
            />
            <Html center={true} position={[consts.AXIS_LENGTH + consts.AXES_LABEL_OFFSET, 0, 0]}><p style={{ color: consts.AXES_LABEL_COLOUR }}>x</p></Html>


            <Line
                points={[[0, 0, 0], [0, consts.AXIS_LENGTH, 0]]}
                color="green"
                lineWidth={consts.AXIS_LINE_WIDTH}
            />
            <Html center={true} position={[0, consts.AXIS_LENGTH + consts.AXES_LABEL_OFFSET, 0]}><p style={{ color: consts.AXES_LABEL_COLOUR }}>y</p></Html>

            <Line
                points={[[0, 0, 0], [0, 0, consts.AXIS_LENGTH]]}
                color="blue"
                lineWidth={consts.AXIS_LINE_WIDTH}
            />
            <Html center={true} position={[0, 0, consts.AXIS_LENGTH + consts.AXES_LABEL_OFFSET]}><p style={{ color: consts.AXES_LABEL_COLOUR }}>z</p></Html>
        </>
    );
    
}

export default Axes;