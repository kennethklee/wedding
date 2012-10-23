import settings
import urls

from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app

application = webapp.WSGIApplication(urls.urlpatterns, debug=settings.DEBUG)

def init():
    run_wsgi_app(application)

if __name__ == "__main__":
    init()