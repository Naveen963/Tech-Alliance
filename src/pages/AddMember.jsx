import React from 'react'
import AddMemberForm from '../components/Form/AddMemberForm'
import Heading from '../ui/Heading'

const AddMember = () => {
    return (
        <>
            <Heading as="h1">Register New User</Heading>
            <AddMemberForm />
        </>
    )
}

export default AddMember