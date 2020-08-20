import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button, Card, CardBody, Col, Container, Input, InputGroup, Row } from 'reactstrap';
import Axios from 'axios';
import { toast } from 'react-toastify';



const Login1 = () => (
    <div className="app flex-row align-items-center">
        <Container>
            <Row className="justify-content-center">
                <Col md="9" lg="7" xl="6">
                    <Card className="mx-5">
                        <CardBody className="p-5">
                            <h1>Login</h1>
                            <Formik
                                initialValues={{
                                    email: '',
                                    password: '',
                                }}
                                // onSubmit={async values => {
                                //     await new Promise(r => setTimeout(r, 500));
                                //     {window.location.reload(false)}
                                //     alert(JSON.stringify(values, null, 2));



                                // }}
                                onSubmit={async (input, { resetForm }) => {
                                    alert(JSON.stringify(input, null, 2));
                                    await Axios.post(`http://localhost:8080/employees/addEmployee`, input).then(res => {
                                       toast.success(res.data)
                                       resetForm({})
                                    })
                                    .catch(err => {
                                        toast.error('Something went wrong.');
                                    });
                                }
                                }

                            >
                                <Form>
                                    <InputGroup className="mb-3">
                                        <label htmlFor="email" className=" form-control-sm">Email Id__</label>
                                        <Field
                                            id="email"
                                            name="email"
                                            className=" form-control"
                                            placeholder="Enter Email"
                                            type="email"
                                            required
                                        />
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <label htmlFor="password" className=" form-control-sm" >Password</label>
                                        <Field id="password" name="password" type="password" className=" form-control" placeholder="Enter password" required />
                                    </InputGroup>

                                    <Button type="submit" color="primary" block>Login</Button>
                                </Form>
                            </Formik>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Login1;