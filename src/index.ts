export const require_env = (keys: string | string[]): void => {
  const missingEnvs = [];
  if (!Array.isArray(keys)) {
    keys = [keys];
  }
  for (const key of keys) {
    if (!Object.keys(process.env).includes(key)) {
      missingEnvs.push(key);
    }
  }
  if (missingEnvs.length > 0) {
    throw Error(
      `The environment variable(s) ${missingEnvs.join(
        ", "
      )} are required but could not be found.`
    );
  }
};

export default require_env;
