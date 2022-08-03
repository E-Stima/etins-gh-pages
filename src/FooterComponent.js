import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './Images/ESM-500-610.png'
import SubscriptionForm from './SubscriptionForm';

const FooterComponent = () => {
    return ( 
        <footer className='bg-dark'>
            <Row className='container-fluid mt-5'>
                <Col xs={12} md={4} lg={3}>
                    <div className='p-3' >
                        <img src={logo} alt={'esm logo'} style={{maxWidth : '50px'}} />
                        <p className='text-light'>
                            We offer world class services
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={3}>
                    <div className='p-3 ' >
                        <h5 className='text-light'>Contact Us</h5>
                        <p className='text-light'>
                            40, selflon pass,Juria,Bolivia  
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={3}>
                    <div className='p-3 ' >
                        <ul >
                            <h5 className='text-light'>Resources</h5>
                        
                            <ul className='text-light'>
                                policy
                            </ul>
                            <ul className='text-light'>
                                Products
                            </ul>
                            <ul className='text-light'>
                                Features
                            </ul>
                            <ul className='text-light'>
                                About
                            </ul>
                        </ul>
                        
                    </div>
                </Col>
                <Col xs={12} md={4} lg={3}>
                    <div className='p-3 ' >
                        <h5 className='text-light'>Subscribe</h5>
                        <SubscriptionForm/>
                    </div>
                </Col>
                
                
            </Row>
        </footer>
     );
}
 
export default FooterComponent;