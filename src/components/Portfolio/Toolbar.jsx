import React from 'react';
import PropTypes from 'prop-types';

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

Toolbar.propTypes = {
    onSelectFilter: PropTypes.func.isRequired,
    filters: PropTypes.array.isRequired,
    selected: PropTypes.string.isRequired,
};

export default Toolbar;

