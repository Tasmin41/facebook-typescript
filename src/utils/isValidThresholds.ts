const isValidThresholds = (gradeThresholds: Array<Object>) => {
  return gradeThresholds.every((threshold) => {
    return Object.keys(threshold).every((key) => {
      return ![null, ""].includes(threshold[key]);
    });
  });
};

export default isValidThresholds;
