export function initialize(container, application) {
  application.inject('route:application', 'session', 'service:session');
  application.inject('controller:application', 'session', 'service:session');
  application.inject('controller:login', 'session', 'service:session');
  application.inject('controller:register', 'session', 'service:session');
}

export default {
  name: 'session-service',
  initialize: initialize
};
