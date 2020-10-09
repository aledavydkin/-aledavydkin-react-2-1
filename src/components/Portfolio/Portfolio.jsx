import React, {useState} from 'react';
import Toolbar from './Toolbar'
import PortfolioList from "./PortfolioList";
import data from './data'

function Portfolio() {

 const filters = ["All", "Websites", "Flayers", "Business Cards"];
 const [selected, setSelected] = useState('All');

 const projects = data.filter(item => {
     if (selected === 'All') {
        return data;
     }
     return item.category === selected;
 })

return (
    <div className={"container"}>
        <Toolbar filters={filters} selected={selected} onSelectFilter={setSelected} />
        <PortfolioList projects={projects} />
    </div>
    );
}

export  default Portfolio;

