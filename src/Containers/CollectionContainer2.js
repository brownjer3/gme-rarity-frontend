import React, { useState, useEffect, useRef } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TraitFilterContainer from './TraitFilterContainer';
import NftsGridContainer from './NftsGridContainer';
import SortDropdown from '../Components/SortDropdown';
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

    const navigate = useNavigate();

    const [traitsQuery, setTraitsQuery] = useState([]);
    const [filteredItemsLength, setFilteredItemsLength] = useState(collection.items);

    const [nfts, setNfts] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [query, setQuery] = useState("");
    const [hasMore, setHasMore] = useState(false);

    const [loadRef, setLoadRef] = useState(null);
    const observer = useRef(new IntersectionObserver((entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
            console.log('intersecting!')
            setPageNum(current => current + 1)
        }
    }, {threshold: 1}));

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    useEffect(() => {
        loadMore();
    }, [pageNum, traitsQuery]);

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
        console.log('fetching')
            let url = `http://localhost:3001/collections/${collection.id}/nfts?`

            if (traitsQuery.length > 0) {
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

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/collections/${collection.slug}/${query}`)
    }

    const handleQueryInput = (e) => {
        setQuery(e.target.value);
    }

    const handleTraitSelect = (e) => {
        const categoryAndTrait = e.target.value.split("-");
        const category = categoryAndTrait[0];
        const name = categoryAndTrait[1];
        if (isTraitSelected(category, name)) {
            setTraitsQuery(traitsQuery.filter(item => item.trait !== name ));
        } else {
            setTraitsQuery(currentQuery => {
                return [...currentQuery, {trait: name, category: category}]
            });
        }
        setPageNum(1)
    }

    const handleTraitDeselect = (e) => {
        const name = e.target.closest('.trait-badge').id;
        setTraitsQuery(traitsQuery.filter(item => item.trait !== name ));
    }

    const isTraitSelected = (category, trait) => {
        return traitsQuery.some((combo) => combo.trait == trait && combo.category == category)
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
        <Row className='w-100 vh-100'>
            <Col md={2} className='sidebar'>
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
            <Col md={10} className="collection-main-view">
                <CollectionBanner collection={collection} />
                <br />
                <Row className='align-middle my-2'>
                    <Col md={2} className='text-start text-muted align-self-center'>
                        <div>{roundNumbers(filteredItemsLength)} items</div>
                    </Col>
                    <Col className='d-flex flex-wrap justify-content-flex-start'>
                        <TraitBadges handleTraitDeselect={handleTraitDeselect} selectedTraits={traitsQuery}/>
                    </Col>
                    <Col md={2} className='text-end pe-5'>
                        <SortDropdown />
                    </Col>
                </Row>
                <NftsGridContainer 
                    nfts={nfts}
                    collectionSlug={collection.slug}
                />
                {renderLoadMoreSpinner()}
            </Col>
            <Outlet />
        </Row>   
    )
}

