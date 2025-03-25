import { Col, Table, Image } from "react-bootstrap";

interface Comparison {
    disease: string;
    currentTreatment: string;
    challenges: string;
    oocidiaAdvantages: string;
}

const ComparisonTable: React.FC<{ comparisons: Comparison[], logoTab: string }> = ({ comparisons, logoTab }) => {
    return (
        <Col xl={10} className="mx-auto my-10 d-none d-lg-block animate__animated animate__fadeInUp">
            <p className="text-blue-200 mb-4 mt-5 text-center">
                A comparison table showing Oocidia’s advantages over existing treatments
            </p>
            <Col xl={12} className="mx-auto">
                <Table borderless className="drug-dev-program-table mt-8 table-text-light text-center align-middle" variant="transparent" hover>
                    <thead>
                        <tr className="border-bottom">
                            <th>Disease</th>
                            <th>Current Treatment</th>
                            <th>Challenges</th>
                            <th>Oocidia's Advantage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisons.map(({ disease, currentTreatment, challenges, oocidiaAdvantages }, i) => (
                            <tr key={i}>
                                <td className="px-2">
                                    <div className="border-end py-1">{disease}</div>
                                </td>
                                <td className="px-2">
                                    <div className="border-end py-1">{currentTreatment}</div>
                                </td>
                                <td className="px-2">
                                    <div className="border-end py-1">{challenges}</div>
                                </td>
                                <td className="px-2">
                                    <div className="d-flex align-items-center py-1 text-start-1">
                                        <span className="me-3">
                                            <Image width="auto" height="50" src={logoTab} alt="oocidia logo" />
                                        </span>
                                        {oocidiaAdvantages}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Col>
    );
};

export default ComparisonTable;
