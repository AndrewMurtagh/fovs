import { Line, Html } from '@react-three/drei'

const Axes = () => {

    const length = 5;
    const LINE_WIDTH = 2;
    const AXES_LABEL_COLOUR = '#414141';
    const AXES_LABEL_OFFSET = length * 0.1;

    return (
        <>
            <Line
                points={[[0, 0, 0], [length, 0, 0]]}
                color="red"
                lineWidth={LINE_WIDTH}
            />
            <Html center={true} position={[length + AXES_LABEL_OFFSET, 0, 0]}><p style={{ color: AXES_LABEL_COLOUR }}>x</p></Html>


            <Line
                points={[[0, 0, 0], [0, length, 0]]}
                color="green"
                lineWidth={LINE_WIDTH}
            />
            <Html center={true} position={[0, length + AXES_LABEL_OFFSET, 0]}><p style={{ color: AXES_LABEL_COLOUR }}>y</p></Html>

            <Line
                points={[[0, 0, 0], [0, 0, length]]}
                color="blue"
                lineWidth={LINE_WIDTH}
            />
            <Html center={true} position={[0, 0, length + AXES_LABEL_OFFSET]}><p style={{ color: AXES_LABEL_COLOUR }}>z</p></Html>
        </>
    );
}

export default Axes;