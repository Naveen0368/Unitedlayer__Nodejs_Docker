/*
 * Copyright (c) 2015 Sylvain Peyrefitte
 *
 * This file is part of mstsc.js.
 *
 * mstsc.js is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

var express = require('express');
var http = require('http');

var app = express();
app.use(express.static(__dirname + '/client'))
app.set('views', __dirname + '/client/html');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.get('/', function(req, res) {
	console.log("request obj", req.query);
	res.render('index.html', {"request_obj": req.query});
	/*res.sendFile(__dirname + '/client/html/index.html');*/
});
var server = http.createServer(app).listen(process.env.PORT || 9250);

require('./server/mstsc')(server);