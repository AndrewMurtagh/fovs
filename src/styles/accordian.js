import { styled } from '@stitches/react';
import * as Accordion from '@radix-ui/react-accordion';

export default {
    Item: styled(Accordion.Item, {
        borderBottom: '1px solid gainsboro',
    }),
    Header: styled(Accordion.Header, {
        margin: 0,
        display: 'flex',
    }),
    Button: styled(Accordion.Button, {
        backgroundColor: 'transparent',
        border: 'none',
        padding: 10,
        flex: 1,
        textAlign: 'left',
    }),
    Panel: styled(Accordion.Panel, {
        padding: 10,
    })
}