import { styled } from '@stitches/react';
import * as Switch from '@radix-ui/react-switch';

const switch_styles = {
    Switch: styled(Switch.Root, {
        appearance: 'none',
        border: 'none',
        padding: 0,
        width: 25,
        height: 15,
        backgroundColor: 'gainsboro',
        borderRadius: 25,
        position: 'relative',
        ':focus': {
            outline: 'none',
            boxShadow: '0 0 0 2px royalblue',
        },
        '&[data-state="checked"]': {
            backgroundColor: 'dodgerblue',
        },
    }),
    Thumb: styled(Switch.Thumb, {
        display: 'block',
        width: 13,
        height: 13,
        backgroundColor: 'white',
        borderRadius: '50%',
        boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 2px',
        transition: 'transform 100ms',
        transform: 'translateX(1px)',
        willChange: 'transform',
        '&[data-state="checked"]': {
            transform: 'translateX(11px)',
        },
    })
}

export default switch_styles;