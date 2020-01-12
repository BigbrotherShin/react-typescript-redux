import { getUserProfileAsync } from './actions';
import { getUserProfile } from '../../api/github';
import createAsyncThunk from '../../lib/createAsyncThunk';

export const getUserProfileThunk = createAsyncThunk(
  getUserProfileAsync,
  getUserProfile,
);
