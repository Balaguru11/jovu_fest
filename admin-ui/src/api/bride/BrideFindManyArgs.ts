import { BrideWhereInput } from "./BrideWhereInput";
import { BrideOrderByInput } from "./BrideOrderByInput";

export type BrideFindManyArgs = {
  where?: BrideWhereInput;
  orderBy?: Array<BrideOrderByInput>;
  skip?: number;
  take?: number;
};
