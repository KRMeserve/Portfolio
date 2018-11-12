const app = angular.module('MyPortfolio', [])

app.controller('PortfolioController', function(){
    this.pagePath = "partials/home.html";

    this.changePage = path => { 
        this.pagePath = "partials/" + path + ".html";
    }
})
