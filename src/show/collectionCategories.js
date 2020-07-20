import React from 'react'
import styled from 'styled-components'
import CollectionCard from './collectionCard'


const StyledContainer = styled.div`
    width: 100%;
    height: 500px;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 90px;
    `

const ClothesCollections = styled.div`
    position: absolute;
    margin-left: 5%;
    background-color: rgb(47, 93, 65);
    height: 450px;
    width: 45%;
    top: 10px;
    h2 {
        color: white;
        position: relative;
        top: 15px;
        left: 65px;
    }
`

const HouseholdCollections = styled.div`
    position: absolute;
    background-color: rgb(47, 93, 65);
    margin-left: 5%;
    height: 450px;
    width: 45%;
    top: 480px;
`

const CollectionCategories = () => {
    return (
        <StyledContainer>
            <ClothesCollections>
                <h2>Take a look around for clothes.</h2>
            </ClothesCollections>
            <HouseholdCollections>
            </HouseholdCollections>
        </StyledContainer >
    )
}

export default CollectionCategories