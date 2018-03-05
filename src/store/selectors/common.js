export const getToast = state => state.ui.toast;
export const getRequest = (state, key) => state.requests[key] || {};
export const getRequests = state => state.requests;
export const areRequestsPending = ({ requests }) =>
  Object.keys(requests).some(key => requests[key].status === 'pending');
export const getDrawerState = state => state.ui.drawer.drawerState || 'closed';
export const getModalState = state => state.ui.modal.modalState || 'closed';
export const getRouter = state => state.router;
export const getSearchString = state => state.ui.search;
export const getGallery = state => state.ui.gallery;
