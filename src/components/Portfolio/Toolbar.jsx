import React from 'react';

function Toolbar(props) {
    const {filters, selected } = props;

    return (
        filters.map(item =>
            <button
                className={item ===  selected ? 'item-filter active' : 'item-filter'}
                key={item}
                onClick={() => props.onSelectFilter(item)}
            >
                {item}
            </button>)
    );
}

export default Toolbar;

