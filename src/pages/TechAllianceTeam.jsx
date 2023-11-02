import TeamDashboard from "../components/Team/TeamDashboard";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const TechAllianceTeam = () => {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Tech Alliance Team</Heading>
            </Row>
            <Row>
                <TeamDashboard />
            </Row>
        </>
    )
}

export default TechAllianceTeam;