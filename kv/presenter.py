import settings
import web

from kv.models import *

class FrontPage(web.BaseRequestHandler):
	def get(self):
		self.generate("html/frontpage.html")
		
	def post(self):
		pass
