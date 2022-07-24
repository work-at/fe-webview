export const getPathFindingURL = (start: string, destination: string) => {
  return `https://m.map.kakao.com/?sName=${start}&eName=${destination}`;
};
