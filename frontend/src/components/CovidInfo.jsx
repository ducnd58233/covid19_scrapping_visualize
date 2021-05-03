import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

CovidInfo.propTypes = {
    covidInfo: PropTypes.array,
}

CovidInfo.defaultProps = {
    covidInfo: [],
}

function CovidInfo(props) {
    
    const { covidInfo } = props;

    return(
        <>
            {covidInfo.map(info => (
                <tr>
                    <td>{info.name}</td>
                    <td>{info.total_cases}</td>
                    <td>{info.new_cases}</td>
                    <td>{info.total_deaths}</td>
                    <td>{info.new_deaths}</td>
                    <td>{info.total_recovered}</td>
                    <td>{info.active_cases}</td>
                    <td>{info.serious_critival}</td>
                    <td>{info.tot_cases_over_1m_pop}</td>
                    <td>{info.deaths_over_1m_pop}</td>
                    <td>{info.total_tests}</td>
                    <td>{info.tests_over_1m_pop}</td>
                    <td>{info.population}</td>
                </tr>
            ))}
        </>
    )
}

export default CovidInfo;