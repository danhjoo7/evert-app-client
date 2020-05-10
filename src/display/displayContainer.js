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
            height: 700px;
            width: 100%;
            bottom: 20px;
            background: #F7F2F0;

            .main-app-image-container {
                position: absolute;
                width: 50%;
                left: 50%;
                img {
                    position: absolute;
                    width: 550px;
                    height: 400px;
                    right: 50px;
                    top: 50px;
                    border-radius: 10px;
                }
            }
            
        `

        return (
            <StyledContainer>
                <div className="main-app-image-container">
                    <img className="main-app-image" alt="ecommerce and vintage items" src="http://advertisementfeature.cnn.com/2017/tokyo-tourism/dist/images/story/experience/carousel-2/4-1024.jpg" />
                </div>
                <div>
                    <h2 className="display-header"></h2>
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

