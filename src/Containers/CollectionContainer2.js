import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TraitFilterContainer from './TraitFilterContainer';
import NftsGridContainer from './NftsGridContainer';
import SortDropdown from '../Components/SortDropdown';
import NftDetailsCard from '../Components/NftDetailsCard';
import TraitBadges from '../Components/TraitBadges';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { transformUri, roundNumbers } from '../Components/DataFormats';
import { Loading } from '../Components/Components';
import CollectionBanner from '../Components/CollectionBanner';


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

    useEffect(() => {
        const loader = loadRef;
        const currentObserver = observer.current;
        if (loader) currentObserver.observe(loader);
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

    const handleSearch = async (e) => {
        e.preventDefault();
        let url = `http://localhost:3001/collections/${collection.id}/nfts?serialNum=${query}`
        const res = await fetch(url);
        const data = await res.json();

        if (data.length == 0) {
            setSelectedItem("NFT Not Found!");
            setModalShow(true);
        } else {
            setSelectedItem(data[0]);
            setModalShow(true);
        }
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

    const renderLoadMoreSpinner = () => {
        if (!!hasMore) {
            return (
                <div ref={setLoadRef}>
                    <Loading />
                </div>
            )
        } else {
            return <></>
        }
    }

    return (
            <Row className='w-100'>
                <Col md={2}>
                    <TraitFilterContainer 
                        name={collection.name}
                        traits={collection.traits} 
                        image={transformUri(collection.avatarUri)} 
                        isTraitSelected={isTraitSelected} 
                        handleTraitSelect={handleTraitSelect} 
                        handleQueryInput={handleQueryInput}
                        handleSearch={handleSearch}
                    />
                </Col>
                <Col md={10}>
                    <CollectionBanner collection={collection} />
                    <NftDetailsCard
                        nft={selectedItem}
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
                    {renderLoadMoreSpinner()}
                </Col>
            </Row>   
    )
}

