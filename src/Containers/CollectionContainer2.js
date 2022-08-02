import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TraitFilterContainer from './TraitFilterContainer';
import NftsGridContainer from './NftsGridContainer';
import SortDropdown from '../Components/SortDropdown';
import NftDetailsCard from '../Components/NftDetailsCard';
import TraitBadges from '../Components/TraitBadges';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EthData, makeCollectionGmeLink, transformUri, roundNumbers } from '../Components/DataFormats';
import { Loading } from '../Components/Components';
// import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


export default function CollectionContainer2() {
    const { collectionSlug } = useParams();
    const collection = useSelector(state =>
        state.collections.data.find(collection => collection.slug === collectionSlug)
    )

    const [modalShow, setModalShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedTraits, setSelectedTraits] = useState([]);
    const [traitsQuery, setTraitsQuery] = useState([]);
    const [filteredItemsLength, setFilteredItemsLength] = useState(collection.items);

    const [nfts, setNfts] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [query, setQuery] = useState("");
    const [hasMore, setHasMore] = useState(true);

    const [loadRef, setLoadRef] = useState(null);
    const observer = useRef(new IntersectionObserver((entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
            setPageNum(current => current + 1)
        }
    }, {threshold: 1}));

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    useEffect(() => {
        const loader = loadRef;
        const currentObserver = observer.current;

        if (loader) {
            currentObserver.observe(loader)
        }

        return () => {
            if (loader) {
                currentObserver.unobserve(loader);
            }
        }

    }, [loadRef])

    const loadMore = async () => {
            let url = `http://localhost:3001/collections/${collection.id}/nfts?`

            if (selectedTraits.length > 0) {
                traitsQuery.forEach((combo) => {
                    let category = combo["category"];
                    let trait = combo["trait"];
                    url += `metadataJson.properties.${category}=${trait}&`;
                })
            }
    
            url += `_page=${pageNum}&_limit=25`
            console.log(url);
    
            const res = await fetch(url);
            const data = await res.json();

            (data.length < 25) ? setHasMore(false) : setHasMore(true);
    
            let all;
            if (pageNum == 1) {
                all = new Set([...data]);
            } else {
                all = new Set([...nfts, ...data]);
            }
            setNfts([...all]);
    }

    useEffect(() => {
        loadMore();
    }, [pageNum, selectedTraits]);

    useEffect(() => {
        if (traitsQuery.length == 0) {
            setFilteredItemsLength(collection.items)
        } else {
            let count = 0;
            traitsQuery.forEach(query => {
                let num = parseInt(collection.traits[query.category][query.trait])
                count += num
            })
            setFilteredItemsLength(count)
        }
    }, [traitsQuery]);

    const handleSearch = async (e) => {
        e.preventDefault();
        let url = `http://localhost:3001/collections/${collection.id}/nfts?name_like=${query}`
        const res = await fetch(url);
        const data = await res.json();
        const selected = data[0];
        setSelectedItem(selected);
        setModalShow(true);
    }

    const handleQueryInput = (e) => {
        setQuery(e.target.value);
    }

    const handleItemSelect = (e) => {
        const index = e.target.closest('.detailsCard').getAttribute('index');
        const selected = nfts[index];
        setSelectedItem(selected);
        setModalShow(true);
    }

    const handleTraitSelect = (e) => {
        const categoryAndTrait = e.target.value.split("-");
        const category = categoryAndTrait[0];
        const name = categoryAndTrait[1];
        if (isTraitSelected(name)) {
            setTraitsQuery(traitsQuery.filter(item => item.trait !== name ));
            setSelectedTraits(selectedTraits.filter(trait => trait != name ));
        } else {
            setSelectedTraits(selectedTraits => [...selectedTraits, name]);
            setTraitsQuery(currentQuery => {
                return [...currentQuery, {trait: name, category: category}]
            });
        }
        setPageNum(1)
    }

    const handleTraitDeselect = (e) => {
        const name = e.target.closest('.trait-badge').id;
        setSelectedTraits(selectedTraits.filter(trait => trait != name ));
        setTraitsQuery(traitsQuery.filter(item => item.trait !== name ));
    }

    const isTraitSelected = (name) => {
        return selectedTraits.includes(name);
    }

    const renderLoadMoreButton = () => {
        if (!!hasMore) {
            return (
                <div ref={setLoadRef}>
                    <Loading />
                </div>
            )
        } else {
            return <div></div>
        }
    }

    const createStats = () => {
        return (
            <ListGroup horizontal >
                <ListGroup.Item className='bg-dark text-white border'>
                    <div className='lead fw-bolder'>{roundNumbers(collection.items)}</div> 
                    <div>items</div>
                </ListGroup.Item>
                <ListGroup.Item className='bg-dark text-white border'>
                    <div className='lead fw-bolder'>TBD</div> 
                    <div>owners</div>
                </ListGroup.Item>
                <ListGroup.Item className='bg-dark text-white border'>
                    <div className='lead fw-bolder'>
                        <EthData weiVal={collection.volume} round/>
                    </div>
                    <div>24hr volume</div>
                </ListGroup.Item>
                <ListGroup.Item className='bg-dark text-white border'>
                    <div className='lead fw-bolder'>
                        <EthData weiVal={collection.volume} round/>
                    </div>
                    <div>total volume</div>
                </ListGroup.Item>
            </ListGroup>
        )
    }

    return (
            <Row className='w-100'>
                <Col md={2}>
                    <TraitFilterContainer 
                        image={transformUri(collection.avatarUri)} 
                        isTraitSelected={isTraitSelected} 
                        handleTraitSelect={handleTraitSelect} 
                        traits={collection.traits} 
                        handleQueryInput={handleQueryInput}
                        handleSearch={handleSearch}
                        />
                </Col>
                <Col md={10}>
                    <Card bg='dark' text='white' border='light'>
                        <div className='w-100 overflow-hidden' style={{height: "220px"}}>
                            <Card.Img className='position-relative top-50 start-50 translate-middle' variant="top" src={collection.banner_uri} />
                        </div>
                        <Card.Body style={{textAlign: "left"}}>
                            <Row>
                                <Col md={7}>
                                    <Card.Title className='display-6'>{collection.name}</Card.Title>
                                    <Card.Text>{collection.description}</Card.Text>
                                </Col>
                                <Col md={5}>
                                    <Row className='float-end text-center'>
                                        {createStats()}
                                    </Row>
                                    <Row className='mt-2 float-end'>                                        
                                        <a href={makeCollectionGmeLink(collection.slug)} target="_blank">
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
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <br />
                    <Row className='align-middle my-2'>
                        <Col md={2} className='text-start text-muted align-self-center'>
                            <div>{roundNumbers(filteredItemsLength)} items</div>
                        </Col>
                        <Col className='d-flex flex-wrap justify-content-flex-start'>
                            <TraitBadges handleTraitDeselect={handleTraitDeselect} selectedTraits={selectedTraits}/>
                        </Col>
                        <Col md={2} className='text-end pe-5'>
                            <SortDropdown />
                        </Col>
                    </Row>
                    <NftsGridContainer 
                    nfts={nfts} 
                    // loading={loading} 
                    handleItemSelect={handleItemSelect} 
                    // setLastElement={setLastElement}
                    // hasMore={hasMore}
                    />
                    {renderLoadMoreButton()}
                </Col>
            </Row>   
    )
}

