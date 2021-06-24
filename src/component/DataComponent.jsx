import { useContext } from 'react'
import { DataContext } from './DataContext'

export const DataComponent = () => {

    const {data} = useContext(DataContext)

    return (
        <div>
            <h1>Statistics</h1>
            {
                (!data.modo)
                    ? <p>Mode active: {'Dark'}</p>
                    : <p>Mode active: {'Light'}</p>
            }
            <p>Switch counter: {data.number}</p>
        </div>
    )
}
