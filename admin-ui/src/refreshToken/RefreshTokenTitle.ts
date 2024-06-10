import { RefreshToken as TRefreshToken } from "../api/refreshToken/RefreshToken";

export const REFRESHTOKEN_TITLE_FIELD = "device";

export const RefreshTokenTitle = (record: TRefreshToken): string => {
  return record.device?.toString() || String(record.id);
};
