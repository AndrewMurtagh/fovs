import { styled } from '@stitches/react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';


const toggle_styles = {
    Item: styled(ToggleGroup.Item, {
        background: 'white',
        border: '1px solid gainsboro',
        borderRadius: '2px',
        // color: '#10B981',
    color: '#4B5563',
        padding: '2px 6px',
        marginRight: '2px',
        outline: 'none',
        cursor: 'pointer',
        '&:hover': {
            border: '1px solid #10B981',
            color: '#10B981',
            background: 'rgb(16,185,129, 0.15)',
        },
        '&:focus': {
            border: '1px solid #10B981',
            color: '#10B981',
            background: 'rgb(16,185,129, 0.15)',
        },
        '&[data-state=on]': {
            border: '1px solid #10B981',
            color: '#10B981',
            background: 'rgb(16,185,129, 0.15)',
        },
    })
}

export default toggle_styles;