// import React, { useState, useEffect, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import TraitFilterContainer from './TraitFilterContainer';
// import NftsGridContainer from './NftsGridContainer';
// import SortDropdown from '../Components/SortDropdown';
// import NftDetailsCard from '../Components/NftDetailsCard';
// import TraitBadges from '../Components/TraitBadges';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import ListGroup from 'react-bootstrap/ListGroup';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { EthData, makeCollectionGmeLink, transformUri, roundNumbers } from '../Components/DataFormats';
// // import { faEthereum } from '@fortawesome/free-brands-svg-icons';
// import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


// export default function CollectionContainer() {
//     const { collectionSlug } = useParams();
//     const collection = useSelector(state =>
//         state.collections.data.find(collection => collection.slug === collectionSlug)
//     )

//     const [modalShow, setModalShow] = useState(false);
//     const [selectedItem, setSelectedItem] = useState('');
//     const [selectedTraits, setSelectedTraits] = useState([]);
//     const [traitsQuery, setTraitsQuery] = useState([]);
//     const [filteredItemsLength, setFilteredItemsLength] = useState(collection.items);

//     const [nfts, setNfts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [pageNum, setPageNum] = useState(1);
//     const [query, setQuery] = useState("");
//     const [hasMore, setHasMore] = useState(true);
//     const [loadDiv, setLoadDiv] = useRef();

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [])

//     const observer = new IntersectionObserver(
//             (entries) => {
//                 const first = entries[0];
//                 if (first.isIntersecting && !!hasMore) {
//                     setPageNum((currentPage) => currentPage + 1);
//                 }
//             }, {threshold: 0.5}
//     );

//     const getNfts = async (restart = false) => {
//         setLoading(true);

//         //base url
//         let url = `http://localhost:3001/collections/${collection.id}/nfts?`
//         //query for ID
//         if (!!query) {
//             url += `name_like=${query}&`;
//             setQuery("");
//         }
//         // filter for traits WIP
//         // if (selectedTraits.length > 0) {
//         //     selectedTraits.forEach((trait) => {
//         //         url += `properties.${traitCategory}=${trait}`
//         //     })
//         // }

//         url += `_page=${pageNum}&_limit=25`

//         const res = await fetch(url);
//         const data = await res.json();

//         if (data.length < 25) {
//             setHasMore(false);
//         }

//         let all;
//         if (!!restart) {
//             all = [... data]
//         } else {
//             all = new Set([...nfts, ...data]);
//         }

//         setNfts([...all]);
//         setLoading(false);
//     }

//     useEffect(() => {
//         getNfts();
//     }, [pageNum]);

//     useEffect(() => {
//         const currentElement = lastElement;
//         const currentObserver = observer.current;

//         if (currentElement) {
//             currentObserver.observe(currentElement);
//         }

//         return () => {
//             if (currentElement) {
//                 currentObserver.unobserve(currentElement);
//             }
//         };
//     }, [lastElement]);

//     const handleSearch = (e) => {
//         e.preventDefault();
//         getNfts(true);
//     }

//     const handleQueryInput = (e) => {
//         setQuery(e.target.value);
//     }

//     const handleItemSelect = (e) => {
//         const index = e.target.closest('.detailsCard').getAttribute('index');
//         const selected = nfts[index];
//         setSelectedItem(selected);
//         setModalShow(true);
//     }

//     const handleTraitSelect = (e) => {
//         const categoryAndTrait = e.target.value.split("-");
//         const category = categoryAndTrait[0];
//         const name = categoryAndTrait[1];
//         if (isTraitSelected(name)) {
//             setSelectedTraits(selectedTraits.filter(trait => trait != name ));
//         } else {
//             setSelectedTraits(selectedTraits => [...selectedTraits, name]);
//             setTraitsQuery(currentQuery => [...currentQuery, {category: category, trait: name}]);

//             // setFilteredItemsLength(filteredItemsLength + testData)
//         }
//     }

//     const handleTraitDeselect = (e) => {
//         const name = e.target.closest('.trait-badge').id;
//         setSelectedTraits(selectedTraits.filter(trait => trait != name ));
//     }

//     const isTraitSelected = (name) => {
//         return selectedTraits.includes(name);
//     }

//     const createStats = () => {
//         return (
//             <ListGroup horizontal >
//                 <ListGroup.Item className='bg-dark text-white border'>
//                     <div className='lead fw-bolder'>{roundNumbers(collection.items)}</div> 
//                     <div>items</div>
//                 </ListGroup.Item>
//                 <ListGroup.Item className='bg-dark text-white border'>
//                     <div className='lead fw-bolder'>TBD</div> 
//                     <div>owners</div>
//                 </ListGroup.Item>
//                 <ListGroup.Item className='bg-dark text-white border'>
//                     <div className='lead fw-bolder'>
//                         <EthData weiVal={collection.volume} round/>
//                     </div>
//                     <div>24hr volume</div>
//                 </ListGroup.Item>
//                 <ListGroup.Item className='bg-dark text-white border'>
//                     <div className='lead fw-bolder'>
//                         <EthData weiVal={collection.volume} round/>
//                     </div>
//                     <div>total volume</div>
//                 </ListGroup.Item>
//             </ListGroup>
//         )
//     }

//     return (
//             <Row className='w-100'>
//                 <Col md={2}>
//                     <TraitFilterContainer 
//                         image={transformUri(collection.avatarUri)} 
//                         isTraitSelected={isTraitSelected} 
//                         handleTraitSelect={handleTraitSelect} 
//                         traits={collection.traits} 
//                         handleQueryInput={handleQueryInput}
//                         handleSearch={handleSearch}
//                         />
//                 </Col>
//                 <Col md={10}>
//                     <Card bg='dark' text='white' border='light'>
//                         <div className='w-100 overflow-hidden' style={{height: "220px"}}>
//                             <Card.Img className='position-relative top-50 start-50 translate-middle' variant="top" src={collection.banner_uri} />
//                         </div>
//                         <Card.Body style={{textAlign: "left"}}>
//                             <Row>
//                                 <Col md={7}>
//                                     <Card.Title className='display-6'>{collection.name}</Card.Title>
//                                     <Card.Text>{collection.description}</Card.Text>
//                                 </Col>
//                                 <Col md={5}>
//                                     <Row className='float-end text-center'>
//                                         {createStats()}
//                                     </Row>
//                                     <Row className='mt-2 float-end'>                                        
//                                         <a href={makeCollectionGmeLink(collection.slug)} target="_blank">
//                                             <Button variant="outline-primary">
//                                                 View on GameStop
//                                                 <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='mx-2' />
//                                             </Button>
//                                         </a>
//                                     </Row>
//                                 </Col>
//                             </Row>

//                         </Card.Body>
//                     </Card>
//                     <NftDetailsCard
//                         item={selectedItem}
//                         show={modalShow}
//                         onHide={() => setModalShow(false)}
//                     />
//                     <br />
//                     <Row className='align-middle my-2'>
//                         <Col md={2} className='text-start text-muted align-self-center'>
//                             <div>{roundNumbers(filteredItemsLength)} items</div>
//                         </Col>
//                         <Col className='d-flex flex-wrap justify-content-flex-start'>
//                             <TraitBadges handleTraitDeselect={handleTraitDeselect} selectedTraits={selectedTraits}/>
//                         </Col>
//                         <Col md={2} className='text-end pe-5'>
//                             <SortDropdown />
//                         </Col>
//                     </Row>
//                     <NftsGridContainer 
//                     nfts={nfts} 
//                     loading={loading} 
//                     handleItemSelect={handleItemSelect} 
//                     setLastElement={setLastElement}
//                     hasMore={hasMore}
//                     />
//                 </Col>
//             </Row>   
//     )
// }

