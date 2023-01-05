import tagService from "../services/tag.service.js";
import { TAG_GET } from "./types";

export const search_getAll = () => (dispatch) => {
  return tagService.getAll().then(
    (res) => {
      console.log(res);
      dispatch({
        type: TAG_GET,
        payload: res.data,
      });
      return Promise.resolve(res);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return Promise.reject();
    }
  );
};

export const createTag = (tagname) => {
  return tagService.create(tagname);
};

// export const deleteTag = (Ids) => {
//   return tagService.deleteTags(Ids);
// };

// export const saveTag = (info) => {
//   return tagService.update(info);
// };

// export const getByTagUrl = (url) => {
//   return tagService.getByUrl(url).then(
//     (data) => {
//       return Promise.resolve(data);
//     },
//     (error) => {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();

//       return Promise.reject();
//     }
//   );
// };

// function makeid(length) {
//   var result = "";
//   var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   var charactersLength = characters.length;
//   for (var i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// }
