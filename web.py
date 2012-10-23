import settings
import os
from google.appengine.api import users
from google.appengine.ext import webapp
from google.appengine.ext.webapp import template

class BaseRequestHandler(webapp.RequestHandler):
	def generate(self, template_name, template_values={}, content_type="text/html"):
		values = {
			'request': self.request,
			'user': users.get_current_user(),
			'login_url': users.create_login_url(self.request.uri),
			'logout_url': users.create_logout_url('http://%s/' % (
			self.request.host,)),
			'debug': self.request.get('deb'),
			'application_name': settings.APPNAME,
		}
		values.update(template_values)
		directory = os.path.dirname(__file__)
		path = os.path.join(directory, os.path.join('templates', template_name))
		self.response.headers['Content-Type'] = content_type
		#self.response.out.write(path)
		self.response.out.write(template.render(path, values, debug=settings))