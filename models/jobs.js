var Jobs = function(db) {
    this.getJobs = function(start) {
        return db.query('SELECT ' +
            'A.job_title, ' +
            'A.job_body, ' +
            'A.base_salary, ' +
            'A.number_open_positions, ' +
            'B.name AS category, ' +
            'C.name AS company, ' +
            'D.name AS city, ' +
            'E.name AS agency ' +
            'FROM jobs A ' +
            'LEFT JOIN categories B ON A.job_category_id = B.id ' +
            'LEFT JOIN companies C ON A.company_id = C.id ' +
            'LEFT JOIN cities D ON A.location_city = D.id ' +
            'LEFT JOIN companies E ON A.recruiting_agency_company_id = E.id ' +
            'LIMIT ' + start + ',10');
    };
}

Jobs.init = function(db) {
    return new Jobs(db);
}


module.exports = Jobs;