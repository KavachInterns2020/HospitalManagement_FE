import React, { Component } from 'react'
import {Pagination,Table ,Container,Form,ButtonGroup,Button} from 'react-bootstrap';
import './Hospital.css';
import 'antd/dist/antd.css'
import {Switch} from "antd";

export default class Hospital extends Component {



    render() {
        return (
            <div Class="main">
            <h1 Class="hospitalheader">
             Clinikey provides best hospitals in the world selct the one you needed
            </h1>
           <div Class="flex1">
              <Pagination>
                  <Pagination.First />
                           <Pagination.Prev />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Ellipsis />
                            <Pagination.Item>{10}</Pagination.Item>
                            <Pagination.Item>{11}</Pagination.Item>
                            <Pagination.Item active>{12}</Pagination.Item>
                            <Pagination.Item>{13}</Pagination.Item>
                            <Pagination.Item >{14}</Pagination.Item>
                            <Pagination.Ellipsis />
                            <Pagination.Item>{20}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                            </Pagination>    
                                      <div Class="flex2">
                                            <Form>
                                            <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="Search Hospital" />
                                            </Form.Group>
                                            </Form>
                                            <Button Class="button"> search </Button>
                                       </div>
              </div>
<Container>
  <div Class="table">
<Table responsive>
  <thead>
    <tr>
      <th>Ranking</th>
      <th>Hospital Name</th>
      <th>Speciality</th>
      <th>Adress</th>
      <th>Contact Deatils</th>
      <th>select</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>
     <Switch/>
      </td>
    
    </tr>
    <tr>
      <td>2</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>
     <Switch/>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>
     <Switch/>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>
     <Switch/>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>
     <Switch/>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>
     <Switch/>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>
     <Switch/>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>
     <Switch/>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>
     <Switch/>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>
     <Switch/>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>
     <Switch/>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>
     <Switch/>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>
     <Switch/>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>
     <Switch/>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>
     <Switch/>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>
     <Switch/>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>   
      <td>
     <Switch/>
      </td>
    </tr>
  </tbody>
</Table>
</div>
</Container>  
<p Class="end"></p>
           </div>
        );
    }
}
