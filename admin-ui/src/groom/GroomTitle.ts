import { Groom as TGroom } from "../api/groom/Groom";

export const GROOM_TITLE_FIELD = "name";

export const GroomTitle = (record: TGroom): string => {
  return record.name?.toString() || String(record.id);
};
