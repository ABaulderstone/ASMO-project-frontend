import React  from "react";
import { Select, Form } from 'semantic-ui-react'

const monthOptions = [
    { key: 'af', value:'January', text: 'January' },
    { key: 'ax', value: 'February', text: 'February' },
    { key: 'al', value: 'March', text: 'March' },
    { key: 'dz', value: 'April', text: 'April' },
    { key: 'as', value: 'May', text: 'May' },
    { key: 'ad', value: 'June', text: 'June' },
    { key: 'ao', value: 'July', text: 'July' },
    { key: 'ai', value: 'August', text: 'August' },
    { key: 'ag', value: 'September', text: 'September' },
    { key: 'ar', value: 'October', text: 'October' },
    { key: 'am', value: 'Novemer' , text: 'Novemer' },
    { key: 'aw', value: 'December', text: 'December' },
]




        const ReduxMonthDropdown = (props) => {
            return (
            <Form.Field>
            <Select 
            placeholder={props.label} options={monthOptions} 
            selection {...props.input}
             value={props.input.value}
             onChange={data => props.input.onChange(data.value)} />
            </Form.Field>
            )
        }
        
        

export default ReduxMonthDropdown;


