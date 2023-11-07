import Filter from "../../ui/Filter"
import TableOperations from "../../ui/TableOperations"

const MemberTableOperations = () => {
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

    return (
        <TableOperations>
            <Filter options={options} />
        </TableOperations>
    )
}
export default MemberTableOperations;