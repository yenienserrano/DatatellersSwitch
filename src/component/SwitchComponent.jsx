import { useContext, useState } from 'react'
import { Switch } from '@material-ui/core'
import { DataContext } from './DataContext'

export const SwitchComponent = () => {

    const body = document.querySelector('body')
    const modoWindows = window.matchMedia('(prefers-color-scheme: dark)').matches

    const [modeDark, setModeDark] = useState(modoWindows)
    const {data, setData} = useContext(DataContext)

    const handleChange = () => {
        setModeDark(!modeDark)
        
        setData({
            modo: modeDark,
            number: data.number + 1
        })
    }
    
    if(modeDark){
        body.classList.add('dark-mode')
        body.classList.remove('light-mode')
    }else{
        body.classList.add('light-mode')
        body.classList.remove('dark-mode')
    }

    return (
        <div className='switch--container'>
            <p>Mode:</p>
            <Switch
                checked={modeDark}
                onChange={handleChange}
                color="secondary"
                name="switchMode"
                inputProps={{ 'aria-label': 'secundary checkbox' }}
            />
        </div>
    )
}
