import { styled } from '@stitches/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import StyledDropdown from '../styles/dropdown';
import StyleToggle from '../styles/toggle';
import { CAMERA_PRESETS } from '../core/consts';

console.log(CAMERA_PRESETS)

const StyledToolbar = styled('div', {
    gridArea: 'toolbar',
    borderBottom: '1px solid gainsboro',
    display: 'flex'
});

const StyledToolbarSecion = styled('div', {
    height: '100%',
    paddingLeft: '16px',
    paddingRight: '16px',
    borderRight: '1px solid gainsboro',
    display: 'flex'
});



const Toolbar = () => {

    return (
        <>
            <StyledToolbar>


                <StyledToolbarSecion>
                    <img src="/camera.png" height="100%" />
                </StyledToolbarSecion>


                <StyledToolbarSecion>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>Add Camera</DropdownMenu.Trigger>
                        <StyledDropdown.Content>
                            {
                                Object.values(CAMERA_PRESETS).map(camera => <StyledDropdown.Item key={camera.key}>{camera.name}</StyledDropdown.Item>)
                            }
                            <StyledDropdown.Arrow />
                        </StyledDropdown.Content>
                    </DropdownMenu.Root>
                </StyledToolbarSecion>


                <StyledToolbarSecion>
                    <ToggleGroup.Root type="single">
                        <StyleToggle.Item value="left">Left</StyleToggle.Item>
                        <StyleToggle.Item value="right">Right</StyleToggle.Item>
                        <StyleToggle.Item value="front">Front</StyleToggle.Item>
                        <StyleToggle.Item value="back">Back</StyleToggle.Item>
                        <StyleToggle.Item value="top">Top</StyleToggle.Item>
                        <StyleToggle.Item value="bottom">Bottom</StyleToggle.Item>
                    </ToggleGroup.Root>
                </StyledToolbarSecion>


                <StyledToolbarSecion>
                    <ToggleGroup.Root type="single">
                        <StyleToggle.Item value="none">None</StyleToggle.Item>
                        <StyleToggle.Item value="apartment">Apartment</StyleToggle.Item>
                        <StyleToggle.Item value="right">Factory</StyleToggle.Item>
                    </ToggleGroup.Root>
                </StyledToolbarSecion>


                <StyledToolbarSecion>
                    <ToggleGroup.Root type="single">
                        <StyleToggle.Item value="none">Rad</StyleToggle.Item>
                        <StyleToggle.Item value="apartment">Deg</StyleToggle.Item>
                    </ToggleGroup.Root>
                    <ToggleGroup.Root type="single">
                        <StyleToggle.Item value="none">Euler</StyleToggle.Item>
                        <StyleToggle.Item value="apartment">Quaternion</StyleToggle.Item>
                    </ToggleGroup.Root>

                    <button>Info</button>
                </StyledToolbarSecion>
            </StyledToolbar>
        </>
    )

}

export default Toolbar;