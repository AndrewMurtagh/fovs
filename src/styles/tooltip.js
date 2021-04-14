import { styled } from '@stitches/react';
import * as Tooltip from '@radix-ui/react-tooltip';

export default {
    Content: styled(Tooltip.Content, {
        borderRadius: 3,
        padding: '5px 10px',
        fontSize: 14,
        backgroundColor: 'gainsboro',
        color: 'black',
    }),

    Arrow: styled(Tooltip.Arrow, {
        fill: 'gainsboro',
    }),
    
}
