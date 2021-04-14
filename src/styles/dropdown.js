import { styled } from '@stitches/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default {
    Separator: styled(DropdownMenu.Separator, {
        height: 1,
        backgroundColor: 'gainsboro',
        margin: 5,
    }),
    Content: styled(DropdownMenu.Content, {
        minWidth: 130,
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 5,
        boxShadow: '0px 5px 15px -5px hsla(206,22%,7%,.15)',
        border: '1px solid gainsboro'
    }),
    Item: styled(DropdownMenu.Item, {
        fontSize: 13,
        padding: '5px 10px',
        borderRadius: 3,
        cursor: 'default',
        '&:focus': {
            outline: 'none',
            backgroundColor: 'dodgerblue',
            color: 'white',
        },
    }),
    Arrow: styled(DropdownMenu.Arrow, {
        fill: 'white',
    })

}