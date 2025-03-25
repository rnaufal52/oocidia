import { Table, ProgressBar } from "react-bootstrap";
import Icon from "Components/Icon"

interface DrugDevProgram {
    program: string;
    summary: string;
    progress: number;
    status: string;
}

interface DrugDevTableProps {
    drugDevPrograms: DrugDevProgram[];
    handleShowDetail: (data: DrugDevProgram) => void;
}

const DrugDevTable: React.FC<DrugDevTableProps> = ({ drugDevPrograms, handleShowDetail }) => {
    return (
        <Table borderless className="drug-dev-program-table mt-8 table-text-light text-center align-middle" variant="transparent" hover>
            <thead>
                <tr className="border-bottom">
                    <th>Hosts</th>
                    <th>Disease</th>
                    <th>Joint Health Supplement</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                {drugDevPrograms.map((programData, i) => (
                    <tr key={i} onClick={() => handleShowDetail(programData)}>
                        <td className="px-4">
                            <div className="border-end py-1">
                                <img width="auto" height="50" src={programData.summary} alt="icon" />
                            </div>
                        </td>
                        <td className="px-4">
                            <div className="border-end py-1">{programData.program}</div>
                        </td>
                        <td className="px-4">
                            <ProgressBar label={programData.status} now={programData.progress} style={{ height: "16px" }} />
                            <div className="d-flex justify-content-between text-light gap-3">
                                <p className="mb-0 mt-2 fs-sm">Preclinical</p>
                                <p className="mb-0 mt-2 fs-sm">Lead Generation</p>
                                <p className="mb-0 mt-2 fs-sm">Veterinary Clinical Trials</p>
                            </div>
                        </td>
                        <td>
                            <Icon name="arrow-right" className="ms-2 text-blue-200" />
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default DrugDevTable;
