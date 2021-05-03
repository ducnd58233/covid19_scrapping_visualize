const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Covid19Schema = new Schema({
    name: String,
    total_cases: String,
    new_cases: String,
    total_deaths: String,
    new_deaths: String,
    total_recovered: String,
    active_cases: String,
    serious_critival: String,
    tot_cases_over_1m_pop: String,
    deaths_over_1m_pop: String,
    total_tests: String,
    tests_over_1m_pop: String,
    population: String,
})

const Covid19 = mongoose.model('Covid19', Covid19Schema);
module.exports = Covid19;