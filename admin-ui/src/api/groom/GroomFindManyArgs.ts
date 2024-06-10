import { GroomWhereInput } from "./GroomWhereInput";
import { GroomOrderByInput } from "./GroomOrderByInput";

export type GroomFindManyArgs = {
  where?: GroomWhereInput;
  orderBy?: Array<GroomOrderByInput>;
  skip?: number;
  take?: number;
};
