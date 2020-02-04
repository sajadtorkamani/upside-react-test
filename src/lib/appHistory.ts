import { createBrowserHistory } from 'history';

const appHistory = createBrowserHistory();

// Scroll to top on route change.
appHistory.listen(() => {
  window.scrollTo(0, 0);
});

export default appHistory;
