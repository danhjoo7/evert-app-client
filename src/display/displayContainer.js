import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import ItemCard from './itemCard'


class Display extends React.Component {
    constructor() {
        super()
    }

    render() {

        const StyledContainer = styled.div`
            position: relative;
            height: 500px;
            width: 100%;
            top: -1px;
            background: #F7F2F0;
           
        `

        return (
            <StyledContainer className="display-container">
                <div className="main-app-image-container">
                    <img className="main-app-image" alt="ecommerce and vintage items" src="https://res.cloudinary.com/danhjoo/image/upload/v1581381657/fashion-1031469__340_gvawxs.jpg" />
                </div>
                <div>
                    <h2 className="display-header">Featured Items</h2>
                </div>
                <div className="display-item-cards">
                    {/* <hr size="2" align="center"></hr> */}
                    {this.props.items.filter((item) => item.name.toLowerCase().startsWith(this.props.search.toLowerCase()) ||
                        item.brand.toLowerCase().startsWith(this.props.search.toLowerCase())).map(item => {
                            return (<ItemCard key={item.id} item={item} />)
                        }
                        )}
                </div>
            </StyledContainer >
        )
    }
}


const mapStatetoProps = state => {
    return {
        items: state.items,
        search: state.search
    }
}

export default connect(mapStatetoProps, null)(Display)

