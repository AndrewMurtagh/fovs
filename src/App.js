import { styled, global } from '@stitches/react';
import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';
import Visualiser from './components/Visualiser';

const globalStyles = global({
    '*': {
        margin: 0,
        padding: 0,
        fontFamily: 'Roboto'
    },
    h3: {
        fontFamily: ['Roboto', 'sans-serif']
    }
});


const StyledGrid = styled('div', {
    display: 'grid',
    height: '100vh',
    width: '100vw',
    gridTemplateColumns: '15% 85%',
    gridTemplateRows: '8% 92%',
    gridTemplateAreas: `
    'toolbar toolbar'
    'sidebar visualiser'
  `
});


const App = () => {

    globalStyles();

    return (
        <>

            <StyledGrid>
                <Toolbar />

                <Sidebar />

                <Visualiser />

            </StyledGrid>

        </>
    )

}

export default App;