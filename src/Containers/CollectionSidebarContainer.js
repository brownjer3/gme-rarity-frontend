import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import TraitFilterContainer from './TraitFilterContainer';

function CollectionSidebarContainer(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { name, traits, image, isTraitSelected, handleTraitSelect, handleSearch, handleQueryInput } = props

  return (
    <>
    <FontAwesomeIcon 
        icon={faSliders} 
        size="2x" 
        className='fa-border filter-icon d-lg-none bg-white text-dark' 
        onClick={handleShow}
    />

      {/* <div className="d-none d-lg-block">
        <TraitFilterContainer 
            name={name}
            traits={traits} 
            image={image} 
            isTraitSelected={isTraitSelected} 
            handleTraitSelect={handleTraitSelect} 
            handleQueryInput={handleQueryInput}
            handleSearch={handleSearch}
        /> 
      </div> */}
    {/* <TraitFilterContainer 
        name={collection.name}
        traits={collection.traits} 
        image={transformUri(collection.avatarUri)} 
        isTraitSelected={isTraitSelected} 
        handleTraitSelect={handleTraitSelect} 
        handleQueryInput={handleQueryInput}
        handleSearch={handleSearch}
    />  */}

      <Offcanvas show={show} onHide={handleClose} responsive="lg" className='bg-dark text-white'>
        <Offcanvas.Header>
            <h1>{name}</h1>
            <button onClick={handleClose} type="button" className="btn btn-close btn-close-white" aria-label="Close"></button>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <TraitFilterContainer 
                name={name}
                traits={traits} 
                image={image} 
                isTraitSelected={isTraitSelected} 
                handleTraitSelect={handleTraitSelect} 
                handleQueryInput={handleQueryInput}
                handleSearch={handleSearch}
            /> 
        </Offcanvas.Body>
        
        {/* <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">
            This is content within an <code>.offcanvas-lg</code>.
          </p>
        </Offcanvas.Body> */}
      </Offcanvas>
    </>
  );
}

export default CollectionSidebarContainer;