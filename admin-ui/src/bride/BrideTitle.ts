import { Bride as TBride } from "../api/bride/Bride";

export const BRIDE_TITLE_FIELD = "name";

export const BrideTitle = (record: TBride): string => {
  return record.name?.toString() || String(record.id);
};
