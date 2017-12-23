const comment = require('../model/comment')
var fs = require('fs')

const sendHtml = (path, response) => {
    var options = {
        encoding: 'utf-8'
    }
    path = 'template/' + path
    fs.readFile(path, options, (error, data) => {
        // console.log(`读取的html文件 ${path} 内容是`, data)
        response.send(data)
    })
}

var index = {
    path: '/',
    method: 'get',
    func: (request, response) => {
        var path = 'blog_index.html'
        sendHtml(path, response)
    }
}

var blogDetail = {
    path: '/blog/:id',
    method: 'get',
    func: (request, response) => {
        var blog_id = request.params.id
        var path = 'blog_detail.html'
        var options = {
            encoding: 'utf-8'
        }
        path = 'template/' + path
        fs.readFile(path, options, (error, data) => {
            // console.log(`读取的html文件 ${path} 内容是`, data)
            data = data.replace('{{blog_id}}', blog_id)
            console.log('data', data)
            response.send(data)
        })
    }
}

var routes = [
    index,
    blogDetail,
]

module.exports.routes = routes
