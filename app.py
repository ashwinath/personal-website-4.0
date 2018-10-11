import os
import tornado.ioloop
import tornado.web

PORT = 8080

application = tornado.web.Application([
    (r"/(.*)", tornado.web.StaticFileHandler, {"path": "./frontend/build/", "default_filename": "index.html"})
])

if __name__ == '__main__':
    application.listen(PORT)
    tornado.ioloop.IOLoop.instance().start()
