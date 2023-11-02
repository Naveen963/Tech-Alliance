import RegistrationsTable from "../components/RegistrationsTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const Registrations = () => {

    return (
        <>
            <Row type="horizontal" style={{ marginBottom: '2rem' }}>
                <Heading as="h1">Course Registrations</Heading>
                <p>Filter</p>
            </Row>
            <Row>
                <RegistrationsTable />
            </Row>
        </>
    )
}
export default Registrations;