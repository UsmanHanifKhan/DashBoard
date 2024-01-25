import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Form, Col, Image } from 'react-bootstrap'
import image1 from '../assets/usman.jpeg'
import { FaGear } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";
import Graph2 from './Graph2';
import Graph1 from './Graph1';
import ImageSection from './ImageSection';
import Cards from './Cards';
import PropTypes from 'prop-types';

function HomeNavbar({ toggleSidebar }) {
    return (
        <>
            <Navbar expand="lg" className="bg-body-white">
                <Container fluid>
                    <Navbar.Brand style={{ cursor: 'pointer' }} onClick={toggleSidebar} ><CiMenuFries /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Form inline>
                            <Row className="align-items-center me-5">
                                <Col xs="auto" style={{ position: 'relative' }}>
                                    <div style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#000', zIndex: 1, padding: '15px 10px', fontSize: '20px' }}>
                                        <AiOutlineSearch />
                                    </div>
                                    <Col xs="auto" md="auto">
                                        <Form.Control
                                            type="text"
                                            placeholder="Typing to search"
                                            className="d-md-inline mr-sm-2 pl-10 me-3 rounded-full"
                                            style={{ width: '100%', maxWidth: '600px', zIndex: 0 }}
                                        />
                                    </Col>
                                </Col>
                            </Row>
                        </Form>
                        <div className='d-flex justify-content-center align-items-center gap-5 ' >
                            <Col className='d-flex gap-1'>
                                <Image src={image1} width={50} roundedCircle />
                                <div className='d-flex flex-col pt-2'>
                                    <p style={{ fontSize: '15px' }}>Jhone </p>
                                    <p style={{ fontSize: '10px' }}>React Js</p>
                                </div>
                            </Col>
                            <div className='d-flex gap-2'>
                                <FaGear />
                                <IoNotifications />
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Cards />
            <ImageSection />
                <div className="container-fluid py-3 ">
                    <div className="row">
                        <Graph1 />
                        <Graph2 />
                    </div>
                </div>
        </>
    );
}

HomeNavbar.propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
  };


export default HomeNavbar;