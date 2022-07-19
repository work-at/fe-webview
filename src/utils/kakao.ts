export const getPathFindingURL = (start: string, destination: string) => {
  return `https://map.kakao.com/?sName=${start}&eName=${destination}`;
};
