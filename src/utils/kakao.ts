export const getPathFindingURL = (start: string, destination: string, placeId: string) => {
  const agent = navigator.userAgent.toLowerCase();
  if (agent.indexOf("iphone") > -1 || agent.indexOf("android") > -1 || agent.indexOf("ipad") > -1) {
    return `https://map.kakao.com/link/to/${placeId}`;
  }

  return `https://map.kakao.com/?sName=${start}&eName=${destination}`;
};
