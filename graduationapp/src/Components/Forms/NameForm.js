import React from 'react';
import Cards from '../Cards/Cards';

function NameForm(props) {
    return (
        <div>
            <Cards title="Name Form" text="This is the Name Form" />
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name" />
                    <small id="nameHelp" className="form-