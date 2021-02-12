import React, { Fragment, useState } from 'react';
import { Form,Button, Row,Col } from 'react-bootstrap';

const SearchBar = (props) => {
    const [text, setText] = useState('');

    const updateSearch = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.updateSearch(text);
        setText('');
    }

    return (
        <Fragment>
           <Form className="searchForm" inline onSubmit={handleSubmit}>
             <Form.Control size="sm" type="text" placeholder="Enter food here" value={text} onChange={updateSearch}/>
             <Button className="" type="submit" variant="primary">Search</Button>
            </Form> 
        </Fragment>
    )
}

export default SearchBar;
