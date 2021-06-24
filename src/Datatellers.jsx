import React, { useState } from 'react'
import { DataComponent } from './component/DataComponent'
import { DataContext } from './component/DataContext'
import { SwitchComponent } from './component/SwitchComponent'

export const Datatellers = () => {

    const [data, setData] = useState({
        number: 0,
        modo: true,
    })

    return (
        <DataContext.Provider value={{data, setData}}>
            <h1>Datatellers</h1>

            <SwitchComponent />

            <DataComponent />
        </DataContext.Provider>
    )
}
