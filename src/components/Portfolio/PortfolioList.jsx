import React from 'react';
import PropTypes from 'prop-types';
const uuid = require('uuid');

function PortfolioList(props) {
    const { projects } = props;

    return (
        <div className="projectList"> {
            projects.map(item =>
                <div className="project" key={uuid()}>
                    <img src={item.img} />
                </div>
            )
        }
        </div>
    );
}

PortfolioList.propTypes = {
    projects: PropTypes.array.isRequired,
};

export default PortfolioList;

// <h2>Венок из живых цветов</h2>
// <p>Живые цветы на похоронах символизируют переходящий характер человеческой жизни, которая распускается, цветет и
//     увядает подобно цветам.</p>
// <p>Поэтому выразить уважение к умершему и почтить его память можно венком из живых цветов.</p>
// <p>Наши флористы принимают заказы на изготовление ритуальных композиций из живых цветов и зелени. Состав, количество и
//     объем обговариваются с каждым заказчиком лично.</p>
// <p className="vrez3">Стоимость каждого изделия рассчитывается индивидуально. Срок исполнения заказа – 1 сутки.</p>
