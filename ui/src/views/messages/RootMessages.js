import React from 'react';
import { withRouter } from "react-router";

import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";
import Friends from "../../components/friends/Friends"
import { connect } from 'react-redux'

import './styles.css';

class Messages extends React.Component {
  
   
    render () {

        const  { friends } = this.props;
        // Show chat box of the first friend in friend list
        // If friend list is not empty
        if (friends.length !== 0) {
          this.props.history.push("/messages/" + friends[0].public_id);
        }

        return (

          <Container fluid className="main-content-container px-4 mt-4">
            <Row>
              <Col md="9">
                <Row>
                  <Col>
                    <Card small className="mb-4">
                      <CardHeader className="border-bottom">
                        <h4 className="m-0">Messages</h4>
                      </CardHeader>
                      <CardBody className="p-0 pb-3" style={{minHeight: "30rem", maxHeight: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <div style={{fontSize: "1.5rem", color: "#999"}}>Please follow a friend to begin.</div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col md="3">
                <Friends></Friends>
              </Col>
            </Row>

          </Container>
        )
    }
}


const mapStateToProps = (state) => ({
  friends: state.friendReducer.friends
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Messages))