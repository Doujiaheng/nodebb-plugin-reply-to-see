"use strict";
var controllers = require('./lib/controllers'),
	winston = require.main.require('winston'),
	User = require.main.require('./src/user'),
	Posts = require.main.require('./src/posts'),
	Topics = require.main.require('./src/topics'),
	Categories = require.main.require('./src/categories'),
	Meta = require.main.require('./src/meta'),
	db = require.main.require('./src/database'),
	async = require.main.require('async'),
	_ = require.main.require('underscore'),
	SocketPlugins = require.main.require('./src/socket.io/plugins'),

	plugin = {};


plugin.getPostContent = function(data, callback) {	
	var match = true;
	var post;
	console.log(data);
	var replyerIds = data.posts.filter((item) => {
		return item.deleted == 0
	}).map((item) => {
		return item.uid
	})
	console.log(replyerIds)
	var replyerIdsSet = new Set(replyerIds)
	if (replyerIdsSet.has(data.uid)) {
		console.log("has")
		data.posts[0].content = data.posts[0].content.replace(/回复可见::/g, '')
	} else {
		console.log("no")
		data.posts[0].content = data.posts[0].content.replace(/回复可见::[\s\S]*回复可见::/g, '<blockquote>\n <p dir="auto">此处内容回复可见！</p>\n </blockquote>\n');
	}
	console.log(data.posts[0])
	callback(null, data)
};

module.exports = plugin;