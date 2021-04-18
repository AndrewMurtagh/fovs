import { styled } from '@stitches/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { useDispatch, useSelector } from 'react-redux';
import StyledDropdown from '../styles/dropdown';
import StyleToggle from '../styles/toggle';
import { PresetCameras, PresetViews } from '../core/consts';
import indexSlice from '../app/slices';

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

    const dispatch = useDispatch();
    const preset_view_key = useSelector(state => state.preset_view_key);

    // camera view has changed and the view is defined, 
    // view can be not defined if you unselect it
    const onViewChange = view => view && dispatch(indexSlice.actions.setView(view))

    return (
        <>
            <StyledToolbar>


                <StyledToolbarSecion>
                    <img alt="Camera icon" src="/camera.png" height="100%" />
                </StyledToolbarSecion>

                <StyledToolbarSecion>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>Add Camera</DropdownMenu.Trigger>
                        <StyledDropdown.Content>
                            {
                                Object.values(PresetCameras).map(camera => <StyledDropdown.Item key={camera.key}>{camera.name}</StyledDropdown.Item>)
                            }
                            <StyledDropdown.Arrow />
                        </StyledDropdown.Content>
                    </DropdownMenu.Root>
                </StyledToolbarSecion>

                <StyledToolbarSecion>
                    <ToggleGroup.Root type="single" value={preset_view_key} onValueChange={onViewChange}>
                        <StyleToggle.Item value={PresetViews.Iso.key}>Isometric</StyleToggle.Item>
                        <StyleToggle.Item value={PresetViews.Left.key}>Left</StyleToggle.Item>
                        <StyleToggle.Item value={PresetViews.Right.key}>Right</StyleToggle.Item>
                        <StyleToggle.Item value={PresetViews.Front.key}>Front</StyleToggle.Item>
                        <StyleToggle.Item value={PresetViews.Back.key}>Back</StyleToggle.Item>
                        <StyleToggle.Item value={PresetViews.Top.key}>Top</StyleToggle.Item>
                        <StyleToggle.Item value={PresetViews.Bottom.key}>Bottom</StyleToggle.Item>
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