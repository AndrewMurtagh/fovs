import { styled } from '@stitches/react';
import * as Accordion from '@radix-ui/react-accordion';

const accordion_styles = {
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        cursor: 'pointer',
        flex: 1,
        textAlign: 'left',
        color: '#4B5563',
        fontWeight: 600,
        
        '[data-state=open] &': {
            borderBottom: '1px solid gainsboro',
            color: '#10B981',
        },
        '&:hover': {
            color: '#10B981',
            background: 'rgb(16,185,129, 0.05)',
        },
        '&:focus': {
            color: '#4B5563',
        },
        '& .delete': {
            border: '1px solid gainsboro',
            borderRadius: '2px',
            color: '#9CA3AF',
            padding: '2px 6px',
            paddingTop: '4px',
            outline: 'none',
            cursor: 'pointer',
            '&:hover': {
                color: '#10B981',
                border: '1px solid #10B981',
                background: 'rgb(16,185,129, 0.15)',
            }
        }
    }),
    Panel: styled(Accordion.Panel, {
        padding: 12,
        background: '#F9FAFB',

        '& .key': {
            textAlign: 'right',
            paddingRight: '12px',
            textTransform: 'uppercase',
            fontSize: '10px',
            color: '#4B5563',
            fontWeight: 700,
        },

        input: {
            background: '#F3F4F6',
            border: '1px solid gainsboro',
            padding: '2px 6px',
            borderRadius: '2px',
            color: '#1F2937'
        }
    })
}

export default accordion_styles;