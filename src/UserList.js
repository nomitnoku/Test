import React from 'react';
import Axios from 'axios';
import { Container, Spinner, Row, Col, Form } from 'react-bootstrap';

class UserList extends React.Component{
  constructor(){
    super();
    this.state = {
      userData: null,
      loading: true,
      searchTerm: ''
    };
  }

  componentDidMount = () => {
     Axios({
       method: 'get',
       url: 'https://reqres.in/api/users'
     })
     .then((res) => {
       this.setState({
         userData: res.data,
         loading: false
       })
     })
     .catch(() => {
       this.setState({
         loading: false
       })
     })
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    const {  userData, loading, searchTerm} = this.state;
    if(loading){
      <Row
      className="align-items-center justify-content-center"
      > 
      <Spinner
        animation="border" 
      />
      </Row>
    }
    if(!loading && !!userData) {
    const patt = new RegExp(searchTerm, 'i');
    const userList = userData.data.filter((user) => patt.test(`${user.first_name} ${user.last_name}`)); 
    return (
      <Container
      id="user-list"
      >
        <Row>

        <Col
          xs={24}
        >
          <Form.Control
            type="text" 
            value={searchTerm}
            onChange={this.handleChange}
            placeholder="Search"
          />
          </Col>
          {!!userList.length && (
            <>
          <Col>
          <Row
            className="mx-0"
          >
              {userList.map((user) => (
                <Col
                  xs={2}
                  sm={8}
                  md={4}
                  key={user.id}
                  className="p-2"
                >
                  <div
                  className="border p-1"
                  >
                   <div
                    className="user-image-div"
                   >
                     <img
                       src={user.avatar}
                       alt="" 
                     />
                   </div>
                   <div
                   className="font-weight-bold text-center"
                   >
                      {`${user.first_name} ${user.last_name}`}
                   </div>
                  </div>
                </Col>
              ))}
          </Row>
          </Col>
          </>
          )}
        </Row>
      </Container>
    )
    }
    return null;
  }
}

export default UserList;