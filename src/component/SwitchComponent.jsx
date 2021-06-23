import { Switch } from '@material-ui/core'
import { useState } from 'react'

export const SwitchComponent = () => {

    const [modeDark, setModeDark] = useState(false)

    const handleChange = () => {
        setModeDark(!modeDark)
    }

    return (
        <div>
            <p>Mode:</p>
            <Switch
                checked={modeDark}
                onChange={handleChange}
                color="primary"
                name="switchMode"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        </div>
    )
}
