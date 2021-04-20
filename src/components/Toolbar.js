import { styled } from '@stitches/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { useDispatch, useSelector } from 'react-redux';
import StyledDropdown from '../styles/dropdown';
import StyledToggle from '../styles/toggle';
import StyledSwitch from '../styles/switch';
import { PresetCameras, PresetViews } from '../core/consts';
import { AiFillVideoCamera } from 'react-icons/ai';
import indexSlice from '../app/slices';

const StyledToolbar = styled('div', {
    gridArea: 'toolbar',
    borderBottom: '1px solid gainsboro',
    display: 'flex'
});

const StyledToolbarSecion = styled('div', {
    borderRight: '1px solid gainsboro',
    display: 'grid',
    gridTemplateRows: '20% 80%',
    h3: {
        padding: '4px 12px',
        textTransform: 'uppercase',
        fontSize: '10px',
        color: '#546e7a',
        fontWeight: '700',
    },
    '& .customClass': {
        display: 'flex',
        justifyContent: 'center',
        alignCenter: 'center',
        height: '100%',
        flexDirection: 'row',
    }
});

const StyledTrigger = styled(DropdownMenu.Trigger, {
    border: 'none',
    color: '#00bfa5',
    // padding: '8px',
    outline: 'none',
    cursor: 'pointer'
});




const Toolbar = () => {

    const dispatch = useDispatch();
    const preset_view_key = useSelector(state => state.preset_view_key);
    const cameras = useSelector(state => state.cameras);
    const show_axes = useSelector(state => state.show_axes);
    const show_grid = useSelector(state => state.show_grid);

    // camera view has changed and the view is defined, 
    // view can be not defined if you unselect it
    const onViewChange = view => view && dispatch(indexSlice.actions.setView(view));

    const onShowAxesChange = e => dispatch(indexSlice.actions.setShowAxes(e.target.checked));

    const onShowGridChange = e => dispatch(indexSlice.actions.setShowGrid(e.target.checked));


    // a camera has been added to the scene
    const onCameraAdded = preset_camera => {

        const num_cameras = cameras.length;

        const camera = {
            id: num_cameras + 1,
            name: `Camera ${num_cameras + 1}`,
            x: 0,
            y: 1,
            z: 0,
            rx: 0,
            ry: 0,
            rz: 0,
            near: preset_camera.near,
            far: preset_camera.far,
            hfov: preset_camera.hfov,
            vfov: preset_camera.vfov
        };

        dispatch(indexSlice.actions.addCamera(camera));

    }


    return (
        <>
            <StyledToolbar>
                <img alt="Camera icon" src="/camera.png" height="80%" width="auto" />
           

                <StyledToolbarSecion>
                    <h3>Add camera</h3>
                    <div className="customClass">
                        <DropdownMenu.Root>
                            <StyledTrigger>
                                <AiFillVideoCamera />
                            </StyledTrigger>
                            <StyledDropdown.Content>
                                {
                                    Object.values(PresetCameras).map(camera =>
                                        <StyledDropdown.Item key={camera.key} onSelect={() => onCameraAdded(camera)}>{camera.name}</StyledDropdown.Item>
                                    )
                                }
                                <StyledDropdown.Arrow />
                            </StyledDropdown.Content>
                        </DropdownMenu.Root>
                    </div>
                </StyledToolbarSecion>

                <StyledToolbarSecion>
                    <h3>View</h3>
                    <div className="customClass">
                        <ToggleGroup.Root type="single" value={preset_view_key} onValueChange={onViewChange}>
                            <StyledToggle.Item value={PresetViews.Iso.key}>Isometric</StyledToggle.Item>
                            <StyledToggle.Item value={PresetViews.Left.key}>Left</StyledToggle.Item>
                            <StyledToggle.Item value={PresetViews.Right.key}>Right</StyledToggle.Item>
                            <StyledToggle.Item value={PresetViews.Front.key}>Front</StyledToggle.Item>
                            <StyledToggle.Item value={PresetViews.Back.key}>Back</StyledToggle.Item>
                            <StyledToggle.Item value={PresetViews.Top.key}>Top</StyledToggle.Item>
                            <StyledToggle.Item value={PresetViews.Bottom.key}>Bottom</StyledToggle.Item>
                        </ToggleGroup.Root>
                    </div>
                </StyledToolbarSecion>

                <StyledToolbarSecion>
                    <h3>Env</h3>
                    <div className="customClass">
                        <ToggleGroup.Root type="single">
                            <StyledToggle.Item value="none">None</StyledToggle.Item>
                            <StyledToggle.Item value="apartment">Apartment</StyledToggle.Item>
                            <StyledToggle.Item value="right">Factory</StyledToggle.Item>
                        </ToggleGroup.Root>
                    </div>
                </StyledToolbarSecion>

                <StyledToolbarSecion>
                    <h3>Options</h3>
                    <div className="customClass">
                        <ToggleGroup.Root type="single">
                            <StyledToggle.Item value="none">Rad</StyledToggle.Item>
                            <StyledToggle.Item value="apartment">Deg</StyledToggle.Item>
                        </ToggleGroup.Root>
                        <ToggleGroup.Root type="single">
                            <StyledToggle.Item value="none">Euler</StyledToggle.Item>
                            <StyledToggle.Item value="apartment">Quaternion</StyledToggle.Item>
                        </ToggleGroup.Root>

                        <label>axes</label>
                        <StyledSwitch.Switch checked={show_axes} onCheckedChange={onShowAxesChange}>
                            <StyledSwitch.Thumb />
                        </StyledSwitch.Switch>

                        <label>grid</label>
                        <StyledSwitch.Switch checked={show_grid} onCheckedChange={onShowGridChange}>
                            <StyledSwitch.Thumb />
                        </StyledSwitch.Switch>

                        <button>Info</button>
                    </div>
                </StyledToolbarSecion>

            </StyledToolbar>
        </>
    )

}

export default Toolbar;