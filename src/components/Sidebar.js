import { styled } from '@stitches/react';
import * as Accordion from '@radix-ui/react-accordion';
import StyledAccordion from '../styles/accordian';

const StyledSidebar = styled('div', {
  gridArea: 'sidebar',
  borderRight: '1px solid gainsboro'
});


const temp_cameras = [
  {
    id: 1,
    name: "Camera 1",
    x: 1,
    y: 1,
    z: 1,
    rx: 1,
    ry: 1,
    rz: 1,
    near: 1,
    far: 1,
    hfov: 1,
    vfov: 1
  },
  {
    id: 2,
    name: "Camera 2",
    x: 1,
    y: 1,
    z: 1,
    rx: 1,
    ry: 1,
    rz: 1,
    near: 1,
    far: 1,
    hfov: 1,
    vfov: 1
  },
  {
    id: 3,
    name: "Camera 3",
    x: 1,
    y: 1,
    z: 1,
    rx: 1,
    ry: 1,
    rz: 1,
    near: 1,
    far: 1,
    hfov: 1,
    vfov: 1
  }
]
const Sidebar = () => {

  return (
    <>
      <StyledSidebar>
        <Accordion.Root type="multiple">
          {
            temp_cameras.map(camera => (
              <StyledAccordion.Item value={camera.id}>

                <StyledAccordion.Header>
                  <StyledAccordion.Button>{camera.name}</StyledAccordion.Button>
                </StyledAccordion.Header>

                <StyledAccordion.Panel>
                  <table>
                    <tbody>
                      <tr>
                        <td>name</td>
                        <td><input type="text" value={camera.name}></input></td>
                      </tr>
                      <tr>
                        <td>x</td>
                        <td><input type="number" step="0.1" value={camera.x}></input></td>
                      </tr>
                      <tr>
                        <td>y</td>
                        <td><input type="number" step="0.1" value={camera.y}></input></td>
                      </tr>
                      <tr>
                        <td>z</td>
                        <td><input type="number" step="0.1" value={camera.z}></input></td>
                      </tr>
                      <tr>
                        <td>rx</td>
                        <td><input type="number" step="0.1" value={camera.rx}></input></td>
                      </tr>
                      <tr>
                        <td>ry</td>
                        <td><input type="number" step="0.1" value={camera.ry}></input></td>
                      </tr>
                      <tr>
                        <td>rz</td>
                        <td><input type="number" step="0.1" value={camera.rz}></input></td>
                      </tr>
                      <tr>
                        <td>near</td>
                        <td><input type="number" step="0.1" value={camera.near}></input></td>
                      </tr>
                      <tr>
                        <td>far</td>
                        <td><input type="number" step="0.1" value={camera.far}></input></td>
                      </tr>
                      <tr>
                        <td>hfov</td>
                        <td><input type="number" step="0.1" value={camera.hfov}></input></td>
                      </tr>
                      <tr>
                        <td>vfov</td>
                        <td><input type="number" step="0.1" value={camera.vfov}></input></td>
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