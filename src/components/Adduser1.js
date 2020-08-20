import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button, Card, CardBody, Col, Container, Input, InputGroup, Row } from 'reactstrap';
import Axios from 'axios';
import { toast } from 'react-toastify';
import Navbar from './Navbar';

const AddEmployee = (props) => (
    <div className="app flex-row align-items-center">
        <Navbar />
        <Container>
            <Row className="justify-content-center">
                <Col md="9" lg="7" xl="6">
                    <Card className="mx-5">
                        <CardBody className="p-5">

                            <h1>Add Employee</h1>
                            <Formik
                                initialValues={{
                                    firstName: '',
                                    lastName: '',
                                    email_id: '',
                                }}
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
                                        <label htmlFor="firstName" className=" form-control-sm">First Name</label>
                                        <Field id="firstName" name="firstName" className=" form-control" placeholder="Prakash" required />
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <label htmlFor="lastName" className=" form-control-sm" >Last Name</label>
                                        <Field id="lastName" name="lastName" className=" form-control" placeholder="Amte" required />
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <label htmlFor="email" className=" form-control-sm">Email Id___</label>
                                        <Field
                                            id="email_id"
                                            name="email_id"
                                            className=" form-control"
                                            placeholder="pkamte@gmail.com"
                                            type="email"
                                            required
                                        />
                                    </InputGroup>
                                    {/* <button type="submit">Submit</button> */}
                                    <Button type="submit" color="success" block>Create Account</Button>
                                </Form>
                            </Formik>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
);

export default AddEmployee;