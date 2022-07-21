import React, { Component, useState } from 'react';
import { useParams } from 'react-router-dom';
import TraitFilterContainer from '../Containers/TraitFilterContainer';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemsGridContainer from './ItemsGridContainer';
import GridPagination from '../Components/GridPagination';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SortDropdown from '../Components/SortDropdown';
import NftDetailsCard from '../Components/NftDetailsCard';
import TraitBadges from '../Components/TraitBadges';


export default function CollectionContainer() {
    const { collectionName } = useParams();
    const [modalShow, setModalShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedTraits, setSelectedTraits] = useState([]);
    const [filteredItemsLength, setFilteredItemsLength] = useState(10000);
    const [items, setItems] = useState([
        { 
            id: '3422',
            image: 'https://www.gstop-content.com/ipfs/QmVjCB7fiPkq9fwzBVFgU6cvu4YkiY6KH5eA3J5sqDQeQJ',
            rarityRank : "1", 
            traits: {
                "Hat": "Dark Hoodie",
                "Body": "Schoolboy",
                "Face": "Smiling Zombie",
                "Weapon": "Neon Transparent",
                "Background": "Track"
            }
        },
        { 
            id: '722',
            image: 'https://www.gstop-content.com/ipfs/QmdVHYfZkG6bD6e7cEJity6doz5baxvJjELd6fwVSeyTxS',
            rarityRank : "55",
            traits: {
                "Hat": "Dark Hoodie",
                "Body": "Schoolboy",
                "Face": "Smiling Zombie",
                "Weapon": "Neon Transparent",
                "Background": "Track"
            }
        },
        { 
            id: '1035',
            image: 'https://www.gstop-content.com/ipfs/QmVq8TM5AvDFVAscMnkVauDRUZb5Ufw53xPy3EQFizZ9hp',
            rarityRank : "3355",
            traits: {
                "Hat": "Dark Hoodie",
                "Body": "Schoolboy",
                "Face": "Smiling Zombie",
                "Weapon": "Neon Transparent",
                "Background": "Track"
            }
        },
        { 
            id: '23',
            image: 'https://www.gstop-content.com/ipfs/QmZ6grDxxNDrjyEYgFjy3MhXDAaxyJJDrViiRjRfiu4FEJ',
            rarityRank : "11",
            traits: {
                "Hat": "Dark Hoodie",
                "Body": "Schoolboy",
                "Face": "Smiling Zombie",
                "Weapon": "Neon Transparent",
                "Background": "Track"
            }
        },
        { 
            id: '7222',
            image: 'https://www.gstop-content.com/ipfs/QmQy6g1iD2gCJJXDKTDcYx541RbcpaBbrxupkXNh5Tuzbi',
            rarityRank : "420.69",
            traits: {
                "Hat": "Dark Hoodie",
                "Body": "Schoolboy",
                "Face": "Smiling Zombie",
                "Weapon": "Neon Transparent",
                "Background": "Track"
            }
        },
        { 
            id: '431',
            image: 'https://www.gstop-content.com/ipfs/Qmc9fimbCCN9oCHcffA5HepqwSt9JNatPn6513ZaXrih61',
            rarityRank : "9999",
            traits: {
                "Hat": "Dark Hoodie",
                "Body": "Schoolboy",
                "Face": "Smiling Zombie",
                "Weapon": "Neon Transparent",
                "Background": "Track"
            }
        }
    ])

    const handleItemSelect = (e) => {
        const index = e.target.closest('.detailsCard').getAttribute('index');
        const selected = items[index];
        setSelectedItem(selected);
        setModalShow(true);
    }

    const handleTraitSelect = (e) => {
        const name = e.target.value;
        console.log(name)
        if (isTraitSelected(name)) {
            setSelectedTraits(selectedTraits.filter(trait => trait != name ));
        } else {
            setSelectedTraits(selectedTraits => [...selectedTraits, name]);
            // setFilteredItemsLength(filteredItemsLength + testData)
        }
    }

    const handleTraitDeselect = (e) => {
        const name = e.target.closest('.trait-badge').id;
        setSelectedTraits(selectedTraits.filter(trait => trait != name ));
    }

    const isTraitSelected = (name) => {
        return selectedTraits.includes(name);
    }

    const testData = {
        banner: "https://static.gstop-content.com/6fa28178-8e9c-4f3b-8e0d-fa960d321d12",
        name: collectionName,
        description: "A collection of 10,000 unique algorithmically generated MetaBoy's that brings the love of gaming, pixelart and technology together.",
        supply: '10,000',
        gmeLink: 'https://nft.gamestop.com/collection/MetaBoy',
        avatarUri: "https://static.gstop-content.com/d9fdd83b-5d72-4a32-a151-a8549efef1bc",
        stats: {
            dayVolume: '44 ETH',
            weekVolume: '1.1k ETH',
            totalVolume: '1.1k ETH'
        }, 
        traits: {
            "Hat": {"Beret Hat": "5", "Halo": "100", "Crown": "5514", "Santa": "928", "Helmet": "8242"},
            "Body": {"Schoolboy": "2312", 'Schoolgirl': "2312", "Armor": "2312", "Hoodie": "2312"},
            "Face": {"Teeth Smile": "23", "Goofy": "23", "Serious": "23", "Angry": "23"},
            "Weapon": {"Axe and Shield": "832", "Sword": "832", "Medusa Head": "832", "Bomb": "832", "Phonebook": "832"},
            "Background": {"Apocalypse": "7322", "Space": "7322", "Field": "7322", "Video Game": "7322", "Haunted House": "7322"}
        }
    } 

    return(
            <Row className='w-100'>
                <Col md={2} >
                    <TraitFilterContainer image={testData.avatarUri} isTraitSelected={isTraitSelected} handleTraitSelect={handleTraitSelect} traits={testData.traits} />
                </Col>
                <Col>
                    <Card bg='dark' text='white' border='light'>
                        <Card.Img variant="top" src={testData.banner}/>
                        <Card.Body style={{textAlign: "left"}}>
                            <Card.Title>{testData.name}</Card.Title>
                            <Card.Text>{testData.description}</Card.Text>
                            <a href={testData.gmeLink} target="_blank">
                                <Button variant="primary" >View on GameStop</Button>
                            </a>
                        </Card.Body>
                    </Card>
                    <NftDetailsCard
                        item={selectedItem}
                        collectionName={collectionName}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <br />
                    <Row className='align-middle my-2'>
                        <Col md={2} className='text-start text-muted align-self-center'>
                            <div>{String(filteredItemsLength)} items</div>
                        </Col>
                        <Col className='d-flex flex-wrap justify-content-flex-start'>
                            <TraitBadges handleTraitDeselect={handleTraitDeselect} selectedTraits={selectedTraits}/>
                        </Col>
                        <Col md={2} className='text-end pe-5'>
                            <SortDropdown />
                        </Col>
                    </Row>
                    <ItemsGridContainer items={items} handleItemSelect={handleItemSelect}/>
                    <br />
                    <GridPagination />
                </Col>
            </Row>   
    )
}


