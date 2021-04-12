import React from 'react'
import { Line } from '@react-three/drei'

const GridPlane = () => {

    const width = 10;
    const depth = 10;
    const DIVISIONS = 1;
    let lines = [];

    for (let x = -Math.floor(width / DIVISIONS); x <= Math.floor(width / DIVISIONS); x++) {

        const line = <Line
            points={[[x * DIVISIONS, -depth, 0], [x * DIVISIONS, depth, 0]]}
            color="eeeeee"
            lineWidth={1}
        />
        lines.push(line);
    }

    for (let y = -Math.floor(depth / DIVISIONS); y <= Math.floor(depth / DIVISIONS); y++) {

        const line = <Line
            points={[[-width, y * DIVISIONS, 0], [width, y * DIVISIONS, 0]]}
            color="eeeeee"
            lineWidth={1}
        />
        lines.push(line);
    }

    return (
        <>
            {lines}
        </>
    )

}



export default GridPlane