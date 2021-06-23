import React, { useState } from 'react'
import { DataContext } from './component/DataContext'
import { SwitchComponent } from './component/SwitchComponent'

export const Datatellers = () => {

    const [data, setData] = useState({
        number: 0
    })

    return (
        <DataContext.Provider value={{data, setData}}>
            <h1>Datatellers</h1>

            <SwitchComponent />
        </DataContext.Provider>
    )
}
