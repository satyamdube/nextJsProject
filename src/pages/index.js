import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from './Login'
import { Container , Row , Col , Card} from 'react-bootstrap'

export default function Home() {
  return (
    <div >
 <div className="center">
 <Container >
 <Row>
    <Col  md = {1} lg = {2} xs={0}></Col>

    <Col md = {10} lg = {8} xs={12}>
      <div className="Login-out">
      <Login></Login>

      </div>
    </Col>
    <Col  md = {1} lg = {2} xs={0}></Col>
  </Row>
</Container>

 </div>
    </div>
  )
}