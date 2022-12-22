var config = {
  out: {
    library: "MyApp",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
};

export const init = (config) => {
  ReactDOM.render(<MyReactApp config={config} />, someSelector);
};
