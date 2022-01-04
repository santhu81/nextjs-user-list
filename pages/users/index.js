import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: { users: data }
    }
}

const Users = ({ users }) => {

    return (
        <div style={{ minHeight: '380px' }}>
            <h1>List of Users</h1>
            <p>Click on the below users to view details</p>
            <ul className="usersList">
                {
                    users.map(user => {
                        return <li key={user.id}><Link href={`/users/${user.id}`}>{user.name}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Users