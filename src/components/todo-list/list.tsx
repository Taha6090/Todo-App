import React from 'react'

const List = () => {
    const fruits = ["Apple", "Bannan", "Gauva", "Mango", "lemon"]

    return (
        <div>
            <ul>
                {
                    fruits.map((item, idx) => {
                        return <li key={idx}>
                            {item}
                        </li>
                    })

                }
            </ul>
        </div>
    )
}

export default List

