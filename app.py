import os
import logging
import tornado.ioloop
import tornado.web
import tornado.options

PORT = 8080

application = tornado.web.Application([
    (r"/(.*)", tornado.web.StaticFileHandler, {"path": "./frontend/build/", "default_filename": "index.html"})
])

if __name__ == '__main__':
    tornado.options.parse_command_line()
    application.listen(PORT)
    logging.info("Server started on port: {}".format(PORT))
    tornado.ioloop.IOLoop.instance().start()
