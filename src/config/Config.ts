const {
  RESUME_TABLE,
} = process.env;

const isDevEnvironment = () => {
  return process.env.NODE_ENV === "development";
};

export {
  RESUME_TABLE,
  isDevEnvironment
};
