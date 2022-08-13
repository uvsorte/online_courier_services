import React from 'react'

function OrderRow({o}) {
    return (
        <tr>
            <td>{o.orderId}</td>
            <td>{o.address}</td>
            <td>{o.pinCode}</td>
            <td>{o.status}</td>
        </tr>
    )
}

export default OrderRow
