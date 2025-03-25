import { Card, Col, Row } from "react-bootstrap";
import { EmployeeI } from "types";
interface FullTeamProps {
    employees: EmployeeI[];
}

const FullTeam = ({ employees }: FullTeamProps) => {
    return (
        <>
            <h2 className="text-center text-blue-200 mt-10">Our Full Team</h2>
            <Col lg={10} xxl={8} className="mx-auto mt-6">
                <Row xs={1} lg={3} className="g-3 justify-content-center">
                    {employees.map((employee, i) => (
                        <Col key={i}>
                            <Card className="text-center text-light rounded-3 h-100 d-flex flex-column" bg="blue-800">
                                <Card.Body>
                                    <Card.Title>{employee.name}</Card.Title>
                                    <Card.Text className="fs-sm text-light-gray">{employee.position}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>
        </>
    );
};

export default FullTeam;
