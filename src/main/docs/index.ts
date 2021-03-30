import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '1.0.0',
  info: {
    title: 'Express Authorization API',
    description: 'Swagger documentation of this Express Authorization API.',
    version: '1.0.0',
    contact: {
      name: 'Rafael Correia',
      email: 'rafaelcbm@gmail.com',
      url: 'https://www.linkedin.com/in/rafaelmenezes'
    },
    license: {
      name: 'GPL-3.0-or-later',
      url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
    }
  },
  externalDocs: {
    description: 'Complete course link.',
    url: 'https://www.udemy.com/course/tdd-com-mango/?referralCode=B53CE5CA2B9AFA5A6FA1'
  },
  servers: [{
    url: '/api',
    description: 'Base API'
  }],
  tags: [{
    name: 'Login',
    description: 'Auth related APIs'
  }],
  paths,
  schemas,
  components
}
