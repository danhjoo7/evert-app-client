import React from 'react'
import { connect } from 'react-redux'
import submitSellItem from '../actions/submitSellItem'
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
} from 'semantic-ui-react'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

class Sell extends React.Component {
    constructor() {
        super()

        this.state = {}
        //     item: {
        //         item_name: '',
        //         brand: '',
        //         price: '',
        //         size: '',
        //         description: '',
        //         images: []
        //     }
        // }
    }

    handleChange = (e, { value }) => {
        this.setState({ value })
    }

    render() {
        const { value } = this.state
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field
                        control={Input}
                        label='Brand'
                        placeholder='Brand'
                    />
                    <Form.Field
                        control={Input}
                        label='Item name'
                        placeholder='Item name'
                    />
                    <Form.Field
                        control={Select}
                        label='Size'
                        options={options}
                        placeholder='Size'
                    />
                    <Form.Field
                        control={Select}
                        label='Price'
                        options={options}
                        placeholder='Price'
                    />
                    <Form.Field
                        control={Input}
                        label='Item Description'
                        placeholder='Description'
                    />
                </Form.Group>
                <Form.Group inline>
                    <label>Size</label>
                    <Form.Radio
                        label='Small'
                        value='sm'
                        checked={value === 'sm'}
                        onChange={this.handleChange}
                    />
                    <Form.Radio
                        label='Medium'
                        value='md'
                        checked={value === 'md'}
                        onChange={this.handleChange}
                    />
                    <Form.Radio
                        label='Large'
                        value='lg'
                        checked={value === 'lg'}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Field
                    control={Checkbox}
                    label='I agree to the Terms and Conditions'
                />
                <Form.Field control={Button}>Submit</Form.Field>
            </Form >
        )
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        submitSellItem: (() => submitSellItem())
    }
}

export default connect(null, mapDispatchtoProps)(Sell) 