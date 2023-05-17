import React from 'react';

const List = () => {

    let dataArr = []
    let values = Object.keys(localStorage)
    values.forEach((item) => {
        let obj = window.localStorage.getItem(item)
        dataArr.push(JSON.parse(obj))
    })

    return (
        <div className='menu-align'>
            <>
                <h2 className='user-name'>Here is Users' details</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Age</td>
                                <td>E-mail id</td>
                                <td>Occupation</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                dataArr.map((data, index) => {
                                    return <tr key={index}>
                                        <td>{data.name}</td>
                                        <td>{data.age}</td>
                                        <td>{data.email}</td>
                                        <td>{data.occupation}</td>
                                        <td>
                                            <button type='submit' onClick={() => { localStorage.removeItem(data.name) }} >Delete</button>
                                        </td>

                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </>
        </div >
    )
}

export default List