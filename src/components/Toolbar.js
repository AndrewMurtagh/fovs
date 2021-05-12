import { styled } from '@stitches/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import * as Dialog from '@radix-ui/react-dialog';
import { useDispatch, useSelector } from 'react-redux';
import StyledDropdown from '../styles/dropdown';
import StyledToggle from '../styles/toggle';
import StyledSwitch from '../styles/switch';
import { PresetCameras, PresetViews } from '../core/consts';
import { AiFillVideoCamera, AiOutlineInfoCircle } from 'react-icons/ai';
import indexSlice from '../app/slices';

const StyledToolbar = styled('div', {
    gridArea: 'toolbar',
    borderBottom: '1px solid gainsboro',
    display: 'flex'
});

const StyledToolbarSecion = styled('div', {
    borderRight: '1px solid gainsboro',
    display: 'flex',
    flexDirection: 'column',

    h3: {
        padding: '6px 12px',
        textTransform: 'uppercase',
        fontSize: '10px',
        color: '#4B5563',
        fontWeight: 700,
    },
    '& .toolbar-tools': {
        flexGrow: 1,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: '0 12px'
    },
    '& label': {
        color: '#9CA3AF',
        fontSize: '12px',
        padding: 0,
        paddingRight: '4px'
    }
});

const StyledTrigger = styled(DropdownMenu.Trigger, {
    background: 'white',
    border: '1px solid gainsboro',
    borderRadius: '2px',
    color: '#10B981',
    padding: '2px 6px',
    paddingTop: '4px',
    outline: 'none',
    cursor: 'pointer',
    '&:hover': {
        border: '1px solid #10B981',
        background: 'rgb(16,185,129, 0.15)',
    }
});

/**
 * Info dialog
 */

const StyledDialogTrigger = styled(Dialog.Trigger, {
    background: 'white',
    border: '1px solid gainsboro',
    borderRadius: '2px',
    color: '#10B981',
    padding: '2px 6px',
    paddingTop: '4px',
    outline: 'none',
    cursor: 'pointer',
    '&:hover': {
        border: '1px solid #10B981',
        background: 'rgb(16,185,129, 0.15)',
    }
});

const StyledOverlay = styled(Dialog.Overlay, {
    backgroundColor: 'rgba(0, 0, 0, .15)',
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
});

const StyledContent = styled(Dialog.Content, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 200,
    maxWidth: 'fit-content',
    maxHeight: '85vh',
    padding: 20,
    marginTop: '-5vh',
    backgroundColor: 'white',
    borderRadius: 6,

    '&:focus': {
        outline: 'none',
    },
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
                    <div className="toolbar-tools">
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
                    <div className="toolbar-tools">
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
                    <h3>Environment</h3>
                    <div className="toolbar-tools">
                        <ToggleGroup.Root type="single">
                            <StyledToggle.Item value="none">None</StyledToggle.Item>
                            <StyledToggle.Item value="apartment">Apartment</StyledToggle.Item>
                            <StyledToggle.Item value="right">Factory</StyledToggle.Item>
                        </ToggleGroup.Root>
                    </div>
                </StyledToolbarSecion>

                <StyledToolbarSecion>
                    <h3>Options</h3>
                    <div className="toolbar-tools">
                        <ToggleGroup.Root type="single" value="rad">
                            <StyledToggle.Item value="rad">Rad</StyledToggle.Item>
                            <StyledToggle.Item value="deg">Deg</StyledToggle.Item>
                        </ToggleGroup.Root>
                        <div style={{ width: '12px' }}></div>
                        <ToggleGroup.Root type="single" value="euler">
                            <StyledToggle.Item value="euler">Euler</StyledToggle.Item>
                            <StyledToggle.Item value="quaternion">Quaternion</StyledToggle.Item>
                        </ToggleGroup.Root>
                        <div style={{ width: '12px' }}></div>

                        <label>Axes</label>
                        <StyledSwitch.Switch checked={show_axes} onCheckedChange={onShowAxesChange}>
                            <StyledSwitch.Thumb />
                        </StyledSwitch.Switch>
                        <div style={{ width: '12px' }}></div>

                        <label>Grid</label>
                        <StyledSwitch.Switch checked={show_grid} onCheckedChange={onShowGridChange}>
                            <StyledSwitch.Thumb />
                        </StyledSwitch.Switch>
                        <div style={{ width: '12px' }}></div>

                        <Dialog.Root>
                            <StyledDialogTrigger><AiOutlineInfoCircle /></StyledDialogTrigger>
                            <StyledOverlay />
                            <StyledContent>
                                <h1>Info</h1>
                                <p>FOVs is a tool to visualise the fields of views of multiple cameras in a scene.</p>
                                <Dialog.Close>Close</Dialog.Close>
                            </StyledContent>
                        </Dialog.Root>
                    </div>
                </StyledToolbarSecion>

            </StyledToolbar>
        </>
    )

}

export default Toolbar;