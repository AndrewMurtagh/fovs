import { styled } from '@stitches/react';
import { useDispatch, useSelector } from 'react-redux';
import * as Accordion from '@radix-ui/react-accordion';
import { AiFillDelete } from 'react-icons/ai';
import StyledAccordion from '../styles/accordion';
import indexSlice from '../app/slices';

const StyledSidebar = styled('div', {
    gridArea: 'sidebar',
    borderRight: '1px solid gainsboro'
});

const Sidebar = () => {

    const dispatch = useDispatch();
    const cameras = useSelector(state => state.cameras);

    const onCameraAttrChange = (id, attr, value) => dispatch(indexSlice.actions.updateCamera({ id, attr, value }));

    const onRemoveCamera = camera_id => dispatch(indexSlice.actions.removeCamera(camera_id));

    return (
        <>
            <StyledSidebar>
                <Accordion.Root type="multiple">
                    {
                        cameras.map(camera => (
                            <StyledAccordion.Item value={camera.id} key={camera.id}>

                                <StyledAccordion.Header>
                                    <StyledAccordion.Button>
                                        <span>{camera.name}</span>
                                        <span className="delete" onClick={() => onRemoveCamera(camera.id)}><AiFillDelete/></span>
                                    </StyledAccordion.Button>
                                </StyledAccordion.Header>

                                <StyledAccordion.Panel>
                                    {/* <div>
                                        <button>Reset</button>
                                        <button>FPV</button>
                                        <button onClick={() => onRemoveCamera(camera.id)}>Remove</button>
                                    </div> */}
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="key">name</td>
                                                <td><input type="text" value={camera.name} onChange={e => onCameraAttrChange(camera.id, 'name', e.target.value)}></input></td>
                                            </tr>
                                            <tr>
                                                <td className="key">x</td>
                                                <td><input type="number" step="0.5" value={camera.x} onChange={e => onCameraAttrChange(camera.id, 'x', parseFloat(e.target.value))}></input></td>
                                            </tr>
                                            <tr>
                                                <td className="key">y</td>
                                                <td><input type="number" step="0.5" value={camera.y} onChange={e => onCameraAttrChange(camera.id, 'y', parseFloat(e.target.value))}></input></td>
                                            </tr>
                                            <tr>
                                                <td className="key">z</td>
                                                <td><input type="number" step="0.5" value={camera.z} onChange={e => onCameraAttrChange(camera.id, 'z', parseFloat(e.target.value))}></input></td>
                                            </tr>
                                            <tr>
                                                <td className="key">rx</td>
                                                <td><input type="number" step="10" value={camera.rx} onChange={e => onCameraAttrChange(camera.id, 'rx', parseFloat(e.target.value))}></input></td>
                                            </tr>
                                            <tr>
                                                <td className="key">ry</td>
                                                <td><input type="number" step="10" value={camera.ry} onChange={e => onCameraAttrChange(camera.id, 'ry', parseFloat(e.target.value))}></input></td>
                                            </tr>
                                            <tr>
                                                <td className="key">rz</td>
                                                <td><input type="number" step="10" value={camera.rz} onChange={e => onCameraAttrChange(camera.id, 'rz', parseFloat(e.target.value))}></input></td>
                                            </tr>
                                            <tr>
                                                <td className="key">near</td>
                                                <td><input type="number" step="0.5" value={camera.near} onChange={e => onCameraAttrChange(camera.id, 'near', parseFloat(e.target.value))}></input></td>
                                            </tr>
                                            <tr>
                                                <td className="key">far</td>
                                                <td><input type="number" step="0.5" value={camera.far} onChange={e => onCameraAttrChange(camera.id, 'far', parseFloat(e.target.value))}></input></td>
                                            </tr>
                                            <tr>
                                                <td className="key">hfov</td>
                                                <td><input type="number" step="10" value={camera.hfov} onChange={e => onCameraAttrChange(camera.id, 'hfov', e.target.value)}></input></td>
                                            </tr>
                                            <tr>
                                                <td className="key">vfov</td>
                                                <td><input type="number" step="10" value={camera.vfov} onChange={e => onCameraAttrChange(camera.id, 'vfov', e.target.value)}></input></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </StyledAccordion.Panel>
                            </StyledAccordion.Item>
                        ))
                    }

                </Accordion.Root>
            </StyledSidebar>
        </>
    )

}

export default Sidebar;