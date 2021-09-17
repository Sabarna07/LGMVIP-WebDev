import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import Card from './Card/Card';
import fetch from "isomorphic-fetch"


const Users = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);

        fetch('https://reqres.in/api/users?page=1')
            .then((response) => response.json())
            .then(results => {setUsers(results.data)})

    }, [])

    return (
        <Layout>
            <section className="card__container">
                {!loading && users.map((data, index) => (
                    <Card key={index} user={data} />

                ))}
                {loading && <h1>Loading.....</h1>}
            </section>
        </Layout>
    )
}

export default Users
