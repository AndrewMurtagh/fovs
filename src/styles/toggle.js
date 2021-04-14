import { styled } from '@stitches/react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

export default {
    Item: styled(ToggleGroup.Item, {
        appearance: 'none',
        backgroundColor: 'transparent',
        border: 'none',
        margin: '0 1px',
        boxShadow: 'inset 0 0 0 1px gainsboro',
        overflow: 'hidden',
        borderRadius: 3,
        '&:focus': {
            outline: 'none',
            boxShadow: 'inset 0 0 0 1px dodgerblue, 0 0 0 1px dodgerblue',
        },
        '&[data-state=on]': {
            backgroundColor: 'gainsboro',
        },
    })
}