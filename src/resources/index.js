// src/resources/index.js

const config = require('../config');

const { pagination } = config;

const paginationParseParams = ({
    limit = pagination.limit,
    page = pagination.page,
}) => ({
    limit: parseInt(limit, 10),
    page: parseInt(page, 10),
});

module.exports = {
    paginationParseParams,
};