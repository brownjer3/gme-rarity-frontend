import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


export default function CollectionContainer() {
    const { collectionSlug } = useParams();
    const [modalShow, setModalShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedTraits, setSelectedTraits] = useState([]);
    const [filteredItemsLength, setFilteredItemsLength] = useState(10000);

    const collection = useSelector(state =>
        state.collections.data.find(collection => collection.slug === collectionSlug)
      )

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

    const createStats = () => {
        return (
            <ListGroup horizontal >
                <ListGroup.Item className='bg-dark text-white border'>
                    <div className='lead fw-bolder'>{testData.supply}</div> 
                    <div>items</div>
                </ListGroup.Item>
                <ListGroup.Item className='bg-dark text-white border'>
                    <div className='lead fw-bolder'>{testData.ownerCount}</div> 
                    <div>owners</div>
                </ListGroup.Item>
                <ListGroup.Item className='bg-dark text-white border'>
                    <div className='lead fw-bolder'>{testData.stats.dayVolume}</div>
                    <div>24hr volume</div>
                </ListGroup.Item>
                <ListGroup.Item className='bg-dark text-white border'>
                    <div className='lead fw-bolder'>{testData.stats.totalVolume}</div>
                    <div>total volume</div>
                </ListGroup.Item>
            </ListGroup>
        )
        // return Object.keys(testData.stats).map((stat) => {
        //     return <ListGroup.Item className='bg-dark text-white border'>{testData.stats[stat]}</ListGroup.Item>
        // })
    }

    const testData = {
        banner: "https://static.gstop-content.com/6fa28178-8e9c-4f3b-8e0d-fa960d321d12",
        name: collection,
        ownerCount: '6392',
        supply: '10,000',
        description: "A collection of 10,000 unique algorithmically generated MetaBoy's that brings the love of gaming, pixelart and technology together.",
        gmeLink: 'https://nft.gamestop.com/collection/MetaBoy',
        avatarUri: "https://static.gstop-content.com/d9fdd83b-5d72-4a32-a151-a8549efef1bc",
        stats: {
            dayVolume: '44.6',
            weekVolume: '1.1k',
            totalVolume: '2.1k'
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
                        <div className='w-100 overflow-hidden' style={{height: "220px"}}>
                            <Card.Img className='position-relative top-50 start-50 translate-middle' variant="top" src={testData.banner} />
                        </div>
                        <Card.Body style={{textAlign: "left"}}>
                            <Row>
                                <Col>
                                    <Card.Title className='display-6'>{testData.name}</Card.Title>
                                    <Card.Text>{testData.description}</Card.Text>
                                </Col>
                                <Col>
                                    <Row className='float-end text-center'>
                                        {createStats()}   
                                    </Row>
                                    <Row className='mt-2 float-end'>
                                        <a href={testData.gmeLink} target="_blank">
                                            <Button variant="outline-primary">
                                                View on GameStop
                                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='mx-2' />
                                            </Button>
                                        </a>
                                    </Row>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                    <NftDetailsCard
                        item={selectedItem}
                        collectionName={collectionSlug}
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


