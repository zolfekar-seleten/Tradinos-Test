import { storeFreeze } from 'ngrx-store-freeze';
import { routerReducer } from '@ngrx/router-store';
import { environment } from '../../../environments/environment';
export var reducers = { router: routerReducer };
export var metaReducers = !environment.production ? [storeFreeze] : [];
//# sourceMappingURL=index.js.map