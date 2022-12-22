import wallService from "../services/wall.service";
import { WALL_SUCCESS } from "./types";

export const getAll = () => (dispatch) => {
  return wallService.getAll().then(
    (res) => {
      dispatch({
        type: WALL_SUCCESS,
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

export const createWall = (name) => {
  const url = makeid(6);
  const fname = name;
  return wallService.create(url, fname);
};

export const deleteWall = (Ids) => {
  return wallService.deleteWalls(Ids);
};

export const saveWall = (info) => {
  return wallService.update(info);
};

export const getByWallUrl = (url) => {
  return wallService.getByUrl(url).then(
    (data) => {
      return Promise.resolve(data);
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

function makeid(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
