import FullComment from '../Page/FullComment/FullComment';
import Home from '../Page/Home';
import Login from '../Page/Login/Login';
import NotFound from '../Page/NotFound/NotFound';
import Photos from '../Page/Photos/Photos';

export const privateRouters = [
  { path: '/', element: Home },
  { path: '/comments/:id', element: FullComment },
  { path: '/photos', element: Photos },
  { path: '/*', element: NotFound },
];
export const publickRouters = [{ path: '/', element: Login }];
