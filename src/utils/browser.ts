const ERROR_MESSAGE = {
  PERMISSION_DENIED: "현재 위치 정보에 접근할 수 있는 권한이 부여되지 않았습니다.",
  POSITION_UNAVAILABLE: "위치 정보가 불분명한 지역에 위치해 있습니다.",
  TIMEOUT: "위치 정보를 가져오는데 너무 오랜 시간이 걸립니다.",
} as const;

export const alertUserPositionLoadError = (error: GeolocationPositionError) => {
  if (error.PERMISSION_DENIED) {
    alert(ERROR_MESSAGE.PERMISSION_DENIED);
    return;
  }

  if (error.POSITION_UNAVAILABLE) {
    alert(ERROR_MESSAGE.POSITION_UNAVAILABLE);
    return;
  }

  if (error.TIMEOUT) {
    alert(ERROR_MESSAGE.TIMEOUT);
    return;
  }
};
