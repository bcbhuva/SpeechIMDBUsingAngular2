"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var WebApiPromiseService = (function () {
    function WebApiPromiseService(http) {
        this.http = http;
    }
    WebApiPromiseService.prototype.getService = function (url) {
        return this.http
            .get(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    WebApiPromiseService.prototype.getServiceWithDynamicQueryTerm = function (url, key, val) {
        return this.http
            .get(url + "/?" + key + "=" + val)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    WebApiPromiseService.prototype.getServiceWithFixedQueryString = function (url, param) {
        return this.http
            .get(url, { search: 'query=' + param })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    WebApiPromiseService.prototype.getServiceWithComplexObjectAsQueryString = function (url, param) {
        var params = new http_1.URLSearchParams();
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                var val = param[key];
                params.set(key, val);
            }
        }
        return this.http
            .get(url, { search: params })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    WebApiPromiseService.prototype.createService = function (url, param) {
        var body = JSON.stringify(param);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .post(url, body, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    WebApiPromiseService.prototype.updateService = function (url, param) {
        var body = JSON.stringify(param);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .put(url, body, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    WebApiPromiseService.prototype.patchService = function (url, param) {
        var body = JSON.stringify(param);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .patch(url, body, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    WebApiPromiseService.prototype.deleteService = function (url, param) {
        var params = new http_1.URLSearchParams();
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                var val = param[key];
                params.set(key, val);
            }
        }
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, search: params });
        return this.http
            .delete(url, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    WebApiPromiseService.prototype.deleteServiceWithId = function (url, key, val) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .delete(url + "/?" + key + "=" + val, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    WebApiPromiseService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    WebApiPromiseService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    WebApiPromiseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WebApiPromiseService);
    return WebApiPromiseService;
}());
exports.WebApiPromiseService = WebApiPromiseService;
//# sourceMappingURL=web-api-promise.service.js.map