import React from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';

class Color extends React.Component{
    constructor(){
        super();
        this.state = {
            input: null
        }
    }

    handleChange = (e) => {
        this.setState({
          input: e.target.value
        })
      }

    render() {
        const {  input} = this.state;
         return (
            <Container>
                <Row
                className="py-6"
                >
                    <Col
                     xs={8}
                    >
                        <div
                         className="mb-3"
                        >
                            <Form.Control
                               type="text"
                               value={input}
                               onChange={this.handleChange}
                               maxLength={1}
                            />
                        </div>
                        <div>
                            <Button
                             onClick={() => {
                                 this.colorBox()
                             }}
                            >
                               Color Me 
                            </Button>
                        </div>
                    </Col>
                    <Col>
                       <Table
                         bordered
                       >
                           <tbody>
                           <tr>
                               <td>
                                   1
                               </td>
                               <td>
                                   1
                               </td>
                               <td>
                                   1
                               </td>
                               <td>
                                   1
                               </td>
                           </tr>
                           </tbody>
                       </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Color;