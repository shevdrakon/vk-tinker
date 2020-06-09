// import {createAsyncThunk} from '../utils/createAsyncThunk';
//
// export const fetchPhotos = createAsyncThunk<void, void>(
//   'PHOTOS/FETCH',
//   async (_, {extra}) => {
//     const {api: {photosService}} = extra;
//
//     try {
//       return await photosService.getPhotos();
//     } catch {
//       throw `Unable to fetch photos. Please try again.`;
//     }
//   }
// );
