
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContentColumn from './ContentColumn';


const HomeComponent = () => {

    return ( 
        <div>
            
                <Row className='container-fluid p-5'>
                    <Col xs={12} md={4} lg={3}>
                    <div className='p-3' >
                        <ContentColumn></ContentColumn>
                        
                    </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                       <ContentColumn></ContentColumn>
                    </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                        <ContentColumn></ContentColumn>
                    </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                        <ContentColumn></ContentColumn>
                    </div>
                    </Col>
                </Row>

                <Row className='container-fluid p-5'>
                    <Col xs={12} md={4} lg={3}>
                    <div className='p-3' >
                        <ContentColumn></ContentColumn>
                        
                    </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                       <ContentColumn></ContentColumn>
                    </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                        <ContentColumn></ContentColumn>
                    </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                        <ContentColumn></ContentColumn>
                    </div>
                    </Col>
                </Row>
            
        </div>
        

        
     );
}
 
export default HomeComponent;