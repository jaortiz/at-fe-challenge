/**
 * Helper function to format data arrays into an object with id & data key pairs for easier access
 *
 * @param {*} dataArr \
 */
export const formatData = dataArr => {
  let formattedData = {};
  dataArr.forEach(element => {
    formattedData[element.id] = element;
  });

  return formattedData;
};
