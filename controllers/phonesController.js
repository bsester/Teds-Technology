const express = require('express');
const req = require("express/lib/request");
let inventory = [
    { 'id': 0, sale: 0, 'manufact': 'None', 'item': 'None', 'descr': 'None', 'avail': 0, 'price': 0},
    { 'id': 100, sale: 0, 'manufact': 'Samsung', 'item': 'Galaxy S22', 'descr': 'The Latest Phone', 'avail': 22, 'price': 1399.99, "colors" : ['sliver'] },
    { 'id': 101, sale: 10, 'manufact': 'Samsung', 'item': 'Galaxy S21', 'descr' : 'Recently refurbished like new', 'avail': 5, 'price': 699.99, "colors" : ["black", "silver"] },
    { 'id': 102, sale: 0, 'manufact': 'Samsung', 'item': 'Galaxy S20', 'descr' : 'Great phone works well', 'avail': 3, 'price': 399.99, 'colors' : ['silver', 'blue'] },
    { 'id': 103, sale: 0, 'manufact': 'Apple', 'item': 'iPhone 13', 'descr' : 'New and Shiny, Nothing better', 'avail': 13, 'price': 1299.99, 'colors' : ['red, green', 'mystic gold'] },
    { 'id': 104, sale: 15, 'manufact': 'Apple', 'item': 'iPhone 12', 'descr' : 'Refurbished but perfect', 'avail': 13, 'price': 899.99, 'colors' :[ "super silver", 'mystic gold' ]},
    { 'id': 105, sale: 10, 'manufact': 'Apple', 'item': 'iPhone 11', 'descr' : 'Works great!', 'avail': 12, 'price': 599.99, 'colors' :[ "white", 'mystic gold' ] }];

exports.getPhones = (req, res) =>
{
    res.render('showPhones',
        {
            inventory: inventory,
            from: 'showPhones'
        })
}
// example, using the colon appends the id var to the URL
// router.get('/:id', (req, res) =>
// {
//     res.render('Get User with ID ${req.params.id}');
// })
// this should go last, or it will overwrite other routes
exports.getPhonesDetails = ('/:id', (req, res) =>
{
    res.render('showDetails',
        {
            from: 'showDetails',
            id: req.params.id
        })
})
exports.showHome = (req, res) =>
{
    res.render('home',
        {
            from: 'home'
        })
}