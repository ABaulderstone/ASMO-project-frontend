import React, { Component } from "react";
import { Select } from 'semantic-ui-react'

const birthdayOptions = [
    { key: 'af', value: 'af', text: 'January' },
    { key: 'ax', value: 'ax', text: 'February' },
    { key: 'al', value: 'al', text: 'March' },
    { key: 'dz', value: 'dz', text: 'April' },
    { key: 'as', value: 'as', text: 'May' },
    { key: 'ad', value: 'ad', text: 'June' },
    { key: 'ao', value: 'ao', text: 'July' },
    { key: 'ai', value: 'ai', text: 'August' },
    { key: 'ag', value: 'ag', text: 'September' },
    { key: 'ar', value: 'ar', text: 'October' },
    { key: 'am', value: 'am', text: 'Novemer' },
    { key: 'aw', value: 'aw', text: 'December' },
]

const SelectExample = () => (
    <Select placeholder='Select your birth day' options={birthdayOptions} />
)

class Birthday extends Component {
    render() {


        const SelectExample = () => (
            <Select placeholder='Eat for free on your birthday' options={birthdayOptions} />
        )
        return (
            <div>

                <SelectExample
                    label="Address"
                />

            </div>
        )
    }
}

export default Birthday;


